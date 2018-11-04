class BinarySearch {
  result (target, array) {
    let startPos = Math.floor(array.length/2)
    for (let i=0; i < array.length; i++) {
      if (array[startPos] < target) {
        startPos = Math.floor(startPos + ((array.length - startPos)/2))
        console.log(startPos)
      }
      if (array[startPos] > target) {
        startPos = Math.floor(startPos/2)
        console.log(startPos)
      }
      console.log(startPos)
      if (array[startPos] === target) var index = startPos
    }
    if (index) {
      return index
    } else {
        return -1
      }
  }
}
      module.exports = BinarySearch
