const body = document.querySelector("body");
const range = document.querySelector(".range");
const rangeBar = document.querySelector(".range-bar");

function setRangeBar(percent) {
    rangeBar.style.width = `${percent}%`;
    rangeBar.querySelector("span").innerText = `${percent}%`;
    body.style.backgroundColor = `rgba(0,0,0,${percent / 100})`;
}
setRangeBar(15);

range.addEventListener("mousemove", function (e) {
    const process = e.pageX - this.offsetLeft;
    let percent = Math.ceil((process / this.offsetWidth) * 100);

    setRangeBar(percent);
});
