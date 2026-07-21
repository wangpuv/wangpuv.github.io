import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { render } from '../dist-ssr/entry-server.js'
import { seoFor, staticRoutes } from '../src/data/seo.js'

const dist = resolve('dist')
const template = await readFile(resolve(dist, 'index.html'), 'utf8')

function escapeHtml(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
}

function headMarkup(page, lang, seo) {
  const person = { '@context': 'https://schema.org', '@type': 'Person', name: lang === 'zh' ? '王普' : 'Wang Pu', url: `${seo.origin}/${lang}/`, email: 'mailto:wangpuv@hotmail.com', sameAs: ['https://github.com/wangpuv'], jobTitle: lang === 'zh' ? '资深后端与 AI Agent 应用工程师' : 'Senior Backend & AI Agent Application Engineer', address: { '@type': 'PostalAddress', addressLocality: 'Hangzhou', addressCountry: 'CN' } }
  const website = { '@context': 'https://schema.org', '@type': 'WebSite', name: lang === 'zh' ? '王普的个人网站' : 'Wang Pu Portfolio', url: `${seo.origin}/${lang}/`, inLanguage: lang === 'zh' ? 'zh-CN' : 'en' }
  const schemas = [person, website]
  if (page === 'littleSteps') schemas.push({ '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: lang === 'zh' ? '小步学习伙伴' : 'Little Step Learning Partner', applicationCategory: 'EducationalApplication', operatingSystem: 'Web', description: seo.description, author: { '@type': 'Person', name: lang === 'zh' ? '王普' : 'Wang Pu' } })
  return `
    <link rel="canonical" href="${seo.canonical}" />
    <link rel="alternate" hreflang="${lang === 'zh' ? 'en' : 'zh-CN'}" href="${seo.alternate}" />
    <link rel="alternate" hreflang="${lang === 'zh' ? 'zh-CN' : 'en'}" href="${seo.canonical}" />
    <link rel="alternate" hreflang="x-default" href="${seo.origin}/zh/" />
    <meta property="og:type" content="${page === 'littleSteps' ? 'article' : 'website'}" />
    <meta property="og:title" content="${escapeHtml(seo.title)}" />
    <meta property="og:description" content="${escapeHtml(seo.description)}" />
    <meta property="og:url" content="${seo.canonical}" />
    <meta property="og:locale" content="${lang === 'zh' ? 'zh_CN' : 'en_US'}" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="${escapeHtml(seo.title)}" />
    <meta name="twitter:description" content="${escapeHtml(seo.description)}" />
    <script type="application/ld+json">${JSON.stringify(schemas).replaceAll('<', '\\u003c')}</script>`
}

async function emit(page, lang, suffix, outputPath) {
  const seo = seoFor(page, lang, suffix)
  const html = render(seo.path, lang)
  const output = template
    .replace(/<html lang="[^"]+">/, `<html lang="${lang === 'zh' ? 'zh-CN' : 'en'}">`)
    .replace(/<title>.*?<\/title>/, `<title>${escapeHtml(seo.title)}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${escapeHtml(seo.description)}" />`)
    .replace('<!--app-head-->', headMarkup(page, lang, seo))
    .replace('<!--app-html-->', html)
  await mkdir(dirname(outputPath), { recursive: true })
  await writeFile(outputPath, output)
}

for (const lang of ['zh', 'en']) {
  for (const [page, suffix] of staticRoutes) {
    await emit(page, lang, suffix, resolve(dist, lang, suffix, 'index.html'))
  }
}

await emit('home', 'zh', '', resolve(dist, 'index.html'))
const notFound = template.replace('<!--app-head-->', '<meta name="robots" content="noindex" />').replace('<!--app-html-->', '')
await writeFile(resolve(dist, '404.html'), notFound)
