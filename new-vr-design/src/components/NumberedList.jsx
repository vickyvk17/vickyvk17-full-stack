import styles from './NumberedList.module.css';

const NumberedList = () => {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <h2 className={styles.title}>VR's Surprising Benefits</h2>
        <p className={styles.subtitle}>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
        <div className={styles.listContainer}>
          <div className={styles.listItem}>
            <div className={styles.number}>1</div>
            <p>To reap the benefits of virtual reality in education, it is important for students to use VR equipment safely. VR users often spin around or stride blindly, ignoring their physical surroundings.</p>
          </div>
          <div className={styles.listItem}>
            <div className={styles.number}>2</div>
            <p>The benefits of virtual reality in education are embraced by many educators, but some are still reluctant to use it in their classrooms. Reasons range from high costs to pushback from school administrators.</p>
          </div>
          <div className={`${styles.listItem} ${styles.highlighted}`}>
            <div className={styles.number}>3</div>
            <p>Before looking into some of the benefits of virtual reality in education, let's define what virtual reality is and how it differs from augmented reality. AR is used on a smart device to project a layer of educational text.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumberedList;