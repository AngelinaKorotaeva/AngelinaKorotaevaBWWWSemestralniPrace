const wrapper = document.querySelector(".wrapper.login"),
    signUp = document.querySelector(".signUp-link"),
    login = document.querySelector(".login-link");

signUp.addEventListener("click", () => {
    wrapper.classList.add("active");
})

login.addEventListener("click", () => {
    wrapper.classList.remove("active");
})