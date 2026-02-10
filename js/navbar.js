const isLogin = localStorage.getItem("isLogin");


const navAuth = document.getElementById("nav-auth");
const navProfile = document.getElementById("nav-profile");


if(isLogin === "true"){
if(navAuth) navAuth.style.display = "none";
if(navProfile) navProfile.style.display = "block";
}else{
if(navAuth) navAuth.style.display = "block";
if(navProfile) navProfile.style.display = "none";
}