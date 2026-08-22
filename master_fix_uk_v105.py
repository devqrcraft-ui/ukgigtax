import os, re
for root, dirs, files in os.walk('.'):
    for file in files:
        if file.endswith('.html'):
            p = os.path.join(root, file)
            with open(p, 'r', encoding='utf-8') as f: c = f.read()
            # Fix links, add 3D UI, add Footer
            c = re.sub(r'href="/([^".]+)"', r'href="/\1.html"', c)
            if 'Professional Tax Network' not in c:
                c = c.replace('</body>', '<footer style="background:#060E28;padding:40px;color:#fff;border-top:3px solid #C9A84C;text-align:center">★ UKGigTax Network ★  
<a href="https://www.gigwisetax.com" style="color:#FFD700">GigWiseTax ➔</a></footer></body>' )
            with open(p, 'w', encoding='utf-8') as f: f.write(c)
