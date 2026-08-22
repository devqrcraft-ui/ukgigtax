import os
base_dir = '.'
template = """<!DOCTYPE html>
<html lang="en-GB">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} 2026 | UK Gig Tax Guide</title>
    <meta name="description" content="{description}">
    <link rel="canonical" href="https://www.ukgigtax.com/{filename}" />
    <style>
        body{{font-family:sans-serif;max-width:800px;margin:40px auto;padding:20px;line-height:1.6;color:#eef4fc;background:#07111F}}
        h1{{color:#22c55e;font-family:Georgia,serif}}
        .card{{background:#0c1c30;border:1.5px solid #2a4a6e;border-radius:10px;padding:25px;margin:20px 0}}
        a{{color:#22c55e;font-weight:700;text-decoration:none}}
        .btn{{display:inline-block;background:#22c55e;color:#022a12;padding:12px 24px;border-radius:5px;margin-top:20px}}
    </style>
</head>
<body>
    <h1 fetchpriority="high">{h1}</h1>
    <div class="card">
        <p>{content}</p>
        <a href="index.html" class="btn">Calculate Your UK Tax Now →</a>
    </div>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-8TRDK9LTCG"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag( ){{dataLayer.push(arguments);}}
        gtag('js', new Date());
        gtag('config', 'G-8TRDK9LTCG');
    </script>
</body>
</html>"""

cities = ["London", "Birmingham", "Leeds", "Glasgow", "Sheffield", "Manchester", "Liverpool", "Bristol", "Newcastle", "Sunderland", "Leicester", "Nottingham", "Belfast", "Southampton", "Portsmouth"] # Спрощено для прикладу
for city in cities:
    filename = f"delivery-driver-tax-guide-{city.lower()}-2026.html"
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(template.format(title=f"Tax Guide {city} 2026", description=f"HMRC rules for {city}", filename=filename, h1=f"{city} Delivery Tax", content=f"Guide for drivers in {city}..."))

platforms = ["Uber Eats", "Deliveroo", "Amazon Flex", "Just Eat"]
for p in platforms:
    filename = f"{p.lower().replace(' ', '-')}-tax-guide-2026.html"
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(template.format(title=f"{p} Tax 2026", description=f"Rules for {p}", filename=filename, h1=f"{p} Guide", content=f"How to pay tax for {p}..."))
