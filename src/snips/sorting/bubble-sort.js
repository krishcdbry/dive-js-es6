/*

Bubble sort

O(n2)

Bubble sort
Best Case :  n
Average Case : n^{2}
Worst case  :  n^{2}

*/

'use strict'

const BubbleSort = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[i] < arr[j]) {
				let temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}


var arr = [1,4,5,3,4,17,-8,90];
console.log(BubbleSort(arr));
