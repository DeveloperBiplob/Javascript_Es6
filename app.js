// Functon ======================================================
// function test (a, b){
//     if (typeof a === 'undefined'){
//         a = 'John'
//     }if(typeof b === 'undefined'){
//         b = ' Doe'
//     }

//     console.log('Hello ' + a + b);
// }

// test('Biplob', ' Javery');

// Immidiatley Invokable Function Expression Iifes //

// (function(name){
//     console.log(name)
// })('biplob')

// Loop ======================================================== 

// For Loop------------------------------------
// let myArray = ['one', 'two', 'three', 'four', 'five', 'six'];

// for(let i = 0; i < myArray.length; i++){
//     console.log(myArray[i])
// }

// for(let i = myArray.length - 1; i >= 0; i--){
//     console.log(myArray[i]);
// }



// While Loop--------------------
// let myPrompt = Number(prompt('Enter a Number:'));
// while(myPrompt < 10){  
//     alert('Plese Enter a Large Number:')
//     myPrompt = Number(prompt('Please Enter a Large Number:'));
// }
// if(myPrompt >=10){
//     alert('Congratulations!');
// }



// let myArray = ['one', 'two', 'three', 'four', 'five', 'six'];

// ForEach Loop-------------------------
// myArray.forEach(function(elem, i){
//     // console.log(elem)
//     console.log(`Index: ${i}, Element: ${elem}`)
// })


// ForEach Loop With Arrow Function -------------------
// myArray.forEach((elem) => {
//     console.log(elem)
// })


// For..of loop----------------------------
// let myArray = ['one', 'two', 'three', 'four', 'five', 'six'];

// for(elem of myArray){
//     console.log(elem)
// }

// for([i, elem] of myArray.entries()){
//     // console.log(elem)
//     console.log(`Index: ${i}, Element: ${elem}`)
// }

// for([i, elem] of myArray.entries()){
//     if(i === 2) break;
//     console.log(`Index: ${i}, Element: ${elem}`)
// }



// For..in loop----------------------------
// ata use kora hoy Object er Property or vlaue print korar jonno.

// myObj = {
//     'name' : 'John',
//     'age' : 18,
//     'city': 'Dhaka'
// }

// for(prprty in myObj){
//     // console.log(prprty)
//     let result = `Property: ${prprty}, Value: ${myObj[prprty]}`
//     console.log(result)
// }


// informatin = {
//     'Name': 'Biplob',
//     "Age": 20,
//     "city": 'Dhaka',
//     'University': 'Sonargaon University'
// }

// for(property in informatin){
//     console.log(informatin[property])
// }


// Execution Time------------------
// let num = 100000000;
// let myArray = new Array(num)

// console.time("for")
// for(let i = 1; i < num; i++){}
// console.timeEnd("for")

// console.time("while")
// let i = 0;
// while(i < num){i++}
// console.timeEnd("while")

// console.time("forEach")
// myArray.forEach((elem) => {})
// console.timeEnd("forEach")

// console.time("for..of")
// for(elem of myArray){}
// console.timeEnd("for..of")




// Improtant Topic ============================================================

// Global Variable - Global Scope
// Local variable - Function Scop
// Hoistiong
// Use of let
// Use of const

// DOM Document Object Model ======================================================

document.querySelector('h1').style.color = 'red';
document.querySelector('h1').innerHTML = 'Biplob Jabery';