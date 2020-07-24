
var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

function validate(){
    initialize();
      $('#psw').focus(function(){
      $('#data').css("display","block");
  }); 
      $('#psw').blur(function() {
    $("#data").css("display","none");
  });
 $('#psw').on("keyup",function() {
  
  var lowerCaseLetters = /[a-z]/g;
        if($('#psw').val().match(lowerCaseLetters))
         {  
              letter.classList.remove("invalid");
              letter.classList.add("valid");
        } 
        else {
            letter.classList.remove("valid");
            letter.classList.add("invalid");
        }

        var upperCaseLetters = /[A-Z]/g;
        if($('#psw').val().match(upperCaseLetters)) {  
          capital.classList.remove("invalid");
          capital.classList.add("valid");
        } else {
          capital.classList.remove("valid");
          capital.classList.add("invalid");
        }

        var numbers = /[0-9]/g;
        if($('#psw').val().match(numbers)) {  
          number.classList.remove("invalid");
          number.classList.add("valid");
        } else {
          number.classList.remove("valid");
          number.classList.add("invalid");
        }
  
      if($('#psw').val().length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
      } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
      }
}
); 

if(document.getElementById("fullname").value=="")
{
  document.getElementById("fullname").innerHTML="<font color=red><i><h5>This field is Required</h5></i></font>";
  return false;
}
if(document.getElementById("DOB").value=="")
{
  document.getElementById("DOB").innerHTML="<font color=red><i><h5>This field is Required</h5></i></font>";
  return false;
}
var inputphoneno=document.getElementById("mobile");
var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(!inputphoneno.value.match(phoneno))
  {    
     document.getElementById("mob").innerHTML="<font color=red><i><h5>Not a valid Phone Number!</h5></i></font>";
     return false;
  }
  var inputemail=document.getElementById("username");
  var email=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if(!inputemail.value.match(email))
  {
    document.getElementById("user").innerHTML="<font color=red><i><h5>You have entered an invalid email address!</h5></i></font>";
    return false;
  }
  var psw=document.getElementById("psw");
  var password=document.getElementById("password");
  if(psw!=password)
  {
    document.getElementById("confirm").innerHTML="<font color=red><i><h5>Confirm Password should be same as the Password.</h5></i></font>";
  return false;
  }
}
function initialize()
{
  $("#confirm").html("");
 $("#confirm").html("");
  $("#confirm").html("");
 $("#confirm").html("");
 $("#confirm").html("");

}