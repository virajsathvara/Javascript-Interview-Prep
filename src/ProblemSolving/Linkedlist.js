class Node {
  constructor(value) {
    this.next = null
    this.value = value
  }
}

class Linkedlist {
  constructor() {
    this.head = null
  }
}

Linkedlist.prototype.insertAtBeginning = function (val) {
  const node = new Node(val)
  node.next = this.head
  this.head = node

  return this.head
}

Linkedlist.prototype.insertAtEnd = function (val) {
  const node = new Node(val)

  if (!this.head) {
    this.head = node
    return this.head
  }

  let tail = this.head
  while (tail.next !== null) {
    tail = tail.next
  }

  tail.next = node
  return this.head
}

Linkedlist.prototype.getAt = function (index) {
  let node = this.head

  for (let i = 0; i <= index; i++) {
    if (i === index) {
      return node
    }
    node = node.next
  }

  return null
}

Linkedlist.prototype.insertAt = function (index, val) {
  const node = new Node(val)

  if (!this.head) {
    this.head = node
    return this.head
  }

  if (index === 0) {
    node.next = this.head
    this.head = node

    return this.head
  }

  const prev_node = this.getAt(index - 1)
  node.next = prev_node.next
  prev_node.next = node

  return this.head
}

Linkedlist.prototype.printList = function () {
  let node = this.head
  while (node.next !== null) {
    console.log(`value: ${node.value} next: ${node.next.value}`)
    node = node.next
  }
  console.log(`value: ${node.value} next: null`)
}

const myLL = new Linkedlist()

myLL.insertAt(1, "first")
myLL.insertAtEnd("second")
myLL.insertAtBeginning("zero")
myLL.printList()

