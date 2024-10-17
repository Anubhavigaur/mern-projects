const form = document.getElementById("userForm");
const userNameConatiner = document.getElementById("username-conatiner");
const userNameInput = document.getElementById("username-Input");
const userNameError = document.getElementById("username-error");

const emailConatiner = document.getElementById("email-conatiner");
const emailInput = document.getElementById("email-input");
const emailError = document.getElementById("email-error");

const passwordConatiner = document.getElementById("password-conatiner");
const passwordInput = document.getElementById("password-input");
const passwordError = document.getElementById("password-error");

const confirmPasswordConatiner = document.getElementById("confirm-password-conatiner");
const confirmPasswordInput = document.getElementById("confirm-password-input");
const confirmPasswordError = document.getElementById("confirm-password-error");

function validateUsername(value) {
  if (value.length == 0) {
    userNameError.innerText = "username is required";
    return false;
  }
  else if (value.length > 8) {
    userNameError.innerText = "Username length exceeds the allowed limit";
    return false;
  }
  else {
    userNameError.innerText = " ";
    console.log("username validation is passed");
    return true;

  }
}

function validateEmail(value) {
  const commonValues = ['com', 'org', '.net', '.org'];
  const atIndex = value.indexof('@');
  if (atIndex === -1 || value.indexof(',', atIndex) === -1) {
    emailError.innerText = "please enter a valid email address";
    return false;

  }
  else {
    emailError.innerText = "";
    console.log("email is validates");
    return true;
  }
}


function validatePassword(password, confirmPassword) {
  const minLength = 6;
  if (password.length < minLength) {
    passwordError.innerText = `Password must be at least ${minLength} characters long`;
    return false;
  } else if (password !== confirmPassword) {
    confirmPasswordError.innerText = "Passwords do not match";
    return false;
  } else {
    passwordError.innerText = "";
    confirmPasswordError.innerText = "";
    console.log("Password validation passed");
    return true;
  }
}




function handleSubmit(event) {
  event.preventDefault();
  if (
    validateUsername(userNameInput.value) &&
    validateEmail(emailInput.value) &&
    validatePassword(passwordInput.value, confirmPasswordInput.value)
  ) {
    console.log("Form submitted successfully");
    console.log(
      "username:", userNameInput.value,
      "\nemail:", emailInput.value,
      "\npassword:", passwordInput.value,
      "\nconfirm password:", confirmPasswordInput.value
    );
  }
  else {
    console.log("form submission failed due to validation errors");

  }
}

// if (userNameInput.value.length === 0 || userNameInput.value.toLowerCase() === "username") {
//   userNameError.innerText = "userName is required";
//   console.log(userNameInput.value)
// }
// else if (userNameInput.value.length > 8) {
//   userNameError.innerText = "Username length  exceeds";

// }
// else if (emailInput.value.length == 0) {
//   emailError.innerText = "email is required";
//   console.log(emailInput.value)
// }
// else if (passwordInput.value.length == 0) {
//   passwordError.innerText = "password is not found";
//   console.log(passwordInput.value)
// }
// else if (confirmPasswordInput.value.length == 0) {
//   confirmPasswordError.innerText = "password is not found";
//   console.log(passwordInput.value)
// }
// else if (passwordInput.value != confirmPasswordInput.value) {
//   confirmPasswordError.innerText = " Password does not matched";
// }
// else {
//   console.log("Form submiited");
//   console.log(
//     "username:", userNameInput.value,
//     "\nemail:",
//     emailInput.value,
//     "\npassword:",
//     passwordInput.value,
//     "\nconfirmpassword:",
//     confirmPasswordInput.value


//   )
// }
form.addEventListener('submit', handleSubmit);








