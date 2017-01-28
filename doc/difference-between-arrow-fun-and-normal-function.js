
/*
The difference between normal function and arrow function is
the 'THIS'.

In normal function if we write like this

*/

function fun () {
  console.log(this);     // This refers to the window object
}


/* But in arrow function */

fun = () => {
  console.log(this);    // undefined
}
