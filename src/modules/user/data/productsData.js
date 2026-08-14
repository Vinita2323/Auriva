import classicMakhanaImg from '../../../assets/Classic Makhana.jpg';
import flavouredMakhanaImg from '../../../assets/Flavored Makhana.jpg';
import premiumMakhanaImg from '../../../assets/Premium Makhana.jpg';
import comboMakhanaImg from '../../../assets/combo Makhana.jpg';
import healthyMakhanaImg from '../../../assets/Healthy Makhana2.jpg';

import creamOnionImg from '../../../assets/Types/CreamOnion.jpeg';
import periPeriImg from '../../../assets/Types/PeriPeri.jpeg';
import tomatoImg from '../../../assets/Types/Tomato.jpeg';

export const productsData = [
  {
    id: 'makhana-peri-peri',
    name: 'Aurivá Makhana Peri Peri',
    subtitle: 'Zesty Botanical Seasoning',
    category: 'Flavoured Makhana',
    categorySlug: 'flavoured-makhana',
    price: 149,
    originalPrice: 179,
    discountPercent: 17,
    rating: 4.9,
    reviewsCount: 125,
    isBestseller: true,
    isNew: false,
    weight: '100g',
    weightOptions: ['100g', '250g', '500g (Pack of 2)'],
    badge: 'BESTSELLER',
    badgeColor: '#D4A359',
    image: periPeriImg,
    description: 'Crispy slow-roasted fox nuts tossed in an authentic African bird’s eye chili spice blend. 100% roasted in cold-pressed olive oil, never fried.',
    benefits: ['Zero Trans Fat', 'Rich in Protein & Calcium', 'Gluten-Free & Vegan', 'Slow Roasted, Never Fried'],
    ingredients: 'Fox Nut (Phool Makhana 82%), Cold Pressed Olive Oil (10%), Peri Peri Seasoning (Chili, Garlic, Onion Powder, Sea Salt, Lemon Extract) (8%).',
    nutrition: {
      calories: '392 kcal',
      protein: '11.8g',
      carbs: '68.4g',
      fat: '7.2g',
      fiber: '8.5g',
      sodium: '180mg'
    },
    inStock: true
  },
  {
    id: 'makhana-cream-onion',
    name: 'Aurivá Makhana Sour Cream & Onion',
    subtitle: 'Classic Savory Crunch',
    category: 'Flavoured Makhana',
    categorySlug: 'flavoured-makhana',
    price: 149,
    originalPrice: 179,
    discountPercent: 17,
    rating: 4.8,
    reviewsCount: 98,
    isBestseller: true,
    isNew: false,
    weight: '100g',
    weightOptions: ['100g', '250g', '500g (Pack of 2)'],
    badge: 'BESTSELLER',
    badgeColor: '#D4A359',
    image: creamOnionImg,
    description: 'Smooth, creamy sour cream notes paired with sweet garden spring onions and lightly salted crunchy fox nuts.',
    benefits: ['Low Glycemic Index', 'Natural Herbs & Seasoning', 'Rich in Magnesium', '100% Vegetarian'],
    ingredients: 'Fox Nut (Phool Makhana 82%), Olive Oil (10%), Cream & Onion Seasoning (Dehydrated Onion, Sour Cream Powder, Chives, Himalayan Pink Salt) (8%).',
    nutrition: {
      calories: '405 kcal',
      protein: '10.5g',
      carbs: '69.0g',
      fat: '8.4g',
      fiber: '7.8g',
      sodium: '195mg'
    },
    inStock: true
  },
  {
    id: 'makhana-tangy-tomato',
    name: 'Aurivá Makhana Tangy Spanish Tomato',
    subtitle: 'Rich Sun-Dried Tomato Crunch',
    category: 'Flavoured Makhana',
    categorySlug: 'flavoured-makhana',
    price: 149,
    originalPrice: 179,
    discountPercent: 17,
    rating: 4.9,
    reviewsCount: 112,
    isBestseller: true,
    isNew: true,
    weight: '100g',
    weightOptions: ['100g', '250g', '500g (Pack of 2)'],
    badge: 'CHEF\'S CHOICE',
    badgeColor: '#B35434',
    image: tomatoImg,
    description: 'Ripe sun-dried Spanish tomatoes blended with oregano, basil, and pink rock salt over extra-large roasted fox nuts.',
    benefits: ['Rich in Lycopene', 'Sun-Dried Tomatoes', '100% Roasted', 'Gluten-Free'],
    ingredients: 'Fox Nut (Phool Makhana 83%), Olive Oil (9%), Tomato Seasoning (Dehydrated Tomato Powder, Oregano, Basil, Sea Salt) (8%).',
    nutrition: {
      calories: '388 kcal',
      protein: '11.2g',
      carbs: '67.8g',
      fat: '6.9g',
      fiber: '9.1g',
      sodium: '165mg'
    },
    inStock: true
  },
  {
    id: 'makhana-smoky-peri-chili',
    name: 'Aurivá Makhana Cheese & Chili Peri',
    subtitle: 'Smoky Botanical Spice',
    category: 'Flavoured Makhana',
    categorySlug: 'flavoured-makhana',
    price: 159,
    originalPrice: 189,
    discountPercent: 16,
    rating: 4.9,
    reviewsCount: 88,
    isBestseller: true,
    isNew: false,
    weight: '100g',
    weightOptions: ['100g', '250g', '500g'],
    badge: 'TOP RATED',
    badgeColor: '#D4A359',
    image: periPeriImg,
    description: 'Smoky paprika paired with sharp cheddar notes and peri-peri heat for a bold botanical snacking experience.',
    benefits: ['Smoky Paprika', 'Rich in Protein', '100% Roasted', 'Zero Trans Fat'],
    ingredients: 'Fox Nut (Phool Makhana 82%), Olive Oil (10%), Smoky Cheese & Chili Seasoning (8%).',
    nutrition: {
      calories: '398 kcal',
      protein: '11.5g',
      carbs: '67.0g',
      fat: '7.8g',
      fiber: '8.2g',
      sodium: '175mg'
    },
    inStock: true
  },
  {
    id: 'makhana-creamy-herb',
    name: 'Aurivá Makhana Creamy Herb & Chives',
    subtitle: 'Fresh Herb & Cream Seasoning',
    category: 'Flavoured Makhana',
    categorySlug: 'flavoured-makhana',
    price: 159,
    originalPrice: 189,
    discountPercent: 16,
    rating: 5.0,
    reviewsCount: 94,
    isBestseller: true,
    isNew: true,
    weight: '100g',
    weightOptions: ['100g', '250g', '500g'],
    badge: 'CUSTOMER FAVORITE',
    badgeColor: '#143826',
    image: creamOnionImg,
    description: 'Hand-picked fox nuts seasoned with french chives, parsley, and delicate sweet cream.',
    benefits: ['French Chives & Parsley', 'Smooth Cream Finish', 'Low Calorie', 'High Calcium'],
    ingredients: 'Fox Nut (Phool Makhana 84%), Olive Oil (9%), Chives & Cream Seasoning (7%).',
    nutrition: {
      calories: '400 kcal',
      protein: '10.8g',
      carbs: '68.2g',
      fat: '8.0g',
      fiber: '7.9g',
      sodium: '160mg'
    },
    inStock: true
  },
  {
    id: 'makhana-himalayan-salt',
    name: 'Aurivá Himalayan Pink Salt Makhana',
    subtitle: 'Traditional Lightly Salted',
    category: 'Classic Makhana',
    categorySlug: 'classic-makhana',
    price: 139,
    originalPrice: 169,
    discountPercent: 18,
    rating: 4.9,
    reviewsCount: 88,
    isBestseller: false,
    isNew: false,
    weight: '100g',
    weightOptions: ['100g', '250g', '500g'],
    badge: 'CLASSIC',
    badgeColor: '#D4A359',
    image: classicMakhanaImg,
    description: 'Pure, authentic fox nuts slow-roasted in cold-pressed virgin coconut oil and seasoned delicately with hand-ground Himalayan Pink Rock Salt.',
    benefits: ['Pure Himalayan Salt', 'Natural Electrolytes', '100% Organic', 'Gluten-Free'],
    ingredients: 'Fox Nut (Phool Makhana 88%), Cold Pressed Coconut Oil (9%), Himalayan Pink Salt (3%).',
    nutrition: {
      calories: '375 kcal',
      protein: '12.1g',
      carbs: '66.0g',
      fat: '5.5g',
      fiber: '9.5g',
      sodium: '140mg'
    },
    inStock: true
  },
  {
    id: 'makhana-royal-truffle-jumbo',
    name: 'Aurivá Royal Black Truffle Makhana',
    subtitle: 'Extra Jumbo 6+ Grade Pops',
    category: 'Premium Makhana',
    categorySlug: 'premium-makhana',
    price: 299,
    originalPrice: 349,
    discountPercent: 14,
    rating: 5.0,
    reviewsCount: 68,
    isBestseller: false,
    isNew: true,
    weight: '150g Canister',
    weightOptions: ['150g Luxury Canister', '300g Gift Box'],
    badge: 'LUXURY RESERVE',
    badgeColor: '#143826',
    image: premiumMakhanaImg,
    description: 'Hand-sorted 6+ size mega fox nut pops roasted in extra virgin olive oil and infused with Italian Black Truffle and sea salt flakes.',
    benefits: ['6+ Size Mega Pops', 'Italian Black Truffle', 'Luxury Canister', 'Gourmet Snacking'],
    ingredients: 'Jumbo Fox Nut (Phool Makhana 80%), Extra Virgin Olive Oil (12%), Black Truffle Powder & Sea Salt (8%).',
    nutrition: {
      calories: '425 kcal',
      protein: '11.0g',
      carbs: '64.5g',
      fat: '11.2g',
      fiber: '8.2g',
      sodium: '160mg'
    },
    inStock: true
  },
  {
    id: 'makhana-4in1-combo-pack',
    name: 'Aurivá Makhana 4-Flavour Feast Box',
    subtitle: 'Peri Peri, Cream & Onion, Salted & Pudina',
    category: 'Makhana Combos',
    categorySlug: 'makhana-combos',
    price: 499,
    originalPrice: 649,
    discountPercent: 23,
    rating: 5.0,
    reviewsCount: 156,
    isBestseller: false,
    isNew: false,
    weight: '4 x 100g Packs',
    weightOptions: ['4 x 100g Variety Box', '8 x 100g Mega Party Box'],
    badge: 'BEST VALUE COMBO',
    badgeColor: '#B35434',
    image: comboMakhanaImg,
    description: 'The ultimate sampler pack containing 4 individual pouches of our top-rated roasted makhana: Peri Peri, Sour Cream & Onion, Pink Salt, and Tangy Tomato.',
    benefits: ['4 Distinct Flavours', 'Save ₹150 vs Single Packs', 'Perfect Family Gift Box', '100% Roasted'],
    ingredients: 'Variety selection of Peri Peri, Sour Cream & Onion, Pink Salt, and Tangy Tomato Makhana.',
    nutrition: {
      calories: '395 kcal avg/100g',
      protein: '11.4g',
      carbs: '67.0g',
      fat: '7.5g',
      fiber: '8.8g',
      sodium: '170mg'
    },
    inStock: true
  },
  {
    id: 'makhana-zero-oil-fitness',
    name: 'Aurivá Zero-Oil Fitness Diet Makhana',
    subtitle: 'Air Roasted • Keto & Gym Fuel',
    category: 'Healthy / Fitness Makhana',
    categorySlug: 'healthy-fitness-makhana',
    price: 159,
    originalPrice: 189,
    discountPercent: 16,
    rating: 4.9,
    reviewsCount: 92,
    isBestseller: false,
    isNew: false,
    weight: '120g',
    weightOptions: ['120g', '250g Fitness Tub'],
    badge: 'ZERO OIL',
    badgeColor: '#4A7C59',
    image: healthyMakhanaImg,
    description: '100% oil-free hot air roasted Makhana dusted with organic chia seeds, pumpkin seeds, and low-sodium sea salt. High fiber, zero added fat.',
    benefits: ['0% Added Oil', 'Low Calorie High Protein', 'Keto & Diabetic Friendly', 'Clean Gym Fuel'],
    ingredients: 'Fox Nut (Phool Makhana 92%), Roasted Chia & Pumpkin Seeds (5%), Low Sodium Sea Salt & Herbs (3%).',
    nutrition: {
      calories: '348 kcal',
      protein: '14.2g',
      carbs: '69.5g',
      fat: '1.2g',
      fiber: '11.5g',
      sodium: '85mg'
    },
    inStock: true
  }
];

