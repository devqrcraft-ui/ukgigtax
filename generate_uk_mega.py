import os, urllib.request, json
# Райони Лондона (найпопулярніші для кур'єрів)
districts = ["Croydon", "Hackney", "Wimbledon", "Brixton", "Camden", "Greenwich", "Islington", "Stratford", "Ealing", "Harrow", "Hammersmith", "Fulham", "Chelsea", "Kensington", "Richmond", "Kingston", "Bromley", "Lewisham", "Southwark", "Lambeth", "Wandsworth", "Brent", "Barnet", "Enfield", "Haringey", "Redbridge", "Havering", "Newham", "Barking", "Dagenham"]
# HMRC Penalties & Support
support = ["Late-Filing-Penalty-Appeal", "HMRC-Time-to-Pay-Plan", "Reasonable-Excuse-for-Late-Tax", "Reducing-Payments-on-Account", "HMRC-Digital-Reporting-2026", "Gig-Worker-Sick-Pay-UK", "Universal-Credit-for-Gig-Workers", "HMRC-Compliance-Checks-Guide", "Tax-Free-Trading-Allowance-1000", "Rent-a-Room-Scheme-Gig-Workers"]

template = """<!DOCTYPE html>
<html lang="en-GB">
<head>
    <meta charset="UTF-8">
    <title>{title} 2026 | UK Gig Tax</title>
    <link rel="canonical" href="https://www.ukgigtax.com/{file}" />
    <style>body{{font-family:sans-serif;max-width:800px;margin:40px auto;padding:20px;line-height:1.6;color:#eef4fc;background:#07111F}}h1{{color:#22c55e}}</style>
</head>
<body>
    <h1>{h1}</h1>
    <div style="background:#0c1c30;padding:25px;border-radius:10px;border:1px solid #2a4a6e">
        <p>{content}</p>
        <a href="index.html" style="color:#22c55e;font-weight:700">Calculate Your UK Tax Now →</a>
    </div>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-8TRDK9LTCG"></script>
    <script>window.dataLayer=window.dataLayer||[];function gtag( ){{dataLayer.push(arguments);}}gtag('js',new Date());gtag('config','G-8TRDK9LTCG');</script>
</body>
</html>"""

urls = []
def save(f, t, d, h, c):
    with open(f, 'w', encoding='utf-8') as file: file.write(template.format(title=t, desc=d, file=f, h1=h, content=c))
    urls.append(f"https://www.ukgigtax.com/{f}" )

for dist in districts: save(f"delivery-driver-tax-guide-{dist.lower()}-2026.html", f"Tax Guide {dist} 2026", f"HMRC rules for drivers in {dist}", f"{dist} Delivery Tax", f"Expert tax advice for delivery drivers in {dist} for 2026.")
for s in support: save(f"{s.lower()}-uk-2026.html", f"{s.replace('-', ' ')} Guide", f"How to handle {s}", s.replace('-', ' '), f"Important HMRC support information for {s} in 2026.")

print(f"Generated {len(urls)} pages. Pinging IndexNow...")
data = json.dumps({"host": "www.ukgigtax.com", "key": "824208a268d242c1b2c4c3b9b4c4c3b9", "keyLocation": "https://www.ukgigtax.com/824208a268d242c1b2c4c3b9b4c4c3b9.txt", "urlList": urls} ).encode('utf-8')
req = urllib.request.Request("https://api.indexnow.org/indexnow", data=data, headers={"Content-Type": "application/json", "User-Agent": "Mozilla/5.0"} )
try: print(f"IndexNow Status: {urllib.request.urlopen(req).getcode()}")
except Exception as e: print(f"Ping failed: {e}")
