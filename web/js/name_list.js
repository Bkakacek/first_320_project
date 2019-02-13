function updateTable() {
    var url = "api/get_name_list";

    $.getJSON(url, null, function(json_result) {
            // json_result is an object. You can set a breakpoint, or print
            // it to see the fields. Specifically, it is an array of objects.
            // Here we loop the array and print the first name.
        var tr;
        for (var i = 0; i < json_result.length; i++) {
                var dashedNumber = json_result[i].phone.substring(0,3) + "-" + json_result[i].phone.substring(3,6) + "-"
                + json_result[i].phone.substring(6,10);
                tr = $('<tr/>');
                tr.append("<td>" + json_result[i].id + "</td>");
                tr.append("<td>" + json_result[i].first + "</td>");
                tr.append("<td>" + json_result[i].last + "</td>");
                tr.append("<td>" + json_result[i].email + "</td>");
                tr.append("<td>" + dashedNumber + "</td>");
                tr.append("<td>" + json_result[i].birthday + "</td>");
                $('table').append(tr);
            }
        }
    );
}

updateTable();

function showDialogAdd() {

    // Print that we got here
    console.log("Opening add item dialog");

    // Clear out the values in the form.
    // Otherwise we'll keep values from when we last
    // opened or hit edit.
    // I'm getting it started, you can finish.
    $('#id').val("");
    $('#firstName').val("");
    $('#lastName').val("");
    $('#email').val("");

    // Show the hidden dialog
    $('#myModal').modal('show');
}

var addItemButton = $('#addItem');
addItemButton.on("click", showDialogAdd);