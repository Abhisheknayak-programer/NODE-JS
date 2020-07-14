// PRACTICE 1

// const fs = require('fs');
// let text = fs.readFileSync("delete.txt","utf-8")
// console.log('the content of the file is : ----->>>');
// console.log(text);



// text_modified = text.replace("BLOGER" , "SCIENTIST");
// fs.writeFileSync("delete2.txt",text_modified);









// PRACTICE 2


const file = require('fs');
 
let file_texts = file.readFileSync("delete.txt","utf-8");
console.log(file_texts);

modified_text = file_texts.replace('AI','ARTIFICIAL INTELLIGENCE(AI)');
console.log(modified_text);
file_texts = file.writeFileSync("delete3.txt",modified_text); 