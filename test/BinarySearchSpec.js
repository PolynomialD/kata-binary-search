const BinarySearch = require('../src/BinarySearch')

describe('BinarySearch', () => {
  verify.it('should return "-1" if integer is not found', () => {
    const binarySearch = new BinarySearch()
    binarySearch.result(5,[]).should.eql(-1)
  })
})
