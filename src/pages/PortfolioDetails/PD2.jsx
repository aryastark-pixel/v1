// Acer Redesign
import GoBackPage from '../../components/layout/GobackButton.jsx';
import { useState } from "react";

export default function AcerRedesign() {
   const [playVideo, setPlayVideo] = useState(false);
  return (
    <div className="w-full h-full">

<section className="relative min-h-scr min-h-fit sm:min-h-screen  w-full bg-[#f2fff6] px-4 sm:px-6 md:px-10 pb-6 pt-0">
  <div className="bg-[#d5f1dc] rounded-b-4xl w-full h-full p-6 pt-0 grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-6">
    
 {/* Image on top for mobile */}
<div className="relative flex items-center justify-center order-1 md:order-2 mt-2 md:mt-0">
  {/* Gradient background splash */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-72 h-72 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] rounded-full bg-gradient-to-tr from-green-300 via-green-200 to-green-100 blur-3xl opacity-60"></div>
  </div>

  {/* Image */}
  <img 
    src="acer1.png" 
    alt="Example" 
    className="relative w-5/6 sm:w-4/5 md:w-full max-w-lg object-contain"
  />
</div>


    {/* Text + button */}
    <div className="flex flex-col pt-4 md:pt-10 order-2 md:order-1">
      <div style={{ fontFamily: "Gabarito, sans-serif" }}>
        <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-gray-800 mb-3">
          Acer UI Redesign
        </h1>
      </div>

      <p className="text-base sm:text-lg md:text-xl text-[#173c1f] mb-3">
This project reimagines Acer’s interface with a modern design language that prioritizes clarity, accessibility, and user engagement. The redesign introduces cleaner layouts, intuitive navigation, and a cohesive visual style, creating a seamless experience across desktop and mobile platforms.      </p>

      {/* Buttons */}
      <div className="flex gap-3 sm:gap-4 flex-wrap">
        <button className="bg-[#51c66a] text-white px-4 md:px-6 py-2 rounded-full text-sm sm:text-base w-fit hover:bg-green-700 transition">
          Shape IT
        </button>
      </div>
    </div>

  </div>
</section>
{/* second section */}
<section className="relative w-full  min-h-fit sm:min-h-screen bg-gradient-to-b from-[#f2fff6] to-[#e6f9ee] px-4 sm:px-6 md:px-10 py-12">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center h-full">
    
    {/* Left content */}
    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
      {/* Label with icon */}
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-green-600 rounded-full"></div>
        <span className="text-sm sm:text-base font-medium text-gray-700">Before</span>
      </div>

      {/* Title */}
      <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#173c1f]">
        Acer Store
      </h2>
    </div>

    {/* Second column → First image */}
   <div className="relative flex items-center justify-center">
      <img 
        src="acerbefore.png" 
        alt="Acer Before"       
        className="w-3/4 sm:w-2/3 md:w-5/6 lg:w-[90%] rounded-2xl  shadow-[0_1px_70px_#90d7a0] transition-transform duration-300 hover:scale-120"
      />
    </div>

    {/* Third column → Second image */}
    <div className="relative flex items-center justify-center">
      <img 
        src="acerbefore2.png" 
        alt="Acer Before"       
        className="w-3/4 sm:w-2/3 md:w-5/6 lg:w-[90%] rounded-2xl  shadow-[0_1px_70px_#90d7a0] transition-transform duration-300 hover:scale-120"
      />
    </div>
    <div className="relative flex items-center justify-center">
      <img 
        src="acerbefore3.png" 
        alt="Acer Before"       
        className="w-3/4 sm:w-2/3 md:w-5/6 lg:w-[90%] rounded-2xl  shadow-[0_1px_70px_#90d7a0] transition-transform duration-300 hover:scale-120"
      />
    </div>

  </div>
  
</section>
{/* third section */}
<section className="relative w-full min-h-fit sm:min-h-screen bg-gradient-to-b from-[#f2fff6] to-[#e6f9ee] px-4 sm:px-6 md:px-10 py-12">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center h-full">

    {/* Row 1 - Left image */}
    <div className="order-2 md:order-1 relative flex items-center justify-center">
      <img 
        src="aa3.png" 
        alt="Acer Before"       
        className="w-3/4 sm:w-2/3 md:w-5/6 lg:w-[90%] rounded-2xl shadow-[0_1px_70px_#90d7a0] transition-transform duration-300 hover:scale-120"
      />
    </div>

    {/* Row 1 - Right text (should come first on mobile) */}
    <div className="order-1 md:order-2 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-green-600 rounded-full"></div>
        <span className="text-sm sm:text-base font-medium text-gray-700">After</span>
      </div>
      <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#173c1f]">
        Redesign
      </h2>
    </div>

    {/* Row 2 - Left div */}
<div className="order-3 relative flex items-center justify-center">
      <img 
        src="aa4.png" 
        alt="Acer After"       
        className="w-3/4 sm:w-2/3 md:w-5/6 lg:w-[90%] rounded-2xl shadow-[0_1px_70px_#90d7a0] transition-transform duration-300 hover:scale-120"
      />
    </div>
    {/* Row 2 - Right image */}
    <div className="order-4 relative flex items-center justify-center">
      <img 
        src="aa2.png" 
        alt="Acer After"       
        className="w-3/4 sm:w-2/3 md:w-5/6 lg:w-[90%] rounded-2xl shadow-[0_1px_70px_#90d7a0] transition-transform duration-300 hover:scale-120"
      />
    </div>

  </div>

</section>
{/* Fourth Section */}
 <section className="bg-black">
      <div className="flex flex-col items-center justify-center py-10">
        {/* Show button only if video not playing */}
        {!playVideo && (
          <div className="flex gap-3 sm:gap-4 flex-wrap">
            <button
              onClick={() => setPlayVideo(true)}
              className="bg-[#51c66a] text-white px-4 md:px-6 py-2 rounded-full text-sm sm:text-base w-fit hover:bg-green-700 transition"
            >
              Watch Video
            </button>
          </div>
        )}

        {/* Show image first, then replace with video */}
        {!playVideo ? (
          <img
            src="aa1.png"
            alt="Acer Preview"
            className="w-1/2 h-1/2 object-contain pt-10"
          />
        ) : (
          <video
            src="acervid.mp4"
            autoPlay
            controls
            className="w-3/4 max-w-3xl pt-10 rounded-lg shadow-lg"
          />
        )}
      </div>
    </section>
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1440 320"
  preserveAspectRatio="none"
  className="w-full h-[120px] block -mb-1"
>
  <path
    fill="#72d588"
    d="M0,0L60,42.7C120,85,240,171,360,176C480,181,600,107,720,112C840,117,960,203,1080,229.3C1200,256,1320,224,1380,208L1440,192L1440,320L0,320Z"
  />
</svg>



      
    <GoBackPage />
    

    </div>
    
  );
}






