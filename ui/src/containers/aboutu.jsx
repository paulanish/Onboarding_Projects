import { Dumbbell } from "lucide-react";
import React from "react";
// import SecondaryBtn from "../../components/Button/SecondaryBtn";

const Aboutu = () => {
  return (
    <>
      <div className="w-full h-auto flex items-center justify-between gap-7 lg:py-16 
      md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4 flex-warp-reverse">
            <div className="lg:w-[38%] md:w-full sm:w-full w-full h-auto relative overflow-hidden rounded-lg">
                  <img src="https://source.unsplash.com/random/?fitness"
                   alt="About image"
                  className="w-full lg:h-[70vh] md:h-[68vh] sm:h-[60vh] h-[55vh] object-cover" />
            </div>
            <div className="w-full h-auto lg:text-start md:text-start sm:text-start text-center">
                  <h6 className="text-lg font-medium text-gray-200 flex items-center lg:justify-start
                   md:justify-start sm:justify-center justify-center gap-x-2 mb-3">
                  <Dumbbell className="w-4 h-4 -rotate-45 text-indigo-600"/>
                   About Us
                  </h6> 
                  <h1 className="lg:text-3xl md:text-3xl sm:text-2xl text-xl font-semibold
                   text-gray-200 mb-4 leading-normal lg:pe-5 md:pe-4 sm:pe-1 pe-0">
                    Effortless Strength, Timely Gain: Building Better Bodies, Faster
                  </h1>
                  <p className="lg:text-base md:text-base sm:text-sm text-sm text-gray-400
                   font-medium mb-4">
                      Welcome to our gym! We are dedicated to helping you achieve your fitness goals and lead a healthy lifestyle.
                      At our gym, our mission is to provide a welcoming and supportive environment for individuals of all fitness levels. 
                      Whether you are a beginner or an experienced fitness enthusiast, we have the facilities and expertise to help you on your fitness journey.
                       !
                  </p>
                  {/* <SecondaryBtn className="lg:w-auto md:w-auto sm:w-full w-full px-7 py-2 text-base font-medium uppercase justify-center">
                    Become a member</SecondaryBtn>
                   */}
            </div>
      </div>
    </>
  );
};

export default Aboutu;
