const clone = require('clone')
const config = require('./config')

let db = {}

const defaultData = {
  categories: [
      {
        name: 'react',
        path: 'react',
        logo: 'https://ensocore.com/media/61/reactjs-logo-sticker%20%281%29.jpg'
      },
      {
        name: 'redux',
        path: 'redux',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png'
      },
      {
        name: 'udacity',
        path: 'udacity',
        logo: 'https://d20vrrgs8k4bvw.cloudfront.net/images/open-graph/udacity.png'
      }
  ]
}

function getData (token) {
  //Each token has it's own copy of the DB. The token in this case is like an app id.
  let data = db[token]
  //This populates the default user data if there isn't any in the db.
  if (data == null) {
    data = db[token] = clone(defaultData)
  }
  return data
}

function getAll (token) {
  return new Promise((res) => {
    res(getData(token))
  })
}

module.exports = {
  getAll
}
