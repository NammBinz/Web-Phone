const products = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max 256GB',
    brand: 'Apple',
    image: 'IMG/iphone-15-hong-thumb-600x600.jpg',
    price: 29990000,
    msrp: 33990000,
    rating: 5,
    reviews: 1247
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24 Ultra 256GB',
    brand: 'Samsung',
    image: 'IMG/samsung-galaxy-s24-ultra-5g-600x600.jpg',
    price: 26990000,
    msrp: 31990000,
    rating: 5,
    reviews: 892
  },
  {
    id: '3',
    name: 'iPhone 14 Pro 128GB',
    brand: 'Apple',
    image: 'IMG/iphone-14-den-600x600.jpg',
    price: 21990000,
    msrp: 26990000,
    rating: 5,
    reviews: 1856
  },
  {
    id: '4',
    name: 'Samsung Galaxy Z Flip7 5G 12GB/512GB',
    brand: 'Samsung',
    image: 'IMG/samsung-galaxy-z-flip7-xanh-navy-thumb-200x200.jpg',
    price: 35990000,
    msrp: 40990000,
    rating: 5,
    reviews: 456
  },
  {
    id: '5',
    name: 'Google Pixel 8 Pro 256GB',
    brand: 'Google',
    image: 'IMG/google-pixel-8-pro_7_.png',
    price: 20990000,
    msrp: 23990000,
    rating: 5,
    reviews: 678
  },
  {
    id: '6',
    name: 'OnePlus 12 Pro 256GB',
    brand: 'OnePlus',
    image: 'IMG/oneplus-12-xanh.jpg.jpg',
    price: 18990000,
    msrp: 21990000,
    rating: 4,
    reviews: 534
  },
  {
    id: '7',
    name: 'Xiaomi 14 Pro 256GB',
    brand: 'Xiaomi',
    image: 'IMG/xiaomi-redmi-note-14-pro-xanh-1-638726277915426611-750x500.jpg',
    price: 17490000,
    msrp: 19990000,
    rating: 4,
    reviews: 823
  },
  {
    id: '8',
    name: 'OPPO Find X7 Pro 512GB',
    brand: 'OPPO',
    image: 'IMG/oppo-find-x7-pro-600x600.jpg',
    price: 20990000,
    msrp: 23990000,
    rating: 4,
    reviews: 445
  },
  {
    id: '9',
    name: 'Realme GT 5 Pro 256GB',
    brand: 'Realme',
    image: 'IMG/realme-gt-neo5-pro-600x600.jpg',
    price: 11990000,
    msrp: 13990000,
    rating: 4,
    reviews: 678
  },
  {
    id: '10',
    name: 'Vivo X100 Pro 256GB',
    brand: 'Vivo',
    image: 'IMG/vivo-x100-pro.jpg',
    price: 18490000,
    msrp: 20990000,
    rating: 5,
    reviews: 567
  }
];

