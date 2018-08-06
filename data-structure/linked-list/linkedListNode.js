// 链表结点  
// 对飙数组 内存分配给我们一定数量的空间（连续的）  数据连续存储 灵活性不够 
// 链表解决的是存储空间的连续性 提供数据存储的灵活性 指针  

export default class linkedListNode {
  // linked list
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`
  }
}
