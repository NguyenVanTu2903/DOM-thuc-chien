const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const inputValue = $(".content input");
const btnRemoveAll = $(".btn-removeAll");
const tabList = $$(".tabs");

inputValue.addEventListener("input", (e) => {
    const result = e.target.value;
    console.log(result);
});
tabList.forEach(function (e) {});

console.log(inputValue);
