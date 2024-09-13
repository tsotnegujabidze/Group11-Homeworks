function addToCart(button) {
    const productImage = button.parentElement.querySelector('img').src;
    const cartItemImage = document.createElement('img');
    cartItemImage.src = productImage;

    cartItemImage.classList.add('cart-item');
    const cartSection = document.getElementById('cart-section');
    cartSection.appendChild(cartItemImage);
    cartItemImage.style.width = "200px";
}


function toggleCart() {
    const cartSection = document.getElementById('cart-section');
    if (cartSection.style.display === 'none' || cartSection.style.display === '') {
        cartSection.style.display = 'block';
    } else {
        cartSection.style.display = 'none';
    }
}
