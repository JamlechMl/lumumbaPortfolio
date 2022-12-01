import React from 'react';

import { HiArrowNarrowRight } from 'react-icons/hi';
import Intro from "../assets/intro.png";

const Home = () => {
  return <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Cornelius Shitsukane
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm an Accountant.
        </h2>
        {/* <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"> */}
          <a href="https://www.youtube.com/watch?v=74GiB2xTlDo&ab_channel=ScLumumba">
            <img className="w-[300px] mx-[10px]" src={Intro} alt="Introduction video" />
            <p className="my-4 text-[#fff] ">Self Introduction.</p>
          </a>
        {/* </div> */}
        <div>
          <a href="https://docs.google.com/document/d/10J-cZjQs9Teldw3BJZblJO1801dHc5EN/edit?usp=sharing&ouid=116742577254735775012&rtpof=true&sd=true">
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Resume
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>;
};

export default Home;
