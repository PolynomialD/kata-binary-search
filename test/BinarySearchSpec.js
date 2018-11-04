const BinarySearch = require('../src/BinarySearch')

describe('BinarySearch', () => {
  verify.it('should return "-1" if integer is not found', () => {
    const binarySearch = new BinarySearch()
    binarySearch.result(5,[]).should.eql(-1)
  })
  verify.it('should return the correct index of a target integer', () => {
    const binarySearch = new BinarySearch()
    binarySearch.result(5,[1,5,7]).should.eql(1)
  })
  verify.it('should return the correct index of a target integer', () => {
    const binarySearch = new BinarySearch()
    binarySearch.result(9,[1,2,3,4,5,6,7,8,9]).should.eql(8)
  })
  verify.it('should return the correct index of a target integer', () => {
    const binarySearch = new BinarySearch()
    binarySearch.result(3,[1,3,5,7,8,9,10,13,18,21,27,33,54,67]).should.eql(1)
  })
  verify.it('should return the correct index of a target integer', () => {
    const binarySearch = new BinarySearch()
    binarySearch.result(93,[3,9,22,34,42,54,66,70,75,81,85,88,90,91,92,93,97,101]).should.eql(15)
  })
})
