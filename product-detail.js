let detailState = {
  cart: JSON.parse(localStorage.getItem('cart') || '{}'),
  comparingProducts: JSON.parse(localStorage.getItem('comparingProducts') || '[]')
};

function saveDetailState() {
  localStorage.setItem('cart', JSON.stringify(detailState.cart));
  localStorage.setItem('comparingProducts', JSON.stringify(detailState.comparingProducts));
}

function getProductIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

function showToast(message, type = 'success') {
  const toastContainer = document.getElementById('toastContainer');
  if (!toastContainer) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('hide');
  }, 2500);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

function handleBuyClick(productId) {
  const product = products.find(p => p.id === productId);
  if (!product)
     return;

  if (!detailState.cart[productId]) {
    detailState.cart[productId] = 1;
  } else {
    detailState.cart[productId]++;
  }

  saveDetailState();
  renderCartMiniPanel();
  showToast(`Đã thêm ${product.name} vào giỏ hàng`, 'success');
}

function handleCompareToggle(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  if (detailState.comparingProducts.includes(productId)) {
    detailState.comparingProducts = detailState.comparingProducts.filter(id => id !== productId);
    showToast(`Đã bỏ ${product.name} khỏi so sánh`, 'info');
  } else {
    if (detailState.comparingProducts.length >= 3) {
      showToast('Bạn chỉ có thể so sánh tối đa 3 sản phẩm', 'warning');
      return;
    }

    detailState.comparingProducts.push(productId);
    showToast(`Đã thêm ${product.name} vào so sánh`, 'success');
  }

  saveDetailState();
  renderProductDetailPage();
  renderCompareMiniCart();
}

