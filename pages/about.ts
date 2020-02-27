const h = require('vhtml')
const html = require('htm').bind(h)
import Layout from '../layout'
import Person from '../components/person'

const AboutPage = ({message}) => {
  return html`
  <${Layout}>
    <${Person} name="Brandon" age="36"></Person>
    <p class="mt-4">${message}</p>
  </Layout>
  `
}

AboutPage.getInitialProps = async function () {
  return {
    title: 'About Us',
    message: 'Learn about me!'
  }
}

export default AboutPage
