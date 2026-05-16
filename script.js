const btn_navbar = document.querySelector(".navbar__btn-icon")
const navbar_list = document.querySelector(".navbar__list");

btn_navbar.addEventListener ("click", () => {
    navbar_list.classList.toggle("navbar__list-on");
    console.log("helo")
})