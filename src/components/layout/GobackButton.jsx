// Navigates to /portfolio.jsx

import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const GoBackPage = () => {
  const navigate = useNavigate();

  return (
          <div>
      <button
        onClick={() => navigate('/portfolio')}
        className="fixed bottom-6 right-6 bg-[#ffffff] text-black rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-blue-700 transition"
      >
        <FaArrowLeft size={20} />
      </button>
      </div>

  );
};

export default GoBackPage;
