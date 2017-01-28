/*

Merge sort is a sorting technique based on divide and merge technique

O(n2)

Merge sort
Best Case :  O(nlogn)
Average Case : O(nlogn)
Worst case  :  O(nlogn)

Only problem with merge sort is the space complexity O(n) it takes extra memory

*/

'use strict'

/*
Compare operation for two arrays

1. Pushing the least number into stack

*/
const compare = (a, b) => {
	let arr = [];
	let len = a.length+b.length;
	while(arr.length < len) {
		if (a.length == 0) {
			arr.push(b.shift());
		}
		else if (b.length == 0) {
			arr.push(a.shift());
		}
		else {
			if (a[0] < b[0]) {
				arr.push(a.shift());
			}
			else {
				arr.push(b.shift());
			}
		}
	}
	return arr;
}


/*
Compare operation for two arrays

Merge sort slicing the array repeatedly and comparing them

*/
const MergeSort = (arr) => {
	var len = arr.length;
	var middle = parseInt(len/2);

	if(len < 2) {
		return arr;
	}

	var left = arr.slice(0, middle);
	var right = arr.slice(middle, len);
    return compare(MergeSort(left), MergeSort(right));
}


var arr = [1,4,5,3,4,17,-8,90];
console.log(MergeSort(arr));
