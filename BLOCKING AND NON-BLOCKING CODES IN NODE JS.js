// PRACTICE 1



const fs = require('fs');
fs.readFile('delete.txt', 'utf-8', (err, data) => {
    console.log(data);
    console.log("ABHISHEK SIR MODIFIED");
});

console.log('THIS IS THE CONTENT OF THE MESSAGE IT OPERATED 1ST WHY THIS IS ONLY DUE TO ASYNCHORONUS FORMAT');