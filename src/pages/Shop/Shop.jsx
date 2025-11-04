import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import styles from './Shop.module.css';

// Initialize Stripe with your publishable key
const stripePromise = loadStripe('pk_test_51SOqWZEORaL8eBQaFf3Xe7BXtL42ZZK252Cd6XSZDMS89k4YR0B4vbXcRc2JR8vwR5A5FzcFSJZLnE0gtfspPDU1008vOtc9xm');

const Shop = () => {
  const [loading, setLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('standard');

  const products = [
    {
      id: 'petite',
      name: 'Petite',
      fullName: 'The Petite Mommy Box',
      price: '$110',
      image: '/sunshine-mommy/petite-box.jpg',
      features: [
        'Cozy slippers',
        'Cooling pads',
        'Lip balm',
        'Bracelet',
        'Body lotion',
        'Scrunchie',
        'Headband',
        'Facial roller',
      ],
      paymentUrl: 'https://buy.stripe.com/test_eVq28rebJ5Zl9AE1ro6Na00'
    },
    {
      id: 'standard',
      name: 'Mommy Box',
      fullName: 'The Mommy Box',
      price: '$150',
      image: '/sunshine-mommy/mommy-box.jpg',
      features: [
        'Everything in Petite',
        'Aromatherapy candle',
        'Tummy butter',
        'Extra cooling pads',
      ],
      paymentUrl: 'https://buy.stripe.com/test_6oU8wP2t187t8wAda66Na01',
      popular: true
    },
    {
      id: 'deluxe',
      name: 'Deluxe',
      fullName: 'The Deluxe Mommy Box',
      price: '$185',
      image: '/sunshine-mommy/deluxe-box.jpg',
      features: [
        'Everything in Mommy Box',
        'Spa-quality robe',
        'Premium tumbler',
        'Handwritten note',
      ],
      paymentUrl: 'https://buy.stripe.com/test_3cI00j1oX87tdQU7PM6Na02'
    }
  ];

  const handleOrderNow = (paymentUrl) => {
    setLoading(true);
    window.location.href = paymentUrl;
  };

  const selectedProductData = products.find(p => p.id === selectedProduct);

  return (
    <div className={styles.shop}>
      <h1>Choose Your Box</h1>
      
      {/* Product Selector */}
      <div className={styles.productSelector}>
        {products.map((product) => (
          <button
            key={product.id}
            className={`${styles.selectorButton} ${selectedProduct === product.id ? styles.active : ''} ${product.popular ? styles.popular : ''}`}
            onClick={() => setSelectedProduct(product.id)}
          >
            <span className={styles.productName}>{product.name}</span>
            <span className={styles.productPrice}>{product.price}</span>
            {product.popular && <span className={styles.popularTag}>Most Popular</span>}
          </button>
        ))}
      </div>

      {/* Selected Product Details */}
      <div className={styles.productDetails}>
        <h2>{selectedProductData.fullName}</h2>
        <img 
          src={selectedProductData.image} 
          alt={selectedProductData.fullName}
          className={styles.productImage}
        />
        
        <div className={styles.features}>
          <h3>What's Inside:</h3>
          <ul className={selectedProductData.features.length > 4 ? styles.twoColumns : styles.oneColumn}>
            {selectedProductData.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        
        <div className={styles.orderSection}>
          <div className={styles.pricing}>
            <span className={styles.price}>{selectedProductData.price}</span>
            <span className={styles.shipping}>+ Free Shipping</span>
          </div>
          
          <button 
            className={styles.orderButton}
            onClick={() => handleOrderNow(selectedProductData.paymentUrl)}
            disabled={loading}
          >
            {loading ? 'Processing...' : `Order ${selectedProductData.fullName}`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;