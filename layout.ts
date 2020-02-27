const h = require('vhtml')
const html = require('htm').bind(h)

const Layout = ({children}) => {
  return html`
      <div class="min-h-screen min-w-screen flex flex-col items-center" id="app">
      <nav class="border-b border-gray-400 w-full py-2">
        <ul class="flex justify-center w-full">
          <li>
            <a href="/">Home</a>
          </li>
          <li class="ml-4 inline-block">
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
        <div class="mt-16">
          ${children}
        </div>
      </div>
  `
}

export default Layout