export const heroSlides = [
  {
    id: 1,
    title: 'Nourishing Naturally.',
    subtitle: 'Wholesome goodness for everyday living.',
    tagline: '100% ROASTED • ZERO PRESERVATIVES • PLANT POWERED',
    primaryCta: 'SHOP NOW',
    secondaryCta: 'EXPLORE AURIVÁ',
    bgImage: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1600&q=85',
    productFeatured: {
      name: 'AURIVÁ MAKHANA PERI PERI',
      subtitle: 'Roasted & Lightly Salted',
      badge: '100% NATURAL',
      price: '₹149'
    }
  }
];

export const storyFeatures = [
  {
    id: 1,
    title: 'Natural Ingredients',
    description: 'Directly sourced from trusted regenerative organic farms across India with zero chemicals.',
    icon: 'Leaf'
  },
  {
    id: 2,
    title: 'Sourced Responsibly',
    description: 'Fair prices paid to local farmers, ensuring sustainable agro-ecological practices.',
    icon: 'Globe'
  },
  {
    id: 3,
    title: 'Made with Care',
    description: 'Slow-roasted in small batches with cold-pressed oils and hygienic gold-standard packaging.',
    icon: 'HeartHandshake'
  },
  {
    id: 4,
    title: 'Loved by Families',
    description: 'Over 50,000+ happy homes rely on Aurivá for guilt-free everyday family snacking.',
    icon: 'Users'
  }
];

