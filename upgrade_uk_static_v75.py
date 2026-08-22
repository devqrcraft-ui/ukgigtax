import os, re
footer = """<footer style="background:#07111F;border-top:4px solid #22c55e;padding:40px 20px;margin-top:60px;font-family:sans-serif;">
    <div style="max-width:1000px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:30px;">
        <div><div style="font-weight:900;font-size:18px;color:#fff;margin-bottom:10px;">UKGIG<span style="color:#22c55e">TAX</span></div></div>
        <div>
            <div style="font-size:11px;font-weight:700;color:#22c55e;text-transform:uppercase;letter-spacing:1px;margin-bottom:12px;">Global Tools ➔</div>
            <a href="https://www.gigwisetax.com" style="display:block;font-size:14px;color:#22c55e;margin-bottom:8px;text-decoration:none;font-weight:700;">GigWiseTax (US ) ➔</a>
            <a href="https://www.compressto20kb.com" style="display:block;font-size:14px;color:#22c55e;margin-bottom:8px;text-decoration:none;font-weight:700;">Image Compressor ➔</a>
        </div>
    </div>
    <div style="text-align:center;padding-top:20px;margin-top:20px;border-top:1px solid rgba(255,255,255,0.1 );font-size:12px;color:rgba(255,255,255,0.5);">
        © 2026 UKGigTax.com ★ ✓ 100% Private ★ ✓ HMRC 2026 Ready
    </div>
</footer>"""
for root, dirs, files in os.walk('.'):
    for file in files:
        if file.endswith('.html'):
            with open(os.path.join(root, file), 'r', encoding='utf-8') as f: c = f.read()
            c = re.sub(r'<title>(.*?)</title>', r'<title>\1 ★ UK Gig Tax 2026</title>', c)
            if '</footer>' not in c: c = c.replace('</body>', footer + '</body>')
            with open(os.path.join(root, file), 'w', encoding='utf-8') as f: f.write(c)
