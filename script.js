// Script for navigation bar

const bar = document.querySelector("#bar");
const navBar = document.querySelector(".navbar");
const cancel = document.querySelector(".fa-times");

if (bar) {
	bar.addEventListener("click", function () {
		navBar.classList.add("active");
		document.querySelector(".fa-shopping-bag").classList.add("hide");
	});
}

cancel.addEventListener("click", function () {
	navBar.classList.remove("active");
});
