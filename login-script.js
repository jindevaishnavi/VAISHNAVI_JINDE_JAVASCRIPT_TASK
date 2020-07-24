function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("pwd").value;
if(username=="")
{
	document.getElementById("a").innerHTML="<font color=red><i><b>This field is reqiured</b></i></font>";

}
if(password=="")
{
	document.getElementById("b").innerHTML="<font color=red><i><b>This feild is reqiured</b></i></font>";

}
}