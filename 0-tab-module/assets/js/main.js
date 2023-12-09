const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabItem = $$(".tab-item");
const tabPane = $$(".tab-pane");

tabItem.forEach((tab, index) => {
    tab.onclick = function () {
        console.log(this);
        const pane = tabPane[index];

        $(".tab-item.active").classList.remove("active");
        $(".tab-pane.active").classList.remove("active");

        this.classList.add("active");
        pane.classList.add("active");
    };
    // tab.addEventListener("click", () => {
    //     console.log(e);
    //     const pane = tabPane[index];
    //     const tabActive = tabItem[index];
    //     $(".tab-item.active").classList.remove("active");
    //     $(".tab-pane.active").classList.remove("active");

    //     tabActive.classList.add("active");
    //     pane.classList.add("active");
    // });
});
