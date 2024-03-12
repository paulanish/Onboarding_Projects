// Classes.js

import React from 'react';
import './classes.css'; // Import the CSS file
import gymFitnessImage from './images/gym-fitness.jpg'; // Import images for each class
import indoorCyclingImage from './images/indoor-cycling.jpg';
import powerYogaImage from './images/power-yoga.jpg';
import cardioFitnessImage from './images/cardio-fitness.jpg';
import cardioKickboxingImage from './images/cardio-kickboxing.jpg';
import zumbaImage from './images/zumba.jpg';
import circuitTrainingImage from './images/circuit-training.jpg';
import aerobicsImage from './images/aerobics.jpg';

const Classes = () => {
  return (
    <div className="classes-container"> {/* Apply container class */}
      <h2 className="classes-heading">Classes</h2> {/* Apply heading class */}
      <p>Explore our diverse range of fitness classes:</p>
      <div className="classes-grid"> {/* Apply grid layout */}
        <div className="class">
          <img src={gymFitnessImage} alt="Gym Fitness" />
          <h3>Gym Fitness</h3>
          <p>Improve your strength and endurance with our high-intensity gym workouts.</p>
        </div>
        <div className="class">
          <img src={indoorCyclingImage} alt="Indoor Cycling" />
          <h3>Indoor Cycling</h3>
          <p>Burn calories and boost cardiovascular health with our indoor cycling sessions.</p>
        </div>
        <div className="class">
          <img src={powerYogaImage} alt="Power Yoga" />
          <h3>Power Yoga</h3>
          <p>Experience relaxation and flexibility with our dynamic power yoga classes.</p>
        </div>
        <div className="class">
          <img src={cardioFitnessImage} alt="Cardio Fitness" />
          <h3>Cardio Fitness</h3>
          <p>Get your heart pumping and improve endurance with our cardio fitness routines.</p>
        </div>
        <div className="class">
          <img src={cardioKickboxingImage} alt="Cardio Kickboxing" />
          <h3>Cardio Kickboxing</h3>
          <p>Learn self-defense techniques while burning calories with our cardio kickboxing classes.</p>
        </div>
        <div className="class">
          <img src={zumbaImage} alt="Zumba" />
          <h3>Zumba</h3>
          <p>Dance your way to fitness and have fun with our energetic Zumba sessions.</p>
        </div>
        <div className="class">
          <img src={circuitTrainingImage} alt="Circuit Training" />
          <h3>Circuit Training</h3>
          <p>Challenge yourself with our circuit training workouts targeting different muscle groups.</p>
        </div>
        <div className="class">
          <img src={aerobicsImage} alt="Aerobics Classes" />
          <h3>Aerobics Classes</h3>
          <p>Enjoy a mix of cardio and strength exercises in our aerobics classes for a full-body workout.</p>
        </div>
      </div>
    </div>
  );
};

export default Classes;
