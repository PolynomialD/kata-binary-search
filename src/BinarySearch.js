class BinarySearch {
  result (target, array) {
    let startPos = Math.floor(array.length/2)
    let movement = Math.floor(startPos/2)
    let newStartPos = startPos + movement
    
    for (let i=0; i < Math.log2(array.length); i++) {
      if (array[startPos] < target) {
        newStartPos = Math.floor(startPos + movement)
      }
      if (array[startPos] > target) {
        newStartPos = Math.floor(startPos - movement)
      }
      movement = Math.abs(Math.floor((startPos - newStartPos)/2))
      startPos = newStartPos
      if (array[startPos] === target) return startPos
    }
    return -1
  }
}
module.exports = BinarySearch
