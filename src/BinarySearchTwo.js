class BinarySearchTwo {

 index (array) {
      return Math.floor(array.length/2)
  }

  split (target, array) {
    let index = this.index(array)
    if (array[index] < target) {
      console.log('top slice:', array.slice(index))
      return array.slice(index)
    }
    else {
      console.log('bottom slice:', array.slice(index))
      return array.slice(0, index)
    }
  }

  result (target,array) {
    let index = this.index(array)
    if (target === array[index]) return index
    if (array.length == 1 || array == []) return -1
    else return this.result(target,this.split(target,array))
  }
}

module.exports = BinarySearchTwo