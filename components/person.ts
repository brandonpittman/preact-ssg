import {render, Component, html} from 'htm/preact'

interface PersonProps {
  name: string;
  age: string;
}

class Person extends Component<PersonProps> {
  render ({name, age}) {
    return html`
  <h2 class="font-bold text-3xl sm:text-4xl">My name is ${name}.</h2>
  <p class="mt-4">I am ${age} years old.</p>
  `
  }
}

export default Person
