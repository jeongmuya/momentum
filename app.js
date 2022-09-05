
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onloginSubmit(event) {
  event,preventDefault();
  const username = loginInput.value;
  loginForm.classList.add("hidden");
}

function handleLinkClick() {
  alert("clicked");
}


loginForm.addEventListener("submit", onloginSubmit);
link.addEventListener("click", handleLinkClick)