export const customerReviews = [
  {
    id: 1,
    name: 'Ananya Sharma',
    city: 'Bengaluru',
    rating: 5,
    date: 'Verified Buyer • 2 days ago',
    title: 'Hands down the best Peri Peri Makhana!',
    comment: 'The crunch is incredible and not oily at all. You can taste the real chili and herbs rather than artificial powders. My kids and I finished the box in two days!',
    product: 'Aurivá Makhana Peri Peri'
  },
  {
    id: 2,
    name: 'Rohit Verma',
    city: 'Mumbai',
    rating: 5,
    date: 'Verified Buyer • 1 week ago',
    title: 'The Gift Box was a massive hit at Diwali',
    comment: 'The packaging looks so luxurious and premium. The mixed dry fruit jar with gold cap is top notch. Aurivá has set a new benchmark for clean healthy snacking.',
    product: 'The Aurivá Healthy Snack Box'
  },
  {
    id: 3,
    name: 'Dr. Priya Nair',
    city: 'Hyderabad',
    rating: 5,
    date: 'Verified Buyer • 2 weeks ago',
    title: 'Perfect evening snack for my clinic & home',
    comment: 'As a nutritionist, I am very picky about sodium and palm oil. Aurivá uses cold-pressed oils and rock salt. Truly wholesome and guilt-free.',
    product: '7-in-1 Super Seeds Mix'
  }
];
