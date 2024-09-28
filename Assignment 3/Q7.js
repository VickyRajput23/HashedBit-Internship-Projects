console.log("Answer for Q7: ");

const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] }
];

let averages = students.map(student => {
    let avg = student.scores.reduce((a, b) => a + b) / student.scores.length;
    return { name: student.name, average: avg };
});
console.log(averages); 
