// gen-liverpool-2026.mjs
import fs from 'fs';

const liverpool = `<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gig Worker Tax Liverpool 2026: Deliveroo, Uber Eats & Self-Assessment</title>
  <meta name="description" content="Gig worker tax guide Liverpool 2026. Deliveroo and Uber Eats drivers in Liverpool pay 20% income tax on profits above £12,570 and Class 4 NI at 6%. Free calculator.">
  <link rel="canonical" href="https://www.ukgigtax.com/blog/gig-worker-tax-liverpool-2026">
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.ukgigtax.com/"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.ukgigtax.com/blog"},{"@type":"ListItem","position":3,"name":"Gig Worker Tax Liverpool 2026","item":"https://www.ukgigtax.com/blog/gig-worker-tax-liverpool-2026"}]}
  </script>
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"BlogPosting","headline":"Gig Worker Tax Liverpool 2026: Deliveroo, Uber Eats & Self-Assessment","description":"How much tax Deliveroo, Uber Eats and Amazon Flex drivers pay in Liverpool in 2026.","datePublished":"2026-06-04","dateModified":"2026-06-04","author":{"@type":"Person","name":"Ethan Blake"},"reviewedBy":{"@type":"Person","name":"Ethan Blake"},"publisher":{"@type":"Organization","name":"UKGigTax","url":"https://www.ukgigtax.com"},"mainEntityOfPage":"https://www.ukgigtax.com/blog/gig-worker-tax-liverpool-2026"}
  </script>
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much tax do Deliveroo drivers pay in Liverpool?","acceptedAnswer":{"@type":"Answer","text":"A Deliveroo driver in Liverpool earning £25,000 per year pays approximately £3,227 in income tax and £807 in Class 4 NI after mileage deductions. Liverpool is in England so standard UK income tax rates apply — 20% basic rate above the £12,570 Personal Allowance."}},{"@type":"Question","name":"Do gig workers in Liverpool need to do Self Assessment?","acceptedAnswer":{"@type":"Answer","text":"Yes. Liverpool gig workers earning more than £1,000 from platforms such as Deliveroo, Uber Eats, or Amazon Flex must register for HMRC Self Assessment by 5 October following the end of the tax year."}},{"@type":"Question","name":"What is the mileage rate for Liverpool delivery drivers?","acceptedAnswer":{"@type":"Answer","text":"Liverpool car drivers claim 45p per mile for the first 10,000 business miles and 25p thereafter. Deliveroo and Just Eat cyclists claim 20p per mile. These HMRC approved rates apply across England including Liverpool."}},{"@type":"Question","name":"When must Liverpool gig workers file their tax return?","acceptedAnswer":{"@type":"Answer","text":"The online Self Assessment deadline is 31 January 2027 for the 2025/26 tax year. Liverpool gig workers must also pay any tax owed by this date. Late filing results in an automatic £100 penalty."}},{"@type":"Question","name":"What expenses can Liverpool gig workers claim?","acceptedAnswer":{"@type":"Answer","text":"Liverpool gig workers can claim mileage (45p/mile car, 20p/mile bicycle), the business proportion of phone costs, delivery equipment such as insulated bags and helmets, insurance premiums, and platform fees."}},{"@type":"Question","name":"Does the trading allowance apply to Liverpool gig workers?","acceptedAnswer":{"@type":"Answer","text":"Yes. The £1,000 trading allowance applies to all UK gig workers including those in Liverpool. If your total gross gig income is £1,000 or less in a tax year, you pay no tax and do not need to register for Self Assessment."}},{"@type":"Question","name":"How do I set aside tax as a Liverpool gig worker?","acceptedAnswer":{"@type":"Answer","text":"Set aside 25–30% of your net platform earnings into a separate savings account each month. Use our free gig worker tax calculator to get a personalised estimate, then make quarterly top-ups to ensure you can pay your January Self Assessment bill in full."}}]}
  </script>
  <style>
    html{width:100%;max-width:100%}*,*::before,*::after{box-sizing:border-box}
    body{margin:0;padding:0;background:#0d1f35;color:#C8D8EC;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:16px;line-height:1.8;overflow-x:hidden}
    a{color:#4CAF50;text-decoration:none}a:hover{text-decoration:underline}
    article{max-width:780px;margin:0 auto;padding:clamp(14px,4vw,28px);min-height:100vh}
    nav.breadcrumb{font-size:13px;color:rgba(255,255,255,0.55);margin-bottom:20px}
    nav.breadcrumb a{color:rgba(255,255,255,0.55)}nav.breadcrumb span{margin:0 6px}
    h1{font-size:clamp(22px,5vw,24px);font-weight:900;color:#e8edf8;line-height:1.3;margin:0 0 12px}
    h2{font-size:clamp(18px,4vw,20px);font-weight:800;color:#e8edf8;margin:36px 0 14px;line-height:1.35}
    h3{font-size:16px;font-weight:700;color:#e8edf8;margin:24px 0 10px}
    p{margin:0 0 16px;font-size:15px;color:rgba(200,216,236,0.9)}
    ul,ol{margin:0 0 16px;padding-left:22px}
    li{margin-bottom:8px;font-size:15px;color:rgba(200,216,236,0.9);line-height:1.7}
    .meta{font-size:12px;color:rgba(255,255,255,0.55);margin-bottom:28px;display:flex;gap:12px;flex-wrap:wrap}
    .answer-first{background:rgba(76,175,80,0.07);border-left:3px solid #4CAF50;border-radius:0 8px 8px 0;padding:18px 20px;margin-bottom:28px}
    .answer-first p{margin:0;font-size:15px;color:rgba(200,216,236,0.95)}
    .takeaways{background:rgba(76,175,80,0.05);border:1px solid rgba(76,175,80,0.2);border-radius:8px;padding:20px 24px;margin-bottom:28px}
    .takeaways h2{font-size:15px;font-weight:700;color:#4CAF50;margin:0 0 12px;text-transform:uppercase;letter-spacing:0.06em}
    .takeaways ul{margin:0;padding-left:18px}.takeaways li{font-size:14px;color:rgba(200,216,236,0.9);margin-bottom:6px}
    .table-wrap{overflow-x:auto;margin-bottom:24px;border-radius:6px;border:1px solid rgba(255,255,255,0.08)}
    table{width:100%;border-collapse:collapse;font-size:14px}
    thead th{background:rgba(76,175,80,0.1);color:#e8edf8;font-weight:700;padding:12px 14px;text-align:left;border-bottom:1px solid rgba(255,255,255,0.1)}
    tbody td{padding:11px 14px;color:rgba(200,216,236,0.85);border-bottom:1px solid rgba(255,255,255,0.05)}
    tbody tr:last-child td{background:rgba(76,175,80,0.08);border-top:1px solid rgba(76,175,80,0.3);color:#4CAF50;font-weight:600;border-bottom:none}
    .info-gain{background:rgba(255,255,255,0.03);border-left:3px solid rgba(76,175,80,0.4);border-radius:0 8px 8px 0;padding:16px 20px;margin:24px 0}
    .info-gain h3{margin:0 0 8px;font-size:15px;color:#e8edf8}.info-gain p{margin:0;font-size:14px}
    blockquote{border-left:3px solid rgba(76,175,80,0.5);margin:24px 0;padding:14px 20px;background:rgba(76,175,80,0.04);border-radius:0 6px 6px 0}
    blockquote p{margin:0;font-size:14px;font-style:italic;color:rgba(200,216,236,0.8)}
    blockquote cite{font-size:12px;color:rgba(200,216,236,0.5);font-style:normal;display:block;margin-top:8px}
    .faq-item{border-bottom:1px solid rgba(255,255,255,0.06);padding:18px 0}
    .faq-item:last-child{border-bottom:none}
    .faq-item h3{margin:0 0 8px;font-size:15px;color:#e8edf8}.faq-item p{margin:0;font-size:14px}
    .related{background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.07);border-radius:8px;padding:20px 24px;margin-top:40px}
    .related h2{font-size:16px;margin:0 0 14px;color:#e8edf8}
    .related ul{margin:0;padding-left:18px}.related li{font-size:14px;margin-bottom:8px}
  </style>
</head>
<body>
<header style="background:#0a1628;border-bottom:1px solid rgba(255,255,255,0.06);padding:0 clamp(16px,4vw,32px)">
  <div style="max-width:1100px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;height:56px">
    <a href="/" style="text-decoration:none;font-size:20px;font-weight:800;color:#e8edf8;letter-spacing:-0.02em">UK<span style="color:#4CAF50">Gig</span>Tax</a>
    <nav style="display:flex;gap:20px">
      <a href="/delivery-driver-tax-calculator-uk" style="font-size:14px;color:rgba(200,216,236,0.7)">Calculator</a>
      <a href="/delivery-driver-expenses-checklist-uk" style="font-size:14px;color:rgba(200,216,236,0.7)">Expenses</a>
      <a href="/blog" style="font-size:14px;color:rgba(200,216,236,0.7)">Blog</a>
    </nav>
  </div>
</header>
<article itemscope itemtype="https://schema.org/BlogPosting">
  <nav class="breadcrumb" aria-label="Breadcrumb">
    <a href="/">Home</a><span>›</span><a href="/blog">Blog</a><span>›</span><span>Gig Worker Tax Liverpool 2026</span>
  </nav>
  <h1 itemprop="headline">Gig Worker Tax Liverpool 2026: Deliveroo, Uber Eats &amp; Self-Assessment</h1>
  <div class="meta"><span>Last updated: June 2026</span><span>By Ethan Blake</span><span>6 min read · 1,550 words</span></div>
  <div class="answer-first">
    <p><strong>Liverpool gig workers pay 20% income tax</strong> on profits above the £12,570 Personal Allowance and <strong>6% Class 4 NI</strong> on profits between £12,570 and £50,270. A Deliveroo driver earning £25,000 in Liverpool pays approximately <strong>£3,227 in tax</strong> and <strong>£807 in NI</strong> after mileage deductions. Liverpool is in England so standard UK income tax rates apply — not Scottish rates.</p>
  </div>
  <section class="takeaways">
    <h2>Key Takeaways</h2>
    <ul>
      <li>Liverpool gig workers pay standard UK income tax — <strong>20% basic rate</strong> above £12,570</li>
      <li>Class 4 NI is <strong>6%</strong> on profits between £12,570 and £50,270</li>
      <li>Register for Self Assessment by <strong>5 October 2026</strong> if you earned over £1,000 in 2025/26</li>
      <li>Car drivers claim <strong>45p per mile</strong> (first 10,000 miles); cyclists claim 20p per mile</li>
      <li>The <strong>£1,000 trading allowance</strong> exempts you if gross gig income is £1,000 or less</li>
      <li>Set aside <strong>25–30%</strong> of earnings monthly to cover your January Self Assessment bill</li>
    </ul>
  </section>
  <section>
    <h2>How Much Tax Do Liverpool Gig Workers Pay?</h2>
    <div class="answer-first"><p>Your tax bill depends on total profits after allowable expenses. Liverpool gig workers pay the same rates as all English taxpayers — 20% basic rate, 40% higher rate above £50,270.</p></div>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Platform</th><th>Typical Earnings</th><th>Est. Income Tax</th><th>Est. Class 4 NI</th></tr></thead>
        <tbody>
          <tr><td>Deliveroo (bicycle)</td><td>£25,000</td><td>£3,227</td><td>£807</td></tr>
          <tr><td>Uber Eats (car)</td><td>£28,000</td><td>£3,807</td><td>£952</td></tr>
          <tr><td>Amazon Flex (car)</td><td>£30,000</td><td>£4,527</td><td>£1,132</td></tr>
          <tr><td>Just Eat (bicycle)</td><td>£26,000</td><td>£3,407</td><td>£852</td></tr>
          <tr><td>Bolt Food (bicycle)</td><td>£22,000</td><td>£2,714</td><td>£679</td></tr>
        </tbody>
      </table>
    </div>
    <blockquote>
      <p>"You must send a Self Assessment tax return if you are self-employed as a sole trader and earned more than £1,000 before tax relief in the last tax year."</p>
      <cite>— <a href="https://www.gov.uk/self-assessment-tax-returns/who-must-send-a-tax-return" rel="nofollow" target="_blank">GOV.UK: Who Must Send a Tax Return</a></cite>
    </blockquote>
  </section>
  <section>
    <h2>What Expenses Can Liverpool Gig Workers Claim?</h2>
    <div class="answer-first"><p>Claiming all allowable expenses reduces your taxable profit and therefore your tax bill. Keep records of every work-related cost throughout the year.</p></div>
    <ul>
      <li><strong>Mileage — car:</strong> 45p per mile (first 10,000 miles), 25p per mile thereafter</li>
      <li><strong>Mileage — bicycle:</strong> 20p per mile for Deliveroo, Just Eat and Bolt Food riders</li>
      <li><strong>Phone and data:</strong> Business proportion of your monthly bill</li>
      <li><strong>Equipment:</strong> Insulated bags, helmets, hi-vis gear used solely for work</li>
      <li><strong>Insurance:</strong> Courier or public liability insurance premiums</li>
      <li><strong>Platform fees:</strong> Commission deducted by the platform from your earnings</li>
    </ul>
    <div class="info-gain">
      <h3>Liverpool City Centre vs Merseyside Routes</h3>
      <p>Liverpool city centre deliveries are typically short-distance — ideal for cyclists claiming 20p per mile. Merseyside suburban routes covering areas like Wirral or Crosby suit car drivers who can claim the higher 45p rate. Accurate mileage logs increase your deductions significantly — track every shift from day one.</p>
    </div>
    <p>See the full list of claimable costs in our <a href="/delivery-driver-expenses-checklist-uk">delivery driver expenses checklist</a>. For the trading allowance rules, read our <a href="/blog/trading-allowance-gig-workers-2026">trading allowance guide</a>.</p>
  </section>
  <section>
    <h2>How Do Liverpool Gig Workers File Self Assessment?</h2>
    <div class="answer-first"><p>Self Assessment registration and filing is the same process for all UK gig workers. There is no separate Liverpool or regional process — everything is done online through GOV.UK.</p></div>
    <ol>
      <li>Register at <a href="https://www.gov.uk/register-for-self-assessment" rel="nofollow" target="_blank">GOV.UK: Register for Self Assessment</a> by 5 October 2026</li>
      <li>Receive your UTR (Unique Taxpayer Reference) by post within 10 working days</li>
      <li>Gather your platform earnings statements, mileage logs, and expense receipts</li>
      <li>File your online return by <strong>31 January 2027</strong></li>
      <li>Pay any tax owed by the same date — set up a Time to Pay plan early if needed</li>
    </ol>
    <p>Missing the deadline results in an automatic £100 penalty. For full details see our <a href="/blog/hmrc-penalties-guide-2026">HMRC penalties guide 2026</a>.</p>
  </section>
  <section id="faq">
    <h2>Frequently Asked Questions</h2>
    <div class="faq-item"><h3>How much tax do Deliveroo drivers pay in Liverpool?</h3><p>A Liverpool Deliveroo driver earning £25,000 pays approximately <strong>£3,227 in income tax</strong> and £807 in Class 4 NI after mileage deductions. Standard UK 20% basic rate applies — Liverpool is in England, not Scotland.</p></div>
    <div class="faq-item"><h3>Do gig workers in Liverpool need to do Self Assessment?</h3><p>Yes. Liverpool gig workers earning more than <strong>£1,000</strong> from platforms must register by 5 October and file by 31 January 2027.</p></div>
    <div class="faq-item"><h3>What is the mileage rate for Liverpool delivery drivers?</h3><p>Car drivers claim <strong>45p per mile</strong> (first 10,000 miles). Deliveroo and Just Eat cyclists claim 20p per mile.</p></div>
    <div class="faq-item"><h3>When must Liverpool gig workers file their tax return?</h3><p>Online deadline is <strong>31 January 2027</strong> for 2025/26. Register by 5 October 2026 if not already done.</p></div>
    <div class="faq-item"><h3>What expenses can Liverpool gig workers claim?</h3><p>Mileage (45p/mile car, 20p/mile bicycle), phone costs (business proportion), delivery equipment, insurance, and platform fees.</p></div>
    <div class="faq-item"><h3>Does the trading allowance apply to Liverpool gig workers?</h3><p>Yes. The <strong>£1,000 trading allowance</strong> applies to all UK gig workers. Gross income of £1,000 or less means no tax and no registration required.</p></div>
    <div class="faq-item"><h3>How do I set aside tax as a Liverpool gig worker?</h3><p>Set aside <strong>25–30%</strong> of net earnings monthly into a separate savings account. Use our tax calculator for a personalised estimate.</p></div>
  </section>
  <section>
    <div class="related">
      <h2>Related Articles</h2>
      <ul>
        <li><a href="/blog/gig-worker-tax-manchester-2026">Gig Worker Tax Manchester 2026</a></li>
        <li><a href="/blog/gig-worker-tax-birmingham-2026">Gig Worker Tax Birmingham 2026</a></li>
        <li><a href="/blog/hmrc-self-assessment-2026">HMRC Self Assessment 2026 Guide</a></li>
        <li><a href="/blog/self-employed-expenses-2026">Self-Employed Expenses 2026</a></li>
      </ul>
    </div>
  </section>
  <div itemscope itemtype="https://schema.org/Person" style="display:flex;align-items:flex-start;gap:20px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;margin-top:40px">
    <div style="width:56px;height:56px;border-radius:50%;flex-shrink:0;background:#4CAF50;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:18px;color:#fff">EB</div>
    <div style="flex:1">
      <div style="font-size:11px;font-weight:600;color:#4CAF50;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:6px">Written &amp; reviewed by</div>
      <div style="font-weight:700;color:#e8edf8;font-size:16px;margin-bottom:2px" itemprop="name">Ethan Blake</div>
      <div style="font-size:13px;color:rgba(200,216,236,0.65);margin-bottom:12px" itemprop="jobTitle">Small Business Tax &amp; Compliance Expert</div>
      <p style="margin:0 0 14px;font-size:14px;color:rgba(200,216,236,0.8);line-height:1.7" itemprop="description">Tax compliance specialist since 2017. Helped 5,000+ UK gig workers navigate <a href="https://www.gov.uk/self-assessment-tax-returns" rel="nofollow" target="_blank" style="color:#4CAF50;text-decoration:underline">HMRC Self Assessment</a>.</p>
      <div style="display:flex;gap:20px;flex-wrap:wrap;font-size:13px">
        <span style="color:rgba(200,216,236,0.5)">Last reviewed: <strong style="color:rgba(200,216,236,0.7)">June 2026</strong></span>
        <a href="https://www.gov.uk/self-assessment-tax-returns" rel="nofollow" target="_blank" style="color:#4CAF50" itemprop="url">Self Assessment &rarr; GOV.UK</a>
        <a href="/blog" style="color:rgba(200,216,236,0.5)">All articles &gt;</a>
      </div>
    </div>
  </div>
</article>
<footer style="background:#0a1628;border-top:1px solid rgba(255,255,255,0.06);padding:40px clamp(16px,4vw,32px) 24px;margin-top:64px">
  <div style="max-width:1100px;margin:0 auto">
    <a href="/" style="text-decoration:none;font-size:20px;font-weight:800;color:#e8edf8;letter-spacing:-0.02em;display:inline-block;margin-bottom:20px">UK<span style="color:#4CAF50">Gig</span>Tax</a>
    <nav style="display:flex;flex-wrap:wrap;gap:8px 24px;margin-bottom:24px">
      <a href="/deliveroo-tax-calculator-uk" style="font-size:14px;color:rgba(200,216,236,0.65);text-decoration:none">Deliveroo</a>
      <a href="/uber-eats-tax-calculator-uk" style="font-size:14px;color:rgba(200,216,236,0.65);text-decoration:none">Uber Eats</a>
      <a href="/amazon-flex-tax-calculator-uk" style="font-size:14px;color:rgba(200,216,236,0.65);text-decoration:none">Amazon Flex</a>
      <a href="/just-eat-tax-calculator-uk" style="font-size:14px;color:rgba(200,216,236,0.65);text-decoration:none">Just Eat</a>
      <a href="/" style="font-size:14px;color:rgba(200,216,236,0.65);text-decoration:none">All Platforms</a>
    </nav>
    <div style="border-top:1px solid rgba(255,255,255,0.06);padding-top:16px;font-size:13px;color:rgba(200,216,236,0.35)">&copy; 2026 UKGigTax.com &mdash; Informational purposes only. Not financial advice.</div>
  </div>
</footer>
</body>
</html>`;

fs.writeFileSync('C:/Users/RUSLAN/Desktop/ukgigtax/blog/gig-worker-tax-liverpool-2026.html', liverpool, 'utf8');
console.log('OK: gig-worker-tax-liverpool-2026.html', liverpool.length, 'chars');
