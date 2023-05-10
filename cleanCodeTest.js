'use strict';
// import { data } from "jquery";
//////////////////// TITLE PAGE SHOW INPUTS /////////////////////////////
var selectRegister = document.querySelector('#regForm');
var showRegFormBtn = document.querySelector('#btnRegister');
var selectLogin = document.querySelector('#loginForm');
var showLoginFormBtn = document.querySelector('#btnLogin');
var titleReg = document.getElementById('regTitle');
var titleLogin = document.getElementById('loginTitle');
var selectSubmitLogin = document.querySelector('#submitLogin');
var selectSubmitRegister = document.querySelector('.submitRegister');
var inputElements = document.getElementById('input');
// Selecting elements from register form ('selectRegister')
var passwordInput = selectRegister.querySelector('[name="password"]');
var emailInput = selectRegister.querySelector('[name="email"]');
var usernameInput = selectRegister.querySelector('[name="username"]');
var welcome = selectRegister.querySelector('[name="welcomeMsg"]');
var logUser = document.querySelector('#user-login');
var emailUser = document.querySelector('#email-login');
var passUser = document.querySelector('#pass-login');


////////////////////////////////////////////////////////////////////////////////

const showRegForm = function () {
  var regFormDisplay = selectRegister.style.display;
  var showRegTitle = titleReg.style.display;
  if (regFormDisplay === 'block' || showRegTitle === 'block') {
    selectRegister.style.display = 'none';
    titleReg.style.display = 'none';
  } else if (
    selectLogin.style.display === 'block' ||
    titleLogin.style.display === 'block'
  ) {
    selectLogin.style.display = 'none';
    titleLogin.style.display = 'none';
  } else {
    selectLogin.style.display === 'none';
    titleLogin.style.display === 'none';
    selectRegister.style.display = 'block';
    titleReg.style.display = 'block';
  }
};
const showLoginForm = function () {
  var loginFormDisplay = selectLogin.style.display;
  var showLoginTitle = titleLogin.style.display;
  if (loginFormDisplay === 'block' || showLoginTitle === 'block') {
    selectLogin.style.display = 'none';
    titleLogin.style.display = 'none';
  } else if (
    selectRegister.style.display === 'block' ||
    titleReg.style.display === 'block'
  ) {
    selectRegister.style.display = 'none';
    titleReg.style.display = 'none';
  } else {
    selectLogin.style.display = 'block';
    titleLogin.style.display = 'block';
  }
};

///////////////////////////// Welcome Messages ////////////////////////////////
const regInput = function (input1, input2) {
  console.log('Registration Successful', input1, input2);
};
selectRegister.addEventListener('submit', function (e) {
  e.preventDefault();
  var input1 = usernameInput.value;
  var input2 = emailInput.value;
  var welcome = selectRegister.querySelector('[name="welcomeMsg"]');
  console.log(welcome, selectRegister);
  welcome.innerHTML = `Successfully Registered as ${input1}`;
  // let formData = new FormData(selectRegister);
  regInput(input1, input2);
  setTimeout(() => {
    welcome.style.display = 'none';
  }, 5000);
  document.querySelector('#regForm').reset();
});

/////////////////////////////// LOGIN FUNCTION ////////////////////////////////////
const login = function () {
  fetch('https://api.apispreadsheets.com/data/c9zrbTPZJIxqznMc/') // 1) Fetch function returns a promise that resolves to a 'response' object //
    .then(res => {
      console.log(`Response returned with ${res.status}`);
      if (!res.ok) throw new Error('Res NOT OK WHATEVER THAT MEANS');
      return res.json();
    })
    .then(data => {
      var arrayString = JSON.stringify(data.data);
      var parsedArray = JSON.parse(arrayString);
      console.log(parsedArray);
      var [{ email, password, username }] = data.data;
      console.log(email, password, username);
      return fetch('https://api.apispreadsheets.com/data/c9zrbTPZJIxqznMc/');
    })
    .then(res => {
      console.log(res.status);
      return res.json();
    })
    .then(data => {
      var fetchedData = data;
      var selectRegDisplay = document.querySelector('#regForm');
      var selectLogDisplay = document.querySelector('#loginForm');
      var arrayString = JSON.stringify(fetchedData);
      var parsedArray = JSON.parse(arrayString);
      var userLogin = logUser.value;
      // var emailLogin = emailUser.value;
      var passLogin = passUser.value;
      console.log(parsedArray);

      var [{ email, password, username }] = data.data;
      // var [] = data.data;
      var dataForm = data.data;
      let matchData = false;
      for (let i = 0; i < data.data.length; i++) {
        if (
          userLogin === dataForm[i].username &&
          // emailLogin === dataForm[i].email &&
          passLogin === dataForm[i].password
        ) {
          matchData = true;
          console.log('Welcome to nowhere');
          afterLogin();
          break;
        } else if (
          userLogin === '' ||
          userLogin !== dataForm[i].username ||
          // emailLogin === '' ||
          // emailLogin !== dataForm[i].email ||
          passLogin === '' ||
          passLogin !== dataForm[i].password
        ) {
        }
        console.log('Please enter valid inputs');
      }
      // afterLogin();
    })
    .catch(err => console.error(`${err.message} 💥`));
};
/////////////////// SHOW/HIDE Function /////////////////////////////
function afterLogin() {
  var image = document.querySelector('#image');
  var compassImage = document.querySelector('#compass-pic');
  var selectBoxTwo = document.querySelector('.box2');
  var selectBoxFour = document.querySelector('.box4');
  var selectBoxOne = document.querySelector('.box1');
  var selectDisplayBox = document.querySelector('.displayBox');
  var hideTitle = document.querySelector('.grid-container');
  var showSecondPage = document.querySelector('.container-2');
  var sessionUser = logUser.value;

  selectLogin = document.querySelector('#loginForm');
  console.log(image, hideTitle, showSecondPage);
  ///// Store Data in local storage /////////
  localStorage.setItem('username', sessionUser);
  //// Hide Elements
  hideTitle.style.display = 'none';
  compassImage.style.display = 'none';
  selectRegister.style.display = 'none';
  selectLogin.style.display = 'none';
  showLoginFormBtn.style.display = 'none';
  showRegFormBtn.style.display = 'none';
  selectBoxTwo.style.display = 'none';
  selectBoxFour.style.display = 'none';
  //// Show Elements
  showSecondPage.style.display = 'grid';
  selectDisplayBox.style.display = 'block';
  image.style.display = 'block';
  image.style.opacity = '1';
  document.body.style.backgroundImage = 'url("sunsetBackground03.jpg")';
  selectBoxOne.style.display = 'block';
  document.body.style.backgroundRepeat = 'cover';
  document.body.style.animation = 'fadeIn 2s';
  var userDisplay = localStorage.getItem('username');
  var loginTextDisplay = document.getElementById('loginPageText');
  loginTextDisplay.style.display = 'flex';
  var startTime = Date.now();
  var currDate = new Date();
  document.getElementById(
    'loginName'
  ).innerHTML = `Current User: ${userDisplay}`;
  document.getElementById('currentTime').innerHTML =
    currDate.toLocaleTimeString();
  setInterval(function () {
    let elapsedTime = Date.now() - startTime;
    let minutes = Math.floor(elapsedTime / 60000);
    let seconds = Math.floor((elapsedTime % 60000) / 1000);
    document.getElementById(
      'timerLogin'
    ).innerHTML = `Logged in: ${minutes}:${seconds}`;
  }, 1000);
}

