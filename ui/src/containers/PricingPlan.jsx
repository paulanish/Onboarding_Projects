import React from "react";
import { CheckSquare, Dumbbell } from "lucide-react";
// import PrimaryBtn from "../../components/Button/PrimaryBtn";

const PricingPlan = () => {
  return (
    <>
      <div className="w-full h-auto flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10
        lg:px-24 md:px-16 sm:px-6 px-4 ">
            <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2">
                <Dumbbell className="w-4 h-6 -rotate-45 text-indigo-600"/>
                Our Pricing Plans
            </h6>
            <div className="w-full h-auto flex justify-center gap-x-5 gap-y-8 flex-wrap">
                {/* Basic Plan */}
                <div className="lg:w-[28%] md:w-full sm:w-full w-full h-auto px-10 lg:py-12 md:py-12 sm:py-10 py-10
                bg-black/10 rounded-lg  border-[6px] border-gray-600 hover:border-indigo-600/40 hover:bg-gray-600/10
                ease-out duration-700 cursor-pointer">
                    <h2 className="lg:text-4xl md:text-4xl sm:text-3xl text-3xl text-white font-semibold mb-5">
                        Basic Plan
                    </h2>
                    <h1 className="lg:text-5xl md:text-5xl sm:text-4xl text-4xl text-indigo-600 font-bold mb-3 tracking-wide">
                        Rs1800 <span className="lg:text-xl md:text-xl sm:text-lg text-base
                         text-gray-300 font-medium tracking-normal">
                         / month</span>
                    </h1>
                    <hr className="border-gray-600/40 my-7" />
                    <div className="w-full h-auto space-y-2 mb-8">
                        <div className="w-full h-auto flex items-start gap-x-2">
                            <CheckSquare className="w-5 h-5 text-indigo-600" />
                            <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                                Get access to all gym classes
                            </p>
                        </div>
                        <div className="w-full h-auto flex items-start gap-x-2">
                            <CheckSquare className="w-5 h-5 text-indigo-600" />
                            <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                                Unlimited Yoga classes
                            </p>
                        </div>
                        <div className="w-full h-auto flex items-start gap-x-2">
                            <CheckSquare className="w-5 h-5 text-indigo-600" />
                            <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                                Use of Lockers
                            </p>
                        </div>
                    </div>
                    {/* <PrimaryBtn className="w-full h-11 text-lg justify-center font-semibold tracking-wider mb-3 uppercase ">
                        Select Plan
                    </PrimaryBtn> */}
                </div>
                {/* Primimum Plan */}
                <div className="lg:w-[32%] md:w-full sm:w-full w-full h-auto px-10 lg:py-12 md:py-12 sm:py-10 py-10
                bg-indigo/600 rounded-lg  border-[6px] border-gray-600 hover:border-indigo-600/40 hover:bg-gray-600/10
                ease-out duration-700 cursor-pointer">
                    <h2 className="lg:text-4xl md:text-4xl sm:text-3xl text-3xl text-white font-semibold mb-5">
                        Primium Plan
                    </h2>
                    <h1 className="lg:text-5xl md:text-5xl sm:text-4xl text-4xl text-indigo-600 font-bold mb-3 tracking-wide">
                        Rs3000 <span className="lg:text-xl md:text-xl sm:text-lg text-base
                         text-gray-300 font-medium tracking-normal">
                         / month</span>
                    </h1>
                    <hr className="border-gray-600/40 my-7" />
                    <div className="w-full h-auto space-y-2 mb-8">
                        <div className="w-full h-auto flex items-start gap-x-2">
                            <CheckSquare className="w-5 h-5 text-indigo-600" />
                            <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                                Get access to all gym classes
                            </p>
                        </div>
                        <div className="w-full h-auto flex items-start gap-x-2">
                            <CheckSquare className="w-5 h-5 text-indigo-600" />
                            <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                                Unlimited Yoga classes
                            </p>
                        </div>
                        <div className="w-full h-auto flex items-start gap-x-2">
                            <CheckSquare className="w-5 h-5 text-indigo-600" />
                            <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                                Use of Lockers
                            </p>
                        </div>
                        <div className="w-full h-auto flex items-start gap-x-2">
                            <CheckSquare className="w-5 h-5 text-indigo-600" />
                            <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                                Weekday Pool Access
                            </p>
                        </div>
                        <div className="w-full h-auto flex items-start gap-x-2">
                            <CheckSquare className="w-5 h-5 text-indigo-600" />
                            <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                                Free Gym T-shirt
                            </p>
                        </div>
                        <div className="w-full h-auto flex items-start gap-x-2">
                            <CheckSquare className="w-5 h-5 text-indigo-600" />
                            <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                                20% discount on all Gym Proucts
                            </p>
                        </div>
                    </div>
                    {/* <PrimaryBtn className="w-full h-11 text-lg justify-center font-semibold tracking-wider mb-3 uppercase ">
                        Select Plan
                    </PrimaryBtn> */}
                </div>
                {/* VIP Plan */}
               
                <div className="lg:w-[28%] md:w-full sm:w-full w-full h-auto px-10 lg:py-12 md:py-12 sm:py-10 py-10
                bg-black/10 rounded-lg  border-[6px] border-gray-600 hover:border-indigo-600/40 hover:bg-gray-600/10
                ease-out duration-700 cursor-pointer">
                    <h2 className="lg:text-4xl md:text-4xl sm:text-3xl text-3xl text-white font-semibold mb-5">
                        VIP Plan
                    </h2>
                    <h1 className="lg:text-5xl md:text-5xl sm:text-4xl text-4xl text-indigo-600 font-bold mb-3 tracking-wide">
                        Rs6000 <span className="lg:text-xl md:text-xl sm:text-lg text-base
                         text-gray-300 font-medium tracking-normal">
                         / month</span>
                    </h1>
                    <hr className="border-gray-600/40 my-7" />
                    <div className="w-full h-auto space-y-2 mb-8">
                        <div className="w-full h-auto flex items-start gap-x-2">
                            <CheckSquare className="w-5 h-5 text-indigo-600" />
                            <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                                Get access to all gym classes
                            </p>
                        </div>
                        <div className="w-full h-auto flex items-start gap-x-2">
                            <CheckSquare className="w-5 h-5 text-indigo-600" />
                            <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                                Unlimited Yoga classes
                            </p>
                        </div>
                        <div className="w-full h-auto flex items-start gap-x-2">
                            <CheckSquare className="w-5 h-5 text-indigo-600" />
                            <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                                Use of Lockers
                            </p>
                        </div>
                        <div className="w-full h-auto flex items-start gap-x-2">
                            <CheckSquare className="w-5 h-5 text-indigo-600" />
                            <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                                Access to Pool Access 6 days a week 
                            </p>
                        </div>
                        <div className="w-full h-auto flex items-start gap-x-2">
                            <CheckSquare className="w-5 h-5 text-indigo-600" />
                            <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                                Free Gym T-shirt
                            </p>
                        </div>
                        <div className="w-full h-auto flex items-start gap-x-2">
                            <CheckSquare className="w-5 h-5 text-indigo-600" />
                            <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                                30% discount on all Gym Proucts
                            </p>
                        </div>
                        <div className="w-full h-auto flex items-start gap-x-2">
                            <CheckSquare className="w-5 h-5 text-indigo-600" />
                            <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                                Get a Personal trainer 3 days a week
                            </p>
                        </div>
                    </div>
                    {/* <PrimaryBtn className="w-full h-11 text-lg justify-center font-semibold tracking-wider mb-3 uppercase ">
                        Select Plan
                    </PrimaryBtn> */}
                </div>
            </div>
        </div>
    </>
  );
};

export default PricingPlan;
