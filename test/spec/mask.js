import { resolve } from 'path'
import { makeTestSuite } from 'zoroaster'
import cleanStack from '../../src'

const ts = makeTestSuite(resolve(__dirname, '../mask'), {
  getResults(input) {
    const res = cleanStack(input)
    return res
  },
})

export default ts
