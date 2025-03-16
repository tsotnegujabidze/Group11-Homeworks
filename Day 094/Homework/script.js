const productsContainer = document.getElementById('products');
const cartContainer = document.getElementById('cart');


const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
    { id: 4, name: 'Product 4', price: 400 },
]

function addToCart(product) {
    const cartItem = document.createElement('div');
    cartItem.textContent = `${product.name} - $${product.price}`;
    cartContainer.appendChild(cartItem);
}


for(let i = 0; i < products.length; i++) {
    const product = products[i];

    const productElement = document.createElement('div');

    

    const h2 = document.createElement('h2');
    h2.textContent = product.name;

    productElement.appendChild(h2);

    const btn = document.createElement('button');
    btn.textContent = 'Add to Cart';
    btn.onclick = function() {
        addToCart(product);
    }

    productElement.appendChild(btn);


    productsContainer.appendChild(productElement)
}