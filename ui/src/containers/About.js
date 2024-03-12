// About.js
import React from 'react';
import './about.css';
import Navigation from '../components/navigation';

const About = () => {
  return (
    <div className="about-container">
      {/* <div>
        <Navigation/>
      </div> */}
      <h2>About Us</h2>
      <p>Welcome to our gym! We are dedicated to helping you achieve your fitness goals and lead a healthy lifestyle.</p>
      
      <h3>Our Mission</h3>
      <p>At our gym, our mission is to provide a welcoming and supportive environment for individuals of all fitness levels. Whether you are a beginner or an experienced fitness enthusiast, we have the facilities and expertise to help you on your fitness journey.</p>

      <h3>Our Facilities</h3>
      <p>Our state-of-the-art facilities include a fully equipped gym, a variety of fitness classes, personal training sessions, and more. We believe in offering a diverse range of options to cater to different preferences and fitness goals.</p>

      <h3>Meet Our Trainers</h3>
      <p>Our team of experienced and certified trainers is here to guide and motivate you. They are passionate about helping you reach your full potential and are available to provide personalized training programs tailored to your needs.</p>

      <h3>Contact Us</h3>
      <p>If you have any questions or would like to learn more about our gym, feel free to contact us. We look forward to helping you on your fitness journey!</p>
    </div>
  );
};

export default About;
