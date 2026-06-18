import fs from 'fs';
import path from 'path';

const ROOT = 'C:/Users/RUSLAN/Desktop/ukgigtax/blog';

const files = fs.readdirSync(ROOT).filter(f => f.endsWith('.html'));
console.log('Файлів знайдено:', files.length);

// Заміни для видимого тексту AuthorBox
const REPLACEMENTS = [
  // "Helped 5,000+ freelancers..." -> нейтральний UK опис
  {
    old: 'Tax compliance specialist since 2017. Helped 5,000+ freelancers and self-employed workers navigate <a href="https://www.gov.uk/self-assessment-tax-returns" rel="nofollow" target="_blank" style="color:#4CAF50;text-decoration:underline">HMRC Self Assessment</a> and UK gig economy tax rules.',
    neu: 'Writes about UK self-employment tax, HMRC Self Assessment, and gig economy rules for couriers, drivers, and freelancers.'
  },
  // варіант без text-decoration:underline
  {
    old: 'Tax compliance specialist since 2017. Helped 5,000+ freelancers and self-employed workers navigate <a href="https://www.gov.uk/self-assessment-tax-returns" rel="nofollow" target="_blank" style="color:#4CAF50">HMRC Self Assessment</a> and UK gig economy tax rules.',
    neu: 'Writes about UK self-employment tax, HMRC Self Assessment, and gig economy rules for couriers, drivers, and freelancers.'
  },
  // варіант без style на посиланні
  {
    old: 'Tax compliance specialist since 2017. Helped 5,000+ freelancers and self-employed workers navigate <a href="https://www.gov.uk/self-assessment-tax-returns" rel="nofollow" target="_blank">HMRC Self Assessment</a> and UK gig economy tax rules.',
    neu: 'Writes about UK self-employment tax, HMRC Self Assessment, and gig economy rules for couriers, drivers, and freelancers.'
  },
  // Schema reviewedBy jobTitle - залишаємо але без "Since 2017"
  {
    old: '"reviewedBy":{"@type":"Person","name":"Ethan Blake","jobTitle":"Tax Compliance Specialist","sameAs":"https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center"}',
    neu: '"reviewedBy":{"@type":"Person","name":"Ethan Blake","jobTitle":"Tax Compliance Specialist"}'
  },
];

let totalFixed = 0;
let filesFixed = [];

for (const file of files) {
  const fullPath = path.join(ROOT, file).replace(/\\/g, '/');
  let txt = fs.readFileSync(fullPath, 'utf8').replace(/\r\n/g, '\n');
  const before = txt;

  for (const { old, neu } of REPLACEMENTS) {
    txt = txt.split(old).join(neu);
  }

  if (txt !== before) {
    fs.writeFileSync(fullPath, txt, 'utf8');
    filesFixed.push(file);
    totalFixed++;
  }
}

console.log('Файлів виправлено:', totalFixed);
if (filesFixed.length) console.log(filesFixed.join('\n'));

// Фінальна перевірка
console.log('\n=== ПЕРЕВІРКА ===');
let remaining5000 = 0;
let remainingIRS = 0;
for (const file of files) {
  const txt = fs.readFileSync(path.join(ROOT, file), 'utf8');
  if (txt.includes('Helped 5,000')) { remaining5000++; console.log('ЗАЛИШИВСЯ "Helped 5,000":', file); }
  if (txt.includes('irs.gov/businesses')) { remainingIRS++; console.log('ЗАЛИШИВСЯ IRS:', file); }
}
console.log('"Helped 5,000" залишилось:', remaining5000, remaining5000 === 0 ? '(ЧИСТО)' : '(!!! ПЕРЕВІРТЕ)');
console.log('IRS посилання залишилось:', remainingIRS, remainingIRS === 0 ? '(ЧИСТО)' : '(!!! ПЕРЕВІРТЕ)');
console.log('\nГотово. Запустіть: git add -A && git commit -m "fix: replace fabricated author stats with neutral bio" && git push');
