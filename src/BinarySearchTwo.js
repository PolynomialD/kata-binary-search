class BinarySearchTwo {

  find (target,array,index,movement) {
    if (target === array[index]) return index
    if (array.length <= 1) return -1
    if (target > array[index]) {
      movement = Math.floor(movement/2)
      index += movement 
      return this.find(target,array,index,movement)
    }
    if (target < array[index]) {
      movement = Math.floor(movement/2)
      index -= movement 
      return this.find(target,array,index,movement)
    }
  }

  result (target,array) {
    let index = Math.floor(array.length/2)
    let movement = Math.floor(array.length/2)
    return this.find(target,array,index,movement)
  }
}

module.exports = BinarySearchTwo