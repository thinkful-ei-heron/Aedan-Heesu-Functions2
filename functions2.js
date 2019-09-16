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

function decode(str) {
  let subArray = str.split(' ');
  let word = '';
  for (let i = 0; i < subArray.length; i++){
    let first = subArray[i].charAt(0);
    if (first === 'a') word += subArray[i].charAt(1);
    else if (first === 'b') word += subArray[i].charAt(2);
    else if (first === 'c') word += subArray[i].charAt(3);
    else if (first === 'd') word += subArray[i].charAt(4);
    else word += ' ';
  }
  return word;
}

console.log(decode('craft block argon meter bells brown croon droop'));

