const h = require('vhtml')
const html = require('htm').bind(h)
import Layout from '../layout'

const HomePage = ({title, message, children}) => {
  return html`
  <${Layout}>
    <h1>${title}</h1>
    <p>Hey, Brandon!</p>
    <p>${message}</p>
    ${children}
  </Layout>
  `
}

HomePage.getInitialProps = async function () {
  return {
    title: 'Home Page',
    message: 'From the props!'
  }
}

export default HomePage
