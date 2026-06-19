import fs from 'fs';
import path from 'path';

const ROOT = 'C:/Users/RUSLAN/Desktop/ukgigtax/blog';
const files = fs.readdirSync(ROOT).filter(f => f.endsWith('.html'));
console.log('Файлів знайдено:', files.length);

let fixed = 0;

for (const file of files) {
  const fullPath = path.join(ROOT, file).replace(/\\/g, '/');
  let txt = fs.readFileSync(fullPath, 'utf8').replace(/\r\n/g, '\n');
  const before = txt;

  // Варіант 1: reviewedBy з "Small Business Tax and Compliance Expert"
  txt = txt.split('"jobTitle":"Small Business Tax and Compliance Expert"').join('');
  txt = txt.split('"jobTitle":"Small Business Tax & Compliance Expert"').join('');
  txt = txt.split('"jobTitle":"Small Business Tax &amp; Compliance Expert"').join('');

  // Варіант 2: author з jobTitle "Tax Compliance Specialist" в schema (не reviewedBy)
  // Замінюємо "author":{"@type":"Person","name":"Ethan Blake","jobTitle":"Tax Compliance Specialist"}
  txt = txt.split('"author":{"@type":"Person","name":"Ethan Blake","jobTitle":"Tax Compliance Specialist"}')
           .join('"author":{"@type":"Person","name":"Ethan Blake"}');

  // Варіант 3: "author": {"@type":"Person","name":"Ethan Blake","jobTitle":"Tax Compliance Specialist"} (з пробілами)
  txt = txt.split('"author": {"@type":"Person","name":"Ethan Blake","jobTitle":"Tax Compliance Specialist"}')
           .join('"author": {"@type":"Person","name":"Ethan Blake"}');

  // Варіант 4: reviewedBy залишився з jobTitle "Tax Compliance Specialist"
  txt = txt.split('"reviewedBy":{"@type":"Person","name":"Ethan Blake","jobTitle":"Tax Compliance Specialist"}')
           .join('"reviewedBy":{"@type":"Person","name":"Ethan Blake"}');

  // Варіант 5: видимий div jobTitle "Tax Compliance Specialist" в AuthorBox
  txt = txt.split('itemprop="jobTitle">Tax Compliance Specialist</div>')
           .join('itemprop="jobTitle">Tax Compliance Specialist</div>'.replace('Tax Compliance Specialist', 'UK Tax Specialist'));

  // Але не чіпаємо "Tax Compliance Specialist" в span meta рядку — вже прибрано

  if (txt !== before) {
    fs.writeFileSync(fullPath, txt, 'utf8');
    console.log('FIXED:', file);
    fixed++;
  }
}

console.log('\nВиправлено:', fixed, 'файлів');

// Фінальна перевірка
console.log('\n=== ПЕРЕВІРКА ===');
let r1 = 0, r2 = 0, r3 = 0;
for (const file of files) {
  const txt = fs.readFileSync(path.join(ROOT, file), 'utf8');
  if (txt.includes('Small Business Tax')) { r1++; console.log('Small Business Tax:', file); }
  if (txt.includes('"jobTitle":"Tax Compliance Specialist"') || txt.includes('"jobTitle": "Tax Compliance Specialist"')) {
    // Дозволяємо лише в reviewedBy без sameAs — перевіряємо чи це не author
    if (txt.includes('"author":{"@type":"Person","name":"Ethan Blake","jobTitle"') ||
        txt.includes('"author": {"@type":"Person","name":"Ethan Blake","jobTitle"')) {
      r2++; console.log('author jobTitle залишився:', file);
    }
  }
  if (txt.includes('"jobTitle":"Small Business Tax')) { r3++; console.log('Small Business schema:', file); }
}
console.log('\nSmall Business Text:', r1, r1 === 0 ? '✓' : '!!!');
console.log('author jobTitle:', r2, r2 === 0 ? '✓' : '!!!');
console.log('Small Business schema:', r3, r3 === 0 ? '✓' : '!!!');
console.log('\nГотово. Запустіть:');
console.log('git add -A && git commit -m "fix: final cleanup author jobTitle variants" && git push');
