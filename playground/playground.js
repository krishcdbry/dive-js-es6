
/*
Merge sort 

0(nlogn)
*/


'use strict'


const combine = (a, b) => {
	let len = a.length+b.length;
	let finalArray = [];
	
	while (finalArray.length < len) {
		if (a.length == 0) {
			finalArray.push(b.shift());
		}
		else if (b.length == 0) {
			finalArray.push(a.shift());
		}
		else {
			if (a[0] < b[0]) {
				finalArray.push(a.shift());
			}
			else {
				finalArray.push(b.shift());
			}
		}
	}
	
	return finalArray;
}

const mergeSort = (arr) => {
	let len = arr.length;
	
	if (len < 2) {
		return arr;
	}
	
	let middle = Math.floor(len/2);
	let left = arr.slice(0, middle);
	let right = arr.slice(middle, len);
	
	return combine(mergeSort(left), mergeSort(right));
	
}


const partition = (arr, left, right) => {
	let pivot = arr[right];
	let pindex = left
	
	for (let i = left; i < right; i++) {
		if (arr[i] < pivot) {
			let temp = arr[i]
			arr[i] = arr[pindex];
			arr[pindex] = temp;
			pindex++;
		}
	}
	
	let temp = pivot
	arr[right] = arr[pindex];
	arr[pindex] = temp;

	return pindex;
}


const quickSort = (arr, left, right) => {
	
	if (left < right) {
		let pindex = partition(arr, left, right);
		quickSort(arr, left, pindex-1);
		quickSort(arr, pindex+1, right);
	}
} 


let arr = [1,5,6,3,4,5,8,9,0,55,66,77,-10];
console.log(mergeSort(arr));
quickSort(arr, 0, arr.length-1);
console.log(arr);

