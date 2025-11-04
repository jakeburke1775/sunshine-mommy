import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import styles from './Shop.module.css';

// Initialize Stripe with your publishable key
const stripePromise = loadStripe('pk_test_51SOqWZEORaL8eBQaFf3Xe7BXtL42ZZK252Cd6XSZDMS89k4YR0B4vbXcRc2JR8vwR5A5FzcFSJZLnE0gtfspPDU1008vOtc9xm');

const Shop = () => {
  const [loading, setLoading] = useState(false);

  const products = [
    {
      id: 'petite',
      name: 'The Petite Mommy Box',
      price: '$110.00',
      features: [
        'Cozy slippers for comfort',
        'Cooling pads for relief',
        'Nourishing lip balm',
        'Beautiful bracelet',
        'Luxurious body lotion',
        'Soft scrunchie',
        'Comfortable headband',
        'Facial roller for self-care',
      ],
      paymentUrl: 'https://buy.stripe.com/test_eVq28rebJ5Zl9AE1ro6Na00',
      popular: false
    },
    {
      id: 'standard',
      name: 'The Mommy Box',
      price: '$150.00',
      features: [
        'Everything in Petite Box',
        'Soothing aromatherapy candle',
        'Nourishing tummy butter',
        'Extra cooling pads for comfort',
      ],
      paymentUrl: 'https://buy.stripe.com/test_6oU8wP2t187t8wAda66Na01',
      popular: true
    },
    {
      id: 'deluxe',
      name: 'The Deluxe Mommy Box',
      price: '$185.00',
      features: [
        'Everything in Mommy Box',
        'Luxurious spa-quality robe',
        'Premium insulated tumbler',
        'Personalized handwritten note',
      ],
      paymentUrl: 'https://buy.stripe.com/test_3cI00j1oX87tdQU7PM6Na02',
      popular: false
    }
  ];

  const handleOrderNow = (paymentUrl) => {
    setLoading(true);
    window.location.href = paymentUrl;
  };

  return (
    <div className={styles.shop}>
      <h1>Choose Your Sunshine Mommy Box</h1>
      
      <div className={styles.productsContainer}>
        {products.map((product) => (
          <div key={product.id} className={`${styles.productCard} ${product.popular ? styles.popular : ''}`}>
            {product.popular && <div className={styles.popularBadge}>Most Popular</div>}
            
            <div className={styles.productInfo}>
              <h2>{product.name}</h2>
              
              <div className={styles.features}>
                <h3>What's Inside:</h3>
                <ul>
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className={styles.pricing}>
                <span className={styles.price}>{product.price}</span>
                <span className={styles.shipping}>+ Free Shipping</span>
              </div>
              
              <button 
                className={styles.orderButton}
                onClick={() => handleOrderNow(product.paymentUrl)}
                disabled={loading}
              >
                {loading ? 'Processing...' : `Order ${product.name}`}
              </button>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Shop;