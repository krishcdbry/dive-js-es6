/*

Some important things between == and ===
== will do normal comparison
=== will to type coriecon before it checks the value and also it checks
that if both operands has same refrence object
*/

undefined == undefined     // True
undefined === undefined    // True

undefined == null     // True
undefined === null   // False

0 == true   // False
0 === true // False

1 == true   // True
1 === true  // False

2 == true   // False
2 === true  // False

0 == false  // True
0 === false // False

1 == false  // False
1 === false  // False

2 == false  // False
2 === false  // False

'' == 0   // True
'' === 0

'0' == 0   // True
'0' === 0 // False

'0' == false   // True
'0' === false // False

'' == null   // False
'' === null  // False

'' == undefined   // False
'' === undefined  // False

'\t' == 0   // True
'\t' === 0  // False

'\t\n' == 0  // True
'\t\n' === 0 // False

'' == false    // True
'' === false   // False

NaN == NaN  // False
NaN === NaN  // False


/*
-------------------------------
-------------------------------


[] == []  // False
[] === [] // False

{} == {} // False
{} === {} // False

{1:[1,2]} == {1:[1,2]} // False
{1:[1,2]} == {1:[1,2]} // False

*/

[1,2,3] == [1,2,3]  // False
[1,2,3] === [1,2,3] // False

var a = [1,2,4];
var b = [1,2,4];
var c = a;

a == b   // False (Both refer to different array Object)
a == c   // True  (Same object directly assinged)
a === c  // True


var a = {1 : 1, 2 : 2, 3: 3}
var b = {1 : 1, 2 : 2, 3: 3};
c = a;

a == b  // False (Both refer to different Object)
a == c  // False (Both refer directly  Object)
a === c // True

JSON.stringify(a) == JSON.stringify(b) // True
JSON.stringify(a) === JSON.stringify(b) // True
