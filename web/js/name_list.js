// Main Javascript File

var url = "api/get_name_list";

$.getJSON(url, null, function(json_result) {
        // json_result is an object. You can set a breakpoint, or print
        // it to see the fields. Specifically, it is an array of objects.
        // Here we loop the array and print the first name.
        for (var i = 0; i < json_result.length; i++) {
            tr = $('<tr/>');
            console.log(json_result[i].id);
            tr.append("<td>" + json_result[i].id + "</td>");
            console.log(json_result[i].first);
            tr.append("<td>" + json_result[i].first + "</td>");
            console.log(json_result[i].last);
            tr.append("<td>" + json_result[i].last + "</td>");
            console.log(json_result[i].email);
            tr.append("<td>" + json_result[i].email + "</td>");
            console.log(json_result[i].phone);
            tr.append("<td>" + json_result[i].phone + "</td>");
            console.log(json_result[i].birthday);
            tr.append("<td>" + json_result[i].birthday + "</td>");
            $('#datatable').append(tr);
        }
        console.log("Done");
    }
);
