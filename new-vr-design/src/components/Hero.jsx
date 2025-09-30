import styles from './Hero.module.css';

const Hero = ({ image, title, text, credit }) => {
  return (
    // Make sure className uses the `styles` object
    <section className={`${styles.hero} container`}>
      <div className={styles.textContainer}>
        <div className={styles.line}></div>
        <h1>{title}</h1>
        <p>{text}</p>
        <p className={styles.credit}>{credit}</p>
        <a href="#" className="button button-solid">Read More</a>
      </div>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} />
      </div>
    </section>
  );
};

export default Hero;