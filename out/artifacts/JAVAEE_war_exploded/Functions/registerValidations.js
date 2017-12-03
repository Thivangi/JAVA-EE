
var  errormessage = true;

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validatePass(){
    $("#mailresult").text("");
    var box1pass = $("#password");
    var box2pass = $("#confirm");
    if(box1pass.val().length > 0 && box2pass.val().length > 0) {
        if (box1pass.val() !== box2pass.val()) {
            $("#mailresult").text("Οι κωδικοί δεν ταιριάζουν");
            $("#mailresult").css("color", "red");
            errormessage = false;
        }
        else {
            errormessage = true;
        }
    }
}


function validate() {
    $("#mailresult").text("");
    var email = $("#email").val();
    if(email.length > 0)
    {
        if (validateEmail(email)) {
            // $("#mailresult").text(email + " is valid :)");
            // $("#mailresult").css("color", "green");
            errormessage = true;
        } else {
            $("#mailresult").text("Το mail " + email + " δεν είναι σωστό");
            $("#mailresult").css("color", "red");
            errormessage = false;
        }
    }

    return false;
}

$(document).ready(function () {

    $('#email').on('input', validate);
    $('#confirm').on('input', validatePass);

    $('#register').click(function () {

        if($('#table').find('input[type="text"], input[type="password"]').val() !== ""){
            $.post('Register', {
                name: $('#name').val(),
                mail: $('#email').val(),
                username: $('#username').val(),
                password: $('#password').val(),
                confirm: $('#confirm').val()
            }, function (response) {
                alert(response);
                $('#table').find('input[type="text"], input[type="password"]').val('');
                
                }
            )
        }
        else{
            alert("Συμπλήρωσε όλα τα πεδία");
        }

    });

});

