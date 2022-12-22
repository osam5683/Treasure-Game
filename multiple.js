/* Write a Function that prints a Multiples of a 
 given Number until 100
*/

function multiplesOf(numbers) {
    var multiples = numbers[0];
  
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] % multiples == 0) {
        multiples = numbers[i];
      }
    }
  
    return multiples;
  }console.log(multiplesOf(4))
