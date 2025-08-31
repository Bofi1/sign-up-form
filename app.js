let firstName = document.getElementById("first-name");
let firstNameError = document.getElementById("first-name-error");

let lastName = document.getElementById("last-name");
let lastNameError = document.getElementById("last-name-error");

let email = document.getElementById("email");
let emailError = document.getElementById("email-error");

let password = document.getElementById("password");
let passwordError = document.getElementById("password-error");

let secuence = new Array(4);
let secuenceSum = 0;

let realButton = document.getElementById("real-button");

let iconError = document.getElementsByClassName("icon-error");

firstName.addEventListener("input", () =>
  validation(firstName, firstNameError, 0, (error = "Name cannot be empty"), 0)
);

lastName.addEventListener("input", () =>
  validation(
    lastName,
    lastNameError,
    1,
    (error = "Last Name cannot be empty"),
    1
  )
);

// validation name and last name
function validation(input, inputError, secuenceCount, error, iconNumber) {
  secuence[secuenceCount];

  if (!/^[a-zA-Z]+(\s[a-zA-Z]+)*$/.test(input.value)) {
    secuence[secuenceCount] = 0;
    input.classList.add("error-border");
    inputError.innerText = "Use only letters";
    inputError.classList.remove("hidden");
    iconError[iconNumber].classList.remove("hidden");

    // not show number or diff to strings
    // firstName.value = firstName.value.replace(/[^a-zA-Z]/g, "");
  } else {
    secuence[secuenceCount] = 1;
    input.classList.remove("error-border");
    inputError.classList.add("hidden");
    iconError[iconNumber].classList.add("hidden");
  }

  if (input.value == "" && secuence[secuenceCount] == 0) {
    inputError.innerText = error;
    iconError[iconNumber].classList.remove("hidden");

    // inputError.classList.remove("hidden");
  }

  submitValidation();
  submitShowRealButton();
  //   console.log(secuenceSum);
}

// email
email.addEventListener("input", () => {
  if (!email.checkValidity()) {
    secuence[2] = 0;
    email.classList.add("error-border");
    emailError.classList.remove("hidden");
    emailError.innerText = "Use a valid email";
    iconError[2].classList.remove("hidden");
  } else {
    secuence[2] = 1;
    email.classList.remove("error-border");
    emailError.classList.add("hidden");
    iconError[2].classList.add("hidden");
  }

  if (email.value == "" && secuence[2] == 0) {
    emailError.innerText = "Email cannot be empty";
    email.classList.add("error-border");
    emailError.classList.remove("hidden");
    iconError[2].classList.remove("hidden");
  }

  submitValidation();
  submitShowRealButton();
  //   console.log(secuenceSum);
});

// password
password.addEventListener("input", () => {
  if (!password.value == "") {
    if (!(password.value.length > 8)) {
      passwordError.innerHTML = "More than 8 characters";
      passwordError.classList.remove("hidden");
      secuence[3] = 0;
      iconError[3].classList.remove("hidden");
    } else {
      password.classList.remove("error-border");
      passwordError.classList.add("hidden");
      secuence[3] = 1;
      iconError[3].classList.add("hidden");
    }
  } else {
    password.classList.add("error-border");
    passwordError.classList.remove("hidden");
    secuence[3] = 0;
    iconError[3].classList.remove("hidden");
  }

  if (password.value == "" && secuence[3] == 0) {
    passwordError.innerHTML = "Password cannot be empty";

    password.classList.add("error-border");
    passwordError.classList.remove("hidden");
    iconError[3].classList.remove("hidden");
  }

  submitValidation();
  submitShowRealButton();
  //   console.log(secuenceSum);
});

// submit valiation
// array sum

function submitShowRealButton() {
  if (secuenceSum == 4) {
    realButton.classList.add("bg-[#37CC8A]");
    realButton.classList.remove("bg-[#596e65]");
    realButton.removeAttribute("disabled");
  } else {
    realButton.classList.remove("bg-[#37CC8A]");
    realButton.classList.add("bg-[#596e65]");
    realButton.setAttribute("disabled", true);
  }
}

function submitValidation() {
  secuenceSum = secuence.reduce((a, b) => a + b, 0);
}
