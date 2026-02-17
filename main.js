const body = document.getElementById("body")
const menuIcon = document.getElementById("menu-icon")
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");


const toggleMenu = () => {
    console.log("menu toggled")

    if (menuBtn.getAttribute("aria-expanded") === "false") {
        menuBtn.setAttribute("aria-expanded", true)
        console.log("opened")
    }
    else {
        menuBtn.setAttribute("aria-expanded", false)
        console.log("closed")
    }

    // Toggle classes
    body.classList.toggle("h-screen")
    menuIcon.classList.toggle("fa-bars")
    menuIcon.classList.toggle("fa-close")
    mobileMenu.classList.toggle("translate-100")
    mobileMenu.classList.toggle("translate-0")
}

menuBtn.addEventListener("click", toggleMenu)
