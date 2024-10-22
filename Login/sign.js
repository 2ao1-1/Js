// elements
// sign in element
const inSignBtn = document.querySelector("#sign-in-btn");
const inSignForm = document.querySelector("#sign-in-form");
const closeInBtn = document.querySelector("#closer-in");
// sign in event
inSignBtn.addEventListener("click", function () {
  inSignForm.classList.remove("hidden");
});
closeInBtn.addEventListener("click", function () {
  inSignForm.classList.add("hidden");
});

// sign up btn
const upSignBtn = document.querySelector("#sign-up-btn");
const upSignForm = document.querySelector("#sign-up-form");
const closeUpBtn = document.querySelector("#closer-up");
// sign up event
upSignBtn.addEventListener("click", function () {
  upSignForm.classList.remove("hidden");
});
closeUpBtn.addEventListener("click", function () {
  upSignForm.classList.add("hidden");
});
