
let productsHtml = ''
products.forEach((item)=>{
    const starsCount= item.rating.stars * 10;
    const priceCents = item.priceCents / 100
    productsHtml += `
   <div class="product-container">
      <div class="product-image-container">
        <img class="product-image"
          src="${item.image}">
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${item.name}
      </div>

      <div class="product-rating-container">
        <img class="product-rating-stars"
          src="images/ratings/rating-${starsCount}.png">
        <div class="product-rating-count link-primary">
          ${item.rating.count}
        </div>
      </div>

      <div class="product-price">
        $${priceCents}
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

      <div class="added-to-cart">
        <img src="images/icons/checkmark.png">
        Added
      </div>

      <button class="add-to-cart-button button-primary js-add-button" data-product-id="${item.id}">
        Add to Cart
      </button>
    </div>
    `

})

document.querySelector('.products-grid').innerHTML = productsHtml

const addToCartBtn = document.querySelectorAll('.js-add-button')

addToCartBtn.forEach((button)=>{
    button.addEventListener('click',()=>{
        const productId = button.dataset.productId
        const selectValue = button.parentElement.querySelector('.product-quantity-container select').value
        let matchingItem;
        cart.forEach((item)=>{
            if (item.productId === productId){
                matchingItem = item
            }
        })
        if (matchingItem){
            matchingItem.quantity += parseInt(selectValue)
        }else {
            cart.push({
                productId: productId,
                quantity: parseInt(selectValue),
            })
        }
        let totalCount = 0
        cart.forEach((item)=>{
            totalCount = item.quantity
        })
        document.querySelector('.cart-quantity').innerHTML = totalCount

        const added = button.parentElement.querySelector('.added-to-cart')
        added.style.opacity = '100'
        setTimeout(()=>{
            added.style.opacity = '0'
        },2000)
    })
})

