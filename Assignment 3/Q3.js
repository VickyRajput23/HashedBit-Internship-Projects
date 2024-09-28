console.log("Answer for Q3: ");

let stringArr = ['I', 'N', 'D', 'I', 'A'];
stringArr.splice(4, 1, 'O', 'N', 'E', 'S', 'I', 'A');
let result = stringArr.join('');
console.log(result); // Output: 'INDONESIA'
