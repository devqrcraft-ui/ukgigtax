import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const blogDir = 'C:/Users/RUSLAN/Desktop/ukgigtax/blog';

const newDrawerBlock = `<style>
  .bdrawer-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:150;opacity:0;pointer-events:none;transition:opacity .28s}
  .bdrawer-overlay.show{opacity:1;pointer-events:all}
  .bdrawer{position:fixed;top:0;right:0;bottom:0;width:min(320px,92vw);background:#0a1628;border-left:1px solid rgba(255,255,255,0.08);z-index:160;transform:translateX(100%);transition:transform .28s cubic-bezier(.4,0,.2,1);overflow-y:auto;display:flex;flex-direction:column}
  .bdrawer.open{transform:translateX(0)}
  .bdrawer-head{display:flex;align-items:center;justify-content:space-between;padding:18px 20px;border-bottom:1px solid rgba(255,255,255,0.07)}
  .bdrawer-close{background:none;border:1px solid rgba(255,255,255,0.15);color:#C8D8EC;width:32px;height:32px;border-radius:6px;cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;transition:border-color .2s,color .2s}
  .bdrawer-close:hover{border-color:#4CAF50;color:#4CAF50}
  .bdrawer-slbl{font-size:11px;font-weight:700;color:#4CAF50;text-transform:uppercase;letter-spacing:0.1em;padding:14px 20px 8px}
  .bdrawer-link{display:flex;align-items:center;justify-content:space-between;padding:10px 20px;color:rgba(200,216,236,0.8);font-size:14px;text-decoration:none;transition:background .15s,color .15s;min-height:44px}
  .bdrawer-link:hover{background:rgba(255,255,255,0.04);color:#e8edf8}
  .bdrawer-link .arr{font-size:16px;color:rgba(76,175,80,0.6);transition:transform .15s,color .15s}
  .bdrawer-link:hover .arr{transform:translateX(3px);color:#4CAF50}
  .bdrawer-div{height:1px;background:rgba(255,255,255,0.06);margin:4px 20px}
  .bdrawer-cta{margin:16px 20px 24px;background:#4CAF50;color:#fff;text-align:center;padding:12px;border-radius:8px;text-decoration:none;font-weight:700;font-size:14px;display:block;transition:background .15s}
  .bdrawer-cta:hover{background:#43a047}
</style>
<div class="bdrawer-overlay" id="bdrawer-overlay" onclick="closeBD()"></div>
<div class="bdrawer" id="bdrawer">
  <div class="bdrawer-head">
    <a href="/" style="text-decoration:none;font-size:18px;font-weight:800;color:#e8edf8;letter-spacing:-0.02em">UK<span style="color:#4CAF50">Gig</span>Tax</a>
    <button class="bdrawer-close" onclick="closeBD()">&#10005;</button>
  </div>
  <div class="bdrawer-slbl">Platform Calculators</div>
  <a href="/deliveroo-tax-calculator-uk" class="bdrawer-link">Deliveroo Tax Calculator<span class="arr">&#8594;</span></a>
  <a href="/uber-eats-tax-calculator-uk" class="bdrawer-link">Uber Eats Tax Calculator<span class="arr">&#8594;</span></a>
  <a href="/amazon-flex-tax-calculator-uk" class="bdrawer-link">Amazon Flex Tax Calculator<span class="arr">&#8594;</span></a>
  <a href="/just-eat-tax-calculator-uk" class="bdrawer-link">Just Eat Tax Calculator<span class="arr">&#8594;</span></a>
  <a href="/bolt-food-tax-calculator-uk" class="bdrawer-link">Bolt Food Tax Calculator<span class="arr">&#8594;</span></a>
  <a href="/" class="bdrawer-link">All Platforms Calculator<span class="arr">&#8594;</span></a>
  <div class="bdrawer-div"></div>
  <div class="bdrawer-slbl">Tools</div>
  <a href="/gig-worker-mileage-calculator-uk" class="bdrawer-link">Mileage Calculator<span class="arr">&#8594;</span></a>
  <a href="/how-much-to-set-aside-for-tax-uk" class="bdrawer-link">Set Aside Calculator<span class="arr">&#8594;</span></a>
  <a href="/delivery-driver-expenses-checklist-uk" class="bdrawer-link">Expenses Checklist<span class="arr">&#8594;</span></a>
  <div class="bdrawer-div"></div>
  <div class="bdrawer-slbl">Guides</div>
  <a href="/blog/self-employed-expenses-2026" class="bdrawer-link">Self-Employed Expenses<span class="arr">&#8594;</span></a>
  <a href="/blog/hmrc-self-assessment-2026" class="bdrawer-link">Self Assessment Guide<span class="arr">&#8594;</span></a>
  <a href="/blog/hmrc-penalties-guide-2026" class="bdrawer-link">HMRC Penalties Guide<span class="arr">&#8594;</span></a>
  <a href="/blog/mileage-allowance-delivery-drivers" class="bdrawer-link">Mileage Allowance Guide<span class="arr">&#8594;</span></a>
  <a href="/blog/national-insurance-guide-2026" class="bdrawer-link">National Insurance 2026<span class="arr">&#8594;</span></a>
  <a href="/blog/second-job-tax-uk-2026" class="bdrawer-link">Second Job Tax Guide<span class="arr">&#8594;</span></a>
  <a href="/blog/delivery-driver-expenses-2026" class="bdrawer-link">Delivery Driver Expenses<span class="arr">&#8594;</span></a>
  <a href="/blog/vat-registration-guide-2026" class="bdrawer-link">VAT Registration Guide<span class="arr">&#8594;</span></a>
  <a href="/" class="bdrawer-cta">Tax Calculator &#8594;</a>
</div>
<script>
  function openBD(){document.getElementById('bdrawer').classList.add('open');document.getElementById('bdrawer-overlay').classList.add('show');document.body.style.overflow='hidden'}
  function closeBD(){document.getElementById('bdrawer').classList.remove('open');document.getElementById('bdrawer-overlay').classList.remove('show');document.body.style.overflow=''}
  document.addEventListener('keydown',function(e){if(e.key==='Escape')closeBD()});
</script>`;