const productSpecs = {
  '1': {
    screen: '6.7 inch OLED, 120Hz',
    chip: 'Apple A17 Pro',
    ram: '8GB',
    rom: '256GB',
    camera: '48MP + 12MP + 12MP',
    battery: '4422 mAh',
    charge: 'Sạc nhanh 20W',
    memory: {
      ram: '8GB',
      storage: '256GB',
      card: 'Không hỗ trợ thẻ nhớ'
    },
    displayCamera: {
      display: 'OLED Super Retina XDR, 120Hz',
      rearCamera: '48MP + 12MP + 12MP',
      frontCamera: '12MP'
    },
    batteryCharge: {
      battery: '4422 mAh',
      charge: '20W',
      wireless: 'Có sạc không dây'
    },
    utilities: {
      security: 'Face ID',
      waterResistant: 'IP68',
      special: 'Dynamic Island, Always-on Display'
    },
    connection: {
      sim: 'Nano SIM + eSIM',
      network: '5G',
      port: 'USB-C'
    },
    design: {
      material: 'Khung Titanium, mặt lưng kính',
      weight: '221g',
      color: 'Titan tự nhiên'
    }
  },

  '2': {
    screen: '6.8 inch AMOLED, 120Hz',
    chip: 'Snapdragon 8 Gen 3',
    ram: '12GB',
    rom: '256GB',
    camera: '200MP + 50MP + 12MP + 10MP',
    battery: '5000 mAh',
    charge: 'Sạc nhanh 45W',
    memory: {
      ram: '12GB',
      storage: '256GB',
      card: 'Không hỗ trợ thẻ nhớ'
    },
    displayCamera: {
      display: 'Dynamic AMOLED 2X, 120Hz',
      rearCamera: '200MP + 50MP + 12MP + 10MP',
      frontCamera: '12MP'
    },
    batteryCharge: {
      battery: '5000 mAh',
      charge: '45W',
      wireless: 'Có sạc không dây'
    },
    utilities: {
      security: 'Vân tay dưới màn hình',
      waterResistant: 'IP68',
      special: 'Bút S Pen, Galaxy AI'
    },
    connection: {
      sim: 'Nano SIM + eSIM',
      network: '5G',
      port: 'USB-C'
    },
    design: {
      material: 'Khung Titanium, mặt lưng kính',
      weight: '232g',
      color: 'Titan xám'
    }
  }
};

function getSpecs(product) {
  return productSpecs[product.id] || {
    screen: '6.7 inch, 120Hz',
    chip: 'Chip cao cấp',
    ram: '8GB',
    rom: '256GB',
    camera: 'Camera chính độ phân giải cao',
    battery: '5000 mAh',
    charge: 'Sạc nhanh',
    memory: {
      ram: '8GB',
      storage: '256GB',
      card: 'Tùy phiên bản'
    },
    displayCamera: {
      display: 'Màn hình lớn, tần số quét cao',
      rearCamera: 'Camera sau chất lượng cao',
      frontCamera: 'Camera trước'
    },
    batteryCharge: {
      battery: '5000 mAh',
      charge: 'Sạc nhanh',
      wireless: 'Tùy phiên bản'
    },
    utilities: {
      security: 'Mở khóa bảo mật',
      waterResistant: 'Tùy phiên bản',
      special: 'Nhiều tiện ích thông minh'
    },
    connection: {
      sim: 'Nano SIM',
      network: '5G',
      port: 'USB-C'
    },
    design: {
      material: 'Khung kim loại/kính',
      weight: 'Đang cập nhật',
      color: 'Nhiều màu'
    }
  };
}

const brands = [
  { id: 'samsung', name: '<img src="IMG/samsung.png" alt="Samsung" style="width:70px;height:20px;object-fit:contain;">', icon: '' },
  { id: 'iphone', name: '<img src="IMG/apple.png" alt="iphone" style="width:70px;height:20px;object-fit:contain;">', icon: '' },
  { id: 'xiaomi', name: '<img src="IMG/xiaomi.png" alt="xiaomi" style="width:70px;height:20px;object-fit:contain;">', icon: '' },
  { id: 'oppo', name: '<img src="IMG/oppo.png" alt="oppo" style="width:70px;height:20px;object-fit:contain;">', icon: '' },
  { id: 'vivo', name: '<img src="IMG/vivo.png" alt="vivo" style="width:70px;height:20px;object-fit:contain;">', icon: '' },
  { id: 'realme', name: '<img src="IMG/realme.png" alt="realme" style="width:70px;height:20px;object-fit:contain;">', icon: '' }
];

const tabs = [
  { id: 'featured', label: '✨ Nổi bật' },
  { id: 'bestseller', label: '📈 Bán chạy' },
  { id: 'installment', label: '💳 Trả góp 0%' },
  { id: 'deals', label: '⚡ Giá tốt' },
  { id: 'samsung', label: 'Samsung' },
  { id: 'iphone', label: 'iPhone' },
  { id: 'xiaomi', label: 'Xiaomi' },
  { id: 'oppo', label: 'OPPO' },
  { id: 'vivo', label: 'Vivo' },
  { id: 'realme', label: 'Realme' }
];

