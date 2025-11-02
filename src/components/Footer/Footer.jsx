import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <p>&copy; {new Date().getFullYear()} Sunshine Mommy. All rights reserved.</p>
        <p className={styles.footer__jakes_domain}>Made with jakes-domain.com</p>
      </div>
    </footer>
  );
};

export default Footer;