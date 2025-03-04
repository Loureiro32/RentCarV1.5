document.addEventListener("DOMContentLoaded", () => {
	const filterButtons = {
		price: document.querySelector(".priceBtn"),
		carType: document.querySelector(".carTypeBtn"),
		brand: document.querySelector(".brandBtn"),
		seats: document.querySelector(".seatsBtn"),
		fuel: document.querySelector(".fuelBtn"),
	};

	const dropdowns = {
		price: document.querySelector(".priceDropdown"),
		carType: document.querySelector(".carTypeDropdown"),
		brand: document.querySelector(".brandDropdown"),
		seats: document.querySelector(".seatsDropdown"),
		fuel: document.querySelector(".fuelDropdown"),
	};

	// Handle button clicks
	Object.keys(filterButtons).forEach((key) => {
		filterButtons[key].addEventListener("click", (event) => {
			event.stopPropagation();
			// Hide all other dropdowns
			Object.values(dropdowns).forEach((dropdown) => {
				if (dropdown && dropdown !== dropdowns[key]) {
					dropdown.classList.add("hidden");
				}
			});

			// Toggle current dropdown
			dropdowns[key]?.classList.toggle("hidden");

			// Rotate arrow icon
			const img = filterButtons[key].querySelector("img");
			img.style.transform = dropdowns[key]?.classList.contains("hidden")
				? "rotate(0deg)"
				: "rotate(180deg)";
		});
	});

	// Close dropdowns when clicking outside
	document.addEventListener("click", (e) => {
		if (
			!e.target.closest(".filters") &&
			!e.target.closest(".dropdownContainers")
		) {
			Object.values(dropdowns).forEach((dropdown) => {
				if (dropdown) dropdown.classList.add("hidden");
			});
			Object.values(filterButtons).forEach((button) => {
				const img = button.querySelector("img");
				img.style.transform = "rotate(0deg)";
			});
		}
	});
});
