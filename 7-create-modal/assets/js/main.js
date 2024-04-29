const btn = document.querySelector(".btn");
const modal = document.querySelector(".modal");
const btnClose = document.querySelector(".modal-footer button");
const iconClose = document.querySelector(".modal-header i");

function toggleModal() {
    modal.classList.toggle("hide");
}

btn.addEventListener("click", toggleModal);

btnClose.addEventListener("click", toggleModal);

iconClose.addEventListener("click", toggleModal);

modal.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) toggleModal();
});
