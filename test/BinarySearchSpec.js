const BinarySearch = require('../src/BinarySearch')
const Gen = require('verify-it').Gen

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
    binarySearch.result(7,[1,3,5,7,8,9,10,13,18,21,27,33,54,67]).should.eql(3)
  })
  verify.it('should return the correct index of a target integer', () => {
    const binarySearch = new BinarySearch()
    binarySearch.result(93,[3,9,22,34,42,54,66,70,75,81,85,88,90,91,92,93,97,101]).should.eql(15)
  })
  verify.it('should return the correct index of a random target integer', Gen.integerBetween(1,100), (number) => {
    const binarySearch = new BinarySearch()
    var array = []
    for (var i = 1; i <= number; i++) {array.push(i)}
    let randomN = Math.random() * 100
    let index = array.indexOf(randomN)
    binarySearch.result(randomN,array).should.eql(index)
  })
  
})
