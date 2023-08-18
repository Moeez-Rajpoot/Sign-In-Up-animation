const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const conbox = document.querySelector(".con-box");

sign_up_btn.addEventListener("click", () => {
  conbox.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  conbox.classList.remove("sign-up-mode");
});
