import React from 'react';

function Documents() {
  return <div name="documents" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Documents
          </p>
          <p className="py-4">These are the documents I made.Click to access them.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a href="https://docs.google.com/document/d/12NDhUMj0tk5Cnv2O9TsTiZ29T7X1npo-/edit">
              <p className="my-4"> My Resume</p>
            </a>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a href="https://docs.google.com/document/d/1cQnYvDhHpwn58OjNRDplHDxkEFBiyXp9/edit">
              <p className="my-4"> My Resume in Luhya</p>
            </a>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a href="https://docs.google.com/document/d/11a7D8kHXFdszOGpBxqWBLD8rO3EAHpCN/edit?rtpof=true">
              <p className="my-4">
                Aspects of African culture demonstarting its importance
              </p>
            </a>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a href="https://docs.google.com/presentation/d/182k7BrsHWHNJtqeOO-uLEMMkfihZJ8mT/edit#slide=id.p1">
              <p className="my-4">
                Aspects of African culture demonstartiing its importance
                presentation
              </p>
            </a>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a href="https://docs.google.com/document/d/1nPP8KDpZVN1oSvh_iF3iGr8UgOgANoh2/edit">
              <p className="my-4">Autobiography of Lumumba </p>
            </a>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a href="https://docs.google.com/presentation/d/182k7BrsHWHNJtqeOO-uLEMMkfihZJ8mT/edit#slide=id.p1">
              <p className="my-4">Autobiography of Lumumba Presentation</p>
            </a>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a href="https://docs.google.com/document/d/10Skj0_3RJ3G3JcIvGgRAvd52uTGoyNrs/edit">
              <p className="my-4">Campus experience</p>
            </a>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a href="https://docs.google.com/document/d/1o9gcZzioLN5Md9F4OtdlBDq7b5VmYEr-/edit">
              <p className="my-4">Climate change abstract</p>
            </a>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a href="https://docs.google.com/document/d/11RR2wN65S8tjCGG-zFLR6ykBuLASTk5Y/edit">
              <p className="my-4">Mtaala</p>
            </a>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a href="https://docs.google.com/document/d/18qZHBwFcgO4rRAxH1eiaJM2-QKs7dPFR/edit">
              <p className="my-4">Recomendation letter</p>
            </a>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a href="https://docs.google.com/document/d/1UDWUelZJxWOaMmqAhuPtBP8-kIBpcnAP/edit">
              <p className="my-4">Current academic trends in accounting</p>
            </a>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a href="https://docs.google.com/document/d/1UDWUelZJxWOaMmqAhuPtBP8-kIBpcnAP/edit">
              <p className="my-4">Innovation and invention presentation</p>
            </a>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a href="https://docs.google.com/document/d/1UDWUelZJxWOaMmqAhuPtBP8-kIBpcnAP/edit">
              <p className="my-4">Innovation and invention in Luhya</p>
            </a>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a href="https://docs.google.com/document/d/1o1c7_xtr7rNyIyCszR05C6iAaGnoFT1_/edit">
              <p className="my-4">Swahili abstract in music and dance</p>
            </a>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a href="https://docs.google.com/document/d/1ZXqycvDYOpqHU-2c1lVIOT1apKydOcJL/edit">
              <p className="my-4">Swahili abstract </p>
            </a>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a href="https://docs.google.com/document/d/1suEbTlL3qI_QEJa1lwjLFZhl24RfdU-c/edit">
              <p className="my-4">Swahili Accounting standard abstract</p>
            </a>
          </div>
        </div>
      </div>
    </div>;
}

export default Documents;
