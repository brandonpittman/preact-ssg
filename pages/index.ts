const h = require('vhtml')
const html = require('htm').bind(h)

const HomePage = ({children}: {children: any}) => {
  return html`
  <h1>
    Home Header
  </h1>

  <p>Hey, Brandon!</p>

  ${children}
  `
}

export default HomePage
