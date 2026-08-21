import os
import re

def fix_html(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Google Fonts: змінюємо display=optional на display=swap для миттєвого відображення тексту
    content = content.replace('display=optional', 'display=swap')
    
    # 2. Оптимізація GTM: прибираємо його з head і ставимо в самий кінець body
    # Видаляємо старий блок GTM
    gtm_pattern = r'<script>\s*window\.addEventListener\(\'load\',function\(\)\{.*?gtag\(\'config\',\'G-8TRDK9LTCG\'\);\s*\}\);\s*</script>'
    content = re.sub(gtm_pattern, '', content, flags=re.DOTALL)
    
    # Новий блок GTM (більш легкий та асинхронний)
    new_gtm = """
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-8TRDK9LTCG"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag( ){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-8TRDK9LTCG', { 'anonymize_ip': true });
  </script>
"""
    if '</body>' in content and 'G-8TRDK9LTCG' not in content:
        content = content.replace('</body>', new_gtm + '</body>')

    # 3. Виправляємо "Forced Reflow" (Примусове перекомпонування)
    # Замінюємо void rc.offsetWidth на requestAnimationFrame для плавності
    content = content.replace("rc.classList.remove('show');void rc.offsetWidth;rc.classList.add('show');",
                              "rc.classList.remove('show'); requestAnimationFrame(() => { rc.classList.add('show'); });")

    # 4. Оптимізація LCP (найбільший елемент)
    if '<h1' in content and 'fetchpriority' not in content:
        content = content.replace('<h1', '<h1 fetchpriority="high"')

    # 5. Accessibility: виправляємо контрастність для другорядного тексту
    content = content.replace('--txt3:#7a9ab8;', '--txt3:#9ab8d4;') 

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Optimized: {filepath}")

for root, dirs, files in os.walk('.'):
    for file in files:
        if file.endswith('.html'):
            fix_html(os.path.join(root, file))
