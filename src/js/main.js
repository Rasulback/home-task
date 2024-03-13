// first section start
const products = [
    {
        name: 'Honor 9 lite (Sapphire Blue, 64 GB)(4 GB RAM)',
        price: 14499,
    },
    {
        name: 'Infinix Hot S3 (Sandstone Black, 32 GB)(3 GB RAM)',
        price: 8999,
    },
    {
        name: 'VIVO V9 Youth (Gold, 32 GB)(4 GB RAM)',
        price: 16990,
    },
];

let productList  = document.querySelector('.productList');
let shopping = document.querySelector('.shoppingList');
let shoppingCart = {};

products.forEach((item)=>{
    productList.innerHTML += `
     <div class="card text-center p-2" style="width: 18rem;">
         <img src="./src/images/phone.png" class="card-img-top m-auto" style="width: 100px" alt="Phone">
         <div class="card-body">
             <p class="product-name card-title fw-bold" >${item.name}</p>
             <p class="product-price text-danger" >${item.price}</p>
             <a href="#" class="btn btn-warning js-add-btn" data-product-name="${item.name}" data-product-price="${item.price}">Add to Cart</a>
         </div>
     </div>
    `
});

document.querySelectorAll('.js-add-btn').forEach((button)=>{
    button.addEventListener('click', (event)=>{
        event.preventDefault();
        const productName = button.dataset.productName;
        const productPrice =  button.dataset.productPrice;
        let totalPrice = document.querySelector('.totalPrice');

        if (shoppingCart[productName]) {
            shoppingCart[productName].quantity++;
        } else {
            shoppingCart[productName] = {
                price: productPrice,
                quantity: 1
            };
        }

        shoppingCart[productName].totalPrice = shoppingCart[productName].price * shoppingCart[productName].quantity;

        shopping.innerHTML = '';
        let totalCartPrice = 0;
        for (let product in shoppingCart) {
            totalCartPrice += shoppingCart[product].totalPrice;
            shopping.innerHTML += `
             <tr>
                    <td>${product}</td>
                    <td>${shoppingCart[product].quantity}</td>
                    <td>${shoppingCart[product].price}</td>
                    <td>${shoppingCart[product].totalPrice}</td>
                    <td>
                        <button class="btn btn-danger js-remove-btn" data-product-name="${product}">Remove</button>
                    </td>
             </tr>
            `;
        }
        totalPrice.textContent = totalCartPrice;

        document.querySelectorAll('.js-remove-btn').forEach((button)=>{
            button.addEventListener('click', (event)=>{
                event.preventDefault();
                const productName = button.dataset.productName;
                delete shoppingCart[productName];
                button.parentElement.parentElement.remove();
                let totalCartPrice = 0;
                for (let product in shoppingCart) {
                    totalCartPrice += shoppingCart[product].totalPrice;
                }
                totalPrice.textContent = totalCartPrice;
            })
        });
    })
});
// first section end

// second section start
const plusBtn = document.querySelectorAll('.plusBtn');
const minusBtn = document.querySelectorAll('.minusBtn');
const deleteBtn = document.querySelectorAll('.deleteBtn');
let totalCost = document.querySelector('.totalCost');

plusBtn.forEach((btn, index) => {
    btn.addEventListener('click', ()=>{
        let quantity = document.querySelectorAll('.quantity')[index];
        if (quantity.textContent < 5) {
            quantity.textContent++;
            totalCost.textContent = quantity.textContent * 100;
            localStorage.setItem('quantity', quantity.textContent);
            localStorage.setItem('totalCost', totalCost.textContent);
        }
    });
});

minusBtn.forEach((btn, index) => {
    btn.addEventListener('click', ()=>{
        let quantity = document.querySelectorAll('.quantity')[index];
        if (quantity.textContent > 0) {
            quantity.textContent--;
            totalCost.textContent = quantity.textContent * 100;
            localStorage.setItem('quantity', quantity.textContent);
            localStorage.setItem('totalCost', totalCost.textContent);
        }
    });
});

deleteBtn.forEach((btn, index) => {
    btn.addEventListener('click', ()=>{
        let quantity = document.querySelectorAll('.quantity')[index];
        quantity.textContent = 0;
        totalCost.textContent = 0;
        localStorage.setItem('quantity', quantity.textContent);
        localStorage.setItem('totalCost', totalCost.textContent);
    });
});

window.onload = function() {
    let quantity = document.querySelector('.quantity');
    let totalCost = document.querySelector('.totalCost');
    quantity.textContent = localStorage.getItem('quantity') || 0;
    totalCost.textContent = localStorage.getItem('totalCost') || 0;
};
// second section end