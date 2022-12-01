import React from 'react';

import Climate from '../assets/climate.png';
 
import Innovation from '../assets/inovation.png';

import Music from '../assets/music .png';

function Skills() {
  return <div name="videos" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Videos
          </p>
          <p className="py-4">These are the videos I made</p>
        </div>
        
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
         

        
          
          
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a href="https://www.youtube.com/watch?v=AvHKRkdOesU&ab_channel=ScLumumba">
              <img className="w-auto mx-auto" src={Innovation} alt="invention and innovation video" />
              <p className="my-4">
                Invention and inovation in acounting.
              </p>
            </a>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a href="https://www.youtube.com/watch?v=ZuVXvDvgmjc&ab_channel=ScLumumba">
              <img className="w-auto mx-[100px]" src={Music} alt="music,dance and art video" />
              <p className="my-4">
                Music, Dance and Art :Aspect in African Culture. 
              </p>
            </a>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a href="https://youtu.be/h758RX-JkqM">
              <img className="w-auto mx-auto" src={Climate} alt="Climate change video" />
              <p className="my-4">Climate change: Problem African society.</p>
            </a>
          </div>
        </div>
      </div>
    </div>
}

export default Skills;
