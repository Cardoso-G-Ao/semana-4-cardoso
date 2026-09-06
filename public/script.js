window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    
    if (window.scrollY > 50) {
        header.classList.add("rolado");
        header.classList.remove("transparente");
    } else {
        header.classList.remove("rolado");
        header.classList.add("transparente");
    }
});