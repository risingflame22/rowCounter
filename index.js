// document.getElementById("count-el").innerText = 5;

//Basic Operations

// let myAge = 23;
// let humanDogAge = 7;
// let myDogAge = myAge * humanDogAge;
// console.log(myDogAge);

//Reassigning Variables

// let count = 5;
// count = count + 1;
// console.log(count);


// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70

// let bonusPoints = 50;
// bonusPoints = bonusPoints + 50;
// bonusPoints = bonusPoints - 75;
// bonusPoints = bonusPoints + 40;
// console.log(bonusPoints);

//Functions 

// function increment() {
//     console.log("The button was clicked");
// }

// function count() {
//     console.log(5);
//     console.log(4);
//     console.log(3);
//     console.log(2);
//     console.log(1);
// }

// count(); ---> Function call

// Create a function (you decide the name) that logs out the number 42 to the console
// Call/invoke the function

// function myLogger() {
//     console.log(42);
// }

// myLogger();

// Create a function that logs out the sum of all the lap times

// let lap1 = 34;
// let lap2 = 33
// let lap3 = 36

// function allLaps() {
//     let totalTime = lap1 + lap2 + lap3;
//     console.log(totalTime); --> Scope of totalTime is within the function
// }

// allLaps();

//Strings

// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console

// let myName = "Khushi"
// let greeting = "Hi, my name is "
// let myGreeting = greeting + myName;
// console.log(myGreeting);


let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;
function increment() {
    count = count + 1;
    countEl.innerText = count;    
}
function save(){
    saveEl.textContent += count + " - ";
    countEl.innerText = 0;
    count = 0;
}



