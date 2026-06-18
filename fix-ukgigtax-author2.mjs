import fs from 'fs';
import path from 'path';

const ROOT = 'C:/Users/RUSLAN/Desktop/ukgigtax/blog';
const files = fs.readdirSync(ROOT).filter(f => f.endsWith('.html'));

// Замінюємо будь-який варіант "Tax compliance specialist since 2017. Helped 5,000+..."
// Паттерн: від початку речення до закриваючого </p>
// Використовуємо split по частинах що точно є в кожному варіанті

const START = 'Tax compliance specialist since 2017. Helped 5,000+';
const END = '</p>';
const NEW_TEXT = 'Writes about UK self-employment tax, HMRC Self Assessment, and gig economy rules for couriers, drivers, and freelancers.';

let totalFixed = 0;

for (const file of files) {
  const fullPath = path.join(ROOT, file).replace(/\\/g, '/');
  let txt = fs.readFileSync(fullPath, 'utf8').replace(/\r\n/g, '\n');
  const before = txt;

  // Знаходимо всі входження і замінюємо
  while (txt.includes(START)) {
    const startIdx = txt.indexOf(START);
    // Знаходимо відкриваючий тег <p перед START
    const pTagIdx = txt.lastIndexOf('<p ', startIdx);
    const endIdx = txt.indexOf(END, startIdx);
    if (endIdx === -1) break;

    // Зберігаємо атрибути тегу <p
    const pTagEnd = txt.indexOf('>', pTagIdx) + 1;
    const pOpenTag = txt.substring(pTagIdx, pTagEnd);

    // Замінюємо весь блок <p ...>...текст...</p>
    const oldBlock = txt.substring(pTagIdx, endIdx + END.length);
    const newBlock = `${pOpenTag}${NEW_TEXT}${END}`;
    txt = txt.substring(0, pTagIdx) + newBlock + txt.substring(endIdx + END.length);
  }

  if (txt !== before) {
    fs.writeFileSync(fullPath, txt, 'utf8');
    console.log('FIXED:', file);
    totalFixed++;
  }
}

console.log('\nВиправлено:', totalFixed, 'файлів');

// Фінальна перевірка
console.log('\n=== ПЕРЕВІРКА ===');
let remaining = 0;
for (const file of files) {
  const txt = fs.readFileSync(path.join(ROOT, file), 'utf8');
  if (txt.includes('Helped 5,000')) {
    remaining++;
    console.log('ЗАЛИШИВСЯ:', file);
  }
}
console.log('"Helped 5,000" залишилось:', remaining, remaining === 0 ? '✓ ЧИСТО' : '!!! ПЕРЕВІРТЕ ВРУЧНУ');
