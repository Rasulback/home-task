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

const productList  = document.querySelector('.productList');

products.forEach((item)=>{
    productList.innerHTML += `
     <div class="card text-center p-2" style="width: 18rem;">
         <img src="./src/images/phone.png" class="card-img-top m-auto" style="width: 100px" alt="Phone">
         <div class="card-body">
             <p class="product-name card-title fw-bold" data-product-name="${item.name}">${item.name}</p>
             <p class="product-price text-danger" data-product-price="${item.price}">${item.price}</p>
             <a href="#" class="btn btn-warning">Add to Cart</a>
         </div>
     </div>
          
`
})
const addBtn = document.querySelector('.btn-warning');
let shopping = document.querySelector('.shoppingList');

addBtn.addEventListener('click',()=>{
    const productName = document.querySelector('.product-name').dataset.productName
    const productPrice = document.querySelector('.product-price').dataset.productPrice
    let totalPrice = 0;
    totalPrice += +productPrice
    shopping.innerHTML += `
     <tr>
            <td>${productName}</td>
            <td>1</td>
            <td>${productPrice}</td>
            <td>${totalPrice}</td>
            <td>
                <button class="btn btn-danger">Remove</button>
            </td>
     </tr>
    `
})