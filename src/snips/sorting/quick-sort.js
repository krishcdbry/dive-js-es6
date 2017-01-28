/*

Quick sort is generally based on divide and conquor rule and it is consisdered one of the fastest algorithm

O(n2)

Quick sort
Best Case :  O(nlogn)
Average Case : O(nlogn)
Worst case  :  n2

*/

'use strict'


/*
This swaps the elements according to the pivot and returns the pivot index
*/
let partition = (arr, start, end) => {
	let pivot = arr[end];
	let pindex = start;

	for (let i = pindex; i < end; i++) {
		if (arr[i] <= pivot) {
			let temp = arr[i];
			arr[i] = arr[pindex];
			arr[pindex] = temp;
			pindex++;
		}
	}

	let temp = arr[end];
	arr[end] = arr[pindex];
	arr[pindex] = temp;
	return pindex;
}

/*
 Divide the array accordingly with pindex then repetating the quicksort
*/
let QuickSort = (arr, start, end) => {
	 if (start < end) {
 		let pindex = partition(arr, start, end);
		QuickSort(arr, start, pindex-1);
		QuickSort(arr, pindex+1, end);
	}
}

let arr = [1,5,6,3,4,5,8,9,0,55,66,77,-10];
quickSort(arr, 0, arr.length-1);
console.log(arr);
