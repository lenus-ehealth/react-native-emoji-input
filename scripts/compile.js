import _ from 'lodash'
import fs from 'fs'

import {
  category,
  categoryIndexMap,
  emojiLib,
  emojiArray,
} from '../src/emoji-data'

let data = {
  category,
  categoryIndexMap,
  emojiLib,
}

var stingified = JSON.stringify(
  data
).replace(/(["'])require(?:(?=(\\?))\2.)*?\1/g, (value) =>
  value.replace(/"/g, '')
)

fs.writeFile(
  'src/emoji-data/compiled.js',
  `module.exports = ${stingified}`,
  (err) => {
    if (err) throw err
  }
)

let dataSearch = {
  emojiArray,
}

var stingified = JSON.stringify(
  dataSearch
).replace(/(["'])require(?:(?=(\\?))\2.)*?\1/g, (value) =>
  value.replace(/"/g, '')
)

fs.writeFile(
  'src/emoji-data/compiledSearch.js',
  `module.exports = ${stingified}`,
  (err) => {
    if (err) throw err
  }
)
