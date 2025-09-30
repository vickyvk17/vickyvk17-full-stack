import styles from './FeatureOverlay.module.css';

const FeatureOverlay = ({ backgroundImage, subheading, title, credit, buttonText }) => {
  return (
    <section 
      className={styles.wrapper} 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={`${styles.overlayContainer} container`}>
        <div className={styles.contentBox}>
          <p className={styles.subheading}>{subheading}</p>
          <h2>{title}</h2>
          <p className={styles.credit}>{credit}</p>
          <a href="#" className="button button-outline">{buttonText}</a>
        </div>
      </div>
    </section>
  );
};

export default FeatureOverlay;