const menushkaIcon = document.querySelector(".menushka-icon");
const navbar = document.querySelector(".navbar");

menushkaIcon.addEventListener("click", () => {
    navbar.classList.toggle("change")
})