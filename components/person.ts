const h = require('vhtml')
const html = require('htm').bind(h)

const Person = ({name, age}) => {
  return html`
  <h2 class="font-bold text-3xl sm:text-4xl">My name is ${name}.</h2>
  <p class="mt-4">I am ${age} years old.</p>
  `
}

export default Person
