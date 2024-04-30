const $ = document.querySelector.bind(document);
const searchBox = $(".search-box");
const btn = $(".search-btn");

btn.onclick = function () {
    searchBox.classList.toggle("open");
    this.previousElementSibling.focus();
};
