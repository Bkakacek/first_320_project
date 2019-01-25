// Part 1
// Function that adds a hello every time it is pressed

function addHello() {
    console.log('Hello');
}

var formButton1 = $('#button1');
formButton1.on("click", addHello);

// Part 2
// Function that adds two field numbers together

function addDigits() {
    var field1 = parseInt(document.getElementById("field1").value);
    var field2 = parseInt(document.getElementById("field2").value);
    var sum = field1 + field2;
    parseInt(document.getElementById("field3").value = sum);
}

var formButton2 = $('#button2');
formButton2.on("click", addDigits);

// Part 3
// Create a function that hides a link

function hideFunction() {
    var hiddenParagraph = (document.getElementById('paragraphToHide'));
    if (hiddenParagraph.style.display === "none") {
        hiddenParagraph.style.display = "block";
    } else {
        hiddenParagraph.style.display = "none";
    }
}

var formButton3 = $('#button3');
formButton3.on("click", hideFunction);





