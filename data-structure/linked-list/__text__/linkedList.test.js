import LinkedList from '../linkedList'
describe('linkedList', () => {
  it('should create empty linked list', () => {
    const linkedList = new LinkedList()
    expect(linkedList.toString()).toBe('')
  })
  it('should append node to linked list', () => {
    const linkedList = new LinkedList()

    expect(linkedList.head).toBeNull()
    expect(linkedList.tail).toBeNull()

    linkedList.append(1).append(2)
    expect(linkedList.toString()).toBe('1,2')
  })
  it('should prepend node to linked list', () => {
    const linkedList = new LinkedList()
    linkedList
      .append('1')
      .append('3')
    expect(linkedList.head.toString()).toBe('1')
    expect(linkedList.tail.toString()).toBe('3')
    linkedList.prepend(2)
    expect(linkedList.head.toString()).toBe('2')
  })
  it('should delete node by value from linked list', () => {
    // 删除一个结点 将前一个结点的next 指向前一个结点的next.next
    const linkedList = new LinkedList()
    expect(linkedList.delete(5)).toBeNull()
    linkedList
      .append(1)
      .append(2)
      .append(3)
      .append(2)
      .append(3)
      .append(4)
      .append(1)
      .append(5)
      .append(6)
    expect(linkedList.head.toString()).toBe('1')
    expect(linkedList.tail.toString()).toBe('6')
    const deleteNode = linkedList.delete(3)
    expect(deleteNode.value).toBe(3)
    expect(linkedList.toString()).toBe('1,2,2,4,1,5,6')
  })
  it('should find node by value', () => {
    const linkedList = new LinkedList()
    expect(linkedList.find({value: 5})).toBeNull()
    linkedList.append(1).append(2).append(3)
    const node = linkedList.find({value: 2})
    expect(node.value).toBe(2)
  })
})
