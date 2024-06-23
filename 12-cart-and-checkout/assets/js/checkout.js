listCart = [];
// get datas in cookie
function checkCart() {
    let cookieValue = document.cookie
        .split()
        .find((row) => row.startsWith("listCart="));

    if (cookieValue) {
        listCart = JSON.parse(cookieValue.split("=")[1]);
    } else {
        listCart = [];
    }
    console.log(listCart);
}
checkCart();
addCartToHTML();
function addCartToHTML() {
    let listCartHTML = document.querySelector(".returnCart .list");
    listCartHTML.innerHTML = "";

    let totalQuantityHTML = document.querySelector(".totalQuantity");
    let totalPriceHTML = document.querySelector(".totalPrice");

    totalQuantity = 0;
    totalPrice = 0;

    if (listCart) {
        listCart.forEach((product) => {
            if (product) {
                let newCart = document.createElement("div");
                newCart.classList.add("item");
                newCart.innerHTML = `<img src="${product.image}" alt="Product ${
                    product.id
                }" />
                            <div class="info">
                                <div class="name">PRODUCT ${product.id}</div>
                                <div class="price">$${
                                    product.price
                                }/1 Product</div>
                            </div>
                            <div class="quantity">${product.quantity}</div>
                            <div class="returnPrice">$${
                                product.price * product.quantity
                            }</div>`;

                listCartHTML.appendChild(newCart);
                totalQuantity = totalQuantity + product.quantity;
                totalPrice = totalPrice + product.price * product.quantity;
            }
        });
        totalQuantityHTML.innerText = totalQuantity;
        totalPriceHTML.innerText = `$${totalPrice}`;
    }
}
