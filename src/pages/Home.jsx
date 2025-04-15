import { useNavigate } from 'react-router';
import Image from '../assets/images/doc-1.png'

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#E1F4F3] text-center px-6">
      <h1 className="text-4xl font-extrabold text-[#1E3A8A] mb-3">DocOnGo</h1>
      <p className="text-lg text-[#64748B] mb-6">Your Pocket Doctor</p>

      
      <img
        src={Image}
        alt="Doctor Illustration"
        className="w-64 mb-6 rounded-xl shadow-md"
      />

      <p className="text-[#334155] mb-6 leading-relaxed">
        Expert treatment & top doctors<br />
        right at your fingertips.
      </p>

    
      <button
        onClick={() => navigate('/select-role')}
        className="bg-[#F97171] hover:bg-[#f75f5f] text-white font-semibold py-3 px-6 rounded-full shadow-sm transition duration-300"
      >
        Get Started
      </button>
    </div>
  );
};

export default Home;
