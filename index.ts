import render from './render'
const fs = require('fs')
const path = require('path')

async function main () {
  var pages = fs.readdirSync('./pages/')
  pages.forEach((page: string) => {
    if (!fs.existsSync(path.dirname(page))) {
      fs.mkdirSync(path.dirname)
    }

    render({
      path: path.basename(page, '.ts'),
    })
  })
}

main()
