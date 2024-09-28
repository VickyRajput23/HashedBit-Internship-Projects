console.log("Answer for Q5: ");

function correctfn(sentence, wrong, correct) {
    return sentence.replace(wrong, correct);
}

let sentence = "I am learning Javascrpt";
let correctedSentence = correctfn(sentence, 'Javascrpt', 'JavaScript');
console.log(correctedSentence); // Output: 'I am learning JavaScript'
