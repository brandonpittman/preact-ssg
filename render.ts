const fs = require('fs')
const h = require('vhtml')
const html = require('htm').bind(h)

const renderPage = async (
  {
    path,
    title,
    content
  }: {path: string, title?: string, content?: string}
): Promise<void> => {

  let Component = await import(`./pages/${path}.ts`).then(i => i.default)

  let result = html`
  <html>
    <head>
      <title>${title}</title>
    </head>
    <body>
      <${Component}/>
    </body>
  </html>
  `

  fs.writeFileSync(`dist/${path}.html`, result)
}

export default renderPage
