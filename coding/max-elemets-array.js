function maxSum (arr) {
	var sortedArr = arr.sort((a,b) => a>b);
	var sum = sortedArr.reduce((a,b) => a+b);

	for (var i = 0; i < sortedArr.length; i++) {
		var newSum = sum-sortedArr[i];
		if (sum < newSum) {
			sum = newSum;
		}
		else {
			break;
		}
	}

	return sum;
}

/*
Given a array with +ve and -ve integer , find the maximum sum and skip as many
as you want
*/
function maxSumUnsorted (arr) {
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			sum += arr[i];
		}
	}
	return sum;
}


/*
Given a array with +ve and -ve integer , find the maximum sum and skip any two least elements
*/
function maxSumUnsorted_any2 (arr) {
	var sum = 0;
	var least1 = 0;
	var least2 = 0;

	for (var i = 0; i < arr.length; i++) {
		sum += arr[i];
		var least = Math.max(least1, least2);
		if (arr[i] < least1 && least1 == least) {
			least1 = arr[i];
		}
		if (arr[i] < least2 && least2 == least) {
			least2 = arr[i];
		}
	}
	return sum-least1-least2;
}

/*
Given a array with +ve and -ve integer , find the maximum sum such that
you are not allowed to skip 2 contiguous elements
 ( i.e you have to select at least one of them to move forward).
*/

function maxSumUnsorted_twist (arr) {
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		if (sum < sum+arr[i]) {
			sum = sum+arr[i]
		}
		else {
			sum += Math.max(arr[i], arr[i+1]);
			i++;
			if (i == arr.length-2) {
				break;
			}
		}
	}
	return sum;
}

var arr = [10 , 20 , 30, -10 , -50 , 40 , -50, -1, -3];
console.log(maxSum(arr));
console.log(maxSumUnsorted(arr));
console.log(maxSumUnsorted_twist(arr));
console.log(maxSumUnsorted_any2(arr));
