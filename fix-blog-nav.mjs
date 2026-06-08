import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const blogDir = 'C:/Users/RUSLAN/Desktop/ukgigtax/blog';

const newHeader = `<header style="background:#0a1628;border-bottom:1px solid rgba(255,255,255,0.06);padding:0 clamp(16px,4vw,32px);position:sticky;top:0;z-index:200">
  <div style="max-width:1100px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;height:60px">
    <a href="/" style="text-decoration:none;font-size:20px;font-weight:800;color:#e8edf8;letter-spacing:-0.02em">UK<span style="color:#4CAF50">Gig</span>Tax</a>
    <div style="display:flex;align-items:center;gap:12px">
      <span style="border:1px solid #4CAF50;color:#4CAF50;font-size:12px;font-weight:600;padding:4px 10px;border-radius:4px">2025-26</span>
      <button onclick="document.getElementById('blog-drawer').style.transform='translateX(0)';document.getElementById('blog-overlay').style.opacity='1';document.getElementById('blog-overlay').style.pointerEvents='all';document.body.style.overflow='hidden'" style="background:none;border:1px solid rgba(255,255,255,0.15);border-radius:6px;cursor:pointer;padding:7px 9px;color:#e8edf8;display:flex;align-items:center" aria-label="Menu">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      </button>
    </div>
  </div>
</header>
<div id="blog-overlay" onclick="document.getElementById('blog-drawer').style.transform='translateX(100%)';this.style.opacity='0';this.style.pointerEvents='none';document.body.style.overflow=''" style="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:300;opacity:0;pointer-events:none;transition:opacity .25s"></div>
<div id="blog-drawer" style="position:fixed;top:0;right:0;bottom:0;width:min(300px,90vw);background:#0a1628;border-left:1px solid rgba(255,255,255,0.08);z-index:400;transform:translateX(100%);transition:transform .28s cubic-bezier(.4,0,.2,1);overflow-y:auto;display:flex;flex-direction:column;padding:20px">
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:24px">
    <span style="font-size:16px;font-weight:700;color:#e8edf8">UK<span style="color:#4CAF50">Gig</span>Tax</span>
    <button onclick="document.getElementById('blog-drawer').style.transform='translateX(100%)';document.getElementById('blog-overlay').style.opacity='0';document.getElementById('blog-overlay').style.pointerEvents='none';document.body.style.overflow=''" style="background:none;border:1px solid rgba(255,255,255,0.15);border-radius:6px;cursor:pointer;padding:6px 10px;color:#e8edf8;font-size:16px">&times;</button>
  </div>
  <div style="font-size:11px;font-weight:600;color:rgba(200,216,236,0.4);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:8px">Calculators</div>
  <a href="/deliveroo-tax-calculator-uk" style="display:block;padding:10px 0;color:#C8D8EC;text-decoration:none;border-bottom:1px solid rgba(255,255,255,0.06);font-size:14px">Deliveroo Tax Calculator</a>
  <a href="/uber-eats-tax-calculator-uk" style="display:block;padding:10px 0;color:#C8D8EC;text-decoration:none;border-bottom:1px solid rgba(255,255,255,0.06);font-size:14px">Uber Eats Tax Calculator</a>
  <a href="/amazon-flex-tax-calculator-uk" style="display:block;padding:10px 0;color:#C8D8EC;text-decoration:none;border-bottom:1px solid rgba(255,255,255,0.06);font-size:14px">Amazon Flex Tax Calculator</a>
  <a href="/just-eat-tax-calculator-uk" style="display:block;padding:10px 0;color:#C8D8EC;text-decoration:none;border-bottom:1px solid rgba(255,255,255,0.06);font-size:14px">Just Eat Tax Calculator</a>
  <a href="/bolt-food-tax-calculator-uk" style="display:block;padding:10px 0;color:#C8D8EC;text-decoration:none;border-bottom:1px solid rgba(255,255,255,0.06);font-size:14px">Bolt Food Tax Calculator</a>
  <div style="font-size:11px;font-weight:600;color:rgba(200,216,236,0.4);text-transform:uppercase;letter-spacing:0.08em;margin:16px 0 8px">Guides</div>
  <a href="/blog/hmrc-self-assessment-2026" style="display:block;padding:10px 0;color:#C8D8EC;text-decoration:none;border-bottom:1px solid rgba(255,255,255,0.06);font-size:14px">Self Assessment Guide</a>
  <a href="/blog/self-employed-expenses-2026" style="display:block;padding:10px 0;color:#C8D8EC;text-decoration:none;border-bottom:1px solid rgba(255,255,255,0.06);font-size:14px">Self-Employed Expenses</a>
  <a href="/blog/hmrc-penalties-guide-2026" style="display:block;padding:10px 0;color:#C8D8EC;text-decoration:none;border-bottom:1px solid rgba(255,255,255,0.06);font-size:14px">HMRC Penalties Guide</a>
  <a href="/delivery-driver-expenses-checklist-uk" style="display:block;padding:10px 0;color:#C8D8EC;text-decoration:none;border-bottom:1px solid rgba(255,255,255,0.06);font-size:14px">Expenses Checklist</a>
  <a href="/" style="display:block;margin-top:20px;padding:12px;background:rgba(76,175,80,0.1);border:1px solid rgba(76,175,80,0.3);border-radius:8px;color:#4CAF50;text-decoration:none;font-size:14px;font-weight:600;text-align:center">Tax Calculator &rarr;</a>
</div>`;

const oldHeaderPattern = /<header style="background:#0a1628[^>]*>[\s\S]*?<\/header>/;

const files = readdirSync(blogDir).filter(f => f.endsWith('.html'));
let fixed = 0;
let skipped = 0;

for (const file of files) {
  const path = join(blogDir, file);
  let content = readFileSync(path, 'utf8');
  if (content.includes('aria-label="Menu"') && !content.includes('blog-drawer')) {
    content = content.replace(oldHeaderPattern, newHeader);
    writeFileSync(path, content, 'utf8');
    fixed++;
    console.log('FIXED:', file);
  } else {
    skipped++;
  }
}
console.log(`\nDone: ${fixed} fixed, ${skipped} skipped`);
