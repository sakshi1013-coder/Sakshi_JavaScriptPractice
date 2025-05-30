// 1.greet me
let language = "JavaScript";
console.log(`I am learning ${language}!`);

// 2.Create a Greeting Function
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Sakshi Shingole"));

//Even or Odd
let number = 20;
if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

//4. Countdown Timer
for (let i = 5; i >= 1; i--) {
    console.log(i);
}
console.log("Boom!");


//5. Print All Colors
let colors = ["Red", "orange", "black"];
for (let color of colors) {
    console.log(color);
}

//6. Button Click Alert (HTML + JS)
function showAlert() {
    alert("You clicked me!");
}

//7. Change the Paragraph Text
function changeText() {
    document.getElementById("myPara").innerText = "Text Changed!";
}

//8. Generate a Random Number
let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);

// 9. Simple Add Function
function add(a, b) {
    return a + b;
}
console.log(add(5, 3));

//10. Login Status
let isLoggedIn = true;

if (isLoggedIn) {
    console.log("Welcome back!");
}


//11. String Length
let word = "Sakshi";
console.log(word.length);


//12. Add to Fruits Array
let fruits = ["Chiku", "Mango"];
fruits.push("Kiwi");
console.log(fruits);


//13. Break a Loop at 5
for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i);
}

//14. Find Variable Type
let value = 2.243;
console.log(typeof value);


//15. Make Text Red (HTML + JS)
function makeRed() {
    document.getElementById("colorText").style.color = "red";
}



