/*
Triplet is finding 3 numbners which can make a sum - given in the input
*/

let findTriplet = (arr, sum) => {
  let sA = arr.sort((a,b) => {
    return a > b;
  })
  let n = sA.length;
  for (let i = 0; i < n; i++) {
    let left = i+1;
    let right = n-1;

    while(left < right) {
      let res = sA[i]+sA[left]+sA[right];
      if (res == sum) {
        return sA[i]+","+sA[left]+","+sA[right];
      }
      else if (res < sum) {
        left++;
      }
      else {
        right--;
      }
    }
  }
  return 'Not found';
}

/*
Triplet is finding 2 numbers which can make a sum - given in the input
*/

function findDouplelet(arr, sum) {
  let sA = arr.sort((a,b) => {
    return a > b;
  })

  let len = sA.length;
  for (let i = 0; i < len-1; i++) {
    if (sA[i]+sA[i+1] == sum) {
      return sA[i]+","+sA[i+1];
    }
  }
  return "Not found";
}

console.log(findTriplet([1,7,9,5,6], 17));
console.log(findDouplelet([1,7,9,5,6], 17));
