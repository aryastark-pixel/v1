// Upride
import { useNavigate } from 'react-router-dom';
import GoBackPage from '../../components/layout/GobackButton.jsx';
import { FaArrowLeft } from 'react-icons/fa';
export default function MyResponsiveComponent() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-black flex flex-col gap-y-4 p-4">
       <div style={{ fontFamily: "Pixelify Sans, sans-serif" }}>
          <div
            className="text-4xl sm:text-6xl md:text-8xl font-bold min-h-[50px] p-3 text-[#a9abab]"
            style={{
              WebkitMaskImage: 'linear-gradient(to bottom, black 13%, transparent)',
              maskImage: 'linear-gradient(to bottom, black 13%, transparent)',
            }}
          >
            Upride UI Redesign
          </div>
  
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 items-center">
        <div className="text-[#a9abab] text-base sm:text-lg">
         <h1 className="text-7xl font-bold mb-4 sm:text-9xl md:text-7xl text-lg" >Project Overview</h1><br />
                Shape IT completed a professional UI redesign for Upride, focusing on delivering a modern, responsive, and user-friendly interface. The redesign improved visual consistency, accessibility, and usability across all devices. Key enhancements included a structured grid layout, optimized typography and color scheme, interactive elements, and efficient image handling. The result is a polished, cohesive platform that enhances user engagement and aligns with Upride’s brand identity.
        </div>

        <div className="flex justify-center">
          <img
            src="p1.png"
            className="w-full max-w-full h-auto object-contain"
            alt="Design Graphic"
          />
        </div>
      </div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center pt-10">
  <div className="text-[#a9abab] text-3xl sm:text-4xl md:text-6xl font-bold min-h-[50px] p-3">
    Before
  </div>
  <img
    src="ub1.png"
    className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain mx-auto"
    alt="Design Graphic"
  />
  <img
    src="ub2.png"
    className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain mx-auto"
    alt="Design Graphic"
  />
</div>

<div className="grid grid-cols- md:grid-cols-4 gap-4 items-center pt-10">
  <div className="text-[#a9abab] text-3xl sm:text-4xl md:text-6xl font-bold min-h-[50px] p-3">
    After
  </div>
  <img
    src="n1.png"
    className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain mx-auto"
    alt="Design Graphic"
  />
  <img
    src="n2.png"
    className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain mx-auto"
    alt="Design Graphic"
  />
  <img
    src="n3.png"
    className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain mx-auto"
    alt="Design Graphic"
  />
</div>

      <GoBackPage/>
    </div>
  );
}

