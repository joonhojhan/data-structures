class MaxBinaryHeap {
	constructor() {
		this.values = [];
	}

	getValues() {
		console.log(this.values);
		return this.values;
	}

	insert(value) {
		// push value to insert into values array, this will put the value in the last position in the heap
		this.values.push(value);
		// initialize index to be the last position in the array
		let childIdx = this.values.length - 1;
		let child = this.values[childIdx];
		// loop until the index reaches the top of the heap
		while (childIdx) {
			// initialize parent index to be the floor of (index - 1 / 2)
			let parentIdx = Math.floor((childIdx - 1) / 2);
			let parent = this.values[parentIdx];
			// break out of loop if the parent value is greater than or equal to the child value
			if (child <= parent) break;
			//swap the parent value and the child value
			this.values[parentIdx] = child;
			this.values[childIdx] = parent;
			childIdx = parentIdx;
		}
	}

	popMax() {
		// grab the the first element in the heap
		let popped = this.values[0];
		// swap the first and the last element in theheap
		this.values[0] = this.values[this.values.length - 1];
		this.values[this.values.length - 1] = popped;
		// heapify down
		this.heapify();
		// pop off the last element which should be the top element that was swapped
		this.values.pop();
		return popped;
	}

	// swaps elements in an array given their indexes
	swap(idx1, idx2) {
		let temp = this.values[idx1];
		this.values[idx1] = this.values[idx2];
		this.values[idx2] = temp;
	}

	// heapify down
	heapify() {
		// initialize index to top of heap
		let index = 0;
		// initialize left and right to indexes children using 2 * index + 1 and 2 * index + 2
		let left = index * 2 + 1;
		let right = index * 2 + 2;
		// loop until the value at index pointer is greater than both its children
		while (
			this.values[index] < this.values[left] &&
			this.values[index] < this.values[right]
		) {
			// if children are both greater than the value at index pointer swap witht he greater of the two children
			if (
				this.values[right] > this.values[index] &&
				this.values[left] > this.values[index]
			) {
				let bigger = this.values[right] > this.values[left] ? right : left;
				this.swap(bigger, index);
				index = bigger;
				left = index * 2 + 1;
				right = index * 2 + 2;
				// swap with right element if right element is greater
			} else if (this.values[right] > this.values[index]) {
				this.swap(right, index);
				// reassign index to the swappeed position and left and right to its children
				index = right;
				left = index * 2 + 1;
				right = index * 2 + 2;
				// swap with left element if left element is greater
			} else if (this.values[left] > this.values[index]) {
				this.swap(left, index);
				// reassign index to the swappeed position and left and right to its children
				index = left;
				left = index * 2 + 1;
				right = index * 2 + 2;
			}
		}
	}
}
let binaryHeap = new MaxBinaryHeap();
binaryHeap.insert(41);
binaryHeap.insert(39);
binaryHeap.insert(33);
binaryHeap.insert(18);
binaryHeap.insert(27);
binaryHeap.insert(12);
binaryHeap.insert(55);
console.log(binaryHeap.popMax());
console.log(binaryHeap.popMax());
console.log(binaryHeap.popMax());

// binaryHeap.getValues();
