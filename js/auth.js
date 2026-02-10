function loginUser(username){
localStorage.setItem("isLogin", "true");
localStorage.setItem("username", username);
window.location.href = "index.html";
}


function logoutUser(){
localStorage.removeItem("isLogin");
localStorage.removeItem("username");
window.location.href = "index.html";
}