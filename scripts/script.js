document.addEventListener("scroll", function () {
    let menu = document.querySelector(".menu-sticky");
    if (window.scrollY > 450) {
        menu.classList.remove("animate__fadeOutRight")
        menu.classList.add("menu-scroll");
    }
    else{
        menu.classList.add("animate__fadeOutRight")
    }
    // if(window.scrollY <50) {
    //     menu.classList.add("animate__fadeOutRight")
    //     menu.classList.remove("menu-scroll"); 
    // }
});
