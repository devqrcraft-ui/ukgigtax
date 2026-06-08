import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const blogDir = 'C:/Users/RUSLAN/Desktop/ukgigtax/blog';

const newDrawerBlock = `<style>
  .bdrawer-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:150;opacity:0;pointer-events:none;transition:opacity .28s}
  .bdrawer-overlay.show{opacity:1;pointer-events:all}
  .bdrawer{position:fixed;top:0;right:0;bottom:0;width:min(320px,92vw);background:#0a1628;border-left:1px solid rgba(255,255,255,0.08);z-index:160;transform:translateX(100%);transition:transform .28s cubic-bezier(.4,0,.2,1);overflow-y:auto;display:flex;flex-direction:column}
  .bdrawer.open{transform:translateX(0)}
  .bdrawer-head{display:flex;align-items:center;justify-content:space-between;padding:18px 20px;border-bottom:1px solid rgba(255,255,255,0.07);flex-shrink:0}
  .bdrawer-close{background:none;border:1px solid rgba(255,255,255,0.15);color:#C8D8EC;width:32px;height:32px;border-radius:6px;cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;transition:border-color .2s,color .2s}
  .bdrawer-close:hover{border-color:#4CAF50;color:#4CAF50}
  .bdrawer-slbl{font-size:11px;font-weight:700;color:#4CAF50;text-transform:uppercase;letter-spacing:0.1em;padding:14px 20px 6px}
  .bdrawer-link{display:flex;align-items:center;justify-content:space-between;padding:9px 20px;color:rgba(200,216,236,0.8);font-size:14px;text-decoration:none;transition:background .15s,color .15s;min-height:40px}
  .bdrawer-link:hover{background:rgba(255,255,255,0.04);color:#e8edf8}
  .bdrawer-link .arr{font-size:14px;color:rgba(76,175,80,0.6);transition:transform .15s,color .15s;flex-shrink:0}
  .bdrawer-link:hover .arr{transform:translateX(3px);color:#4CAF50}
  .bdrawer-div{height:1px;background:rgba(255,255,255,0.06);margin:6px 20px}
  .bdrawer-cta{margin:16px 20px 24px;background:#4CAF50;color:#fff;text-align:center;padding:12px;border-radius:8px;text-decoration:none;font-weight:700;font-size:14px;display:block;transition:background .15s;flex-shrink:0}
  .bdrawer-cta:hover{background:#43a047}
</style>
<div class="bdrawer-overlay" id="bdrawer-overlay" onclick="closeBD()"></div>
<div class="bdrawer" id="bdrawer">
  <div class="bdrawer-head">
    <a href="/" style="text-decoration:none;font-size:18px;font-weight:800;color:#e8edf8;letter-spacing:-0.02em">UK<span style="color:#4CAF50">Gig</span>Tax</a>
    <button class="bdrawer-close" onclick="closeBD()">&#10005;</button>
  </div>
  <div class="bdrawer-slbl">Platform Calculators</div>
  <a href="/" class="bdrawer-link">Home &#8212; Gig Tax Calculator<span class="arr">&#8594;</span></a>
  <a href="/deliveroo-tax-calculator-uk" class="bdrawer-link">Deliveroo Tax Calculator<span class="arr">&#8594;</span></a>
  <a href="/uber-eats-tax-calculator-uk" class="bdrawer-link">Uber Eats Tax Calculator<span class="arr">&#8594;</span></a>
  <a href="/amazon-flex-tax-calculator-uk" class="bdrawer-link">Amazon Flex Tax Calculator<span class="arr">&#8594;</span></a>
  <a href="/just-eat-tax-calculator-uk" class="bdrawer-link">Just Eat Tax Calculator<span class="arr">&#8594;</span></a>
  <a href="/bolt-food-tax-calculator-uk" class="bdrawer-link">Bolt Food Tax Calculator<span class="arr">&#8594;</span></a>
  <a href="/delivery-driver-tax-calculator-uk" class="bdrawer-link">All Platforms Calculator<span class="arr">&#8594;</span></a>
  <div class="bdrawer-div"></div>
  <div class="bdrawer-slbl">Tools</div>
  <a href="/gig-worker-mileage-calculator-uk" class="bdrawer-link">Mileage Calculator<span class="arr">&#8594;</span></a>
  <a href="/how-much-to-set-aside-for-tax-uk" class="bdrawer-link">Set Aside Calculator<span class="arr">&#8594;</span></a>
  <a href="/delivery-driver-expenses-checklist-uk" class="bdrawer-link">Expenses Checklist<span class="arr">&#8594;</span></a>
  <a href="/blog/trading-allowance-gig-workers-2026" class="bdrawer-link">Trading Allowance Tool<span class="arr">&#8594;</span></a>
  <a href="/deliveroo-tax-calculator-uk" class="bdrawer-link">Self-Employed Tax Calculator<span class="arr">&#8594;</span></a>
  <a href="/blog/hmrc-payment-on-account-2026" class="bdrawer-link">Payments on Account<span class="arr">&#8594;</span></a>
  <div class="bdrawer-div"></div>
  <div class="bdrawer-slbl">Guides</div>
  <a href="/blog/hmrc-self-assessment-2026" class="bdrawer-link">Self Assessment Guide<span class="arr">&#8594;</span></a>
  <a href="/delivery-driver-expenses-checklist-uk" class="bdrawer-link">Expenses Checklist<span class="arr">&#8594;</span></a>
  <a href="/when-to-register-self-assessment-uk" class="bdrawer-link">When to Register<span class="arr">&#8594;</span></a>
  <a href="/class-4-ni-explained-gig-workers" class="bdrawer-link">Class 4 NI Explained<span class="arr">&#8594;</span></a>
  <a href="/making-tax-digital-gig-workers" class="bdrawer-link">Making Tax Digital Guide<span class="arr">&#8594;</span></a>
  <a href="/blog/national-insurance-guide-2026" class="bdrawer-link">Pension Guide for Gig Workers<span class="arr">&#8594;</span></a>
  <div class="bdrawer-div"></div>
  <div class="bdrawer-slbl">Blog</div>
  <a href="/blog/deliveroo-tax-guide-uk" class="bdrawer-link">Deliveroo Tax Guide 2026<span class="arr">&#8594;</span></a>
  <a href="/blog/uber-eats-tax-guide-2026" class="bdrawer-link">Uber Eats Tax Guide 2026<span class="arr">&#8594;</span></a>
  <a href="/blog/amazon-flex-tax-guide-uk-2026" class="bdrawer-link">Amazon Flex Tax Guide 2026<span class="arr">&#8594;</span></a>
  <a href="/blog/just-eat-driver-tax-guide-2026" class="bdrawer-link">Just Eat Driver Tax Guide<span class="arr">&#8594;</span></a>
  <a href="/blog/bolt-food-driver-tax-guide-2026" class="bdrawer-link">Bolt Food Driver Tax Guide<span class="arr">&#8594;</span></a>
  <a href="/blog/delivery-driver-expenses-2026" class="bdrawer-link">Delivery Driver Expenses 2026<span class="arr">&#8594;</span></a>
  <a href="/blog/mileage-allowance-delivery-drivers" class="bdrawer-link">Mileage Allowance Guide<span class="arr">&#8594;</span></a>
  <a href="/blog/self-assessment-delivery-drivers" class="bdrawer-link">Self Assessment for Drivers<span class="arr">&#8594;</span></a>
  <a href="/blog/how-to-pay-less-tax-delivery-driver" class="bdrawer-link">Pay Less Tax &#8212; Driver Tips<span class="arr">&#8594;</span></a>
  <a href="/blog/deliveroo-vs-uber-eats-tax" class="bdrawer-link">Deliveroo vs Uber Eats Tax<span class="arr">&#8594;</span></a>
  <a href="/blog/gig-worker-side-hustle-tax-guide" class="bdrawer-link">Side Hustle Tax Guide<span class="arr">&#8594;</span></a>
  <a href="/blog/making-tax-digital-self-employed-2026" class="bdrawer-link">MTD for Self-Employed 2026<span class="arr">&#8594;</span></a>
  <a href="/blog/hmrc-penalties-guide-2026" class="bdrawer-link">HMRC Penalties Guide<span class="arr">&#8594;</span></a>
  <a href="/blog/national-insurance-guide-2026" class="bdrawer-link">National Insurance 2026<span class="arr">&#8594;</span></a>
  <a href="/blog/vat-registration-guide-2026" class="bdrawer-link">VAT Registration Guide<span class="arr">&#8594;</span></a>
  <a href="/blog/second-job-tax-uk-2026" class="bdrawer-link">Second Job Tax Guide<span class="arr">&#8594;</span></a>
  <a href="/blog/self-employed-expenses-2026" class="bdrawer-link">Self-Employed Expenses<span class="arr">&#8594;</span></a>
  <a href="/blog" class="bdrawer-link" style="color:rgba(200,216,236,0.5);font-size:13px">All blog articles &#8594;</a>
  <a href="/" class="bdrawer-cta">Tax Calculator &#8594;</a>
</div>
<script>
  function openBD(){document.getElementById('bdrawer').classList.add('open');document.getElementById('bdrawer-overlay').classList.add('show');document.body.style.overflow='hidden'}
  function closeBD(){document.getElementById('bdrawer').classList.remove('open');document.getElementById('bdrawer-overlay').classList.remove('show');document.body.style.overflow=''}
  document.addEventListener('keydown',function(e){if(e.key==='Escape')closeBD()});
</script>`;

