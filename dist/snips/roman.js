"use strict";

var checkPalindrome = function checkPalindrome(data) {
  return data === data.split("").reverse().join("");
};

console.log(checkPalindrome("aba"));

var a = "krish";

var reverseString = function reverseString(str) {
  console.log(str);
  return str === '' ? '' : reverseString(str.substr(1)) + str.charAt(0);
};

console.log(reverseString("krishcdbry"));

var lookup = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
};

var romanize = function romanize(num) {
  var roman = '';
  var s = '';
  for (var item in lookup) {
    while (num >= lookup[item]) {
      roman += item;
      num -= lookup[item];
    }
  }
  return roman;
};

var findNumber = function findNumber(rom) {
  var res = 0;
  var romArr = rom.split("");
  var romLen = romArr.length;
  for (var i = 0; i < romLen - 1; i++) {
    var num1 = romArr[i] + romArr[i + 1];
    if (lookup.hasOwnProperty(num1)) {
      res += lookup[num1];
      i += 1;
    } else {
      res += lookup[romArr[i]];
      if (i == romLen - 2) {
        res += lookup[romArr[i]];
      }
    }
  }
  return res;
};

console.log(romanize(9042));
console.log(findNumber('MMMMMMMMMXLII'));
