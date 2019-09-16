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