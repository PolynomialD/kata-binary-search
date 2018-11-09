const BinarySearch = require('../src/BinarySearch')
const Gen = require('verify-it').Gen

const NUMBER_OF_TESTS = 5
const MIN_NUMBER = 1
const MAX_NUMBER = 500
const MIN_ARRAY_LENGTH = 1
const MAX_ARRAY_LENGTH = 200

const uniqify = (array) => {
  var seen = {}
  return array.filter(function(item) {
      return seen.hasOwnProperty(item) ? false : (seen[item] = true)
  })
}

const genNotInArray = (numberArray, i = 1) => {
  const maxAttempts = 300
  const attempt = Gen.integerBetween(MIN_NUMBER, MAX_NUMBER)()
  if (i > maxAttempts) {
    throw Error('Cannot find number that\'s not in the array')
  } else if (numberArray.includes(attempt)) {
    return genNotInArray(numberArray, ++i)
  } else {
    return attempt
  }
}

const generateArray = () => {
  return Gen.array(Gen.integerBetween(MIN_NUMBER, MAX_NUMBER), Gen.integerBetween(MIN_ARRAY_LENGTH, MAX_ARRAY_LENGTH)())()
}

const generateSortedArrays = () => {
  const emptyArrays = Gen.array(Gen.integer, NUMBER_OF_TESTS)()
  const numberArrays = emptyArrays.map(() => generateArray())
  const sortedArrays = numberArrays.map((test) => test.sort((a, b) => a - b))
  const uniqueArrays = sortedArrays.map((uniqueArray) => uniqify(uniqueArray))
  return uniqueArrays
}

const generateTestsWithValueInArray = () => {
  return generateSortedArrays().map((sortedArray) => {
    const randomIndex = Gen.integerBetween(0, sortedArray.length - 1)()
    const valueAtIndex = sortedArray[randomIndex]
    if (sortedArray.indexOf(valueAtIndex) === randomIndex) {
      return {
        numberToFind: valueAtIndex,
        numbers: sortedArray,
        expectedResult: randomIndex
      }
    }
  })
}

const generateTestsWithValueNotInArray = () => {
  return generateSortedArrays().map((sortedArray) => {
    const value = genNotInArray(sortedArray)
    return {
      numberToFind: value,
      numbers: sortedArray,
      expectedResult: -1
    }
  })
}

describe('BinarySearch', () => {
  const binarySearch = new BinarySearch()

  describe('If the integer is not in the array', () => {
    const tests = generateTestsWithValueNotInArray()
    tests.forEach((test) => {
      verify.it(`should return -1 for ${test.numberToFind} in array of length ${test.numbers.length}`, () => {
        binarySearch.result(test.numberToFind, test.numbers).should.eql(test.expectedResult)
      })
    })
  })

  describe('if the integer is in the array', () => {
    const tests = generateTestsWithValueInArray()
    tests.forEach((test) => {
      verify.it(`should return ${test.expectedResult} for ${test.numberToFind} in array of length ${test.numbers.length}`, () => {
        binarySearch.result(test.numberToFind, test.numbers).should.eql(test.expectedResult)
      })
    })
  })
})
