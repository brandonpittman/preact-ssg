const h = require('vhtml')
const html = require('htm').bind(h)

const Layout = ({children}) => {
  return html`
      <div class="min-h-screen min-w-screen flex flex-col items-center" id="app">
        <div class="mt-16">
          ${children}
        </div>
      </div>
  `
}

export default Layout
