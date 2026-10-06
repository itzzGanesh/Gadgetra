export const categories = [
  { id: 'mobiles', name: 'Mobiles & Gadgets', slug: 'mobiles', icon: 'Smartphone' },
  { id: 'electronics', name: 'Electronics', slug: 'electronics', icon: 'Cpu' },
  { id: 'laptops', name: 'Laptops & Computers', slug: 'laptops', icon: 'Laptop' },
  { id: 'tvs', name: 'TVs & Entertainment', slug: 'tvs', icon: 'Tv' },
  { id: 'appliances', name: 'Home Appliances', slug: 'appliances', icon: 'Home' },
  { id: 'audio', name: 'Audio', slug: 'audio', icon: 'Headphones' },
  { id: 'wearables', name: 'Wearables', slug: 'wearables', icon: 'Watch' },
  { id: 'cameras', name: 'Cameras', slug: 'cameras', icon: 'Camera' },
  { id: 'gaming', name: 'Gaming', slug: 'gaming', icon: 'Gamepad2' },
  { id: 'chargers', name: 'Chargers & Cables', slug: 'chargers', icon: 'BatteryCharging' },
  { id: 'computer-accessories', name: 'Computer Accessories', slug: 'computer-accessories', icon: 'Mouse' }
];

export const brands = [
  'Apple', 'Samsung', 'Sony', 'Dell', 'LG', 'ASUS', 'Bose', 'Anker', 'Logitech', 'Canon', 'Xiaomi', 'Razer', 'HP', 'Lenovo'
];

export const brandsByCategory = {
  mobiles: ['Apple', 'Samsung', 'Xiaomi', 'OnePlus', 'Google', 'Realme', 'Motorola', 'Vivo', 'OPPO', 'Nothing'],
  electronics: ['Sony', 'Apple', 'Samsung', 'LG', 'Anker', 'ASUS', 'Dell', 'Bose', 'Logitech', 'Gadgetra'],
  laptops: ['Apple', 'Dell', 'HP', 'Lenovo', 'ASUS', 'Acer', 'MSI', 'Gadgetra', 'LG', 'Microsoft'],
  tvs: ['Samsung', 'LG', 'Sony', 'Xiaomi', 'TCL', 'Hisense', 'OnePlus', 'Vu', 'Panasonic', 'Gadgetra'],
  appliances: ['Samsung', 'LG', 'Whirlpool', 'Haier', 'Bosch', 'IFB', 'Godrej', 'Daikin', 'Voltas', 'Panasonic'],
  audio: ['Bose', 'Sony', 'JBL', 'Sennheiser', 'Apple', 'boat', 'Noise', 'Realme', 'Anker', 'Marshall'],
  wearables: ['Apple', 'Samsung', 'Fitbit', 'Garmin', 'Noise', 'boat', 'Amazfit', 'Fire-Boltt', 'Xiaomi', 'OnePlus'],
  cameras: ['Sony', 'Canon', 'Nikon', 'Fujifilm', 'GoPro', 'Panasonic', 'DJI', 'Sigma', 'Tamron', 'Kodak'],
  gaming: ['Razer', 'Logitech G', 'Corsair', 'ASUS ROG', 'SteelSeries', 'HyperX', 'MSI', 'Sony PlayStation', 'Xbox', 'Redragon'],
  chargers: ['Anker', 'Belkin', 'Gadgetra', 'Stuffcool', 'Ambrane', 'Portronics', 'Spigen', 'Realme', 'Samsung', 'Mi'],
  'computer-accessories': ['Logitech', 'HP', 'Dell', 'Lenovo', 'SanDisk', 'Western Digital', 'Kingston', 'Portronics', 'Zebronics', 'Gadgetra']
};

const categoryImages = {
  mobiles: [
    'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=600&q=80'
  ],
  electronics: [
    'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80'
  ],
  laptops: [
    'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80'
  ],
  tvs: [
    'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=600&q=80'
  ],
  appliances: [
    'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1631541909061-71e349d1f203?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=600&q=80'
  ],
  audio: [
    'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80'
  ],
  wearables: [
    'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80'
  ],
  cameras: [
    'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80'
  ],
  gaming: [
    'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=600&q=80'
  ],
  chargers: [
    'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1609592424074-1428c0570b28?auto=format&fit=crop&w=600&q=80'
  ],
  'computer-accessories': [
    'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80'
  ]
};

