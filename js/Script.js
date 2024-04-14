//Alerts user with popup modal REFERENCE - https://www.w3schools.com/jsref/met_win_alert.asp
function Submitted(){
    alert("Form Submitted, good job!")
}

//Redirects user based on if login or creatation of account successful REFERENCE - https://www.w3schools.com/howto/howto_js_redirect_webpage.asp
function redirect(){
    window.location.href = "index.html";
window.location.replace("index.html");
}

//Alerts user with popup modal REFERENCE - https://www.w3schools.com/jsref/met_win_alert.asp
function login(){
    alert("You've logged in");
    redirect();
}

//Alerts user with popup modal REFERENCE - https://www.w3schools.com/jsref/met_win_alert.asp
function createAccount(){
    alert("You've created an account. You are now logged in.");
    redirect();
}