const newBurgerBtn = `<button id="blog-burger" onclick="openBD()" aria-label="Menu" style="background:none;border:1px solid rgba(255,255,255,0.15);border-radius:6px;cursor:pointer;padding:7px 9px;display:flex;flex-direction:column;gap:5px;transition:border-color .2s">
        <span style="display:block;height:1.5px;width:20px;background:#C8D8EC;border-radius:2px"></span>
        <span style="display:block;height:1.5px;width:20px;background:#C8D8EC;border-radius:2px"></span>
        <span style="display:block;height:1.5px;width:20px;background:#C8D8EC;border-radius:2px"></span>
      </button>`;

const files = readdirSync(blogDir).filter(f => f.endsWith('.html'));
let fixed = 0, skipped = 0;

for (const file of files) {
  const path = join(blogDir, file);
  let content = readFileSync(path, 'utf8');

  // Check if old inline drawer exists (id="blog-drawer" with inline style)
  if (!content.includes('id="blog-drawer"')) {
    skipped++;
    continue;
  }

  // Split into lines for surgical replacement
  const lines = content.split('\n');
  
  // Find line indices
  const overlayLine = lines.findIndex(l => l.includes('id="blog-overlay"'));
  const drawerLine = lines.findIndex(l => l.includes('id="blog-drawer"'));
  
  if (overlayLine === -1 || drawerLine === -1) {
    console.log('SKIP (no markers):', file);
    skipped++;
    continue;
  }

  // Find end of drawer block — look for </div> after drawerLine that closes the drawer
  // The drawer div ends a few lines after drawerLine
  // Find the line with </div> that closes the drawer (look for script tag after it)
  let drawerEndLine = drawerLine;
  let depth = 0;
  for (let i = drawerLine; i < Math.min(drawerLine + 100, lines.length); i++) {
    const l = lines[i];
    const opens = (l.match(/<div/g) || []).length;
    const closes = (l.match(/<\/div>/g) || []).length;
    depth += opens - closes;
    if (i > drawerLine && depth <= 0) {
      drawerEndLine = i;
      break;
    }
  }

  // Replace from overlayLine to drawerEndLine (inclusive) with new drawer block
  const before = lines.slice(0, overlayLine);
  const after = lines.slice(drawerEndLine + 1);
  content = [...before, newDrawerBlock, ...after].join('\n');

  // Fix the burger button onclick
  content = content.replace(
    /onclick="openBlogDrawer\(\)"/g,
    'onclick="openBD()"'
  );
  // Also fix any old inline onclick closers on the burger
  content = content.replace(
    /onclick="document\.getElementById\('blog-drawer'\)\.style\.transform/g,
    'onclick="closeBD(); //legacy'
  );

  writeFileSync(path, content, 'utf8');
  fixed++;
  console.log('FIXED:', file);
}

console.log(`\nDone: ${fixed} fixed, ${skipped} skipped`);