function renderRelatedProducts(currentProduct) {
  let relatedProducts = products
    .filter(product =>
      product.id !== currentProduct.id &&
      product.brand === currentProduct.brand
    );

  if (relatedProducts.length < 4) {
    const moreProducts = products
      .filter(product =>
        product.id !== currentProduct.id &&
        product.brand !== currentProduct.brand
      )
      .sort((a, b) => b.reviews - a.reviews);

    relatedProducts = [...relatedProducts, ...moreProducts];
  }

  relatedProducts = relatedProducts.slice(0, 4);

  if (relatedProducts.length === 0) return '';

  return `
    <section class="related-products-section">
      <div class="related-header">
        <h2>Sản phẩm liên quan</h2>
        <p>Các mẫu điện thoại có thể bạn cũng quan tâm</p>
      </div>

      <div class="related-products-grid">
        ${relatedProducts.map(product => {
          const discount = product.msrp - product.price;
          const isComparing = detailState.comparingProducts.includes(product.id);

          return `
            <div class="related-product-card" onclick="goToProductDetail('${product.id}')">
              <div class="related-image-box">
                <img src="${product.image}" alt="${product.name}">

                <button class="related-compare-btn ${isComparing ? 'active' : ''}"
                  onclick="event.stopPropagation(); handleCompareToggle('${product.id}')">
                  ${isComparing ? '✓' : '+'}
                </button>

                ${discount > 0 ? `
                  <span class="related-discount-badge">
                    -${Math.round(discount / 1000000)}tr
                  </span>
                ` : ''}
              </div>

              <div class="related-info">
                <h3>${product.name}</h3>

                <div class="related-price-row">
                  <strong>${formatPrice(product.price)}</strong>

                  ${product.msrp > product.price ? `
                    <span>${formatPrice(product.msrp)}</span>
                  ` : ''}
                </div>

                <div class="related-rating">
                  <div class="stars">${generateStars(product.rating)}</div>
                  <small>(${product.reviews})</small>
                </div>

                <button class="related-buy-btn"
                  onclick="event.stopPropagation(); handleBuyClick('${product.id}')">
                  Mua ngay
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </section>
  `;
}

function goToProductDetail(productId) {
  window.location.href = `product-detail.html?id=${productId}`;
}

function renderProductDetailPage() {
  const detailContainer = document.getElementById('productDetailContainer');
  if (!detailContainer) return;

  const productId = getProductIdFromUrl();
  const product = products.find(p => p.id === productId);

  if (!product) {
    detailContainer.innerHTML = `
      <div class="product-not-found">
        <h2>Không tìm thấy sản phẩm</h2>
        <p>Sản phẩm không tồn tại hoặc đã bị xoá.</p>
        <a href="index.html" class="back-home-btn">Quay về trang chủ</a>
      </div>
    `;
    return;
  }

  const specs = getSpecs(product);
  const discount = product.msrp - product.price;
  const discountPercent = product.msrp > product.price
    ? Math.round((discount / product.msrp) * 100)
    : 0;

  const isComparing = detailState.comparingProducts.includes(product.id);

  document.title = `${product.name} - TechMobile`;

  detailContainer.innerHTML = `
    <div class="breadcrumb">
      <a href="index.html">Trang chủ</a>
      <span>/</span>
      <span>${product.brand}</span>
      <span>/</span>
      <strong>${product.name}</strong>
    </div>

    <section class="product-detail-main">
      <div class="detail-image-box">
        <img src="${product.image}" alt="${product.name}">
      </div>

      <div class="detail-info-box">
        <p class="detail-brand">${product.brand}</p>

        <h1>${product.name}</h1>

        <div class="detail-rating">
          <div class="stars">${generateStars(product.rating)}</div>
          <strong>${product.rating}/5</strong>
          <span>(${product.reviews} đánh giá)</span>
        </div>

        <div class="detail-price-box">
          <strong class="detail-price">${formatPrice(product.price)}</strong>

          ${product.msrp > product.price ? `
            <span class="detail-msrp">${formatPrice(product.msrp)}</span>
            <span class="detail-discount">Giảm ${discountPercent}%</span>
          ` : ''}
        </div>

        <div class="detail-options">
          <h3>Màu sắc</h3>
          <div class="option-list">
            <button class="option-btn active">${specs.design.color}</button>
            <button class="option-btn">Đen</button>
            <button class="option-btn">Trắng</button>
          </div>
        </div>

        <div class="detail-options">
          <h3>Dung lượng</h3>
          <div class="option-list">
            <button class="option-btn active">${specs.rom}</button>
            <button class="option-btn">512GB</button>
            <button class="option-btn">1TB</button>
          </div>
        </div>

        <div class="promotion-box">
          <h3>Khuyến mãi</h3>
          <ul>
            <li>Trả góp 0% qua thẻ tín dụng.</li>
            <li>Giảm thêm khi thanh toán online.</li>
            <li>Bảo hành chính hãng 12 tháng.</li>
          </ul>
        </div>

        <div class="detail-action-row">
          <button class="detail-buy-btn" onclick="handleBuyClick('${product.id}')">
            Mua ngay
          </button>

          <button class="detail-compare-btn ${isComparing ? 'active' : ''}" onclick="handleCompareToggle('${product.id}')">
            ${isComparing ? '✓ Đã thêm so sánh' : '+ So sánh'}
          </button>
        </div>
      </div>
    </section>

    <section class="quick-specs-section">
      <h2>Thông số nhanh</h2>

      <div class="quick-specs-grid">
        <div><strong>Màn hình</strong><span>${specs.screen}</span></div>
        <div><strong>Chip</strong><span>${specs.chip}</span></div>
        <div><strong>RAM</strong><span>${specs.ram}</span></div>
        <div><strong>Bộ nhớ</strong><span>${specs.rom}</span></div>
        <div><strong>Camera</strong><span>${specs.camera}</span></div>
        <div><strong>Pin</strong><span>${specs.battery}</span></div>
      </div>
    </section>

    <section class="detail-specs-section">
      <h2>Thông số kỹ thuật chi tiết</h2>

      <div class="detail-specs-table">
        <div class="spec-group-title">Cấu hình bộ nhớ</div>

        <div class="spec-row">
          <span>RAM</span>
          <strong>${specs.memory.ram}</strong>
        </div>

        <div class="spec-row">
          <span>Bộ nhớ trong</span>
          <strong>${specs.memory.storage}</strong>
        </div>

        <div class="spec-row">
          <span>Thẻ nhớ</span>
          <strong>${specs.memory.card}</strong>
        </div>

        <div class="spec-group-title">Camera và màn hình</div>

        <div class="spec-row">
          <span>Màn hình</span>
          <strong>${specs.displayCamera.display}</strong>
        </div>

        <div class="spec-row">
          <span>Camera sau</span>
          <strong>${specs.displayCamera.rearCamera}</strong>
        </div>

        <div class="spec-row">
          <span>Camera trước</span>
          <strong>${specs.displayCamera.frontCamera}</strong>
        </div>

        <div class="spec-group-title">Pin và sạc</div>

        <div class="spec-row">
          <span>Dung lượng pin</span>
          <strong>${specs.batteryCharge.battery}</strong>
        </div>

        <div class="spec-row">
          <span>Sạc nhanh</span>
          <strong>${specs.batteryCharge.charge}</strong>
        </div>

        <div class="spec-row">
          <span>Sạc không dây</span>
          <strong>${specs.batteryCharge.wireless}</strong>
        </div>

        <div class="spec-group-title">Tiện ích</div>

        <div class="spec-row">
          <span>Bảo mật</span>
          <strong>${specs.utilities.security}</strong>
        </div>

        <div class="spec-row">
          <span>Kháng nước</span>
          <strong>${specs.utilities.waterResistant}</strong>
        </div>

        <div class="spec-row">
          <span>Tính năng đặc biệt</span>
          <strong>${specs.utilities.special}</strong>
        </div>

        <div class="spec-group-title">Kết nối</div>

        <div class="spec-row">
          <span>SIM</span>
          <strong>${specs.connection.sim}</strong>
        </div>

        <div class="spec-row">
          <span>Mạng di động</span>
          <strong>${specs.connection.network}</strong>
        </div>

        <div class="spec-row">
          <span>Cổng sạc</span>
          <strong>${specs.connection.port}</strong>
        </div>

        <div class="spec-group-title">Thiết kế</div>

        <div class="spec-row">
          <span>Chất liệu</span>
          <strong>${specs.design.material}</strong>
        </div>

        <div class="spec-row">
          <span>Trọng lượng</span>
          <strong>${specs.design.weight}</strong>
        </div>

        <div class="spec-row">
          <span>Màu sắc</span>
          <strong>${specs.design.color}</strong>
        </div>
      </div>
    </section>

    ${renderRelatedProducts(product)}
  `;
}

function renderCartMiniPanel() {
  const cartMiniList = document.getElementById('cartMiniList');
  const cartMiniPanel = document.getElementById('cartMiniPanel');
  const cartMiniCount = document.getElementById('cartMiniCount');

  if (!cartMiniList || !cartMiniPanel || !cartMiniCount) return;

  const cartItems = Object.entries(detailState.cart)
    .map(([id, quantity]) => {
      const product = products.find(p => p.id === id);
      return product ? { ...product, quantity } : null;
    })
    .filter(Boolean);

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  cartMiniCount.textContent = totalQuantity;

  if (cartItems.length === 0) {
    cartMiniPanel.classList.remove('active');
    cartMiniList.innerHTML = `<p class="mini-empty">Giỏ hàng đang trống.</p>`;
    return;
  }

  cartMiniPanel.classList.add('active');

  const totalPrice = cartItems.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  const totalDiscount = cartItems.reduce((sum, item) => {
    const discount = item.msrp > item.price ? item.msrp - item.price : 0;
    return sum + discount * item.quantity;
  }, 0);

  cartMiniList.innerHTML = `
    <div class="mini-product-scroll">
      ${cartItems.map(item => {
    const discount = item.msrp > item.price ? item.msrp - item.price : 0;

    return `
          <div class="mini-product-item cart-mini-item">
            <div class="cart-left-column">
              <img src="${item.image}" alt="${item.name}">
              <div class="cart-quantity-badge">x${item.quantity}</div>
            </div>

            <div class="mini-product-info cart-product-info">
              <h4>${item.name}</h4>

              <div class="mini-price-row">
                <p>${formatPrice(item.price)}</p>
                ${discount > 0 ? `<span class="mini-old-price">${formatPrice(item.msrp)}</span>` : ''}
              </div>

              ${discount > 0 ? `
                <small class="mini-discount">Giảm ${formatPrice(discount)}</small>
              ` : ''}
            </div>

            <button class="mini-remove-btn" onclick="removeCartItem('${item.id}')">×</button>
          </div>
        `;
  }).join('')}
    </div>

    <div class="mini-summary">
      <div>
        <span>Tổng tiền</span>
        <strong>${formatPrice(totalPrice)}</strong>
      </div>

      ${totalDiscount > 0 ? `
        <div class="mini-saving">
          <span>Tiết kiệm</span>
          <strong>${formatPrice(totalDiscount)}</strong>
        </div>
      ` : ''}
    </div>

    <button class="mini-action-btn">
      Xem giỏ hàng
    </button>
  `;
}

function removeCartItem(productId) {
  delete detailState.cart[productId];
  saveDetailState();
  renderCartMiniPanel();
  showToast('Đã xóa sản phẩm khỏi giỏ hàng', 'info');
}

function renderCompareMiniCart() {
  const miniList = document.getElementById('compareMiniList');
  const miniCount = document.getElementById('compareMiniCount');
  const compareMiniCart = document.getElementById('compareMiniCart');

  if (!miniList || !miniCount || !compareMiniCart) return;

  const selectedProducts = detailState.comparingProducts
    .map(id => products.find(product => product.id === id))
    .filter(Boolean);

  miniCount.textContent = selectedProducts.length;

  if (selectedProducts.length === 0) {
    compareMiniCart.classList.remove('active');
    miniList.innerHTML = `<p class="mini-empty">Chưa chọn sản phẩm.</p>`;
    return;
  }

  compareMiniCart.classList.add('active');

  miniList.innerHTML = `
    <div class="mini-product-scroll">
      ${selectedProducts.map(product => `
        <div class="mini-product-item">
          <img src="${product.image}" alt="${product.name}">

          <div class="mini-product-info">
            <h4>${product.name}</h4>
            <p>${formatPrice(product.price)}</p>
          </div>

          <button class="mini-remove-btn" onclick="handleCompareToggle('${product.id}')">×</button>
        </div>
      `).join('')}
    </div>

    ${selectedProducts.length >= 2 ? `
      <button class="mini-action-btn compare-action" onclick="openCompareModal()">
        So sánh ${selectedProducts.length} sản phẩm
      </button>
    ` : `
      <p class="mini-note">Chọn thêm 1 sản phẩm nữa để so sánh.</p>
    `}
  `;
}

function renderCompareTable(selectedProducts, rows) {
  return `
    <div class="compare-table compare-count-${selectedProducts.length}">
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

function renderCompareModal() {
  const compareModalContent = document.getElementById('compareModalContent');
  if (!compareModalContent) return;

  const selectedProducts = detailState.comparingProducts
    .map(id => products.find(product => product.id === id))
    .filter(Boolean);

  compareModalContent.innerHTML = `
    <section class="compare-product-header compare-count-${selectedProducts.length}">
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

function setupCompareSmoothScroll() {
  const sideNavLinks = document.querySelectorAll('.compare-side-nav a');
  const modalContent = document.querySelector('.compare-modal-content');

  if (!modalContent) return;

  sideNavLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();

      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (!targetSection) return;

      modalContent.scrollTo({
        top: targetSection.offsetTop - 16,
        behavior: 'smooth'
      });
    });
  });
}

function openCompareModal() {
  if (detailState.comparingProducts.length < 2) {
    showToast('Bạn cần chọn ít nhất 2 sản phẩm để so sánh', 'warning');
    return;
  }

  renderCompareModal();
  setupCompareSmoothScroll();

  const compareModal = document.getElementById('compareModal');
  if (compareModal) {
    compareModal.classList.add('active');
    document.body.classList.add('modal-open');
  }
}

function closeCompareModal() {
  const compareModal = document.getElementById('compareModal');
  if (compareModal) {
    compareModal.classList.remove('active');
    document.body.classList.remove('modal-open');
  }
}

function initProductDetailPage() {
  renderProductDetailPage();
  renderCartMiniPanel();
  renderCompareMiniCart();

  const compareModal = document.getElementById('compareModal');
  if (compareModal) {
    compareModal.addEventListener('click', function (event) {
      if (event.target === compareModal) {
        closeCompareModal();
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', initProductDetailPage);

window.handleBuyClick = handleBuyClick;
window.handleCompareToggle = handleCompareToggle;
window.removeCartItem = removeCartItem;
window.openCompareModal = openCompareModal;
window.closeCompareModal = closeCompareModal;
window.goToProductDetail = goToProductDetail;