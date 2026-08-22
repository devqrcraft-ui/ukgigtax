import os, urllib.request, json
deadlines = ["Self-Assessment", "VAT-Registration", "MTD-April", "Payment-on-Account", "Uber-Eats-Statement", "Deliveroo-Tax-Return"]
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
    <p>Important tax information for UK gig workers in 2026.</p>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-8TRDK9LTCG"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag( ){{ dataLayer.push(arguments); }}
        gtag('js', new Date());
        gtag('config', 'G-8TRDK9LTCG');
    </script>
</body>
</html>"""
urls = []
for d in deadlines:
    f = f"{d.lower()}-deadline-uk-2026.html"
    with open(f, 'w', encoding='utf-8') as file:
        file.write(template.replace("{title}", d.replace("-", " ")).replace("{file}", f).replace("{h1}", d.replace("-", " ")))
    urls.append(f"https://www.ukgigtax.com/{f}" )

print(f"Generated {len(urls)} pages. Pinging IndexNow...")
data = json.dumps({"host": "www.ukgigtax.com", "key": "824208a268d242c1b2c4c3b9b4c4c3b9", "keyLocation": "https://www.ukgigtax.com/824208a268d242c1b2c4c3b9b4c4c3b9.txt", "urlList": urls} ).encode('utf-8')
req = urllib.request.Request("https://api.indexnow.org/indexnow", data=data, headers={"Content-Type": "application/json", "User-Agent": "Mozilla/5.0"} )
try: print(f"IndexNow Status: {urllib.request.urlopen(req).getcode()}")
except Exception as e: print(f"Ping failed: {e}")
