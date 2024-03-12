import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import the base Swiper styles
import 'swiper/css/navigation'; // Import Swiper navigation styles
import 'swiper/css/pagination'; // Import Swiper pagination styles
import 'swiper/css/scrollbar'; // Import Swiper scrollbar styles
import 'swiper/css/effect-cube'; // Import Swiper cube effect styles
import 'swiper/css/autoplay'; // Import Swiper autoplay styles
import './home.css';
import JoinNow from './JoinNow';
import Hero from './hero';
import Aboutu from './aboutu';
import Services from './Services';
import PricingPlan from './PricingPlan';

const Home = () => {
 
  return (
    <>
    <div className="w-full h-auto overflow-hidden">    
      <Hero/>
      <Aboutu/>
      <Services/>
      <PricingPlan/>
      <section className="cta">
        <h2>Start Your Fitness Journey Today!</h2>
        <p>Sign up for a membership and take the first step towards a healthier you.</p>
        <Link to="/joinNow">
          <button>Join Now</button>
        </Link>
      </section>
     
      
    </div>
    </>
  );
};

export default Home;
