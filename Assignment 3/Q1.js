console.log("Answer for Q1: ");

let states = ['Andhra Pradesh', 'Karnataka', 'Uttar Pradesh', 'Maharashtra', 'Odisha', 'Tamil Nadu'];

let filteredStates = states.filter(state => !/^[AEIOUaeiou]/.test(state));
console.log(filteredStates); // Output: ['Karnataka', 'Maharashtra', 'Tamil Nadu']