// ==================== STATE ====================
let state = {
  activeTab: 'featured',
  searchQuery: '',
  cart: new Set(),
  comparingProducts: []
};

// ==================== UTILITY FUNCTIONS ====================
function formatPrice(price) {
  return price.toLocaleString('vi-VN') + '₫';
}

function filterProducts() {
  let filtered = [...products];

  // Filter by tab
  if (state.activeTab === 'bestseller') {
    filtered.sort((a, b) => b.reviews - a.reviews);
  } else if (state.activeTab === 'deals') {
    filtered = filtered.filter(p => p.msrp > p.price);
  } else if (state.activeTab === 'installment') {
    filtered = filtered.filter(p => p.price > 5000000);
  } else if (['samsung', 'iphone', 'xiaomi', 'oppo', 'vivo', 'realme'].includes(state.activeTab)) {
    const brandMap = {
      'iphone': 'Apple',
      'samsung': 'Samsung',
      'xiaomi': 'Xiaomi',
      'oppo': 'OPPO',
      'vivo': 'Vivo',
      'realme': 'Realme'
    };
    filtered = filtered.filter(p => p.brand === brandMap[state.activeTab]);
  }

  // Filter by search
  if (state.searchQuery) {
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
      p.brand.toLowerCase().includes(state.searchQuery.toLowerCase())
    );
  }

  return filtered;
}

// ==================== RENDER FUNCTIONS ====================
function renderBrands() {
  const brandList = document.getElementById('brandList');
  if (!brandList) return;

  brandList.innerHTML = brands.map(brand => `
    <button class="brand-btn" onclick="handleBrandClick('${brand.id}')">
      ${brand.icon} ${brand.name}
    </button>
  `).join('');
}

function renderTabs() {
  const tabsContainer = document.getElementById('filterTabs');
  if (!tabsContainer) return;

  tabsContainer.innerHTML = tabs.map(tab => `
    <button class="tab-btn ${state.activeTab === tab.id ? 'active' : ''}" onclick="handleTabChange('${tab.id}')">
      ${tab.label}
    </button>
  `).join('');
}

