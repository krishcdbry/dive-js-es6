

let checkPalindrome = (data) => {
    return data === data.split("").reverse().join("")
}

console.log(checkPalindrome("aba"));


var a = "krish";

let reverseString = (str) => {
  console.log(str);
  return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}

console.log(reverseString("krishcdbry"));


const lookup = {
   M:1000
   ,CM:900
   ,D:500
   ,CD:400
   ,C:100
   ,XC:90
   ,L:50
   ,XL:40
   ,X:10
   ,IX:9
   ,V:5
   ,IV:4
   ,I:1
 }


let romanize = (num) => {
  let roman = '';
  let s = '';
  for (let item in lookup) {
    while ( num >= lookup[item] ) {
      roman += item;
      num -= lookup[item];
    }
  }
  return roman;
}

let findNumber = (rom) => {
   let res = 0;
   let romArr = rom.split("");
   let romLen = romArr.length;
   for (let i = 0; i < romLen-1; i++) {
      let num1 = romArr[i]+romArr[i+1]
      if (lookup.hasOwnProperty(num1)) {
        res += lookup[num1];
        i += 1;
      }
      else {
        res += lookup[romArr[i]];
        if (i == romLen-2) {
          res += lookup[romArr[i]];
        }
      }
   }
  return res;
}

console.log(romanize(9042))
console.log(findNumber('MMMMMMMMMXLII'))
