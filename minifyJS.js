"use strict";

var selectRegister = document.querySelector("#regForm");
var showRegFormBtn = document.querySelector("#btnRegister");
var selectLogin = document.querySelector("#loginForm");
var showLoginFormBtn = document.querySelector("#btnLogin");
var titleReg = document.getElementById("regTitle");
var titleLogin = document.getElementById("loginTitle");
var selectSubmitLogin = document.querySelector("#submitLogin");
var selectSubmitRegister = document.querySelector(".submitRegister");
var inputElements = document.getElementById("input");
var passwordInput = selectRegister.querySelector('[name="password"]');
var emailInput = selectRegister.querySelector('[name="email"]');
var usernameInput = selectRegister.querySelector('[name="username"]');
var welcome = selectRegister.querySelector('[name="welcomeMsg"]');
var logUser = document.querySelector("#user-login");
var emailUser = document.querySelector("#email-login");
var passUser = document.querySelector("#pass-login");

const showRegForm = function() {
  var e = selectRegister.style.display;
  var t = titleReg.style.display;

  if (e === "block" || t === "block") {
    selectRegister.style.display = "none";
    titleReg.style.display = "none";
  } else if (selectLogin.style.display === "block" || titleLogin.style.display === "block") {
    selectLogin.style.display = "none";
    titleLogin.style.display = "none";
  } else {
    selectLogin.style.display;
    titleLogin.style.display;
    selectRegister.style.display = "block";
    titleReg.style.display = "block";
  }
};

const showLoginForm = function() {
  var e = selectLogin.style.display;
  var t = titleLogin.style.display;

  if (e === "block" || t === "block") {
    selectLogin.style.display = "none";
    titleLogin.style.display = "none";
  } else if (selectRegister.style.display === "block" || titleReg.style.display === "block") {
    selectRegister.style.display = "none";
    titleReg.style.display = "none";
  } else {
    selectLogin.style.display = "block";
    titleLogin.style.display = "block";
  }
};

const regInput = function(e, t) {
  console.log("Registration Successful", e, t);
};

selectRegister.addEventListener("submit", function(e) {
  e.preventDefault();
  var t = usernameInput.value;
  var l = emailInput.value;
  var s = selectRegister.querySelector('[name="welcomeMsg"]');
  console.log(s, selectRegister);
  s.innerHTML = `Successfully Registered as ${t}`;
  regInput(t, l);
  setTimeout(() => {
    s.style.display = "none"
  })
})


