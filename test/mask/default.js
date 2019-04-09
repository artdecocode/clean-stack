import makeTestSuite from '@zoroaster/mask'
import cleanStack from '../../src'

export default makeTestSuite('test/result', {
  getResults(input) {
    return cleanStack(input, this.config)
  },
  jsonProps: ['config'],
})