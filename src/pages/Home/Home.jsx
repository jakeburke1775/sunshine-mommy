import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate('/shop');
  };

  return (
    <div className="home">
      <h1>Sunshine Mommy</h1>
      <p>The perfect gift for expecting mothers - whether you're treating yourself or surprising someone special. Our carefully curated Mommy Box celebrates the amazing woman bringing new life into the world.</p>
      <p>Each box is thoughtfully packed with comfort essentials for the hospital stay, complete with a personalized handwritten note. Because while everyone focuses on baby, we believe mama deserves to be pampered too.</p>
      <button className="order-button" onClick={handleOrderNow}>Order Now</button>
    </div>
  );
};

export default Home;