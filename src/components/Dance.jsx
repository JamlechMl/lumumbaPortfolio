import React from "react";
import Dance1 from "../assets/dance1.png";
import Dance2 from "../assets/dance2.png";
import Dance3 from "../assets/dance3.png";


function Dance() {
  return (
    <div name="dance" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Dance
          </p>
          <p className="py-4">These are the dance I made</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a href="https://www.youtube.com/watch?v=gg1xJGdna6A&feature=youtu.be">
              <img
                className="w-auto mx-auto"
                src={Dance1}
                alt="luo dance video"
              />
              <p className="my-4">Luo Dance.</p>
            </a>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a href="https://youtu.be/NYE83TivNS8">
              <img
                className="w-auto mx-auto"
                src={Dance2}
                alt="luhya dance video"
              />
              <p className="my-4">Luhya dance.</p>
            </a>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a href="https://youtu.be/h758RX-JkqM">
              <img
                className="w-auto mx-auto"
                src={Dance3}
                alt="mwomboko dance video"
              />
              <p className="my-4">Mwomboko dance.</p>
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Dance;
