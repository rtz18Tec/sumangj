document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cartItemsList = document.getElementById('cart-items');
    const cartTotalSpan = document.getElementById('cart-total');
    const cartCountSpan = document.getElementById('cart-count');
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartIcon = document.getElementById('cart-icon');
    const closeCartBtn = document.getElementById('close-cart-btn'); 
    const checkoutBtn = document.getElementById('checkout-btn');
    let cart = JSON.parse(localStorage.getItem('cart')) || []; 

    function saveCart(){
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function updateCartDisplay(){
        cartItemsList.innerHTML = '';
        let total = 0;
        let itemCount = 0;

        cart.forEach(item => {
            const li = document.createElement('li');

            li.innerHTML = `
                <div class="item-info">
                    <span>${item.name}</span>
                    <span>s/${item.price.toFixed(2)}</span>
                </div>
                <div class="cart-quantity-controls">
                    <button class="cart-decrement-btn" data-name="${item.name}">-</button>
                    <input type="number" class="cart-quantity-input" value="${item.quantity}" min="1" data-name="${item.name}" readonly>
                    <button class="cart-increment-btn" data-name="${item.name}">+</button>
                </div>
                <span>s/${(item.price * item.quantity).toFixed(2)}</span>
                <button class="remove-from-cart-btn" data-name="${item.name}">Eliminar</button>
            `;

            cartItemsList.appendChild(li);
            total += item.price * item.quantity;
            itemCount += item.quantity;
        });

        cartTotalSpan.textContent = total.toFixed(2);
        cartCountSpan.textContent = itemCount;
        saveCart();
    }

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productName = event.target.dataset.name;
            const productPrice = parseFloat(event.target.dataset.price);
            
            const quantityToAdd = 1; 

            const existingItem = cart.find(item => item.name === productName);

            if (existingItem) {
                existingItem.quantity += quantityToAdd;
            } else {
                cart.push({ name: productName, price: productPrice, quantity: quantityToAdd });
            }
            updateCartDisplay();
        });
    });

    cartItemsList.addEventListener('click', (event) => {
        const target = event.target;

        if (target.classList.contains('cart-increment-btn')) {
            const productName = target.dataset.name;
            const item = cart.find(i => i.name === productName);
            if (item) {
                item.quantity++;
                updateCartDisplay();
            }
        } else if (target.classList.contains('cart-decrement-btn')) {
            const productName = target.dataset.name;
            const item = cart.find(i => i.name === productName);
            if (item) {
                if (item.quantity > 1) {
                    item.quantity--;
                } else {
                    cart = cart.filter(i => i.name !== productName);
                }
                updateCartDisplay();
            }
        } else if (target.classList.contains('remove-from-cart-btn')) {
            const productName = target.dataset.name;
            cart = cart.filter(item => item.name !== productName);
            updateCartDisplay();
        }
    });

    cartIcon.addEventListener('click', () => {
        cartSidebar.classList.toggle('open');
    });

    closeCartBtn.addEventListener('click', () => {
        cartSidebar.classList.remove('open');
    });

    checkoutBtn.addEventListener('click', () => {
        if (cart.length > 0) {
            alert('¡Gracias por tu compra!');
            cart = [];
            updateCartDisplay();
            cartSidebar.classList.remove('open');
        } else {
            alert('Tu carrito está vacío. Agrega algunos productos antes de comprar.');
        }
    });

    updateCartDisplay();
});