const hamMenu = document.querySelector(".buttonCompactMenu");

const offScreenMenu = document.querySelector(".offScreenMenu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});

document.addEventListener("click", (event) => {
	// Verifica se o clique foi fora do menu e do botão
	if (
		!hamMenu.contains(event.target) &&
		!offScreenMenu.contains(event.target)
	) {
		// Remove a classe "active" se o menu estiver aberto
		if (offScreenMenu.classList.contains("active")) {
			hamMenu.classList.remove("active");
			offScreenMenu.classList.remove("active");
		}
	}
});