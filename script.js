const hamburger = document.querySelector(".hamburger-menu");
const navigation = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
  navigation.classList.toggle("hidden");
});
