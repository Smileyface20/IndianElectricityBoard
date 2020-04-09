
function login(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username == "ss2003" && password == "732623") {
        window.open('index.html')/*opens the target page while Id & password matches*/
    }
    else {
        alert("Error Password or Username")/*displays error message*/
    }
}