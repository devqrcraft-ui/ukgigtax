import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const blogDir = 'C:/Users/RUSLAN/Desktop/ukgigtax/blog';

// The correct drawer HTML matching index.html exactly
const correctDrawer = `
<style>
  .blog-drawer-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:150;opacity:0;pointer-events:none;transition:opacity .28s}
  .blog-drawer-overlay.show{opacity:1;pointer-events:all}
  .blog-drawer{position:fixed;top:0;right:0;bottom:0;width:min(320px,92vw);background:#0a1628;border-left:1px solid rgba(255,255,255,0.08);z-index:160;transform:translateX(100%);transition:transform .28s cubic-bezier(.4,0,.2,1);overflow-y:auto;display:flex;flex-direction:column}
  .blog-drawer.open{transform:translateX(0)}
  .blog-drawer-head{display:flex;align-items:center;justify-content:space-between;padding:18px 20px;border-bottom:1px solid rgba(255,255,255,0.07)}
  .blog-drawer-close{background:none;border:1px solid rgba(255,255,255,0.15);color:#C8D8EC;width:32px;height:32px;border-radius:6px;cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;transition:border-color .2s,color .2s}
  .blog-drawer-close:hover{border-color:#4CAF50;color:#4CAF50}
  .blog-drawer-section{padding:14px 0}
  .blog-drawer-section-lbl{font-size:11px;font-weight:700;color:#4CAF50;text-transform:uppercase;letter-spacing:0.1em;padding:0 20px 8px}
  .blog-drawer-link{display:flex;align-items:center;justify-content:space-between;padding:10px 20px;color:rgba(200,216,236,0.8);font-size:14px;text-decoration:none;transition:background .15s,color .15s;min-height:44px}
  .blog-drawer-link:hover{background:rgba(255,255,255,0.04);color:#e8edf8}
  .blog-drawer-link .dl-arr{font-size:16px;color:rgba(76,175,80,0.6);transition:transform .15s,color .15s;flex-shrink:0}
  .blog-drawer-link:hover .dl-arr{transform:translateX(3px);color:#4CAF50}
  .blog-drawer-divider{height:1px;background:rgba(255,255,255,0.06);margin:4px 20px}
  .blog-drawer-cta{margin:16px 20px 24px;background:#4CAF50;color:#fff;text-align:center;padding:12px;border-radius:8px;text-decoration:none;font-weight:700;font-size:14px;display:block;transition:background .15s}
  .blog-drawer-cta:hover{background:#43a047}
</style>
<div class="blog-drawer-overlay" id="blog-overlay" onclick="closeBlogDrawer()"></div>
<div class="blog-drawer" id="blog-drawer">
  <div class="blog-drawer-head">
    <a href="/" style="text-decoration:none;font-size:18px;font-weight:800;color:#e8edf8;letter-spacing:-0.02em">UK<span style="color:#4CAF50">Gig</span>Tax</a>
    <button class="blog-drawer-close" onclick="closeBlogDrawer()">&#10005;</button>
  </div>
  <div class="blog-drawer-section">
    <div class="blog-drawer-section-lbl">Platform Calculators</div>
    <a href="/deliveroo-tax-calculator-uk" class="blog-drawer-link">Deliveroo Tax Calculator<span class="dl-arr">&#8594;</span></a>
    <a href="/uber-eats-tax-calculator-uk" class="blog-drawer-link">Uber Eats Tax Calculator<span class="dl-arr">&#8594;</span></a>
    <a href="/amazon-flex-tax-calculator-uk" class="blog-drawer-link">Amazon Flex Tax Calculator<span class="dl-arr">&#8594;</span></a>
    <a href="/just-eat-tax-calculator-uk" class="blog-drawer-link">Just Eat Tax Calculator<span class="dl-arr">&#8594;</span></a>
    <a href="/bolt-food-tax-calculator-uk" class="blog-drawer-link">Bolt Food Tax Calculator<span class="dl-arr">&#8594;</span></a>
    <a href="/" class="blog-drawer-link">All Platforms Calculator<span class="dl-arr">&#8594;</span></a>
  </div>
  <div class="blog-drawer-divider"></div>
  <div class="blog-drawer-section">
    <div class="blog-drawer-section-lbl">Tools</div>
    <a href="/gig-worker-mileage-calculator-uk" class="blog-drawer-link">Mileage Calculator<span class="dl-arr">&#8594;</span></a>
    <a href="/how-much-to-set-aside-for-tax-uk" class="blog-drawer-link">Set Aside Calculator<span class="dl-arr">&#8594;</span></a>
    <a href="/delivery-driver-expenses-checklist-uk" class="blog-drawer-link">Expenses Checklist<span class="dl-arr">&#8594;</span></a>
  </div>
  <div class="blog-drawer-divider"></div>
  <div class="blog-drawer-section">
    <div class="blog-drawer-section-lbl">Guides</div>
    <a href="/blog/self-employed-expenses-2026" class="blog-drawer-link">Self-Employed Expenses<span class="dl-arr">&#8594;</span></a>
    <a href="/blog/hmrc-self-assessment-2026" class="blog-drawer-link">Self Assessment Guide<span class="dl-arr">&#8594;</span></a>
    <a href="/blog/hmrc-penalties-guide-2026" class="blog-drawer-link">HMRC Penalties Guide<span class="dl-arr">&#8594;</span></a>
    <a href="/blog/mileage-allowance-delivery-drivers" class="blog-drawer-link">Mileage Allowance Guide<span class="dl-arr">&#8594;</span></a>
    <a href="/blog/national-insurance-guide-2026" class="blog-drawer-link">National Insurance 2026<span class="dl-arr">&#8594;</span></a>
    <a href="/blog/second-job-tax-uk-2026" class="blog-drawer-link">Second Job Tax Guide<span class="dl-arr">&#8594;</span></a>
    <a href="/blog/delivery-driver-expenses-2026" class="blog-drawer-link">Delivery Driver Expenses<span class="dl-arr">&#8594;</span></a>
    <a href="/blog/vat-registration-guide-2026" class="blog-drawer-link">VAT Registration Guide<span class="dl-arr">&#8594;</span></a>
  </div>
  <a href="/" class="blog-drawer-cta">Tax Calculator &#8594;</a>
</div>
<script>
  function openBlogDrawer(){document.getElementById('blog-drawer').classList.add('open');document.getElementById('blog-overlay').classList.add('show');document.getElementById('blog-burger').classList.add('open');document.body.style.overflow='hidden'}
  function closeBlogDrawer(){document.getElementById('blog-drawer').classList.remove('open');document.getElementById('blog-overlay').classList.remove('show');document.getElementById('blog-burger').classList.remove('open');document.body.style.overflow=''}
  document.addEventListener('keydown',function(e){if(e.key==='Escape')closeBlogDrawer()});
</script>`;

