const hamMenu = document.querySelector(".buttonCompactMenu");

const offScreenMenu = document.querySelector(".offScreenMenu");

hamMenu.addEventListener("click", () => {
	hamMenu.classList.toggle("active");
	offScreenMenu.classList.toggle("active");
});

document.addEventListener("click", (event) => {
	if (
		!hamMenu.contains(event.target) &&
		!offScreenMenu.contains(event.target)
	) {
		if (offScreenMenu.classList.contains("active")) {
			hamMenu.classList.remove("active");
			offScreenMenu.classList.remove("active");
		}
	}
});
