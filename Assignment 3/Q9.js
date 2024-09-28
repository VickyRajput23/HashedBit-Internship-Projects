console.log("Answer for Q9: ");

function wordCount(paragraph) {
    return paragraph.split(/\s+/).length;
}

let paragraph = "This is a sample paragraph with several words in it.";
console.log(wordCount(paragraph)); // Output: 9
