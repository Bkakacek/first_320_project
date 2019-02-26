function updateTable() {
    var url = "api/get_name_list";

    $.getJSON(url, null, function(json_result) {
            // json_result is an object. You can set a breakpoint, or print
            // it to see the fields. Specifically, it is an array of objects.
            // Here we loop the array and print the first name.
        var tr = $('<tr/>');
        tr = $('<tr/>');
        tr.append("<td>" + json_result[0].id + "</td>");
        tr.append("<td>" + json_result[0].first + "</td>");
        tr.append("<td>" + json_result[0].last + "</td>");
        tr.append("<td>" + json_result[0].email + "</td>");
        tr.append("<td>" + json_result[0] + "</td>");
        tr.append("<td>" + json_result[0].birthday + "</td>");
        $('table').append(tr);

        for (var i = 0; i < json_result.length; i++) {
                tr = $('<tr/>');
                tr.append("<td>" + json_result[i].id + "</td>");
                tr.append("<td>" + json_result[i].first + "</td>");
                tr.append("<td>" + json_result[i].last + "</td>");
                tr.append("<td>" + json_result[i].email + "</td>");
                tr.append("<td>" + json_result[i].phone + "</td>");
                tr.append("<td>" + json_result[i].birthday + "</td>");
                $('table').append(tr);
            }
        }
    );
}

updateTable();

// Opens-up the hidden dialog box for user information on mouse click
var addItemButton = $('#addItem');
addItemButton.on("click", showDialogAdd);

function showDialogAdd() {

    // Print that we got here
    console.log("Opening add item dialog");


    $('#id').val("");
    $('#firstName').val("");
    $('#lastName').val("");
    $('#email').val("");
    $('#phone').val("");
    $('#birthday').val("");

    // Clear each field every time the dialog box is opened

    $('#firstName').removeClass("is-valid");
    $('#lastName').removeClass("is-valid");
    $('#email').removeClass("is-valid");
    $('#phone').removeClass("is-valid");
    $('#birthday').removeClass("is-valid");
    $('#firstName').removeClass("is-invalid");
    $('#lastName').removeClass("is-invalid");
    $('#email').removeClass("is-invalid");
    $('#phone').removeClass("is-invalid");
    $('#birthday').removeClass("is-invalid");

    // Show the hidden dialog
    $('#myModal').modal('show');
}

// Validates first name
function validateFirstNameField() {

    // First name variables
    var firstNameAttrib = $('#firstName');
    var firstNameValidate = firstNameAttrib.val();

    // Regular expression found at https://stackoverflow.com/questions/2385701/regular-expression-for-first-and-last-name
    // It allows for special characters in names (apostrophes, hyphens, etc.)
    var firstNameRegEx = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;


    if (firstNameRegEx.test(firstNameValidate)){
        // Valid entry (Green check)
        firstNameAttrib.removeClass("is-invalid");
        firstNameAttrib.addClass("is-valid");
        var firstNameAttribTrue = true;
    }
    else {
        // Invalid entry (Red cross)
        firstNameAttrib.removeClass("is-valid");
        firstNameAttrib.addClass("is-invalid");
    }
}

// Validates last name
function validateLastNameField() {

    // Last name variables
    var lastNameAttrib = $('#lastName');
    var lastNameValidate = lastNameAttrib.val();

    // Regular expression found at https://stackoverflow.com/questions/2385701/regular-expression-for-first-and-last-name
    // It allows for special characters in names (apostrophes, hyphens, etc.)
    var lastNameRegEx = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;


    if (lastNameRegEx.test(lastNameValidate)) {
        // Valid entry (Green check)
        lastNameAttrib.removeClass("is-invalid");
        lastNameAttrib.addClass("is-valid");
    }
    else{
        // Invalid entry (Red cross)
        lastNameAttrib.removeClass("is-valid");
        lastNameAttrib.addClass("is-invalid");
    }
}

// Validates email address
function validateEmailField() {

    //Email variables
    var emailAttrib = $('#email');
    var emailValidate = emailAttrib.val();
    var emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // Conditional checking the validity of the email field
    if (emailRegEx.test(emailValidate)) {
        // Valid entry (Green check)
        emailAttrib.removeClass("is-invalid");
        emailAttrib.addClass("is-valid");
    }
    else {
        // Invalid entry (Red cross)
        emailAttrib.removeClass("is-valid");
        emailAttrib.addClass("is-invalid");
    }
}

// Validates phone number
function validatePhoneField() {

    //Phone number variables
    var phoneAttrib = $('#phone');
    var phoneValidate = phoneAttrib.val();
    var phoneRegEx = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    // Conditional checking the validity of the phone field
    if (phoneRegEx.test(phoneValidate)) {
        // Valid entry (Green check)
        phoneAttrib.removeClass("is-invalid");
        phoneAttrib.addClass("is-valid");
    }
    else {
        // Invalid entry (Red cross)
        phoneAttrib.removeClass("is-valid");
        phoneAttrib.addClass("is-invalid");
    }
}

// Validates birthday
function validateBirthdayField() {

    // Birthday variables
    var birthdayAttrib = $('#birthday');
    var birthdayValidate = birthdayAttrib.val();

    // ***I set-up the regular expression like this because it is how the data
    // is formatted within the data records, but this probably will be changed later***
    var birthdayRegEx = /^\(?([0-9]{4})\)?[-. ]?([0-9]{2})[-. ]?([0-9]{2})$/;

    // Conditional checking the validity of the birthday field
    if (birthdayRegEx.test(birthdayValidate)) {
        // Valid entry (Green check)
        birthdayAttrib.removeClass("is-invalid");
        birthdayAttrib.addClass("is-valid");
    }
    else {
        // Invalid entry (Red cross)
        birthdayAttrib.removeClass("is-valid");
        birthdayAttrib.addClass("is-invalid");
    }

}

var saveChangesButton = $('#saveChanges');
saveChangesButton.on("click", saveChanges);

function saveChanges() {

    // Calling all functions. It's like assembling the Avengers!!
    validateFirstNameField();
    validateLastNameField();
    validateEmailField();
    validatePhoneField();
    validateBirthdayField();
    jqueryPostJSONButtonAction();
    $('#myModal').modal('hide');
    // Show the console the functions were executed
    console.log("Changes Saved")
}

function jqueryPostJSONButtonAction() {

    //Create vari
    var firstNameAttrib = $("#firstName").val();
    var lastNameAttrib = $("#lastName").val();
    var emailAttrib = $("#email").val();
    var phoneAttrib = $("#phone").val();
    var birthdayAttrib = $("#birthday").val();

    var url = "api/name_list_edit";
    var dataToServer = {first : firstNameAttrib, last : lastNameAttrib, email : emailAttrib, phone : phoneAttrib,
        birthday : birthdayAttrib};

    $.ajax({
        type: 'POST',
        url: url,
        data: JSON.stringify(dataToServer),
        success: [function(dataFromServer) {
            console.log(dataFromServer);
            updateTable()
        }],
        contentType: "application/json",
        dataType: 'text'
    });
}
