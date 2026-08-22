import os, urllib.request, json
cities = ["London", "Birmingham", "Leeds", "Glasgow", "Sheffield", "Manchester", "Liverpool", "Bristol", "Newcastle", "Sunderland", "Wolverhampton", "Belfast", "Leicester", "Nottingham", "Southampton", "Portsmouth", "Coventry", "Hull", "Bradford", "Stoke-on-Trent", "Derby", "Plymouth", "Reading", "Swansea", "Aberdeen", "Milton-Keynes", "Norwich", "Brighton", "Northampton", "Luton", "York", "Oxford", "Cambridge", "Exeter", "Gloucester", "Blackpool", "Ipswich", "Middlesbrough", "Bournemouth", "Peterborough", "Colchester", "Dundee", "Warrington", "Slough", "Huddersfield", "Poole", "Chester", "Chelmsford", "Maidstone", "Basildon"]
platforms = ["Uber-Eats", "Deliveroo", "Amazon-Flex", "Just-Eat", "Bolt-Food", "Stuart", "Gophr", "TaskRabbit", "Fiverr", "Upwork"]
deductions = ["Fuel", "Insurance", "Phone-Bill", "Bicycle-Repairs", "Helmet", "Delivery-Bags", "Parking-Fines", "Congestion-Charge", "Clothing", "Health-Insurance", "Home-Office", "Accountant-Fees", "Bank-Charges", "Marketing", "Software", "Laptop", "Work-Boots", "Rain-Gear", "Vehicle-Maintenance", "MOT-Costs", "Breakdown-Cover", "License-Fees", "Training", "Safety-Equipment", "First-Aid-Kit", "Flashlight", "Power-Bank", "Data-Plans", "Spotify-for-Work", "Cleaning-Supplies", "Tolls", "Interest-on-Car-Loan", "Leasing-Costs", "Public-Transport", "Work-Meals", "Water", "Uniforms", "Legal-Fees", "Professional-Subs", "Business-Cards"]
template = """<!DOCTYPE html>
<html lang="en-GB">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} 2026 | UK Gig Tax Guide</title>
    <meta name="description" content="{desc}">
    <link rel="canonical" href="https://www.ukgigtax.com/{file}" />
    <style>body{{font-family:sans-serif;max-width:800px;margin:40px auto;padding:20px;line-height:1.6;color:#eef4fc;background:#07111F}}h1{{color:#22c55e}}a{{color:#22c55e;font-weight:700;text-decoration:none}}.card{{background:#0c1c30;border:1px solid #2a4a6e;border-radius:10px;padding:25px;margin:20px 0}}</style>
</head>
<body>
    <h1 fetchpriority="high">{h1}</h1>
    <div class="card"><p>{content}</p><a href="index.html">Calculate Your UK Tax Now →</a></div>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-8TRDK9LTCG"></script>
    <script>window.dataLayer=window.dataLayer||[];function gtag( ){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-8TRDK9LTCG');</script>
</body>
</html>"""
urls = []
def save(f, t, d, h, c):
    with open(f, 'w', encoding='utf-8') as file: file.write(template.format(title=t, desc=d, file=f, h1=h, content=c))
    urls.append(f"https://www.ukgigtax.com/{f}" )
for c in cities: save(f"delivery-driver-tax-guide-{c.lower()}-2026.html", f"Tax Guide {c} 2026", f"HMRC rules for {c}", f"{c} Delivery Tax", f"Working in {c}? Stay tax compliant in 2026.")
for p in platforms: save(f"{p.lower()}-tax-guide-2026.html", f"{p} Tax 2026", f"Rules for {p}", f"{p} UK Guide", f"How to handle {p} taxes in 2026.")
for d in deductions: save(f"can-i-deduct-{d.lower()}-uk-tax-2026.html", f"Deduct {d} UK Tax 2026", f"Can you deduct {d}?", f"Deducting {d}", f"Is {d} a valid HMRC expense?")
data = json.dumps({"host": "www.ukgigtax.com", "key": "824208a268d242c1b2c4c3b9b4c4c3b9", "keyLocation": "https://www.ukgigtax.com/824208a268d242c1b2c4c3b9b4c4c3b9.txt", "urlList": urls} ).encode('utf-8')
req = urllib.request.Request("https://api.indexnow.org/indexnow", data=data, headers={"Content-Type": "application/json"} )
try: print(f"IndexNow Status: {urllib.request.urlopen(req).getcode()}")
except Exception as e: print(f"Ping failed: {e}")