const generateProducts = () => {
  const allProducts = [];
  
  const categoryConfigs = [
    {
      slug: 'mobiles',
      catName: 'Mobiles & Gadgets',
      items: [
        { name: 'Ultra 5G Smartphone', basePrice: 899, ram: '12GB', storage: '256GB', proc: 'Snapdragon 8 Gen 3', cam: '200MP + 50MP', bat: '5000mAh' },
        { name: 'Pro Max 5G Flagship', basePrice: 1199, ram: '16GB', storage: '512GB', proc: 'A17 Pro / Snapdragon 8 Gen 3', cam: '108MP + 48MP', bat: '4850mAh' },
        { name: 'Lite 5G Power Edition', basePrice: 349, ram: '8GB', storage: '128GB', proc: 'Dimensity 8200', cam: '64MP + 8MP', bat: '6000mAh' },
        { name: 'Fold Pro Dual Display', basePrice: 1499, ram: '16GB', storage: '512GB', proc: 'Snapdragon 8 Gen 3', cam: '50MP Triple OIS', bat: '4400mAh' },
        { name: 'Pad Pro 12.9 Tablet', basePrice: 699, ram: '8GB', storage: '256GB', proc: 'M2 Chip Equivalent', cam: '12MP Ultra-Wide', bat: '10090mAh' }
      ]
    },
    {
      slug: 'electronics',
      catName: 'Electronics',
      items: [
        { name: 'Smart Home Automation Controller Hub', basePrice: 299, type: 'Smart Home Hub', connectivity: 'Wi-Fi 6E / Zigbee / Matter', power: 'DC 12V Adapter' },
        { name: 'Wireless Security Camera System 4K', basePrice: 249, type: 'CCTV Security Camera', resolution: '4K Ultra HD', nightVision: 'Color Night Vision 30m' },
        { name: 'Digital Graphic Drawing Tablet 16"', basePrice: 449, type: 'Stylus Pen Display', pressure: '8192 Pressure Levels', screen: '16" QHD Anti-Glare' },
        { name: 'Smart Video Doorbell Pro 2K', basePrice: 149, type: 'Doorbell Camera', fieldOfView: '180° Head-to-Toe View', battery: 'Rechargeable 6000mAh' }
      ]
    },
    {
      slug: 'laptops',
      catName: 'Laptops & Computers',
      items: [
        { name: 'Titanium X1 UltraBook', basePrice: 1299, ram: '32GB', storage: '1TB SSD', proc: 'Intel Core i9 / M3 Pro', gpu: 'RTX 4060 / 18-Core GPU', screen: '14" 3K OLED 120Hz' },
        { name: 'Gaming Rig Strix G16', basePrice: 1599, ram: '16GB', storage: '1TB SSD', proc: 'Intel Core i7 14700HX', gpu: 'NVIDIA RTX 4070 8GB', screen: '16" QHD+ 240Hz' },
        { name: 'Air Slim 13 Ultralight', basePrice: 899, ram: '16GB', storage: '512GB SSD', proc: 'Core Ultra 7', gpu: 'Intel Arc Graphics', screen: '13.3" IPS 2.5K' },
        { name: 'Creator Pro 16 Workstation', basePrice: 1899, ram: '64GB', storage: '2TB SSD', proc: 'AMD Ryzen 9 7945HX', gpu: 'RTX 4080 12GB', screen: '16" 4K Mini-LED' }
      ]
    },
    {
      slug: 'tvs',
      catName: 'TVs & Entertainment',
      items: [
        { name: 'Cinema OLED 4K Smart TV 55"', basePrice: 1149, screen: '55 Inch', res: '4K Ultra HD', panel: 'OLED Self-Lit', refresh: '120Hz', os: 'Google TV / WebOS' },
        { name: 'Quantum QLED 4K TV 65"', basePrice: 1399, screen: '65 Inch', res: '4K Ultra HD', panel: 'QLED Quantum Dot', refresh: '120Hz', os: 'Tizen OS' },
        { name: 'Crystal 4K Ultra HD TV 43"', basePrice: 349, screen: '43 Inch', res: '4K Ultra HD', panel: 'LED Backlit', refresh: '60Hz', os: 'Android TV' },
        { name: 'Laser 4K Home Theater Projector', basePrice: 899, screen: 'Up to 150 Inch', res: '4K UHD Laser', panel: 'ALPD 4.0 Laser', refresh: '60Hz', os: 'Smart OS' }
      ]
    },
    {
      slug: 'appliances',
      catName: 'Home Appliances',
      items: [
        { name: 'Smart Inverter Side-by-Side Fridge 550L', basePrice: 1099, cap: '550 Liters', rating: '5 Star', type: 'French Door Side-by-Side' },
        { name: 'AI Direct Drive Front Load Washer 9kg', basePrice: 549, cap: '9.0 kg', rating: '5 Star', type: 'Front Load Fully Automatic' },
        { name: 'Convertible 6-in-1 Dual Inverter AC 1.5T', basePrice: 499, cap: '1.5 Ton', rating: '5 Star', type: 'Split Inverter AC' },
        { name: 'Robotic Vacuum & Sonic Mop V8', basePrice: 429, cap: '4000Pa Suction', rating: 'LiDAR AI Mapping', type: 'Auto Empty Dock' }
      ]
    },
    {
      slug: 'audio',
      catName: 'Audio',
      items: [
        { name: 'Studio Pro 45dB Hybrid ANC Headphones', basePrice: 249, type: 'Over-Ear Wireless', anc: '45dB Hybrid ANC', bat: '60 Hours' },
        { name: 'TWS Noise Canceling Active Earbuds', basePrice: 149, type: 'In-Ear TWS', anc: 'Active ANC 35dB', bat: '30 Hours with Case' },
        { name: 'Cinema Dolby Atmos Soundbar 400W', basePrice: 349, type: '5.1 Soundbar + Subwoofer', anc: 'Dolby Atmos Surround', bat: 'AC Powered' },
        { name: 'Rugged Waterproof Outdoor Speaker 40W', basePrice: 119, type: 'Portable Bluetooth', anc: 'BassBoost Tech', bat: '24 Hours' }
      ]
    },
    {
      slug: 'wearables',
      catName: 'Wearables',
      items: [
        { name: 'Apex Ultra Titanium Smartwatch', basePrice: 299, screen: '1.43" AMOLED 1000 nits', sensors: 'ECG, SpO2, Heart Rate, GPS', bat: '14 Days' },
        { name: 'Fitness Band Pro HR & Sleep', basePrice: 49, screen: '1.1" Curved AMOLED', sensors: 'SpO2, 24/7 Pulse, Sleep AI', bat: '18 Days' },
        { name: 'Smart Health Ring Gen 3', basePrice: 199, screen: 'Titanium Ring Body', sensors: 'Body Temp, HRV, Sleep Recovery', bat: '7 Days' }
      ]
    },
    {
      slug: 'cameras',
      catName: 'Cameras',
      items: [
        { name: 'Alpha Full-Frame 33MP Mirrorless Camera', basePrice: 1499, sensor: '33MP Full-Frame CMOS', video: '4K 60fps 10-Bit', lens: '24-70mm f/2.8 GM Lens' },
        { name: 'Action Cam 4K 120fps Waterproof', basePrice: 349, sensor: '1/1.3" CMOS Sensor', video: '4K 120fps / 5.3K 60fps', lens: 'Ultra Wide 155°' },
        { name: 'Vlog Compact 4K Camera Flip Screen', basePrice: 699, sensor: '1.0" Exmor RS CMOS', video: '4K 30fps HDR', lens: '20-70mm F2.0 Lens' }
      ]
    },
    {
      slug: 'gaming',
      catName: 'Gaming',
      items: [
        { name: 'RGB Hot-Swappable Mechanical Keyboard', basePrice: 139, type: '75% Wireless Mechanical', switches: 'Linear Factory Lubed', rgb: 'Per-Key RGB' },
        { name: 'Ultra-Lightweight 54g Gaming Mouse 8K', basePrice: 89, type: '8000Hz Polling Wireless', sensor: '30,000 DPI Optical', rgb: 'Lightweight Honeycomb' },
        { name: 'Haptic Feedback Wireless Gamepad', basePrice: 69, type: 'Dual Haptic Wireless', compatibility: 'PC, Console, Mobile', rgb: 'Custom LED Accent' }
      ]
    },
    {
      slug: 'chargers',
      catName: 'Chargers & Cables',
      items: [
        { name: '140W GaN V Multi-Port Fast Wall Charger', basePrice: 79, ports: '3x USB-C, 1x USB-A', output: '140W Max PD 3.1', tech: 'GaN V Semiconductor' },
        { name: '20000mAh 65W Laptop Power Bank', basePrice: 59, capacity: '20,000mAh', output: '65W USB-C PD', display: 'Smart Digital LED' },
        { name: 'Braided 240W USB-C 2-Meter Fast Cable', basePrice: 19, power: '240W 48V/5A', material: 'Kevlar Braided Nylon', speed: '40Gbps Data Sync' }
      ]
    },
    {
      slug: 'computer-accessories',
      catName: 'Computer Accessories',
      items: [
        { name: 'Darkfield 8000 DPI Ergonomic Mouse', basePrice: 99, dpi: '8000 DPI Darkfield', scroll: 'MagSpeed Electromagnetic', connectivity: 'Bluetooth / 2.4GHz' },
        { name: '1080p Full HD Pro Streaming Webcam', basePrice: 69, resolution: '1080p 60fps', mic: 'Dual Noise Canceling Mics', focus: 'Auto Light Correction' },
        { name: '2TB NVMe PCIe 4.0 Internal SSD 7400MB/s', basePrice: 149, capacity: '2TB NVMe', speed: '7400 MB/s Read', heatsink: 'Aluminum Heatsink' }
      ]
    }
  ];

  let idCounter = 1;

  categoryConfigs.forEach(cfg => {
    const brandList = brandsByCategory[cfg.slug] || ['Gadgetra', 'Samsung', 'Sony'];
    const imgs = categoryImages[cfg.slug] || categoryImages.mobiles;

    for (let i = 1; i <= 50; i++) {
      const template = cfg.items[(i - 1) % cfg.items.length];
      const brand = brandList[(i - 1) % brandList.length];
      const modelNum = Math.floor(100 + i * 7);
      const name = `${brand} ${template.name} ${modelNum}`;
      
      const priceOffset = (i % 7) * 20 - 40;
      const price = Math.max(15, template.basePrice + priceOffset);
      const originalPrice = Math.round(price * 1.25);
      const discountPct = Math.round(((originalPrice - price) / originalPrice) * 100);

      const rating = Number((4.0 + (i % 10) * 0.1).toFixed(1));
      const reviewCount = 25 + i * 14;
      const image = imgs[i % imgs.length];

      let specs = {};
      if (cfg.slug === 'mobiles') {
        specs = {
          RAM: template.ram || '8GB LPDDR5',
          Storage: template.storage || '128GB UFS 3.1',
          Processor: template.proc || 'Octa-Core 5G Processor',
          Camera: template.cam || '50MP Triple Camera',
          Battery: template.bat || '5000mAh',
          Display: '6.67" AMOLED 120Hz',
          OS: 'Android 14 / iOS'
        };
      } else if (cfg.slug === 'electronics') {
        specs = {
          Type: template.type || 'Consumer Electronics',
          Connectivity: template.connectivity || 'Wi-Fi 6 / Bluetooth 5.3',
          Resolution: template.resolution || '4K Ultra HD',
          PowerSupply: template.power || 'AC 100-240V'
        };
      } else if (cfg.slug === 'laptops') {
        specs = {
          Processor: template.proc || 'Intel Core i7 13th Gen',
          RAM: template.ram || '16GB DDR5',
          Storage: template.storage || '512GB NVMe SSD',
          Graphics: template.gpu || 'NVIDIA RTX 4050 6GB',
          Display: template.screen || '15.6" FHD 144Hz',
          OS: 'Windows 11 Home / macOS'
        };
      } else if (cfg.slug === 'tvs') {
        specs = {
          ScreenSize: template.screen || '55 Inch',
          Resolution: template.res || '4K Ultra HD (3840x2160)',
          PanelType: template.panel || 'Quantum Dot OLED',
          RefreshRate: template.refresh || '120Hz Native',
          SmartOS: template.os || 'Google TV WebOS'
        };
      } else if (cfg.slug === 'appliances') {
        specs = {
          Capacity: template.cap || '400 Liters / 8kg',
          EnergyRating: template.rating || '5 Star Rated',
          Type: template.type || 'Inverter Smart Appliance',
          Warranty: '10 Year Compressor / Motor Warranty'
        };
      } else if (cfg.slug === 'audio') {
        specs = {
          Type: template.type || 'Wireless Hi-Fi Audio',
          ANC: template.anc || 'Active Hybrid ANC',
          BatteryLife: template.bat || '40 Hours Playback',
          Bluetooth: 'v5.3 LE Spatial Audio'
        };
      } else if (cfg.slug === 'wearables') {
        specs = {
          Display: template.screen || '1.4" Always-On AMOLED',
          Sensors: template.sensors || 'Heart Rate, SpO2, Sleep, GPS',
          Battery: template.bat || '10 Days Typical Use',
          Waterproof: '5ATM Waterproof'
        };
      } else if (cfg.slug === 'cameras') {
        specs = {
          Sensor: template.sensor || '24MP CMOS Sensor',
          VideoResolution: template.video || '4K 60fps Ultra HD',
          Lens: template.lens || 'Kit Lens 18-55mm IS'
        };
      } else if (cfg.slug === 'gaming') {
        specs = {
          Type: template.type || 'Pro Gaming Gear',
          RGB: template.rgb || 'RGB Lighting 16.8M Colors',
          Switches: template.switches || 'Mechanical Speed Switches'
        };
      } else if (cfg.slug === 'chargers') {
        specs = {
          Ports: template.ports || 'Multi-Port USB-C',
          OutputPower: template.output || '100W Max PD',
          Technology: template.tech || 'GaN Fast Charge Tech'
        };
      } else {
        specs = {
          DPI: template.dpi || '4000 DPI Precision Sensor',
          Connectivity: template.connectivity || 'Bluetooth / Wireless 2.4GHz',
          Capacity: template.capacity || '1TB High-Speed SSD'
        };
      }

      allProducts.push({
        id: `gadget-${idCounter++}`,
        name: name,
        category: cfg.catName,
        categorySlug: cfg.slug,
        brand: brand,
        image: image,
        images: [image],
        price: price,
        originalPrice: originalPrice,
        discount: `${discountPct}% OFF`,
        rating: rating,
        reviewCount: reviewCount,
        shortDescription: `High-performance ${name} engineered with official brand warranty, fast express delivery, and premium reliability.`,
        highlights: [
          `Official ${brand} Manufacturer Backed Product`,
          `High Efficiency & Sleek Premium Design`,
          `2-Year Direct Warranty & 30-Day Hassle Returns`
        ],
        specifications: specs,
        availability: true,
        stockCount: Math.floor(5 + (i * 3) % 25),
        warranty: '2 Year Official Manufacturer Warranty',
        offers: [
          'Bank Offer: Extra 10% Instant Discount on HDFC & SBI Credit Cards',
          'No Cost EMI starting at low monthly installments'
        ],
        tags: [cfg.slug, brand.toLowerCase(), 'gadgetra', 'electronics'],
        isBestSeller: i % 5 === 0,
        isTrending: i % 4 === 0,
        isTopDeal: i % 3 === 0,
        isRecommended: i % 6 === 0
      });
    }
  });

  return allProducts;
};

export const products = generateProducts();
