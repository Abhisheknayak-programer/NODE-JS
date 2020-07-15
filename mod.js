// console.log('This is Module writing page');





//Function for average

function average(arr){
    let sum =0;
    arr.forEach(element => {
        sum = sum+element;
    });
    return sum/arr.length;
}

//Function for square 

function square(num){
    console.log(`The square of the No. is ${num**2}`);
}



//Function for name and sir-name will be generated 

function name(person){
    console.log(`The name of the person is ${person+ " NAYAK"}`);
}


// module.exports = average;

module.exports = {
    avg : average,
    square:square,
    name : name
};