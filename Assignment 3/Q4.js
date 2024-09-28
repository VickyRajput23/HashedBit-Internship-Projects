console.log("Answer for Q4: ");

let text = "This is a string with more than 20 characters";
let vowels = text.match(/[aeiouAEIOU]/g)?.length || 0;
let consonants = text.match(/[^aeiouAEIOU\s\d]/g)?.length || 0;
console.log(`Vowels: ${vowels}, Consonants: ${consonants}`); 
