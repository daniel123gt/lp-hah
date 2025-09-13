import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  const pages = [
    '',
    '/opciones-cuidado',
    '/procedimientos',
    '/medicos-a-domicilio',
    '/pruebas-covid-19',
    '/laboratorios',
    '/radiografias-y-ecografias',
    '/equipos-medicos',
    '/galeria',
    '/blog',
    '/empresas',
    '/nosotros',
    '/preguntas-frecuentes',
  ];

  const blogPosts = [
    '/blog/servicio-enfermeria-domicilio',
    '/blog/tratamiento-endovenoso-domicilio',
    '/blog/terapia-ocupacional-adulto-mayor',
    '/blog/inyectables-domicilio',
  ];

  const equipmentPages = [
    '/equipos-medicos/concentrador-oxigeno',
    '/equipos-medicos/nebulizador-ultrasonico',
    '/equipos-medicos/tensiometro-digital',
    '/equipos-medicos/aspirador-secreciones',
    '/equipos-medicos/bomba-infusion',
    '/equipos-medicos/cama-clinica',
    '/equipos-medicos/colchon-antiescaras',
    '/equipos-medicos/monitor-funciones',
    '/equipos-medicos/silla-ruedas',
    '/equipos-medicos/jeringas-desechables',
    '/equipos-medicos/aguja-huber',
    '/equipos-medicos/cateter-abocath',
    '/equipos-medicos/cateter-intima',
    '/equipos-medicos/llave-tres-vias',
    '/equipos-medicos/jeringa-alimentacion',
    '/equipos-medicos/sonda-urinaria',
    '/equipos-medicos/almohadilla-antiescara',
    '/equipos-medicos/guantes-desechables',
    '/equipos-medicos/gasas-algodon',
    '/equipos-medicos/sonda-alimentacion',
    '/equipos-medicos/epp-medico',
  ];

  const allPages = [...pages, ...blogPosts, ...equipmentPages];
  const baseUrl = site?.toString() || 'https://daniel123gt.github.io';

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages.map(page => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : page.includes('/blog/') || page.includes('/equipos-medicos/') ? '0.8' : '0.9'}</priority>
  </url>`).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