// The correct header HTML
const correctHeader = `<header style="background:#0a1628;border-bottom:1px solid rgba(255,255,255,0.06);padding:0 clamp(16px,4vw,32px);position:sticky;top:0;z-index:100">
  <div style="max-width:1100px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;height:60px">
    <a href="/" style="text-decoration:none;font-size:20px;font-weight:800;color:#e8edf8;letter-spacing:-0.02em">UK<span style="color:#4CAF50">Gig</span>Tax</a>
    <div style="display:flex;align-items:center;gap:12px">
      <a href="/blog" style="font-size:13px;color:rgba(200,216,236,0.65);text-decoration:none;display:none" id="blog-nav-link">Blog</a>
      <span style="border:1px solid rgba(76,175,80,0.5);color:#4CAF50;font-size:12px;font-weight:600;padding:4px 10px;border-radius:4px">2025-26</span>
      <button id="blog-burger" onclick="openBlogDrawer()" aria-label="Menu" style="background:none;border:1px solid rgba(255,255,255,0.15);border-radius:6px;cursor:pointer;padding:7px 9px;display:flex;flex-direction:column;gap:5px;transition:border-color .2s">
        <span style="display:block;height:1.5px;width:20px;background:#C8D8EC;border-radius:2px;transition:transform .25s,opacity .25s"></span>
        <span style="display:block;height:1.5px;width:20px;background:#C8D8EC;border-radius:2px;transition:opacity .25s"></span>
        <span style="display:block;height:1.5px;width:20px;background:#C8D8EC;border-radius:2px;transition:transform .25s"></span>
      </button>
    </div>
  </div>
</header>`;

const files = readdirSync(blogDir).filter(f => f.endsWith('.html'));
let fixed = 0, skipped = 0;

for (const file of files) {
  const path = join(blogDir, file);
  let content = readFileSync(path, 'utf8');
  
  // Check if this file has the old simple drawer (blog-drawer-section without section labels)
  const hasOldDrawer = content.includes('class="blog-drawer"') || content.includes('aria-label="Menu"');
  
  if (!hasOldDrawer) {
    skipped++;
    continue;
  }

  // Remove old drawer overlay + drawer div + script block
  // Pattern: from <style>.blog-drawer-overlay or from <div class="blog-drawer-overlay" to closing </script> of drawer JS
  
  // Remove everything between old drawer start markers
  content = content.replace(/<style>\s*\.blog-drawer-overlay[\s\S]*?<\/script>/m, correctDrawer);
  
  // Also fix old header with non-functional burger button
  if (content.includes('aria-label="Menu"') && !content.includes('openBlogDrawer')) {
    // Replace old header
    content = content.replace(/<header[^>]*>[\s\S]*?<\/header>/, correctHeader);
  }

  writeFileSync(path, content, 'utf8');
  fixed++;
  console.log('UPDATED:', file);
}

console.log(`\nDone: ${fixed} updated, ${skipped} skipped`);
