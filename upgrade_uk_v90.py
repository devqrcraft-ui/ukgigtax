import os, json, urllib.request
css = """<style>
.btn-3d-uk {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  background: linear-gradient(180deg, #22c55e 0%, #16a34a 100%);
  color: #ffffff !important;
  font-weight: 800;
  border-radius: 10px;
  border: 1px solid #4ade80;
  box-shadow: 0 5px 0 #14532d, 0 10px 20px rgba(0,0,0,0.4);
  transition: all 0.1s ease;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
}
.btn-3d-uk:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 0 #14532d, 0 15px 25px rgba(34,197,94,0.4);
}
.btn-3d-uk:active {
  transform: translateY(2px);
  box-shadow: 0 2px 0 #14532d;
}
</style>"""
districts = ["Croydon","Hackney","Wimbledon","Greenwich","Stratford","Brixton","Camden","Islington","Ealing","Harrow","Fulham","Chelsea","Kensington","Westminster","Southwark","Lambeth","Wandsworth","Richmond","Kingston","Merton","Sutton","Bromley","Lewisham","Bexley","Havering","Barking","Redbridge","Newham","Enfield","Barnet","Brent","Hillingdon","Hounslow"]
template = '''<!DOCTYPE html><html><head>[CSS]<title>[D] Tax Guide 2026 ★ ✓</title></head>
<body style="background:#07111F;color:#fff;padding:60px;font-family:sans-serif">
<div style="max-width:800px;margin:0 auto;">
  <h1>★ [D] Tax Guide 2026</h1>
  <div style="background:rgba(34,197,94,0.1);padding:40px;border-radius:14px;border:1px solid #22c55e;box-shadow:0 10px 30px rgba(0,0,0,0.3)">
    <p style="font-size:20px;margin-bottom:30px;">Complete 2026 HMRC tax info for <strong>[D]</strong>.</p>
    <a href="/" class="btn-3d-uk">Calculate UK Tax ➔</a>
  </div>
</div>
</body></html>'''
urls = []
for d in districts:
    f = f"{d.lower().replace(' ','-')}-tax-guide-2026.html"
    with open(f, "w", encoding="utf-8") as file: file.write(template.replace("[CSS]", css).replace("[D]", d))
    urls.append(f"https://www.ukgigtax.com/{f}" )

print(f"Generated {len(urls)} pages. Pinging IndexNow...")
data = json.dumps({"host": "www.ukgigtax.com", "key": "824208a268d242c1b2c4c3b9b4c4c3b9", "keyLocation": "https://www.ukgigtax.com/824208a268d242c1b2c4c3b9b4c4c3b9.txt", "urlList": urls} ).encode('utf-8')
req = urllib.request.Request("https://api.indexnow.org/indexnow", data=data, headers={"Content-Type": "application/json", "User-Agent": "Mozilla/5.0"} )
try: print(f"IndexNow Status: {urllib.request.urlopen(req).getcode()}")
except Exception as e: print(f"Ping failed: {e}")
