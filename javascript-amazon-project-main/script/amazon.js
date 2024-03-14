
products.push(
    {
        id: "32",
        image: "https://m.media-amazon.com/images/I/61gq+-U+rPL._AC_UL320_.jpg",
        name: "Apple iPhone 15 Pro Max, 256GB, Natural Titanium - Unlocked (Renewed)",
        rating: {
            stars: 4,
            count: 55
        },
        priceCents: 112000,
    },
    {
        id: "34",
        image: "https://m.media-amazon.com/images/I/71ZU+8Lv-2L._AC_UL320_.jpg",
        name: "Magnetic Case for Samsung Galaxy S24 Ultra Case,Compatible with MagSafe,Full Camera Protection...",
        rating: {
            stars: 5,
            count: 3
        },
        priceCents: 1299,
    },
    {
        id: "35",
        image: "https://m.media-amazon.com/images/I/81ledKS6NNL._AC_UL320_.jpg",
        name: "Vbepos Mobile Game Controller, Upgrade 2.4G & Bluetooth Wireless Gamepad for iPhone/Android/PC Windows/...",
        rating: {
            stars: 4.5,
            count: 149
        },
        priceCents: 10000,
    })

let html = ''
products.forEach((item)=>{
    html += `
    <div class="product-container">
        <div class="product-image-container">
            <img class="product-image"
                 src="${item.image}" alt="image">
        </div>

        <div class="product-name limit-text-to-2-lines">
            ${item.name}
        </div>

        <div class="product-rating-container">
            <img class="product-rating-stars"
                 src="images/ratings/rating-${item.rating.stars * 10}.png">
                <div class="product-rating-count link-primary">
                    ${item.rating.count}
                </div>
        </div>

        <div class="product-price">
            $${item.priceCents / 100}
        </div>

        <div class="product-quantity-container">
            <select>
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
        </div>

        <div class="product-spacer"></div>

        <div class="added-to-cart js-added-btn">
            <img src="images/icons/checkmark.png" alt="image">
                Added
        </div>

        <button class="add-to-cart-button button-primary js-add-btn" data-product-name="${item.name}" data-product-price="${item.priceCents}">
            Add to Cart
        </button>
    </div>
    `
})
document.querySelector('.products-grid').innerHTML = html

const btnAddToCart = document.querySelectorAll('.js-add-btn')

btnAddToCart.forEach((button)=>{
    button.addEventListener('click',()=>{
        const productName = button.dataset.productName
        const productPrice = button.dataset.productPrice
        const selectValue = button.parentElement.querySelector('.product-quantity-container select').value
        let matchingItem;

        cart.forEach((item)=>{
            if (item.productName === productName){
                matchingItem = item
            }
        })

        if (matchingItem){
            matchingItem.quantity += parseInt(selectValue)
        }else {
            cart.push({
                productName: productName,
                price: parseInt(productPrice),
                quantity: parseInt(selectValue),
            })
        }

        const added = button.parentElement.querySelector('.added-to-cart')
        added.style.opacity = '100'
        setTimeout(()=>{
            added.style.opacity = '0'
        },2000)
        console.log(cart)
    })
})







