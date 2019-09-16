'use strict';
function jediName(firstName, lastName) {
  let jedi = '';
  for (let i = 0; i< 3; i++) {
    jedi += lastName.charAt(i);
  }
  for (let i = 0; i< 2; i++) {
    jedi += firstName.charAt(i);
  }
  return jedi;
}
let name = jediName('Aedan', 'Warfield');
console.log(name);

function beyond(num) {
  if(num === Infinity) {
    console.log("And beyond");
  }
  else if(num > 0) {
    console.log("To infinity");
  }
  else if(num < 0) {
    console.log("To negative infinity");
  }
  else if (num === 0) {
    console.log("Staying home");
  }
}



beyond (3);
beyond (0);
beyond (-5);
beyond (Infinity);
