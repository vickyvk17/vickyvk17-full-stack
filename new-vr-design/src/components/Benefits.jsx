import styles from './Benefits.module.css';
import { BsHeadsetVr, BsPersonVideo3, BsWifi } from "react-icons/bs";

const Benefits = () => {
  return (
    <section className={styles.benefitsWrapper}>
      <div className="container">
        <h2 className={styles.title}>VR's Surprising Benefits</h2>
        <p className={styles.subtitle}>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <BsHeadsetVr className={styles.icon} />
            <h3>MENTAL HEALTH</h3>
            <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
            <a href="#" className="button button-outline">more</a>
          </div>
          <div className={styles.card}>
            <BsPersonVideo3 className={styles.icon} />
            <h3>REALISTIC EXPERIENCE</h3>
            <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
            <a href="#" className="button button-outline">more</a>
          </div>
          <div className={styles.card}>
            <BsWifi className={styles.icon} />
            <h3>RELAX</h3>
            <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
            <a href="#" className="button button-outline">more</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;