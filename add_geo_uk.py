import os, json, urllib.request
css = """<style>.btn-3d-uk{position:relative;display:inline-flex;align-items:center;padding:14px 28px;background:linear-gradient(180deg,#22c55e 0%,#16a34a 100%);color:#fff!important;font-weight:800;border-radius:10px;border:1px solid #4ade80;box-shadow:0 5px 0 #14532d,0 10px 20px rgba(0,0,0,0.4);transition:all .1s;cursor:pointer;text-decoration:none;text-transform:uppercase}.btn-3d-uk:hover{transform:translateY(-3px);box-shadow:0 8px 0 #14532d,0 15px 25px rgba(34,197,94,0.4)}</style>"""
cities = ["Cardiff", "Swansea", "Aberdeen", "Inverness", "Derry", "Newport", "Portsmouth", "Plymouth", "Exeter", "Norwich", "Ipswich", "Middlesbrough", "Blackpool", "Bournemouth", "Peterborough", "Colchester", "Dundee", "Warrington", "Slough", "Huddersfield"]
template = '''<!DOCTYPE html><html><head>[CSS]<title>[D] Tax Guide 2026 ★ ✓</title></head><body style="background:#07111F;color:#fff;padding:60px;font-family:sans-serif"><div style="max-width:800px;margin:0 auto;"><h1>★ [D] Tax Guide 2026</h1><div style="background:rgba(34,197,94,0.1);padding:40px;border-radius:14px;border:1px solid #22c55e"><p>Complete 2026 HMRC tax info for <strong>[D]</strong>.</p><a href="/" class="btn-3d-uk">Calculate [D] Tax ➔</a></div></div></body></html>'''
urls = []
for d in cities:
    f = f"{d.lower()}-tax-guide-2026.html"
    with open(f, "w", encoding="utf-8") as file: file.write(template.replace("[CSS]", css).replace("[D]", d))
    urls.append(f"https://www.ukgigtax.com/{f}" )
data = json.dumps({"host": "www.ukgigtax.com", "key": "824208a268d242c1b2c4c3b9b4c4c3b9", "urlList": urls}).encode('utf-8')
req = urllib.request.Request("https://api.indexnow.org/indexnow", data=data, headers={"Content-Type": "application/json", "User-Agent": "Mozilla/5.0"} )
try: print(f"IndexNow Status: {urllib.request.urlopen(req).getcode()}")
except Exception as e: print(f"Ping failed: {e}")
