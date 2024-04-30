const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const imgWrap = document.querySelector(".img-wrap img");
const listDivImg = document.querySelectorAll(".list-img div");

let currentIndex = 0;
setCurrent(currentIndex);

function setCurrent(idx) {
    currentIndex = idx;
    imgWrap.src = listDivImg[idx].querySelector("img").src;

    listDivImg.forEach((e) => {
        e.classList.remove("active");
    });

    listDivImg[idx].classList.add("active");
}

listDivImg.forEach((img, idx) => {
    img.addEventListener("click", (e) => {
        setCurrent(idx);
    });
});

prevBtn.addEventListener("click", function (e) {
    if (currentIndex === 0) {
        currentIndex = listDivImg.length - 1;
    } else {
        currentIndex--;
    }
    setCurrent(currentIndex);
});
nextBtn.addEventListener("click", function (e) {
    if (currentIndex === listDivImg.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    setCurrent(currentIndex);
});
