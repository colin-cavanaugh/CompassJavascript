'use strict';

function validateForm() {
  var e = document.forms['regForm'][0];
  var e1 = document.forms['regForm'][1];
  var e2 = document.forms['regForm'][2];
  // var email = document.querySelector('#email').value;
  // var password = document.querySelector('#password').value;

  var username = usernameInput.value;
  var email = emailInput.value;
  var password = passwordInput.value;
  var emailRegex =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  var usernameRegex = /^[a-zA-Z0-9]{3,16}$/;

  if (!emailRegex.test(email)) {
    console.log('Please enter a valid email');
    // The email and password are valid
  } else if (!passwordRegex.test(password)) {
    console.log(password);
    alert(`Please enter a valid password.
    - Paramaters: At least one letter (uppercase)
    - At least one letter (lowercase)
    - At least one number
    - At least 8 characters in total
    - *Cannot contain hyphen (-)*`);
  } else if (!usernameRegex.test(username)) {
    alert(`Please enter valid username.
    -Parameters: Alphabetical characters (uppercase or lowercase)
    - Or digits, and has a length of at least 3 characters max and 16 characters min`);
  } else {
    console.log('Success');
  }
}
// const sessionLogin = function (username, password) {
//   fetch('https://api.apispreadsheets.com/data/mPpkjN4lcnDZCID3/', {
//     method: 'get',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       username: username,
//       password: password,
//     }),
//   }).then(function (response) {
//     // Get the session token from the response headers
//     console.log(sessionToken);
//     let localToken = response;
//     if (localToken) {
//       // Store the session token in local storage
//       localStorage.setItem('sessionToken', sessionToken);
//     }
//     console.log(sessionStorage.key(i));
//   });
// };
// selectLogin.addEventListener('submit', sessionLogin());
// function sessionLogin(username, password) {
//   fetch('https://api.apispreadsheets.com/data/mPpkjN4lcnDZCID3/', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       username: username,
//       password: password,
//     }),
//   }).then(function (response) {
//     // Get the session token from the response headers
//     console.log(sessionToken);
//     let sessionToken = response.headers.get('X-Session-Token');
//     if (sessionToken) {
//       // Store the session token in local storage
//       localStorage.setItem('sessionToken', sessionToken);
//     }
//     selectSubmitLogin.addEventListener('submit', sessionLogin());
//     console.log(sessionStorage.key(i));
//   });
// }
// selectLogin.addEventListener("click", function () {
//   var apiKey = "https://api.apispreadsheets.com/data/zRNGPAw33q4cUYma/";
//   fetch(apiKey).then((res) => {
//     console.log(res);
//     console.log("SelectLogin Event Listener Called");
//     console.log(res.status);
//   });
// });
