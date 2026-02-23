const body = document.getElementById("body")
const menuIcon = document.getElementById("menu-icon")
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

const setInert = (el, inert) => {
    if (!el) return;

    // check if browser supports native API
    if ('inert' in HTMLElement.prototype) {
        // set the native property to true/false - the subtree becomes non-interactive
        el.inert = inert;
    } else {
        // polyfill listens for attribute changes
        if (inert) el.setAttribute('inert', '');
        else el.removeAttribute('inert');
    }

    el.setAttribute('aria-hidden', inert ? 'true' : 'false');
};

const toggleMenu = () => {
    console.log("menu toggled")

    if (menuBtn.getAttribute("aria-expanded") === "false") {
        menuBtn.setAttribute("aria-expanded", true)
        setInert(mobileMenu, false);
    }
    else {
        menuBtn.setAttribute("aria-expanded", false)
        setInert(mobileMenu, true);
    }

    // Toggle classes
    body.classList.toggle("h-screen")
    menuIcon.classList.toggle("fa-bars")
    menuIcon.classList.toggle("fa-close")
    mobileMenu.classList.toggle("translate-100")
    mobileMenu.classList.toggle("translate-0")
}

menuBtn.addEventListener("click", toggleMenu)
