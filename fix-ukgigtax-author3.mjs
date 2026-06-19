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

  // 1. Schema reviewedBy - прибираємо jobTitle (залишаємо лише name)
  txt = txt.split('"reviewedBy":{"@type":"Person","name":"Ethan Blake","jobTitle":"Tax Compliance Specialist"}')
           .join('"reviewedBy":{"@type":"Person","name":"Ethan Blake"}');

  // 2. Видимий meta рядок статті
  txt = txt.split('By Ethan Blake &middot; Tax Compliance Specialist')
           .join('By Ethan Blake');
  txt = txt.split('By Ethan Blake · Tax Compliance Specialist')
           .join('By Ethan Blake');

  // 3. AuthorBox jobTitle div - "Small Business Tax & Compliance Expert"
  txt = txt.split('Small Business Tax &amp; Compliance Expert')
           .join('Tax Compliance Specialist');
  txt = txt.split('Small Business Tax & Compliance Expert')
           .join('Tax Compliance Specialist');

  if (txt !== before) {
    fs.writeFileSync(fullPath, txt, 'utf8');
    console.log('FIXED:', file);
    fixed++;
  }
}

console.log('\nВиправлено:', fixed, 'файлів');

// Фінальна перевірка
console.log('\n=== ПЕРЕВІРКА ===');
let remainingSpec = 0;
let remainingSmall = 0;
for (const file of files) {
  const txt = fs.readFileSync(path.join(ROOT, file), 'utf8');
  // "Tax Compliance Specialist" в schema reviewedBy або span - вже не має бути
  if (txt.includes('"jobTitle":"Tax Compliance Specialist"')) { remainingSpec++; console.log('ЗАЛИШИВСЯ jobTitle schema:', file); }
  if (txt.includes('By Ethan Blake &middot; Tax Compliance Specialist')) { remainingSpec++; console.log('ЗАЛИШИВСЯ span:', file); }
  if (txt.includes('Small Business Tax')) { remainingSmall++; console.log('ЗАЛИШИВСЯ Small Business Tax:', file); }
}
console.log('\n"Tax Compliance Specialist" в schema/span:', remainingSpec, remainingSpec === 0 ? '✓ ЧИСТО' : '!!! ПЕРЕВІРТЕ');
console.log('"Small Business Tax" залишилось:', remainingSmall, remainingSmall === 0 ? '✓ ЧИСТО' : '!!! ПЕРЕВІРТЕ');
console.log('\nГотово. Запустіть:');
console.log('git add -A && git commit -m "fix: clean remaining Tax Compliance Specialist and Small Business Tax labels" && git push');
