import styles from './KeyTopics.module.css';
import { FaWhatsapp } from 'react-icons/fa';

const KeyTopics = () => {
  return (
    <section className={`${styles.keyTopics} container`}>
      <div className={styles.column}>
        <h3>10 Key Benefits of VR in Education</h3>
        <p>The principal reason we continue to adapt and evolve our business model is to ensure that we are meeting our customers’ expectations. One example of this has been to use modern technology and the introduction of the real time tracking our teams using GPS.</p>
        <a href="#" className={styles.chatLink}>
          <FaWhatsapp />
          <span>Chat Now</span>
        </a>
      </div>
      <div className={styles.column}>
        <h3 className={styles.lightText}>Experts reveal four surprising health benefits of VR gaming</h3>
        <p><strong>SAMPLE HEADLINE</strong></p>
      </div>
    </section>
  );
};
export default KeyTopics;