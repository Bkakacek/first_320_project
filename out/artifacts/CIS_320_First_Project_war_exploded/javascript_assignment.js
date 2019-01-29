// Part 1
// Function that adds a hello every time it is pressed

function addHello() {

    // Send the text to the console
    console.log('Hello');
}

// Attaches the function to a button press
var formButton1 = $('#button1');
formButton1.on("click", addHello);

// Part 2
// Function that adds two field numbers together

function addDigits() {

    // Variable for the first number
    var field1 = parseInt(document.getElementById("field1").value);

    // Variable for the second number
    var field2 = parseInt(document.getElementById("field2").value);

    // Variable for the sum of the first two number to put in the third field
    var sum = field1 + field2;
    parseInt(document.getElementById("field3").value = sum);
}

// Attaches the function to a button press
var formButton2 = $('#button2');
formButton2.on("click", addDigits);

// Part 3
// Create a function that hides a link

function hideFunction() {

    // Variable for the paragraph id
    var hiddenParagraph = (document.getElementById('paragraphToHide'));

    // Conditional to hide/show the paragraph if the inverse is occurring
    if (hiddenParagraph.style.display === "none") {
        hiddenParagraph.style.display = "block";
    } else {
        hiddenParagraph.style.display = "none";
    }
}

// Attaches the function to a button press
var formButton3 = $('#button3');
formButton3.on("click", hideFunction);

// Part 4
// Function to validate a number

function validateNumber() {

    // Variable for the phone number id
    var phoneField = (document.getElementById("phoneField").value);

    // Variable showing the phone number requirements
    var reg = /^[.]?[0-9]{3}?[-]?[0-9]{3}[-]?[0-9]{4}$/;

    // Conditional checking if the phone number matches the regular expression variable
    if (reg.test(phoneField)) {
        console.log("Ok");
    } else {
        console.log("Bad");
    }}

// Attaches the function to a button press
var formButton4 = $('#button4');
formButton4.on("click", validateNumber);

// Part 5
// Function sending a JSON request to the console

function jsonFunction() {

    // Field variables
    var firstName = (document.getElementById("firstName").value);
    var lastName = (document.getElementById("lastName").value);
    var email = (document.getElementById("email").value);

    // Object variable
    var myObject = {firstName: firstName, lastName: lastName, email: email};

    // Variable that makes the JSON string
    var jsonString = JSON.stringify(myObject);

    // Send the string to the console
    console.log(jsonString);
}

// Attaches the function to a button press
var formButton5 = $('#button5');
formButton5.on("click", jsonFunction);




