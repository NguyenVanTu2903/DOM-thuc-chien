const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    toggle.addEventListener("click", function () {
        nav.classList.toggle("show-menu");
        console.log(this);
        this.classList.toggle("show-icon");
    });
};

showMenu("nav_toggle", "nav_menu");
