export async function GET() {
  const pages = [
    "",
    "nosotros",
    "galeria",
    "preguntas",
    "contacto"
  ];

  const urls = pages
    .map(
      (page) => `
  <url>
    <loc>https://ginevraperu.com/${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page === "" ? "1.0" : "0.8"}</priority>
  </url>`
    )
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(sitemap.trim(), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
