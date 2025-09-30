import styles from './FeatureSection.module.css';

const FeatureSection = ({
  image,
  title,
  subheading,
  text,
  secondaryText,
  credit,
  buttonText,
  imageSide = 'right',
  extras = [],
  iconHeader
}) => {
  const containerClasses = `${styles.feature} container ${imageSide === 'left' ? styles.reverse : ''}`;

  return (
    <section className={containerClasses}>
      <div className={styles.textContainer}>
        {iconHeader && (
          <div className={styles.iconHeader}>
            <div className={styles.iconWrapper}>{iconHeader}</div>
            <h2>{title}</h2>
          </div>
        )}
        
        {!iconHeader && (
          <>
            {subheading && <p className={styles.subheading}>{subheading}</p>}
            <h2>{title}</h2>
          </>
        )}

        <p>{text}</p>
        {secondaryText && <p><strong>{secondaryText}</strong></p>}
        {credit && <p className={styles.credit}>{credit}</p>}

        {extras.length > 0 && (
          <div className={styles.extrasContainer}>
            {extras.map((item, index) => (
              <div key={index} className={styles.extraItem}>
                <div className={styles.extraIcon}>{item.icon}</div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {buttonText && <a href="#" className="button button-outline">{buttonText}</a>}
      </div>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} />
      </div>
    </section>
  );
};

export default FeatureSection;