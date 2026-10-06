import React from 'react';
import { Smartphone, Laptop, Tv, Headphones, BatteryCharging, ArrowUpRight } from 'lucide-react';
import './Categories.css';

const categoriesData = [
  {
    id: 'smartphones',
    title: 'Smartphones & Gadgets',
    count: '140+ Products',
    description: '5G Smartphones, Smartwatches, VR Gear & Wearables',
    icon: Smartphone,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80',
    tag: 'Popular',
    accent: '#2563eb'
  },
  {
    id: 'laptops',
    title: 'Laptops & Computers',
    count: '95+ Products',
    description: 'Gaming Laptops, Ultrabooks, Workstations & 4K Monitors',
    icon: Laptop,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80',
    tag: 'Trending',
    accent: '#06b6d4'
  },
  {
    id: 'appliances',
    title: 'Home Appliances',
    count: '80+ Products',
    description: 'Smart ACs, Robotic Vacuums, Refrigerators & OLED TVs',
    icon: Tv,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80',
    tag: 'Smart Home',
    accent: '#8b5cf6'
  },
  {
    id: 'audio',
    title: 'Audio',
    count: '120+ Products',
    description: 'Wireless ANC Earbuds, Studio Headphones & Soundbars',
    icon: Headphones,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
    tag: 'Hi-Fi Sound',
    accent: '#ec4899'
  },
  {
    id: 'accessories',
    title: 'Accessories',
    count: '210+ Products',
    description: 'GaN Fast Chargers, Wireless Charging Pads, Hubs & Cables',
    icon: BatteryCharging,
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80',
    tag: 'Essentials',
    accent: '#10b981'
  }
];

const Categories = ({ onSelectCategory }) => {
  return (
    <section className="categories-section" id="categories">
      <div className="container">
        <div className="categories-header text-center">
          <span className="section-tag">Explore Catalog</span>
          <h2 className="section-title">Shop by Category</h2>
          <p className="section-subtitle">
            Find cutting-edge electronics and accessories engineered for work, gaming, entertainment, and smart living.
          </p>
        </div>

        <div className="categories-grid">
          {categoriesData.map((cat) => {
            const IconComponent = cat.icon;
            return (
              <div
                key={cat.id}
                className="category-card"
                onClick={() => onSelectCategory && onSelectCategory(cat.id)}
              >
                <div className="card-bg-image" style={{ backgroundImage: `url(${cat.image})` }}></div>
                <div className="card-overlay"></div>

                <div className="category-card-content">
                  <div className="card-top">
                    <div className="category-icon-wrapper" style={{ backgroundColor: cat.accent }}>
                      <IconComponent size={22} color="#ffffff" />
                    </div>
                    <span className="category-tag">{cat.tag}</span>
                  </div>

                  <div className="card-bottom">
                    <span className="item-count">{cat.count}</span>
                    <h3 className="category-name">{cat.title}</h3>
                    <p className="category-desc">{cat.description}</p>
                    <span className="explore-btn">
                      Shop Category <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