function renderProducts() {
  const filtered = filterProducts();
  const productGrid = document.getElementById('productGrid');
  const productCount = document.getElementById('productCount');

  if (!productGrid || !productCount) return;

  // Update count
  productCount.textContent = `Hiển thị ${filtered.length} sản phẩm`;

  // Render products
  productGrid.innerHTML = filtered.map(product => {
    const discount = product.msrp - product.price;
    const isComparing = state.comparingProducts.includes(product.id);

    return `
      <div class="product-card" onclick="handleProductClick('${product.id}')">
        <div class="product-image-container">
          <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
          <button class="compare-btn ${isComparing ? 'active' : ''}" 
                  onclick="event.stopPropagation(); handleCompareToggle('${product.id}')">
            ${isComparing ? '✓' : '+'}
          </button>
          ${discount > 0 ? `
            <div class="discount-badge">
              -${Math.round(discount / 1000000)}tr
            </div>
          ` : ''}
        </div>
        
        <div class="product-info">
          <h3 class="product-name">${product.name}</h3>
          
          <div class="product-price-section">
            <div class="price-row">
              <span class="product-price">${formatPrice(product.price)}</span>
              ${product.msrp > product.price ? `
                <span class="product-msrp">${formatPrice(product.msrp)}</span>
              ` : ''}
            </div>
            ${discount > 0 ? `
              <div class="installment-badge">
                Không phí chuyển đổi khi trả góp 0%
              </div>
            ` : ''}
          </div>
          
          <div class="product-rating">
            <div class="stars">
              ${generateStars(product.rating)}
            </div>
            <span class="review-count">(${product.reviews})</span>
          </div>
          
          <div class="buy-btn-container">
            <button class="buy-btn" onclick="event.stopPropagation(); handleBuyClick('${product.id}')">
              Mua ngay
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function generateStars(rating) {
  let stars = '';
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars += '<span class="star filled">⭐</span>';
    } else {
      stars += '<span class="star empty">☆</span>';
    }
  }
  return stars;
}

function updateCartCount() {
  const cartCountElement = document.getElementById('cartCount');
  if (cartCountElement) {
    cartCountElement.textContent = state.cart.size;
  }
}

function renderCompareMiniCart() {
  const miniCart = document.getElementById('compareMiniCart');
  const miniList = document.getElementById('compareMiniList');
  const miniCount = document.getElementById('compareMiniCount');

  if (!miniCart || !miniList || !miniCount) return;

  const selectedProducts = state.comparingProducts
    .map(id => products.find(product => product.id === id))
    .filter(Boolean);

  miniCount.textContent = selectedProducts.length;

  if (selectedProducts.length === 0) {
    miniCart.classList.remove('active');
    miniList.innerHTML = `<p class="compare-empty">Chưa chọn sản phẩm.</p>`;
    return;
  }

  miniCart.classList.add('active');

  miniList.innerHTML = `
    ${selectedProducts.map(product => `
      <div class="compare-mini-item">
        <button class="compare-mini-remove" onclick="handleCompareToggle('${product.id}')">×</button>
        <img src="${product.image}" alt="${product.name}">
        <div class="compare-mini-info">
          <h4>${product.name}</h4>
          <p>${formatPrice(product.price)}</p>
        </div>
      </div>
    `).join('')}

    ${selectedProducts.length >= 2 ? `
      <button class="open-compare-btn" onclick="openCompareModal()">
        So sánh ${selectedProducts.length} sản phẩm
      </button>
    ` : `
      <p class="compare-note">Chọn ít nhất 2 sản phẩm để so sánh.</p>
    `}
  `;
}

function openCompareModal() {
  if (state.comparingProducts.length < 2) {
    alert('Bạn cần chọn ít nhất 2 sản phẩm để so sánh!');
    return;
  }

  renderCompareModal();
  document.getElementById('compareModal').classList.add('active');
  document.body.classList.add('modal-open');
}

function closeCompareModal() {
  document.getElementById('compareModal').classList.remove('active');
  document.body.classList.remove('modal-open');
}

function renderCompareModal() {
  const compareModalContent = document.getElementById('compareModalContent');
  if (!compareModalContent) return;

  const selectedProducts = state.comparingProducts
    .map(id => products.find(product => product.id === id))
    .filter(Boolean);

  compareModalContent.innerHTML = `
    <section class="compare-product-header">
      ${selectedProducts.map(product => `
        <div class="compare-product-main">
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.brand}</p>
          <strong>${formatPrice(product.price)}</strong>
        </div>
      `).join('')}
    </section>

    <section class="compare-section" id="quickCompare">
      <h3>So sánh tổng quát nhanh</h3>
      ${renderCompareTable(selectedProducts, [
        ['Màn hình', p => getSpecs(p).screen],
        ['Chip', p => getSpecs(p).chip],
        ['RAM', p => getSpecs(p).ram],
        ['ROM', p => getSpecs(p).rom],
        ['Camera', p => getSpecs(p).camera],
        ['Pin', p => getSpecs(p).battery],
        ['Sạc', p => getSpecs(p).charge]
      ])}
    </section>

    <section class="compare-section" id="memoryCompare">
      <h3>Cấu hình bộ nhớ</h3>
      ${renderCompareTable(selectedProducts, [
        ['RAM', p => getSpecs(p).memory.ram],
        ['Bộ nhớ trong', p => getSpecs(p).memory.storage],
        ['Thẻ nhớ', p => getSpecs(p).memory.card]
      ])}
    </section>

    <section class="compare-section" id="displayCameraCompare">
      <h3>Camera, màn hình</h3>
      ${renderCompareTable(selectedProducts, [
        ['Màn hình', p => getSpecs(p).displayCamera.display],
        ['Camera sau', p => getSpecs(p).displayCamera.rearCamera],
        ['Camera trước', p => getSpecs(p).displayCamera.frontCamera]
      ])}
    </section>

    <section class="compare-section" id="batteryCompare">
      <h3>Pin, sạc</h3>
      ${renderCompareTable(selectedProducts, [
        ['Dung lượng pin', p => getSpecs(p).batteryCharge.battery],
        ['Sạc nhanh', p => getSpecs(p).batteryCharge.charge],
        ['Sạc không dây', p => getSpecs(p).batteryCharge.wireless]
      ])}
    </section>

    <section class="compare-section" id="utilityCompare">
      <h3>Tiện ích</h3>
      ${renderCompareTable(selectedProducts, [
        ['Bảo mật', p => getSpecs(p).utilities.security],
        ['Kháng nước', p => getSpecs(p).utilities.waterResistant],
        ['Tính năng đặc biệt', p => getSpecs(p).utilities.special]
      ])}
    </section>

    <section class="compare-section" id="connectCompare">
      <h3>Kết nối</h3>
      ${renderCompareTable(selectedProducts, [
        ['SIM', p => getSpecs(p).connection.sim],
        ['Mạng di động', p => getSpecs(p).connection.network],
        ['Cổng sạc', p => getSpecs(p).connection.port]
      ])}
    </section>

    <section class="compare-section" id="designCompare">
      <h3>Thiết kế, vật liệu</h3>
      ${renderCompareTable(selectedProducts, [
        ['Vật liệu', p => getSpecs(p).design.material],
        ['Trọng lượng', p => getSpecs(p).design.weight],
        ['Màu sắc', p => getSpecs(p).design.color]
      ])}
    </section>
  `;
}

function renderCompareTable(selectedProducts, rows) {
  return `
    <div class="compare-table">
      <div class="compare-row compare-row-head">
        <div class="compare-cell compare-label">Thông số</div>
        ${selectedProducts.map(product => `
          <div class="compare-cell">${product.name}</div>
        `).join('')}
      </div>

      ${rows.map(row => `
        <div class="compare-row">
          <div class="compare-cell compare-label">${row[0]}</div>
          ${selectedProducts.map(product => `
            <div class="compare-cell">${row[1](product)}</div>
          `).join('')}
        </div>
      `).join('')}
    </div>
  `;
}

function renderComparisonContent() {
  const comparisonContent = document.getElementById('comparisonContent');
  if (!comparisonContent) return;

  const selectedProducts = state.comparingProducts
    .map(id => products.find(product => product.id === id))
    .filter(Boolean);

  if (selectedProducts.length === 0) {
    comparisonContent.innerHTML = `
      <p class="empty-compare">Chưa có sản phẩm nào để so sánh.</p>
    `;
    return;
  }

  comparisonContent.innerHTML = `
    <div class="comparison-list">
      ${selectedProducts.map(product => `
        <div class="comparison-item">
          <button class="remove-compare-btn" onclick="handleCompareToggle('${product.id}')">×</button>
          <img src="${product.image}" alt="${product.name}" class="comparison-img">
          <h4>${product.name}</h4>
          <p><strong>Hãng:</strong> ${product.brand}</p>
          <p><strong>Giá:</strong> ${formatPrice(product.price)}</p>
          <p><strong>Giá gốc:</strong> ${formatPrice(product.msrp)}</p>
          <p><strong>Đánh giá:</strong> ${product.rating}/5 ⭐</p>
          <p><strong>Lượt đánh giá:</strong> ${product.reviews}</p>
        </div>
      `).join('')}
    </div>
  `;
}

// ==================== EVENT HANDLERS ====================
function handleBrandClick(brandId) {
  console.log('Brand clicked:', brandId);
  state.activeTab = brandId;
  renderTabs();
  renderProducts();
}

function handleTabChange(tabId) {
  console.log('Tab changed:', tabId);
  state.activeTab = tabId;
  renderTabs();
  renderProducts();
}

function handleCompareToggle(productId) {
  if (state.comparingProducts.includes(productId)) {
    state.comparingProducts = state.comparingProducts.filter(id => id !== productId);
  } else {
    if (state.comparingProducts.length >= 3) {
      alert('Bạn chỉ có thể so sánh tối đa 3 sản phẩm!');
      return;
    }

    state.comparingProducts.push(productId);
  }

  renderProducts();
  renderCompareMiniCart();
}

function handleProductClick(productId) {
  console.log('Product clicked:', productId);
  const product = products.find(p => p.id === productId);
  if (product) {
    alert(`Xem chi tiết: ${product.name}\nGiá: ${formatPrice(product.price)}`);
  }
}

function handleBuyClick(productId) {
  console.log('Buy clicked:', productId);
  const product = products.find(p => p.id === productId);

  if (product) {
    state.cart.add(productId);
    updateCartCount();

    // Show success message
    alert(`✅ Đã thêm "${product.name}" vào giỏ hàng!\n\nGiá: ${formatPrice(product.price)}`);
  }
}

function handleSearch(event) {
  state.searchQuery = event.target.value;
  console.log('Search:', state.searchQuery);
  renderProducts();
}

function toggleComparison() {
  const tray = document.getElementById('comparisonTray');
  if (!tray) return;

  renderComparisonContent();
  tray.classList.toggle('open');
}

function showCart() {
  const cartItems = Array.from(state.cart).map(id => {
    const product = products.find(p => p.id === id);
    return product ? product.name : '';
  }).filter(Boolean);

  if (cartItems.length === 0) {
    alert('Giỏ hàng trống!');
  } else {
    alert(`🛒 Giỏ hàng của bạn (${cartItems.length} sản phẩm):\n\n${cartItems.map((item, i) => `${i + 1}. ${item}`).join('\n')}`);
  }
}

// ==================== INITIALIZATION ====================
function init() {
  console.log('🚀 TechMobile initialized!');
  
  renderBrands();
  renderTabs();
  renderProducts();
  updateCartCount();
  renderCompareMiniCart();
  
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', handleSearch);
  }
  
  const cartBtn = document.querySelector('.cart-btn');
  if (cartBtn) {
    cartBtn.addEventListener('click', showCart);
  }

  console.log('✅ All event listeners attached');
}

// ==================== START APPLICATION ====================
// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Export functions to window for inline onclick handlers
window.handleBrandClick = handleBrandClick;
window.handleTabChange = handleTabChange;
window.handleCompareToggle = handleCompareToggle;
window.openCompareModal = openCompareModal;
window.closeCompareModal = closeCompareModal;
window.handleProductClick = handleProductClick;
window.handleBuyClick = handleBuyClick;

// ========= Đăng nhập ================== 
// ==================== AUTH SYSTEM ====================
let currentUser = null;

// Load user from localStorage on init
function loadUser() {
  const savedUser = localStorage.getItem('currentUser');
  if (savedUser) {
    currentUser = JSON.parse(savedUser);
    updateUserDisplay();
  }
}


function updateUserDisplay() {
  const userDisplay = document.getElementById('userDisplay');
  if (!userDisplay) return;

  if (currentUser) {
    userDisplay.textContent = currentUser.username;
  } else {
    userDisplay.textContent = 'Đăng nhập';
  }
}


// ==================== MODAL FUNCTIONS ====================
function openLoginModal() {
  const modal = document.getElementById('loginModal');
  if (modal) {
    modal.classList.add('active');
    showLogin();
  }
}

function closeLoginModal() {
  const modal = document.getElementById('loginModal');
  if (modal) {
    modal.classList.remove('active');
    document.querySelectorAll('.auth-form input').forEach(input => {
      input.value = '';
    });
  }
}

function showLogin(event) {
  if (event) event.preventDefault();

  document.getElementById('loginForm').style.display = 'block';
  document.getElementById('registerForm').style.display = 'none';
  document.getElementById('forgotPasswordForm').style.display = 'none';
}

function showRegister(event) {
  if (event) event.preventDefault();

  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('registerForm').style.display = 'block';
  document.getElementById('forgotPasswordForm').style.display = 'none';
}

function showForgotPassword(event) {
  if (event) event.preventDefault();

  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('registerForm').style.display = 'none';
  document.getElementById('forgotPasswordForm').style.display = 'block';
}

// ==================== AUTH HANDLERS ====================
function handleLogin(event) {
  event.preventDefault();

  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  const users = JSON.parse(localStorage.getItem('users') || '[]');

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    currentUser = {
      username: user.username,
      email: user.email
    };

    localStorage.setItem('currentUser', JSON.stringify(currentUser));

    showSuccessMessage('Đăng nhập thành công! 🎉');

    updateUserDisplay();

    setTimeout(() => {
      closeLoginModal();
    }, 1000);
  } else {
    alert('❌ Tên đăng nhập hoặc mật khẩu không đúng!');
  }
}

function handleRegister(event) {
  event.preventDefault();

  const username = document.getElementById('registerUsername').value;
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;
  const confirmPassword = document.getElementById('registerConfirmPassword').value;

  if (password !== confirmPassword) {
    alert('❌ Mật khẩu xác nhận không khớp!');
    return;
  }

  if (password.length < 6) {
    alert('❌ Mật khẩu phải có ít nhất 6 ký tự!');
    return;
  }

  const users = JSON.parse(localStorage.getItem('users') || '[]');

  if (users.find(u => u.username === username)) {
    alert('❌ Tên đăng nhập đã tồn tại!');
    return;
  }

  if (users.find(u => u.email === email)) {
    alert('❌ Email đã được đăng ký!');
    return;
  }

  users.push({
    username,
    email,
    password,
    createdAt: new Date().toISOString()
  });

  localStorage.setItem('users', JSON.stringify(users));

  showSuccessMessage('Đăng ký thành công! Vui lòng đăng nhập 🎉');

  setTimeout(() => {
    showLogin();
    document.getElementById('loginUsername').value = username;
  }, 1500);
}

function handleForgotPassword(event) {
  event.preventDefault();

  const email = document.getElementById('forgotEmail').value;

  const users = JSON.parse(localStorage.getItem('users') || '[]');

  const user = users.find(u => u.email === email);

  if (user) {
    showSuccessMessage('📧 Link đặt lại mật khẩu đã được gửi đến email của bạn!');

    console.log('Password reset link would be sent to:', email);

    setTimeout(() => {
      alert(`Demo: Mật khẩu của bạn là: ${user.password}\n(Trong ứng dụng thực tế, bạn sẽ nhận được email)`);
      showLogin();
    }, 2000);
  } else {
    alert('❌ Email không tồn tại trong hệ thống!');
  }
}

function handleLogout() {
  if (confirm('Bạn có chắc muốn đăng xuất?')) {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateUserDisplay();
    alert('Đã đăng xuất thành công!');
  }
}

function showSuccessMessage(message) {
  const forms = document.querySelectorAll('.auth-form');
  forms.forEach(form => {
    const existingMsg = form.querySelector('.success-message');
    if (existingMsg) existingMsg.remove();

    if (form.style.display !== 'none') {
      const successDiv = document.createElement('div');
      successDiv.className = 'success-message';
      successDiv.textContent = message;
      form.insertBefore(successDiv, form.firstChild);

      setTimeout(() => successDiv.remove(), 3000);
    }
  });
}

function toggleUserMenu() {
  handleLogout();
}

document.addEventListener('DOMContentLoaded', () => {
  if (typeof renderProducts === 'function') renderProducts(products);

  loadUser();

  window.openLoginModal = openLoginModal;
  window.closeLoginModal = closeLoginModal;
  window.showLogin = showLogin;
  window.showRegister = showRegister;
  window.showForgotPassword = showForgotPassword;
  window.handleLogin = handleLogin;
  window.handleRegister = handleRegister;
  window.handleLogout = handleLogout;
});
