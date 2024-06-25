const filter = document.querySelector(".filter");
const count = document.querySelector(".count");
const list = document.querySelector(".list");

getData();
// get data from file json
async function getData() {
    const res = await fetch("product.json");
    const data = await res.json();
    showProduct(data);
    return data;
}
async function showProduct(filterProduct) {
    count.innerText = filterProduct.length;
    list.innerHTML = "";
    filterProduct.forEach((item) => {
        let newItem = document.createElement("div");
        newItem.classList.add("item");

        // create image
        let newCover = document.createElement("div");
        newCover.classList.add("cover");
        newItem.appendChild(newCover);

        let newImage = new Image();
        newImage.src = item.image;
        newCover.appendChild(newImage);

        // create title
        let newName = document.createElement("div");
        newName.classList.add("title");
        newName.innerText = item.name;
        newItem.appendChild(newName);

        // create price
        let newPrice = document.createElement("div");
        newPrice.classList.add("price");
        newPrice.innerText = item.price;
        newItem.appendChild(newPrice);

        list.appendChild(newItem);
    });
}

filter.addEventListener("submit", async (product) => {
    product.preventDefault();
    let result = product.target.elements;
    const data = await getData();

    filterProduct = data.filter((item) => {
        if (result.category.value !== "") {
            if (result.category.value !== item.nature.type) {
                return false;
            }
        }

        if (result.color.value !== "") {
            if (!item.nature.color.includes(result.color.value)) {
                return false;
            }
        }

        if (result.name.value !== "") {
            if (!item.name.includes(result.name.value)) {
                return false;
            }
        }

        if (result.minPrice.value !== "") {
            if (item.price < result.minPrice.value) {
                return false;
            }
        }

        if (result.maxPrice.value !== "") {
            if (item.price > result.maxPrice.value) {
                return false;
            }
        }

        return true;
    });
    showProduct(filterProduct);
});
