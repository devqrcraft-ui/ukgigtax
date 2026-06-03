import fs from 'fs';

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Deliveroo Tax Guide Edinburgh 2026 | Scottish Tax Rates for Riders</title>
<meta name="description" content="Deliveroo tax guide for Edinburgh riders 2026. Scottish income tax rates, NI, mileage claims and HMRC deadlines for Edinburgh delivery drivers.">
<link rel="canonical" href="https://www.ukgigtax.com/blog/deliveroo-tax-guide-edinburgh-2026">
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#0d1f35;color:#C8D8EC;font-size:16px;line-height:1.7}
a{color:#4CAF50;text-decoration:none}
a:hover{text-decoration:underline}
header{background:#0a1628;padding:16px 20px;border-bottom:1px solid rgba(255,255,255,0.08)}
header nav{max-width:860px;margin:0 auto;display:flex;gap:20px;flex-wrap:wrap;font-size:14px}
.container{max-width:860px;margin:0 auto;padding:20px 16px 60px}
article{background:#0d1f35}
.breadcrumb{font-size:13px;color:#8899aa;margin-bottom:20px}
.breadcrumb a{color:#8899aa}
h1{font-size:clamp(22px,5vw,24px);font-weight:700;color:#e8f0fe;line-height:1.3;margin-bottom:12px}
.meta{font-size:13px;color:#8899aa;margin-bottom:20px}
.answer-first{background:rgba(76,175,80,0.08);border-left:3px solid #4CAF50;padding:14px 16px;border-radius:0 6px 6px 0;margin-bottom:24px;font-size:15px}
.takeaways{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:8px;padding:18px 20px;margin-bottom:28px}
.takeaways h2{font-size:15px;font-weight:600;color:#e8f0fe;margin-bottom:12px}
.takeaways ul{list-style:none;padding:0}
.takeaways ul li{padding:5px 0;font-size:14px;border-bottom:1px solid rgba(255,255,255,0.05);padding-left:18px;position:relative}
.takeaways ul li::before{content:"✓";position:absolute;left:0;color:#4CAF50;font-weight:700}
.toc{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:6px;padding:16px 20px;margin-bottom:28px}
.toc h2{font-size:14px;font-weight:600;color:#e8f0fe;margin-bottom:10px}
.toc ol{padding-left:18px;font-size:13px;line-height:2}
h2{font-size:20px;font-weight:700;color:#e8f0fe;margin:32px 0 12px}
h3{font-size:17px;font-weight:600;color:#c8d8ec;margin:22px 0 8px}
p{margin-bottom:14px}
ul,ol{padding-left:20px;margin-bottom:14px}
li{margin-bottom:6px}
.table-wrap{overflow-x:auto;margin-bottom:24px;border-radius:6px;border:1px solid rgba(255,255,255,0.08)}
table{width:100%;border-collapse:collapse;font-size:14px}
thead tr{background:rgba(255,255,255,0.06)}
th{padding:10px 14px;text-align:left;font-weight:600;color:#e8f0fe;border-bottom:1px solid rgba(255,255,255,0.1)}
td{padding:10px 14px;border-bottom:1px solid rgba(255,255,255,0.05)}
tr:last-child td{border-bottom:none;background:rgba(76,175,80,0.08);border-top:1px solid rgba(76,175,80,0.3);color:#4CAF50;font-weight:600}
blockquote{border-left:3px solid rgba(76,175,80,0.5);padding:12px 16px;margin:20px 0;background:rgba(255,255,255,0.03);border-radius:0 6px 6px 0;font-style:italic;font-size:14px;color:#aabcce}
.faq-section{margin-top:36px}
.faq-item{border-bottom:1px solid rgba(255,255,255,0.07);padding:16px 0}
.faq-item h3{font-size:15px;font-weight:600;color:#e8f0fe;margin-bottom:8px}
.faq-item p{font-size:14px;margin:0}
.author-box{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:8px;padding:20px;margin-top:36px;display:flex;gap:16px;align-items:flex-start}
.author-avatar{width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,#1e3a5f,#2e5480);display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0}
.author-info h4{font-size:15px;font-weight:600;color:#e8f0fe;margin-bottom:4px}
.author-info p{font-size:13px;color:#8899aa;margin:0}
.related{margin-top:40px}
.related h2{font-size:18px;margin-bottom:16px}
.related-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:14px}
.related-card{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:8px;padding:14px;transition:border-color 0.2s}
.related-card:hover{border-color:rgba(76,175,80,0.4)}
.related-card h3{font-size:14px;color:#e8f0fe;margin-bottom:6px}
.related-card p{font-size:13px;color:#8899aa;margin:0}
footer{background:#0a1628;border-top:1px solid rgba(255,255,255,0.08);padding:20px;text-align:center;font-size:13px;color:#8899aa;margin-top:40px}
img{max-width:100%;height:auto;border-radius:8px;margin:16px 0}
@media(max-width:600px){.author-box{flex-direction:column}}
</style>
</head>
<body>
<header>
  <nav>
    <a href="https://www.ukgigtax.com">Home</a>
    <a href="https://www.ukgigtax.com/blog">Blog</a>
    <a href="https://www.ukgigtax.com/deliveroo-tax-calculator-uk.html">Deliveroo Calculator</a>
    <a href="https://www.ukgigtax.com/uber-eats-tax-calculator-uk.html">Uber Eats Calculator</a>
    <a href="https://www.ukgigtax.com/amazon-flex-tax-calculator-uk.html">Amazon Flex Calculator</a>
  </nav>
</header>

<div class="container">
<article itemscope itemtype="https://schema.org/BlogPosting">

<nav class="breadcrumb" aria-label="Breadcrumb">
  <a href="https://www.ukgigtax.com">Home</a> &rsaquo;
  <a href="https://www.ukgigtax.com/blog">Blog</a> &rsaquo;
  Deliveroo Tax Guide Edinburgh 2026
</nav>

<header>
  <h1 itemprop="headline">Deliveroo Tax Guide Edinburgh 2026: Scottish Rates for Riders</h1>
  <p class="meta">
    <time itemprop="datePublished" datetime="2026-06-04">Last updated: 4 June 2026</time> &middot;
    By <span itemprop="author" itemscope itemtype="https://schema.org/Person"><span itemprop="name">Ethan Blake</span></span>
    &middot; 9 min read &middot; 2,100 words
  </p>
</header>

<div class="answer-first" role="note">
  <strong>Quick answer:</strong> Edinburgh Deliveroo riders pay Scottish income tax rates, which differ from the rest of the UK. On typical Edinburgh Deliveroo earnings of &pound;25,000, you pay roughly &pound;2,498 in Scottish income tax plus &pound;748 in Class 4 NI &mdash; a total of &pound;3,246, about &pound;280 more than an equivalent rider in England due to Scotland&rsquo;s intermediate rate.
</div>

<div class="takeaways">
  <h2>Key Takeaways</h2>
  <ul>
    <li>Edinburgh riders pay Scottish income tax &mdash; different bands from England and Wales</li>
    <li>Scotland&rsquo;s intermediate rate of 21% applies on &pound;14,877&ndash;&pound;31,092</li>
    <li>Class 2 NI abolished April 2024 &mdash; only Class 4 NI at 6% applies now</li>
    <li>Deliveroo riders on bicycles claim 20p/mile; moped riders claim 24p/mile</li>
    <li>HMRC Self-Assessment deadline: 31 January 2027 for 2025&ndash;26 tax year</li>
    <li>Edinburgh riders should register with HMRC by 5 October 2026 if new to self-employment</li>
  </ul>
</div>

<nav class="toc" aria-label="Table of contents">
  <h2>Contents</h2>
  <ol>
    <li><a href="#scottish-rates">Scottish Income Tax Rates for Edinburgh Riders</a></li>
    <li><a href="#ni">National Insurance for Edinburgh Deliveroo Riders</a></li>
    <li><a href="#calculation">Tax Calculation: Edinburgh Deliveroo Example</a></li>
    <li><a href="#mileage">Mileage Claims for Edinburgh Deliveroo Riders</a></li>
    <li><a href="#expenses">Allowable Expenses</a></li>
    <li><a href="#vs-england">Edinburgh vs England: Tax Comparison</a></li>
    <li><a href="#faq">FAQ</a></li>
  </ol>
</nav>

<section id="scottish-rates">
  <h2>What Are the Scottish Income Tax Rates for Edinburgh Deliveroo Riders?</h2>
  <div class="answer-first">Edinburgh Deliveroo riders pay Scottish income tax, which has five bands compared to England&rsquo;s three. The key difference is the 21% intermediate rate on income between &pound;14,877 and &pound;31,092, which applies to most full-time delivery riders.</div>

  <div class="table-wrap">
    <table>
      <thead><tr><th>Scottish Band</th><th>Income Range</th><th>Rate</th></tr></thead>
      <tbody>
        <tr><td>Starter rate</td><td>&pound;12,571 &ndash; &pound;14,876</td><td>19%</td></tr>
        <tr><td>Basic rate</td><td>&pound;14,877 &ndash; &pound;31,092</td><td>20%</td></tr>
        <tr><td>Intermediate rate</td><td>&pound;31,093 &ndash; &pound;45,661</td><td>21%</td></tr>
        <tr><td>Higher rate</td><td>&pound;45,662 &ndash; &pound;125,140</td><td>42%</td></tr>
        <tr><td>Top rate</td><td>Above &pound;125,140</td><td>48%</td></tr>
        <tr><td><strong>Personal Allowance</strong></td><td><strong>Up to &pound;12,570</strong></td><td><strong>0%</strong></td></tr>
      </tbody>
    </table>
  </div>

  <p>The Personal Allowance of &pound;12,570 is the same across the UK. Scottish rates only apply to income above this threshold. The 19% starter rate is lower than England&rsquo;s 20% basic rate, but the intermediate and higher rates are higher.</p>

  <blockquote>
    &ldquo;Scottish Income Tax is administered by HMRC on behalf of the Scottish Government. Your tax code will include an &lsquo;S&rsquo; prefix if you are a Scottish taxpayer &mdash; for example, S1257L.&rdquo; &mdash; <a href="https://www.gov.uk/scottish-income-tax" rel="nofollow" target="_blank">GOV.UK, Scottish Income Tax</a>
  </blockquote>

  <p>Edinburgh Deliveroo riders should check their tax code on any HMRC correspondence or on the Personal Tax Account. If you do not have an &lsquo;S&rsquo; prefix and you live in Edinburgh, contact HMRC to correct this &mdash; paying the wrong rate is a common issue for riders who recently moved to Scotland.</p>
</section>

<section id="ni">
  <h2>National Insurance for Edinburgh Deliveroo Riders</h2>
  <div class="answer-first">NI rates are UK-wide and not affected by Scottish income tax. Edinburgh Deliveroo riders pay Class 4 NI at 6% on profits between &pound;12,570 and &pound;50,270. Class 2 NI was abolished in April 2024.</div>

  <div class="table-wrap">
    <table>
      <thead><tr><th>NI Class</th><th>Rate</th><th>Applies To</th></tr></thead>
      <tbody>
        <tr><td>Class 2 (old)</td><td>&pound;3.45/week</td><td>Abolished April 2024</td></tr>
        <tr><td>Class 4</td><td>6%</td><td>Profits &pound;12,570&ndash;&pound;50,270</td></tr>
        <tr><td>Class 4 upper</td><td>2%</td><td>Profits above &pound;50,270</td></tr>
        <tr><td><strong>Edinburgh rider (&pound;25k profit)</strong></td><td><strong>6% on &pound;12,430</strong></td><td><strong>&pound;746</strong></td></tr>
      </tbody>
    </table>
  </div>

  <p>Although NI is calculated on UK-wide rules, Edinburgh riders will notice that their total deductions are higher than English counterparts due to Scottish income tax. The combination of Class 4 NI and Scottish income tax on typical Edinburgh Deliveroo earnings of &pound;25,000 is approximately &pound;3,246.</p>
</section>

<section id="calculation">
  <h2>Tax Calculation: Edinburgh Deliveroo Rider Example</h2>
  <div class="answer-first">An Edinburgh Deliveroo rider with &pound;25,000 profit (after expenses) pays &pound;2,498 Scottish income tax + &pound;746 Class 4 NI = &pound;3,244 total, leaving a net income of &pound;21,756.</div>

  <div class="table-wrap">
    <table>
      <thead><tr><th>Calculation Step</th><th>Amount</th></tr></thead>
      <tbody>
        <tr><td>Gross Deliveroo income (Edinburgh)</td><td>&pound;27,500</td></tr>
        <tr><td>Less: allowable expenses (mileage, phone, equipment)</td><td>&pound;2,500</td></tr>
        <tr><td>Net profit</td><td>&pound;25,000</td></tr>
        <tr><td>Less: Personal Allowance</td><td>&pound;12,570</td></tr>
        <tr><td>Taxable income</td><td>&pound;12,430</td></tr>
        <tr><td>Starter rate 19% on &pound;2,306 (&pound;12,571&ndash;&pound;14,876)</td><td>&pound;438</td></tr>
        <tr><td>Basic rate 20% on &pound;10,124 (&pound;14,877&ndash;&pound;25,000)</td><td>&pound;2,025</td></tr>
        <tr><td>Total Scottish income tax</td><td>&pound;2,463</td></tr>
        <tr><td>Class 4 NI (6% on &pound;12,430)</td><td>&pound;746</td></tr>
        <tr><td><strong>Total tax and NI</strong></td><td><strong>&pound;3,209</strong></td></tr>
      </tbody>
    </table>
  </div>

  <p>Use our <a href="https://www.ukgigtax.com/deliveroo-tax-calculator-uk.html">Deliveroo tax calculator</a> to get a personalised estimate. You can input your exact earnings and expenses to see your precise liability including Scottish rates.</p>
</section>

<section id="mileage">
  <h2>Mileage Claims for Edinburgh Deliveroo Riders</h2>
  <div class="answer-first">Edinburgh Deliveroo riders on bicycles claim 20p per mile. Moped riders claim 24p per mile. Car riders claim 45p for the first 10,000 miles and 25p thereafter. Edinburgh&rsquo;s compact geography means most riders cover 3,000&ndash;6,000 delivery miles per year.</div>

  <div class="table-wrap">
    <table>
      <thead><tr><th>Vehicle Type</th><th>Rate (first 10,000 miles)</th><th>Rate (above 10,000)</th><th>Edinburgh Annual Claim (5,000 miles)</th></tr></thead>
      <tbody>
        <tr><td>Bicycle</td><td>20p/mile</td><td>20p/mile</td><td>&pound;1,000</td></tr>
        <tr><td>Moped / Motorcycle</td><td>24p/mile</td><td>24p/mile</td><td>&pound;1,200</td></tr>
        <tr><td>Car or van</td><td>45p/mile</td><td>25p/mile</td><td>&pound;2,250</td></tr>
        <tr><td><strong>Most Edinburgh Deliveroo riders</strong></td><td><strong>Bicycle (20p)</strong></td><td><strong>20p/mile</strong></td><td><strong>&pound;1,000</strong></td></tr>
      </tbody>
    </table>
  </div>

  <p>Edinburgh&rsquo;s Old Town and New Town are among the most cycle-friendly areas in the UK. Most Deliveroo riders operating in EH1&ndash;EH6 postcodes use bicycles. The 20p mileage rate for cycles applies for all miles and there is no upper cap.</p>

  <p>To claim mileage, keep a log recording: the date of each delivery session, the total miles covered (use your Deliveroo app&rsquo;s trip history or a separate mileage app), and the purpose (delivery work). HMRC may request this evidence if they investigate your return. See our full <a href="https://www.ukgigtax.com/blog/deliveroo-mileage-allowance-2026">Deliveroo mileage guide</a>.</p>
</section>

<section id="expenses">
  <h2>Allowable Expenses for Edinburgh Deliveroo Riders</h2>
  <p>Beyond mileage, Edinburgh Deliveroo riders can deduct a range of expenses directly related to their work:</p>

  <h3>Equipment and Kit</h3>
  <ul>
    <li>Deliveroo-branded or own thermal delivery bags</li>
    <li>Bicycle helmet, gloves, and hi-vis clothing</li>
    <li>Bicycle lock and security equipment</li>
    <li>Bicycle maintenance and repairs (tyres, brakes, chain)</li>
    <li>Replacement lights and reflectors</li>
  </ul>

  <h3>Technology</h3>
  <ul>
    <li>Smartphone: percentage used for work (typically 70&ndash;80% for full-time riders)</li>
    <li>Phone mount for bicycle or moped</li>
    <li>Portable power bank for phone charging during shifts</li>
    <li>Data plan: work percentage of monthly cost</li>
  </ul>

  <h3>Other Deductible Costs</h3>
  <ul>
    <li>Insurance: public liability or courier-specific insurance</li>
    <li>Accountant fees for preparing your Self-Assessment</li>
    <li>Professional subscriptions or union membership</li>
    <li>Bicycle storage costs (if paying for secure parking)</li>
  </ul>

  <p>Edinburgh riders also benefit from the city&rsquo;s <a href="https://www.sustrans.org.uk" rel="nofollow" target="_blank">Sustrans</a> cycling infrastructure, reducing wear and tear compared to vehicle-based riders in other cities.</p>
</section>

<section id="vs-england">
  <h2>Edinburgh vs England: How Different Is the Tax Bill?</h2>
  <div class="answer-first">An Edinburgh Deliveroo rider earning &pound;25,000 profit pays approximately &pound;280 more in income tax per year than an equivalent rider in England, due to Scotland&rsquo;s intermediate tax rate.</div>

  <div class="table-wrap">
    <table>
      <thead><tr><th>Tax Component</th><th>Edinburgh (Scottish)</th><th>Bristol / Manchester (English)</th><th>Difference</th></tr></thead>
      <tbody>
        <tr><td>Income tax on &pound;25,000 profit</td><td>&pound;2,463</td><td>&pound;2,486</td><td>Similar</td></tr>
        <tr><td>Class 4 NI</td><td>&pound;746</td><td>&pound;746</td><td>None</td></tr>
        <tr><td>Personal Allowance</td><td>&pound;12,570</td><td>&pound;12,570</td><td>None</td></tr>
        <tr><td><strong>Total tax and NI</strong></td><td><strong>&pound;3,209</strong></td><td><strong>&pound;2,972</strong></td><td><strong>+&pound;237</strong></td></tr>
      </tbody>
    </table>
  </div>

  <p>At lower earnings, Scottish rates are actually marginally cheaper than English rates thanks to the 19% starter band. The crossover point where Scottish rates become more expensive is around &pound;28,000 profit. For most Edinburgh Deliveroo riders, the difference is modest &mdash; a few hundred pounds per year.</p>
</section>

<section id="faq" class="faq-section">
  <h2>Frequently Asked Questions: Deliveroo Tax Edinburgh</h2>

  <div class="faq-item">
    <h3>How do I know if I pay Scottish income tax?</h3>
    <p>You pay Scottish income tax if Scotland is your main place of residence for the majority of the tax year (6 April to 5 April). Edinburgh address = Scottish taxpayer. Your HMRC tax code will start with &lsquo;S&rsquo; (e.g. S1257L). Check your Personal Tax Account at gov.uk or look at any HMRC letter.</p>
  </div>

  <div class="faq-item">
    <h3>Do Edinburgh Deliveroo riders need to register as self-employed?</h3>
    <p>Yes. If you earn more than &pound;1,000 from Deliveroo in a tax year, you must register for Self-Assessment and declare it as self-employment income. Register at gov.uk/register-for-self-assessment. New riders must register by 5 October following the end of the tax year in which they started working.</p>
  </div>

  <div class="faq-item">
    <h3>Can I claim a home office deduction as a Edinburgh Deliveroo rider?</h3>
    <p>Yes, if you use part of your home exclusively for administrative tasks related to your Deliveroo work &mdash; such as managing accounts, planning routes, or dealing with customer queries. HMRC allows a flat rate of &pound;6/week (&pound;312/year) without needing to calculate exact costs, or you can claim a proportion of actual home costs.</p>
  </div>

  <div class="faq-item">
    <h3>What if I also have a part-time employed job in Edinburgh?</h3>
    <p>You report all income on your Self-Assessment return. Your employer deducts PAYE tax from employed income; you pay tax on Deliveroo profit separately via Self-Assessment. Ensure your personal allowance is applied correctly &mdash; HMRC may split it between your employer and self-employment, or you can claim it all against your employment income and pay full tax on the Deliveroo profit.</p>
  </div>

  <div class="faq-item">
    <h3>Are there any Edinburgh-specific tax reliefs for gig workers?</h3>
    <p>No Edinburgh-specific reliefs exist beyond the standard UK and Scottish allowances. However, Deliveroo Edinburgh riders are eligible for all UK-wide deductions including the Trading Allowance (&pound;1,000), mileage at HMRC approved rates, and the Class 4 NI lower profits limit (&pound;12,570).</p>
  </div>

  <div class="faq-item">
    <h3>How does Payments on Account affect Edinburgh Deliveroo riders?</h3>
    <p>If your total tax bill exceeds &pound;1,000 and less than 80% was collected at source, HMRC requires advance payments for the following year. Each payment is 50% of the current bill due on 31 January and 31 July. Most Edinburgh Deliveroo riders earning &pound;20,000+ will be subject to this. See our <a href="https://www.ukgigtax.com/blog/hmrc-payment-on-account-2026">payments on account guide</a>.</p>
  </div>

  <div class="faq-item">
    <h3>Can I deduct the cost of buying a new bicycle for Deliveroo deliveries?</h3>
    <p>Yes &mdash; but you have two options. You can use the simple 20p/mile mileage rate (which covers all running costs), or you can claim actual costs including depreciation of the bicycle&rsquo;s value as a capital allowance. You cannot do both. Most Edinburgh riders with standard bicycles find the 20p/mile method simpler and equally or more valuable.</p>
  </div>
</section>

<div class="author-box" itemscope itemtype="https://schema.org/Person">
  <div class="author-avatar" aria-hidden="true">EB</div>
  <div class="author-info">
    <h4 itemprop="name">Ethan Blake</h4>
    <p>Ethan is a UK tax specialist with 10 years of experience advising self-employed contractors and gig economy workers. He writes for <a href="https://medium.com/@ethanblake_tax" rel="nofollow" target="_blank">Medium</a> on HMRC compliance. Reviewed against <a href="https://www.gov.uk/scottish-income-tax" rel="nofollow" target="_blank">GOV.UK Scottish Income Tax guidance</a>.</p>
  </div>
</div>

<section class="related">
  <h2>Related Guides</h2>
  <div class="related-grid">
    <a href="https://www.ukgigtax.com/blog/gig-worker-tax-glasgow-2026" class="related-card">
      <h3>Gig Worker Tax Glasgow 2026</h3>
      <p>Scottish tax rates and NI for Glasgow self-employed workers.</p>
    </a>
    <a href="https://www.ukgigtax.com/blog/self-employed-tax-bristol-2026" class="related-card">
      <h3>Self-Employed Tax Bristol 2026</h3>
      <p>English tax rates for Bristol gig workers and delivery drivers.</p>
    </a>
    <a href="https://www.ukgigtax.com/blog/deliveroo-mileage-allowance-2026" class="related-card">
      <h3>Deliveroo Mileage Allowance 2026</h3>
      <p>Full UK guide to mileage claims for Deliveroo riders.</p>
    </a>
    <a href="https://www.ukgigtax.com/deliveroo-tax-calculator-uk.html" class="related-card">
      <h3>Deliveroo Tax Calculator</h3>
      <p>Calculate your exact Deliveroo tax bill in minutes.</p>
    </a>
  </div>
</section>

</article>
</div>

<footer>
  <p>&copy; 2026 UKGigTax.com &mdash; Independent tax guidance for UK gig workers. Not financial advice.</p>
  <p style="margin-top:8px"><a href="https://www.ukgigtax.com">Home</a> &middot; <a href="https://www.ukgigtax.com/blog">Blog</a> &middot; <a href="https://www.gov.uk/scottish-income-tax" rel="nofollow" target="_blank">HMRC Scottish Income Tax</a></p>
</footer>

<script type="application/ld+json">
{"@context":"https://schema.org","@type":"BlogPosting","headline":"Deliveroo Tax Guide Edinburgh 2026: Scottish Rates for Riders","description":"Deliveroo tax guide for Edinburgh riders 2026. Scottish income tax rates, NI, mileage claims and HMRC deadlines for Edinburgh delivery drivers.","datePublished":"2026-06-04","dateModified":"2026-06-04","author":{"@type":"Person","name":"Ethan Blake","url":"https://medium.com/@ethanblake_tax"},"reviewedBy":{"@type":"Person","name":"Ethan Blake"},"publisher":{"@type":"Organization","name":"UKGigTax","url":"https://www.ukgigtax.com"},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.ukgigtax.com/blog/deliveroo-tax-guide-edinburgh-2026"}}
</script>
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.ukgigtax.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.ukgigtax.com/blog"},{"@type":"ListItem","position":3,"name":"Deliveroo Tax Guide Edinburgh 2026","item":"https://www.ukgigtax.com/blog/deliveroo-tax-guide-edinburgh-2026"}]}
</script>
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do I know if I pay Scottish income tax?","acceptedAnswer":{"@type":"Answer","text":"You pay Scottish income tax if Scotland is your main place of residence for the majority of the tax year. Edinburgh address = Scottish taxpayer. Your HMRC tax code will start with S (e.g. S1257L)."}},{"@type":"Question","name":"Do Edinburgh Deliveroo riders need to register as self-employed?","acceptedAnswer":{"@type":"Answer","text":"Yes. If you earn more than £1,000 from Deliveroo in a tax year, you must register for Self-Assessment and declare it as self-employment income."}},{"@type":"Question","name":"Can I claim a home office deduction as an Edinburgh Deliveroo rider?","acceptedAnswer":{"@type":"Answer","text":"Yes, if you use part of your home for administrative tasks. HMRC allows £6/week flat rate or a proportion of actual home costs."}},{"@type":"Question","name":"What if I also have a part-time employed job in Edinburgh?","acceptedAnswer":{"@type":"Answer","text":"You report all income on your Self-Assessment return. Your employer deducts PAYE tax from employed income; you pay tax on Deliveroo profit separately via Self-Assessment."}},{"@type":"Question","name":"Can I deduct the cost of buying a new bicycle for Deliveroo deliveries?","acceptedAnswer":{"@type":"Answer","text":"Yes. Use the 20p/mile mileage rate (covers all running costs) or claim actual costs including depreciation as a capital allowance. You cannot do both."}},{"@type":"Question","name":"Are there Edinburgh-specific tax reliefs for gig workers?","acceptedAnswer":{"@type":"Answer","text":"No Edinburgh-specific reliefs exist. Deliveroo Edinburgh riders are eligible for all UK-wide deductions including the Trading Allowance, mileage at HMRC approved rates, and the Class 4 NI lower profits limit."}}]}
</script>
</body>
</html>`;

const outPath = 'C:/Users/RUSLAN/Desktop/ukgigtax/blog/deliveroo-tax-guide-edinburgh-2026.html';
fs.writeFileSync(outPath, html, 'utf8');
console.log('OK: deliveroo-tax-guide-edinburgh-2026.html', html.length, 'chars');
