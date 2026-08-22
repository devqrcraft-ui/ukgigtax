import os
template = """<!DOCTYPE html>
<html lang="en-GB">
<head>
    <meta charset="UTF-8">
    <title>Tax on £{amount} Self-Employed 2026 | UK Gig Tax Guide</title>
    <link rel="canonical" href="https://www.ukgigtax.com/{file}" />
    <style>body{{font-family:sans-serif;max-width:800px;margin:40px auto;padding:20px;line-height:1.6;color:#eef4fc;background:#07111F}}h1{{color:#22c55e}}</style>
</head>
<body>
    <h1>Tax on £{amount} Earnings (2026 )</h1>
    <div style="background:#0c1c30;padding:25px;border-radius:10px;border:1px solid #2a4a6e">
        <p>Earning **£{amount}** as a gig worker in the UK? After your £12,570 personal allowance, you'll pay 20% Income Tax and Class 4 National Insurance.</p>
        <a href="index.html" style="color:#22c55e;font-weight:700">Check Your Take-Home Pay →</a>
    </div>
</body>
</html>"""
for i in range(15, 115):
    amount = f"{i},000"
    f = f"tax-on-{i}k-self-employed-uk-2026.html"
    with open(f, 'w', encoding='utf-8') as file:
        file.write(template.replace("{amount}", amount).replace("{file}", f))
