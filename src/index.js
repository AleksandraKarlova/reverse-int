module.exports = function reverse (n) {
  
  let arrNumber = n.toString().split('');

  let arrNewNumber = arrNumber.reverse();

  if (arrNewNumber.at(-1) === '-') {
    arrNewNumber.pop();
  }

  return Number(arrNewNumber.join(''));
}
