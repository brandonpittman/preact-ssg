const fs = require('fs')
const h = require('vhtml')
const html = require('htm').bind(h)

const renderPage = async ({path}: {path: string}): Promise<void> => {
  let Component = await import(`./pages/${path}.ts`).then(i => i.default)

  let initialProps = await Component.getInitialProps()

  let renderedHTML = html`<${Component} ...${initialProps}/>`

  let result = `<!DOCTYPE html>
  <html lang="${initialProps.lang ? initialProps.lang : 'en'}">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
    <title>${initialProps.title ? initialProps.title : ''}</title>
  </head>

  <body>
    ${renderedHTML}
  </body>
  </html>
  `

  if (!fs.existsSync('dist')) fs.mkdirSync('dist')
  if (path == 'index') {
    fs.writeFileSync(`dist/${path}.html`, result)
  } else {
    if (!fs.existsSync(`dist/${path}`)) fs.mkdirSync(`dist/${path}`)
    fs.writeFileSync(`dist/${path}/index.html`, result)
  }

}

export default renderPage
