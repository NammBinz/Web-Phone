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

function formatPrice(price) {
  return price.toLocaleString('vi-VN') + '₫';
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