import styles from './Contact.module.css';
import { Phone, Mail, Facebook, Instagram, Twitter, PinIcon } from 'lucide-react';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1>Contact Us</h1>
      <p> Click to copy or navigate.</p>
      
      <div className={styles.contactInfo}>
        <a href="tel:+15551232626" className={styles.contactItem}>
          <h3><Phone size={20} /> Phone</h3>
          <p>(555) 123-MAMA</p>
        </a>
        
        <a href="mailto:hello@sunshinemommy.com" className={styles.contactItem}>
          <h3><Mail size={20} /> Email</h3>
          <p>hello@sunshinemommy.com</p>
        </a>
        
        <a href="https://instagram.com/sunshinemommy" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
          <h3><Instagram size={20} /> Instagram</h3>
          <p>@sunshinemommy</p>
        </a>
      </div>
    </div>
  );
};

export default Contact;