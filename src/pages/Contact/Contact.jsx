import styles from './Contact.module.css';
import { Phone, Mail, Facebook, Instagram, Twitter, PinIcon } from 'lucide-react';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1>Contact Us</h1>
      
      <div className={styles.contactInfo}>
        <div className={styles.contactItem}>
          <h3><Phone size={20} /> Phone</h3>
          <p>(555) 123-MAMA</p>
        </div>
        
        <div className={styles.contactItem}>
          <h3><Mail size={20} /> Email</h3>
          <p>hello@sunshinemommy.com</p>
        </div>
      </div>
      
      <div className={styles.socialSection}>
        <h3>Follow Us</h3>
        <div className={styles.socialIcons}>
          <a href="#" className={styles.socialIcon}>
            <Facebook size={20} /> Facebook
          </a>
          <a href="#" className={styles.socialIcon}>
            <Instagram size={20} /> Instagram
          </a>
          <a href="#" className={styles.socialIcon}>
            <Twitter size={20} /> Twitter
          </a>
          <a href="#" className={styles.socialIcon}>
            <PinIcon size={20} /> Pinterest
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;