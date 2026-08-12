// ============================================================
//  MENU DATA (22 items with images)
// ============================================================
const menuData = [
    // ----- BURGERS -----
    {
        id: 1,
        name: 'Beast Beef Burger',
        desc: 'Juicy flame-grilled beef, cheddar, crisp lettuce, tomato, and smoky chipotle sauce.',
        price: 750,
        category: 'burgers',
        emoji: '🍔',
        image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=250&fit=crop&crop=center'
    },
    {
        id: 2,
        name: 'Chicken Supreme',
        desc: 'Crispy fried chicken fillet, pepper jack, jalapeños, and tangy garlic mayo.',
        price: 650,
        category: 'burgers',
        emoji: '🐔',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=250&fit=crop&crop=center'
    },
    {
        id: 3,
        name: 'Double Decker',
        desc: 'Two beef patties, double cheese, caramelised onions, and secret Zaiqa sauce.',
        price: 890,
        category: 'burgers',
        emoji: '🍔',
        image: 'images/decker.jpg'
    },
    {
        id: 4,
        name: 'Jalapeño Heat',
        desc: 'Spicy beef patty, fresh jalapeños, pepper jack, and habanero aioli.',
        price: 700,
        category: 'burgers',
        emoji: '🌶️',
        image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=250&fit=crop&crop=center'
    },
    {
        id: 5,
        name: 'Mushroom Swiss',
        desc: 'Beef patty topped with sautéed mushrooms, Swiss cheese, and truffle mayo.',
        price: 800,
        category: 'burgers',
        emoji: '🍄',
        image: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?w=400&h=250&fit=crop&crop=center'
    },

    // ----- PIZZAS -----
    {
        id: 6,
        name: 'Classic Margherita',
        desc: 'Hand-tossed base, tangy tomato sauce, fresh mozzarella, and basil leaves.',
        price: 950,
        category: 'pizzas',
        emoji: '🍕',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=250&fit=crop&crop=center'
    },
    {
        id: 7,
        name: 'Pepperoni Blast',
        desc: 'Loaded with spicy pepperoni, mozzarella, and a hint of chilli flakes.',
        price: 1250,
        category: 'pizzas',
        emoji: '🍕',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=250&fit=crop&crop=center'
    },
    {
        id: 8,
        name: 'Fajita Chicken',
        desc: 'Grilled chicken, bell peppers, onions, mozzarella, and smoky fajita sauce.',
        price: 1150,
        category: 'pizzas',
        emoji: '🍕',
        image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400&h=250&fit=crop&crop=center'
    },
    {
        id: 9,
        name: 'Desi Tikka',
        desc: 'Spicy chicken tikka, red onions, capsicum, and a mint-yogurt drizzle.',
        price: 1350,
        category: 'pizzas',
        emoji: '🍕',
        image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&h=250&fit=crop&crop=center'
    },

    // ----- PASTAS -----
    {
        id: 10,
        name: 'Creamy Alfredo',
        desc: 'Fettuccine in rich parmesan cream sauce with grilled chicken and garlic.',
        price: 780,
        category: 'pastas',
        emoji: '🍝',
        image: 'images/alferado.jpg'
    },
    {
        id: 11,
        name: 'Spicy Arrabbiata',
        desc: 'Penne pasta in a fiery tomato-chilli sauce with fresh basil and parmesan.',
        price: 720,
        category: 'pastas',
        emoji: '🍝',
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=250&fit=crop&crop=center'
    },
    {
        id: 12,
        name: 'Chicken Pesto',
        desc: 'Linguine tossed in homemade basil pesto, cherry tomatoes, and grilled chicken.',
        price: 880,
        category: 'pastas',
        emoji: '🍝',
        image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&h=250&fit=crop&crop=center'
    },
    {
        id: 13,
        name: 'Mac & Cheese',
        desc: 'Creamy four-cheese sauce over elbow macaroni, topped with a crispy crumb.',
        price: 650,
        category: 'pastas',
        emoji: '🧀',
        image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400&h=250&fit=crop&crop=center'
    },

    // ----- ROLLS -----
    {
        id: 14,
        name: 'Chicken Mayo Roll',
        desc: 'Grilled chicken strips with creamy mayo, lettuce, and a soft paratha roll.',
        price: 380,
        category: 'rolls',
        emoji: '🌯',
        image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=250&fit=crop&crop=center'
    },
    {
        id: 15,
        name: 'Beef Seekh Roll',
        desc: 'Spiced minced beef seekh, mint chutney, onions, and wrapped in flaky paratha.',
        price: 420,
        category: 'rolls',
        emoji: '🌯',
        image: 'images/seekhroll.jpg'
    },
    {
        id: 16,
        name: 'Crispy Veg Roll',
        desc: 'Fried vegetables, paneer, and tangy tamarind sauce in a whole-wheat wrap.',
        price: 320,
        category: 'rolls',
        emoji: '🥬',
        image: 'https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?w=400&h=250&fit=crop&crop=center'
    },
    {
        id: 17,
        name: 'Shami Kabab Roll',
        desc: 'Classic shami kabab, raita, and fresh salad wrapped in a buttery paratha.',
        price: 450,
        category: 'rolls',
        emoji: '🌯',
        image: 'images/shami.jpg'
    },

    // ----- DESSERTS & DRINKS -----
    {
        id: 18,
        name: 'Mango Lassi',
        desc: 'Thick, creamy yoghurt blended with sweet Alphonso mango pulp.',
        price: 280,
        category: 'desserts',
        emoji: '🥭',
        image: 'images/lassi.jpg'
    },
    {
        id: 19,
        name: 'Gulab Jamun Cheesecake',
        desc: 'Fusion dessert – creamy cheesecake topped with syrup-soaked gulab jamuns.',
        price: 480,
        category: 'desserts',
        emoji: '🍰',
        image: 'images/gulabcake.jpg'
    },
    {
        id: 20,
        name: 'Chocolate Brownie',
        desc: 'Gooey fudge brownie served warm with a scoop of vanilla ice-cream.',
        price: 390,
        category: 'desserts',
        emoji: '🍫',
        image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=250&fit=crop&crop=center'
    },
    {
        id: 21,
        name: 'Cold Coffee',
        desc: 'Chilled Arabica coffee with a splash of milk and a dollop of cream.',
        price: 250,
        category: 'desserts',
        emoji: '☕',
        image: 'images/coffee.jpg'
    },
    {
        id: 22,
        name: 'Fresh Lemonade',
        desc: 'Hand-squeezed lemons, mint leaves, and a touch of honey – served over ice.',
        price: 220,
        category: 'desserts',
        emoji: '🍋',
        image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=250&fit=crop&crop=center'
    }
];

