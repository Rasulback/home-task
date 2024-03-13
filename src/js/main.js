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
})
let shopping = document.querySelector('.shoppingList');

document.querySelectorAll('.js-add-btn').forEach((button)=>{
    button.addEventListener('click',()=>{
        const productName = button.dataset.productName
        const productPrice =  button.dataset.productPrice
        let productQuantity = 0;
        let productTotalPrice = 0;

        if (productName === productName){
            productQuantity++
        }

        if (productName !== productName ){
            shopping.innerHTML += `
             <tr>
                    <td>${productName}</td>
                    <td>${productQuantity}</td>
                    <td>${productPrice}</td>
                    <td>${productTotalPrice}</td>
                    <td>
                        <button class="btn btn-danger js-remove-btn">Remove</button>
                    </td>
             </tr>
            `
        }


    })
})
