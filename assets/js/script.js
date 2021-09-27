function TimeElapse() {
    $("#currentDay").text(moment().format("dddd, MMMM DD, YYYY"));
    var currenttime = parseInt(moment().format("H"));
    $("textarea").each(function() {
        var currentid = parseInt($(this).attr("id"));
        if (currentid > currenttime) {
            $(this).addClass("future");
        } else if (currentid === currenttime) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
}

function user(){
    $("textarea").each(function(){
        var timenow = parseInt($(this).attr("id"));
        var hournow = "#hour" + timenow;
        var idnow = "#" + timenow;
        var time = timenow.toString();

        $(hournow).on("click", function(event) {
            event.preventDefault();
            console.log(timenow + " , " + hournow + " , " + idnow + " , " + time);
            var userinput = $(idnow).val();
            localStorage.setItem(time, userinput);
        })
    })
}

$("#8").val(localStorage.getItem("8"));
$("#9").val(localStorage.getItem("9"));
$("#10").val(localStorage.getItem("10"));
$("#11").val(localStorage.getItem("11"));
$("#12").val(localStorage.getItem("12"));
$("#13").val(localStorage.getItem("13"));
$("#14").val(localStorage.getItem("14"));
$("#15").val(localStorage.getItem("15"));
$("#16").val(localStorage.getItem("16"));
$("#17").val(localStorage.getItem("17"));



$(document).ready(function() {
    TimeElapse();
    user();
})