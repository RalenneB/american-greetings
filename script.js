
//event listeners for Tab and Esc keys

listenForTab();
listenForEsc();

//show drop-down

function showDropdown(id) {
  document.getElementById(id).style.display = "flex";
}

function listenForTab() {
  document.addEventListener("keydown", function (event) {
    if (event.code == "Tab") {
      event.preventDefault();
      showDropdown("dropdown");
    }
  });
}

function hideDropDown(id) {
  document.getElementById(id).style.display = "none";
}

function listenForEsc() {
  document.addEventListener("keydown", function (event) {
    if (event.code == "Escape") {
      event.preventDefault();
      hideDropDown("dropdown");
    }
  });
}

//setup for forms

let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let code = id("code"),
  email = id("email"),
  form = id("form"),
  errorInput = classes("errorInput"),
  errorEmail = classes("errorEmail");

//submit check

const isFieldValid = (field) => {
  if (field.value.trim() === "") {
    return false;
  }
  return true;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const isCodeValid = isFieldValid(code);
  const isEmailValid = isFieldValid(email);

  applyErrorMessage(code, errorInput[0], "Please enter your redemption code");
  applyErrorMessage(email, errorEmail[0], "Please enter your email address");

  if (isCodeValid && isEmailValid) {
    setTimeout(function () {
      alert("Success! Form was sucessfully submitted!");
    }, 0);
  }
});

let applyErrorMessage = (field, msgContainer, message) => {
  if (!isFieldValid(field)) {
    msgContainer.innerHTML = message;
    msgContainer.style.visibility = "visible";
    msgContainer.style.visibility = "visible";

    field.style.border = "3px solid #ac4d2a";
    field.style.backgroundColor = "#fae8df";
  } else {
    msgContainer.innerHTML = "";
    msgContainer.style.visibility = "hidden";
    msgContainer.style.visibility = "hidden";
    field.style.border = "3px solid #739bac";
    field.style.backgroundColor = "#fefdf8";
  }
};


//mobile view; hamburger handling

function onClicklHamburger() {
    let links = document.getElementById("mobile-links");
    if (links.style.display === "block") {
      links.style.display = "none";
    } else {
      links.style.display = "block";
    }
  }
