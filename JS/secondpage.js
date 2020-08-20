$(document).ready(function() {
    $("#code").keyup(function(){
        var val = $("#code").val();
        if(val == "4312"){
            window.location.replace("udklas.html");
        }
    })
});