// ============================================================
//  CART STATE
// ============================================================
let cart = [];
const WHATSAPP_NUMBER = '923199608782'; // <-- CHANGE THIS TO YOUR NUMBER

// DOM refs
const grid = document.getElementById('menuGrid');
const cartDropdown = document.getElementById('cartDropdown');
const cartItemsEl = document.getElementById('cartItems');
const cartTotalEl = document.getElementById('cartTotal');
const cartCountEl = document.getElementById('cartCount');
const toast = document.getElementById('toast');
const toastItem = document.getElementById('toastItem');
const orderModal = document.getElementById('orderModal');
const orderPreviewBox = document.getElementById('orderPreviewBox');
const modalTotal = document.getElementById('modalTotal');

// ============================================================
//  RENDER MENU (UPDATED to show images)
// ============================================================
function renderMenu(category = 'all') {
    grid.innerHTML = '';
    const filtered = category === 'all' ? menuData : menuData.filter(item => item.category === category);
    if (filtered.length === 0) {
        grid.innerHTML = `<p style="color:#6b6b6b; grid-column:1/-1; text-align:center; padding:40px;">No items in this category yet – but we're cooking!</p>`;
        return;
    }
    filtered.forEach(item => {
        const div = document.createElement('div');
        div.className = 'menu-item';
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="item-img" loading="lazy" />
            <div class="item-top">
                <span class="item-name">${item.emoji} ${item.name}</span>
                <span class="item-price">Rs. ${item.price}</span>
            </div>
            <p class="item-desc">${item.desc}</p>
            <div class="item-footer">
                <span class="item-category-badge">${item.category}</span>
                <button class="btn-add" data-id="${item.id}">+ Add</button>
            </div>
        `;
        grid.appendChild(div);
    });

    document.querySelectorAll('.btn-add').forEach(btn => {
        btn.addEventListener('click', function () {
            const id = parseInt(this.dataset.id);
            addToCart(id);
        });
    });
}

// ============================================================
//  CART LOGIC
// ============================================================
function addToCart(id) {
    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.qty += 1;
    } else {
        const product = menuData.find(p => p.id === id);
        cart.push({ ...product, qty: 1 });
    }
    updateCartUI();
    showToast(menuData.find(p => p.id === id).name);
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

function changeQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        removeFromCart(id);
    } else {
        updateCartUI();
    }
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);
    cartCountEl.textContent = totalItems;

    if (cart.length === 0) {
        cartItemsEl.innerHTML = `<p style="color:#6b6b6b; text-align:center; padding:20px;">Your cart is empty.</p>`;
        cartTotalEl.textContent = 'Total: Rs. 0';
        return;
    }

    let html = '';
    cart.forEach(item => {
        html += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.emoji} ${item.name}</div>
                    <div class="cart-item-price">Rs. ${item.price}</div>
                </div>
                <div class="cart-item-qty">
                    <button class="qty-btn" data-id="${item.id}" data-delta="-1">−</button>
                    <span>${item.qty}</span>
                    <button class="qty-btn" data-id="${item.id}" data-delta="1">+</button>
                    <button class="remove-item" data-id="${item.id}"><i class="fas fa-trash"></i></button>
                </div>
            </div>
        `;
    });
    cartItemsEl.innerHTML = html;
    cartTotalEl.textContent = `Total: Rs. ${getCartTotal()}`;

    document.querySelectorAll('.qty-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const id = parseInt(this.dataset.id);
            const delta = parseInt(this.dataset.delta);
            changeQty(id, delta);
        });
    });
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', function () {
            const id = parseInt(this.dataset.id);
            removeFromCart(id);
        });
    });
}

