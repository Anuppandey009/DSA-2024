/* Reverse a Link List*/

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    append(data) {
        let newNode = new Node(data)
        if (this.head == null) {
            this.head = newNode
            return
        }
        let current = this.head
        while (current && current.next != null) {
            current = current.next
        }
        current.next = newNode
    }

    reverse() {
        let prev = null
        let current = this.head
        while (current != null && current.next != null) {
            let temp = current.next
            current.next = prev
            prev = current
            current = temp
        }
        return prev
    }

}

let list = new LinkedList()
list.append(2)
list.append(3)
list.append(7)
list.append(4)
console.log(JSON.stringify(list.reverse()))
