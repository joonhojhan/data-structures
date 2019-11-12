class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.next = null;
	}
}

class PriorityQueue {
	constructor() {
		this.first = null;
	}

	insert(data, priority) {
		const newItem = new Node(data, priority);
		if (!this.first || this.first.priority < priority) {
			newItem.next = this.first;
			this.first = newItem;
		} else {
			let currNode = this.first;
			while (currNode.next || currNode.next.priority >= priority) {
				currNode = currNode.next;
			}
			newItem.next = currNode.next;
			currNode.next = newItem;
		}
	}

	peek() {
		return this.first.data;
	}

	popMax() {
		const max = this.first;
		this.first = this.first.next;
		return max.data;
	}
}
