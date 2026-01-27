import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const pages = [
    '/',
    '/#nosotros',
    '/#catalogo',
    '/#preguntas',
    '/#contacto',
  ];

  const urls = pages.map((page) => `
    <url>
      <loc>https://ginevraperu.com${page}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.9</priority>
    </url>
  `).join('');

  return new Response(`
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls}
    </urlset>
  `, {
    headers: { 'Content-Type': 'application/xml' }
  });
};
