import styles from './Footer.module.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className={styles.mainFooter}>
          <h2>Follow Us!</h2>
          <div className={styles.line}></div>
          <div className={styles.socialIcons}>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaPinterest /></a>
          </div>
      </div>
      <div className={styles.subFooter}>
        <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
        <p><a href="#" className={styles.link}>This site was created with the Nicepage</a></p>
      </div>
    </footer>
  );
};
export default Footer;