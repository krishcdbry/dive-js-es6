
/*

	Arrange items in a array so that on Join they should be the maximum number compared to
   other items sum

*/

function arrangeBigge(arr) {
	var newAr
	newArr = arr.sort().map(String).reverse();

	for (var i = 0; i < newArr.length-1; i++) {
		if (newArr[i][0] == newArr[i+1][0]) {
			var leftSum = newArr[i]+newArr[i+1];
			var rightSum = newArr[i+1]+newArr[i];
			if (leftSum < rightSum) {
				var temp = newArr[i];
				newArr[i] = newArr[i+1];
				newArr[i+1] = temp;
			}
		}
	}
	return newArr;
}


var arr = [54, 546, 548, 60];
var brr = [1, 10, 5, 60, 78, 9, 89, 8]
console.log(arrangeBigge(brr));



/*
Fib Recursive without storage of every element
*/

function fib (n) {
	if (n <= 2) {
		return 1;
	}
	else {
		return fib(n-1)+fib(n-2);
	}
}

console.log(fib(10));



/*
Fib Recursive with storage of every element
*/
var stack = {};
function fibPrint(n){
  if (n>1)
    return stack[n] || ( stack[n] = fibPrint(n-1)+fibPrint(n-2) );
  return n;
}

console.log(fibPrint(10));
console.log(stack);
