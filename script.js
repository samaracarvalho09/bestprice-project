const buttonOpenSignUpModal = document.getElementById("buttonOpenSignUpModal");
const signUpModal = document.getElementById("signUpModal");
const buttonCloseSignUpModal = document.getElementById("buttonCloseSignUpModal");

buttonOpenSignUpModal.onclick = () => {
  signUpModal.style.display = "flex";
};

buttonCloseSignUpModal.onclick = () => {
  signUpModal.style.display = "none";
};

signUpModal.onclick = (event) => {
  if (event.target !== event.currentTarget) {
    return;
  }

  signUpModal.style.display = "none";
};

const buttonOpenLoginModal = document.getElementById("buttonOpenLoginModal");
const loginModal = document.getElementById("loginModal");
const buttonCloseLoginModal = document.getElementById("buttonCloseLoginModal");

buttonOpenLoginModal.onclick = () => {
  loginModal.style.display = "flex";
};

buttonCloseLoginModal.onclick = () => {
  loginModal.style.display = "none";
};

loginModal.onclick = (event) => {
  if (event.target !== event.currentTarget) {
    return;
  }

  loginModal.style.display = "none";
};