const files = readdirSync(blogDir).filter(f => f.endsWith('.html'));
let fixed = 0, skipped = 0;

for (const file of files) {
  const path = join(blogDir, file);
  let content = readFileSync(path, 'utf8');

  if (!content.includes('id="bdrawer"') && !content.includes('id="blog-drawer"')) {
    skipped++;
    continue;
  }

  const lines = content.split('\n');

  // Strategy: find the <style> tag that precedes bdrawer CSS (line before .bdrawer-overlay)
  // OR find the overlay/drawer div line for inline drawers
  
  let blockStart = -1;
  let blockEnd = -1;

  // Find start: <style> tag that is followed by bdrawer CSS within 3 lines
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() === '<style>' && i + 1 < lines.length && lines[i+1].includes('.bdrawer-overlay')) {
      blockStart = i;
      break;
    }
    // Also catch inline overlay div
    if (lines[i].includes('id="blog-overlay"') || lines[i].includes('id="bdrawer-overlay"')) {
      // Walk back to find if there's a <style> block before it
      let styleIdx = -1;
      for (let j = i - 1; j >= Math.max(0, i - 5); j--) {
        if (lines[j].trim() === '<style>' && lines[j+1] && lines[j+1].includes('.bdrawer')) {
          styleIdx = j;
          break;
        }
      }
      blockStart = styleIdx !== -1 ? styleIdx : i;
      break;
    }
    if (lines[i].includes('id="blog-drawer"')) {
      blockStart = i;
      break;
    }
  }

  if (blockStart === -1) { skipped++; continue; }

  // Find end: </script> that contains closeBD or closeDrawer
  for (let i = blockStart; i < Math.min(blockStart + 300, lines.length); i++) {
    if (lines[i].includes('</script>') && i > blockStart + 5) {
      // Check if this script has drawer-related code
      const scriptContent = lines.slice(Math.max(blockStart, i-5), i+1).join(' ');
      if (scriptContent.includes('Escape') || scriptContent.includes('closeBD') || scriptContent.includes('closeDrawer') || scriptContent.includes('blog-drawer')) {
        blockEnd = i;
        break;
      }
    }
  }

  if (blockEnd === -1) { 
    console.log('NO END FOUND:', file, 'start:', blockStart);
    skipped++; 
    continue; 
  }

  const before = lines.slice(0, blockStart);
  const after = lines.slice(blockEnd + 1);
  content = [...before, newDrawerBlock, ...after].join('\n');

  // Fix burger onclick
  content = content.replace(/onclick="openBlogDrawer\(\)"/g, 'onclick="openBD()"');
  content = content.replace(/onclick="openBD\(\)"/g, 'onclick="openBD()"'); // normalize

  writeFileSync(path, content, 'utf8');
  fixed++;
  console.log('FIXED:', file);
}

console.log(`\nDone: ${fixed} fixed, ${skipped} skipped`);
