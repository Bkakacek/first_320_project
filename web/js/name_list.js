function updateTable() {
    var url = "api/get_name_list";

    $.getJSON(url, null, function(json_result) {
            // json_result is an object. You can set a breakpoint, or print
            // it to see the fields. Specifically, it is an array of objects.
            // Here we loop the array and print the first name.
        var tr;
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