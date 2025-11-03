import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>Sunshine Mommy</h1>
      <p>The perfect gift for expecting mothers - whether you're treating yourself or surprising someone special. Our carefully curated Mommy Box celebrates the amazing woman bringing new life into the world.</p>
      <p>Each box is thoughtfully packed with comfort essentials for the hospital stay, complete with a personalized handwritten note. Because while everyone focuses on baby, we believe mama deserves to be pampered too.</p>
      <button className={styles.orderButton}>Order Now</button>
    </div>
  );
};

export default Home;