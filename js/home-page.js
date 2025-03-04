const hamMenu = document.querySelector(".buttonCompactMenu");

const offScreenMenu = document.querySelector(".offScreenMenu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});