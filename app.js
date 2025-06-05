//Assignment 21-25
// STRING METHODS

//1.

var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;
alert("Hello " + fullName + "!");


//2.

// var mobile = prompt("Enter your favorite mobile phone model:");
// console.log("My favorite phone is: " + mobile);
// console.log("Length of string: " + mobile.length);


//3.

// var word = "Pakistani";
// console.log("Index of 'n': " + word.indexOf("n"));


//4.

// var text = "Hello World";
// alert("String: " + text + "\nLast index of 'l': " + text.lastIndexOf("l"));


//5.

// var word = "Pakistani";
// console.log("Character at index 3: " + word.charAt(3));


//6.

// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName.concat(" ", lastName);
// alert("Hello " + fullName + "!");


//7.

// var city = "Hyderabad";
// var newcity = city.replace("Hyder", "Islam");
// console.log(newcity);


//8.

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newmessage = message.replace(/and/g, "&");
// console.log(newmessage);



//9.

// var str = "472";
// var num = Number(str);
// console.log("Value: " + str + " (type: " + typeof str + ")");
// console.log("Converted: " + num + " (type: " + typeof num + ")");


//10.

// var input = prompt("Enter text:");
// console.log("Uppercase: " + input.toUpperCase());


//11.

// let userInput = prompt("Enter any text:");
// let titleCase = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
// alert("User input: " + userInput + "\nTitle case: " + titleCase);



//12.

// var num = 35.36;
// var str = num.toString().replace(".", "");
// console.log(str);


//14.

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var input = prompt("Welcome! What do you want to order?");
// var item = input.toLowerCase();
// var found = false;

// for (var i = 0; i < A.length; i++) {
//     if (item === A[i]) {
//         alert(item + " is available at index " + i);
//         found = true;
//         break;
//     }
// }
// if (!found) {
//     alert("Sorry, " + item + " is not available.");
// }


//16.

// var university = "University of Karachi";
// var chars = university.split("");

// for (var i = 0; i < chars.length; i++) {
//     console.log(chars[i]);
// }



//17.


// var input = prompt("Enter any word:");
// var lastChar = input.charAt(input.length - 1);
// console.log("Last character: " + lastChar);


