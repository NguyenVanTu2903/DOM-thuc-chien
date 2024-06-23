const iconCart = document.querySelector(".iconCart");
const cart = document.querySelector(".cart");
const container = document.querySelector(".container");
const close = document.querySelector(".close");

iconCart.addEventListener("click", () => {
    if (cart.style.right === "-100%") {
        cart.style.right = "0%";
        container.style.transform = "translateX(-400px)";
    } else {
        cart.style.right = "-100%";
        container.style.transform = "translateX(0)";
    }
});

close.addEventListener("click", () => {
    cart.style.right = "-100%";
    container.style.transform = "translateX(0)";
});

let products = null;
// get data from file json
fetch("product.json")
    .then((responsive) => responsive.json())
    .then((data) => {
        products = data;
        addDataToHTML();
    });

// show datas in list html
function addDataToHTML() {
    // remove datas default in html
    let listProductHTML = document.querySelector(".listProduct");
    listProductHTML.innerHTML = "";
    // add new datas
    if (products != null) {
        products.forEach((product) => {
            let newProduct = document.createElement("div");
            newProduct.classList.add("item");
            newProduct.innerHTML = `<img src="${product.image}" alt="product${product.id}" />
                    <h2 class="name">${product.name}</h2>
                    <div class="price">$${product.price}</div>
                    <button onclick="addCart(${product.id})">Add to Cart</button>`;
            listProductHTML.appendChild(newProduct);
        });
    }
}

let listCart = [];
//get datas in cookie
function checkCart() {
    let cookieValue = document.cookie
        .split("; ")
        .find((row) => row.startsWith("listCart="));
    if (cookieValue) {
        listCart = JSON.parse(cookieValue.split("=")[1]);
    } else {
        listCart = [];
    }
    // document.cookie =
    //     "listCart=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
checkCart();
function addCart($idProduct) {
    let productCopy = products;
    // check product is in the cart
    if (!listCart[$idProduct]) {
        listCart[$idProduct] = productCopy.filter(
            (product) => product.id == $idProduct
        )[0];

        console.log(
            productCopy.filter((product) => product.id == $idProduct)[0]
        );
        console.log(productCopy.filter((product) => product.id == $idProduct));
        listCart[$idProduct].quantity = 1;
    } else {
        listCart[$idProduct].quantity++;
    }
    //sava datas cart in cookie
    let timeSave = "expires=Thu, 31 Dec 9999 23:59:59 UTC";
    document.cookie =
        "listCart=" + JSON.stringify(listCart) + "; " + timeSave + "; path=/;";

    addCartToHTML();
}
addCartToHTML();
function addCartToHTML() {
    let listCartHTML = document.querySelector(".listCart");
    listCartHTML.innerHTML = "";

    let totalHTML = document.querySelector(".totalQuantity");
    let totalQuantity = 0;
    if (listCart) {
        listCart.forEach((product) => {
            if (product) {
                let newCart = document.createElement("div");
                newCart.classList.add("item");
                newCart.innerHTML = `<img src="${product.image}" alt="product${product.id}" />
                    <div class="content">
                        <div class="name">${product.name}</div>
                        <div class="price">$${product.price}/1 product</div>
                    </div>
                    <div class="quantity">
                        <button onclick="changeQuantity(${product.id},'-')">-</button>
                        <span class="value">${product.quantity}</span>
                        <button onclick="changeQuantity(${product.id},'+')">+</button>
                    </div>`;
                listCartHTML.appendChild(newCart);
                totalQuantity = totalQuantity + product.quantity;
            }
        });
    }
    totalHTML.innerText = totalQuantity;
}

function changeQuantity($idProduct, $type) {
    switch ($type) {
        case "+":
            listCart[$idProduct].quantity++;
            break;

        case "-":
            listCart[$idProduct].quantity--;
            if (listCart[$idProduct].quantity <= 0) {
                delete listCart[$idProduct];
            }
            break;
        default:
            break;
    }
    //save
    let timeSave = "expires=Fri, 31 Dec 9999 23:59:59 UTF";
    document.cookie =
        "listCart=" + JSON.stringify(listCart) + "; " + timeSave + "; path=/";

    // reload
    addCartToHTML();
}