// ============================================================
//  TOAST
// ============================================================
let toastTimer = null;
function showToast(itemName) {
    toastItem.textContent = itemName;
    toast.classList.add('show');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

// ============================================================
//  CART DROPDOWN TOGGLE
// ============================================================
document.getElementById('cartToggle').addEventListener('click', function (e) {
    e.stopPropagation();
    cartDropdown.classList.toggle('active');
});
document.getElementById('cartClose').addEventListener('click', function () {
    cartDropdown.classList.remove('active');
});
document.addEventListener('click', function (e) {
    if (!cartDropdown.contains(e.target) && e.target.id !== 'cartToggle' && !e.target.closest('.nav-cart')) {
        cartDropdown.classList.remove('active');
    }
});

// ============================================================
//  ORDER MODAL (POPUP)
// ============================================================
document.getElementById('orderViaWhatsAppBtn').addEventListener('click', function () {
    if (cart.length === 0) {
        alert('Your cart is empty! Add some delicious items first.');
        return;
    }
    updateOrderPreview();
    orderModal.classList.add('active');
    cartDropdown.classList.remove('active');
});

document.getElementById('modalClose').addEventListener('click', function () {
    orderModal.classList.remove('active');
});
orderModal.addEventListener('click', function (e) {
    if (e.target === orderModal) orderModal.classList.remove('active');
});

function updateOrderPreview() {
    let previewText = '';
    cart.forEach(item => {
        previewText += `• ${item.name} × ${item.qty} — Rs. ${item.price * item.qty}\n`;
    });
    orderPreviewBox.textContent = previewText || 'No items selected.';
    modalTotal.textContent = `Total: Rs. ${getCartTotal()}`;
}

// ============================================================
//  PLACE ORDER -> WHATSAPP
// ============================================================
document.getElementById('placeOrderBtn').addEventListener('click', function () {
    const name = document.getElementById('custName').value.trim();
    const phone = document.getElementById('custPhone').value.trim();
    const address = document.getElementById('custAddress').value.trim();
    const note = document.getElementById('custNote').value.trim();

    if (!name || !phone || !address) {
        alert('⚠️ Please fill in Name, Phone, and Address (all are required).');
        return;
    }

    let orderLines = cart.map(item => `• ${item.name} × ${item.qty} — Rs. ${item.price * item.qty}`).join('\n');
    const total = getCartTotal();

    let message = `🛒 NEW FOOD ORDER\n\n`;
    message += `👤 Customer: ${name}\n`;
    message += `📞 Phone: ${phone}\n`;
    message += `📍 Address: ${address}\n\n`;
    message += `🍔 Order:\n${orderLines}\n\n`;
    message += `💰 Total: Rs. ${total}\n`;
    if (note) message += `\n📝 Note: ${note}`;

    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
    window.open(url, '_blank');

    cart = [];
    updateCartUI();
    orderModal.classList.remove('active');
    document.getElementById('custName').value = '';
    document.getElementById('custPhone').value = '';
    document.getElementById('custAddress').value = '';
    document.getElementById('custNote').value = '';
    alert('✅ Order prepared! WhatsApp will open. Just tap Send.');
});

// ============================================================
//  CATEGORY FILTERING
// ============================================================
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        renderMenu(this.dataset.category);
    });
});

// ============================================================
//  LIVE FRESHNESS TICKER
// ============================================================
const freshSpan = document.getElementById('freshTime');
function updateFreshness() {
    const now = new Date();
    const mins = now.getMinutes();
    const dropMinute = mins - (mins % 5);
    const diff = mins - dropMinute;
    if (diff === 0) freshSpan.textContent = 'just now 🔥';
    else if (diff === 1) freshSpan.textContent = '1 min ago';
    else freshSpan.textContent = `${diff} mins ago`;
}
updateFreshness();
setInterval(updateFreshness, 8000);

// ============================================================
//  SMOOTH SCROLL
// ============================================================
document.querySelectorAll('.nav-links a, .hero-text .btn-primary').forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ============================================================
//  INIT
// ============================================================
renderMenu('all');