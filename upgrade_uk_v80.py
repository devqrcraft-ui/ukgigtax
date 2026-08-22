import os
css = "<style>.btn-3d-green{position:relative;display:inline-flex;align-items:center;padding:12px 24px;background:linear-gradient(180deg,#22c55e 0%,#16a34a 100%);color:#fff!important;font-weight:800;border-radius:8px;border:1px solid #4ade80;box-shadow:0 4px 0 #14532d,0 8px 15px rgba(0,0,0,0.4);transition:all .1s;cursor:pointer;text-transform:uppercase}.btn-3d-green:hover{transform:translateY(-3px);box-shadow:0 7px 0 #14532d,0 12px 20px rgba(34,197,94,0.4)}.btn-3d-green:active{transform:translateY(2px);box-shadow:0 2px 0 #14532d}</style>"
districts = ["Croydon","Hackney","Wimbledon","Greenwich","Stratford","Brixton","Camden","Islington","Ealing","Harrow","Hammersmith","Fulham","Chelsea","Kensington","Westminster","City-of-London","Southwark","Lambeth","Wandsworth","Richmond","Kingston","Merton","Sutton","Bromley","Lewisham","Bexley","Havering","Barking","Redbridge","Newham","Waltham-Forest","Haringey","Enfield","Barnet","Brent","Hillingdon","Hounslow"]
template = '<!DOCTYPE html><html><head>{css}<title>{d} Tax 2026 ★ ✓</title></head><body style="background:#07111F;color:#fff;padding:60px"><h1>★ {d} Tax Guide 2026</h1><a href="/" class="btn-3d-green">Calculate UK Tax ➔</a></body></html>'
for d in districts:
    f = f"{d.lower().replace(' ','-')}-tax-guide-2026.html"
    with open(f, "w", encoding="utf-8") as file: file.write(template.format(css=css, d=d))
