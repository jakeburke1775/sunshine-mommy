import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>&copy; {new Date().getFullYear()} Sunshine Mommy. All rights reserved.</p>
        <p className="footer__jakes_domain">Made with jakes-domain.com</p>
      </div>
    </footer>
  );
};

export default Footer;