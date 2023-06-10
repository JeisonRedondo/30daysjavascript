import { LinkedList } from "./SinglyLinkedList.js";
import { Node } from "./Node.js";


export class LinkedListRecharged extends LinkedList {
    constructor() {
        super();
    }
    get(index) {

        if (index < 0 || index >= this.length) {
            return null;
        } else {

            let node = this.head;
            let count = 0;
            while (count < this.length) {
                if (count == index) {
                    return node.value;
                }
                node = node.next;
                count++;
            }
        }
    }

    insertAt(index, value) {
        if (index < 0 || index >= this.length) {
            return null;
        } else {

            let valueNode = new Node(value);
            let node = this.head;
            let count = 0;
            let nextNode = {};

            while (count < this.length) {

                if (count == index - 1) {
                    nextNode = node.next;
                    node.next = valueNode;
                }
                if (count == index) {
                    valueNode.next = nextNode;
                    this.length++;
                    return true;
                }
                node = node.next;
                count++;
            }
        }
    }

    toArray() {
        let linkedListArray = [];
        let node = this.head;
        let count = 0;

        while (count < this.length) {
            linkedListArray.push(node.value);
            node = node.next;
            count++;
        }
        return linkedListArray;
    }

    removeAt(index) {
        
        if (index < 0 || index >= this.length) {
            console.log('index: ',index);
            return null;
        } else {

            let node = this.head;
            let count = 0;
            let nextNode = {};

            while (count < this.length) {

                if (count == index) {
                    const deleteValue = node.value
                    this.delete(deleteValue);
                    return true;
                }
                node = node.next;
                count++;
            }
        }
    }
}

const linkedList = new LinkedListRecharged();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

console.log(linkedList.removeAt(-1))

console.log(linkedList.toArray())
