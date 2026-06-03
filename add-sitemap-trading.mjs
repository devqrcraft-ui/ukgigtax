import { readFileSync, writeFileSync } from 'fs';

const path = 'C:/Users/RUSLAN/Desktop/ukgigtax/sitemap.xml';
let xml = readFileSync(path, 'utf8');

const newUrl = `<url><loc>https://www.ukgigtax.com/blog/trading-allowance-gig-workers-2026</loc><lastmod>2026-06-03</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>`;

xml = xml.replace('</urlset>', newUrl + '\n</urlset>');
writeFileSync(path, xml, 'utf8');

const count = (xml.match(/<loc>/g) || []).length;
console.log('OK: sitemap updated. Total URLs:', count);
