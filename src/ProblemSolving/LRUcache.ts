/**
LRU - Least Recently Used
LRU caches are often used to implement caches which you do not want to grow indefinitely.
The cache has a max size, and when a new key is inserted that would make it grow larger
than the max size, the key which has not been accessed for the longest time is removed to make space.

cache = new LruCache (2) // capacity = 2

cache.put(1, "1") cache.put(2, "2") cache.get(1) // returns "1" cache.put(3, "3") was retrieved // evicts key 2, because the key 1 was retrieved cache.get(2) evicted // returns null, because 2 was just evicted cache.put(4, "4") // evicts key 1, cache.get(1) // returns null because, it was evicted earlier cache.get(3) // returns "3" cache.get(4) // returns "4"

*/

class ListNode {
  key: number| undefined;
  value: number| undefined;
  prev: ListNode| undefined;
  next: ListNode | undefined;
  constructor(key?: number, value?:number) {
    this.key = key;
    this.value = value;
  }
}

class LRUCache{
  head: ListNode;
  tail: ListNode;
  capacity: number;
  cache: Map<number, ListNode>;

  constructor(capacity: number) {
    this.head = new ListNode();
    this.tail = new ListNode();
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.capacity = capacity;
    this.cache = new Map<number, ListNode>();
  }

  get(key: number) {
    if (!this.cache.has(key)) return -1;
    const node = this.cache.get(key)!;
    this.removeNode(node);
    this.addToHead(node);

    return node.value;
  }

  put(key: number, value: number) {
    
    /** new key */
    if (!this.cache.has(key)) {
      const node = new ListNode(key, value);
      this.addToHead(node);
      this.cache.set(key, node);

      if (this.cache.size > this.capacity) {
        const removedNode = this.removeFromTail()!;
        this.cache.delete(removedNode.key!);
      }
    }

    /** same key with updated value */
    if (this.cache.has(key)) {
      const node = this.cache.get(key)!;
      node.value = value;
      this.moveToHead(node);
    }

    return this.cache;
  }


  addToHead(node: ListNode) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next!.prev = node;
    this.head.next = node;
  }

  moveToHead(node: ListNode) {
    this.removeNode(node);
    this.addToHead(node);
  }

  removeNode(node: ListNode) {
    node.next!.prev = node.prev;
    node.prev!.next = node.next;
  }

  removeFromTail() {
    const tailNode = this.tail.prev;
    this.removeNode(tailNode!);
    return tailNode;
  } 

}

const lRUCache = new LRUCache(2);
console.log(lRUCache.put(1, 1));// cache is {1=1}
console.log(lRUCache.put(2, 2));// cache is {1=1, 2=2}
console.log(lRUCache.get(1));   // return 1
console.log(lRUCache.put(3, 3));// LRU key was 2, evicts key 2, cache is {1=1, 3=3}
console.log(lRUCache.get(2));   // returns -1 (not found)
console.log(lRUCache.put(4, 4)); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
console.log(lRUCache.get(1));   // return -1 (not found)
console.log(lRUCache.get(3));   // return 3
console.log(lRUCache.get(4));   // return 4

