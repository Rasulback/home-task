import {products} from "../data/products.js";
import {cart,saveCartToLocalStorage} from "../data/cart.js";

// Отображение продуктов
let foodHtml = '';
products.forEach((item) => {
    foodHtml += `
        <div class="food__list js-add-button" data-product-name="${item.name}" data-product-price="${item.price}">
            <div class="food__card">
                <span class="food__image-container">
                    <img src="${item.image}" alt="${item.name}" class="food__image">
                </span>
                <p class="food__name">
                    ${item.name}
                    <br>
                    <span class="food__price">KGZ${item.price}</span>
                </p>
            </div>
        </div>
    `;
});
document.querySelector('.js-food-menu').innerHTML = foodHtml;

// Добавление продуктов в корзину
const addToCartBtn = document.querySelectorAll('.js-add-button');
addToCartBtn.forEach((item) => {
    item.addEventListener('click', (button) => {
        const productName = item.dataset.productName;
        const productPrice = item.dataset.productPrice;
        let matchingItem;

        cart.forEach((cartItem) => {
            if (cartItem.name === productName) {
                matchingItem = cartItem;
            }
        });

        if (matchingItem) {
            matchingItem.quantity++;
        } else {
            cart.push({
                name: productName,
                price: productPrice,
                quantity: 1,
            });
        }

        updateCart();
    });
});

// Обновление корзины
function updateCart() {
    let totalCount = 0;
    let totalSum = 0;
    let orderListContainer = '';

    cart.forEach((item) => {
        totalCount += item.quantity;
        totalSum += item.quantity * item.price;

        orderListContainer += `
            <div class="order__list">
                <div class="order__cart">
                    <p class="order__name">${item.name}</p>
                    <p class="order__price">
                        ${item.quantity}*KGZ${item.price}
                    </p>
                    <img src="./images/icons/remove.png" alt="delete button" class="order__remove" data-product-name="${item.name}">
                </div>
            </div>
        `;
    });

    document.querySelector('.js-order-info').innerText = totalCount;
    document.querySelector('.order__sum').innerText = `Sum: KGZ${totalSum}`;
    document.querySelector('.order__list-container').innerHTML = orderListContainer;

    // Добавление обработчика событий для кнопки удаления
    const removeFromCartBtn = document.querySelectorAll('.order__remove');
    removeFromCartBtn.forEach((item) => {
        item.addEventListener('click', (button) => {
            const productName = item.dataset.productName;
            const index = cart.findIndex((cartItem) => cartItem.name === productName);
            if (index > -1) {
                cart.splice(index, 1);
            }

            updateCart();
        });
    });

    saveCartToLocalStorage();
}
