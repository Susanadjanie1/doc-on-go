import { useNavigate } from 'react-router';
import Image from '../assets/images/doc-1.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; 

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-[#E1F4F3] text-center">
      <Navbar />

      <div className="flex flex-col items-center justify-center flex-1 px-6 pt-20">
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

     
      <section className="py-12 bg-white">
        <h2 className="text-3xl font-bold text-[#162B6A] mb-8">Our Specialties</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
          {["General Physician", "Public Health", "Pediatrician", "Gynecologist"].map((specialty) => (
            <div key={specialty} className="bg-[#E1F4F3] p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-[#1E3A8A]">{specialty}</h3>
              <p className="text-gray-600 mt-2">World-class {specialty} care at your convenience.</p>
            </div>
          ))}
        </div>
      </section>

  
      <section className="py-12 bg-[#E1F4F3]">
  <h2 className="text-3xl font-bold text-[#162B6A] mb-8">Meet Our Doctors</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
    {[
      {
        name: "Dr. Nana Ama",
        specialty: "General Physician",
        bio: "Heart specialist with 10+ years of experience in advanced cardiac care.",
        image: Image, 
      },
      {
        name: "Dr. Vanessa",
        specialty: "Pediatrician",
        bio: "Expert in skin treatments, acne care, and cosmetic procedures.",
        image: Image,
      },
      {
        name: "Dr. Susana",
        specialty: "Public Health",
        bio: "Specialist in brain and nerve disorders with a compassionate approach.",
        image: Image,
      },
    ].map(({ name, specialty, bio, image }) => (
      <div
        key={name}
        className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 flex flex-col items-center text-center"
      >
        <img
          src={image}
          alt={name}
          className="w-32 h-32 mb-4 rounded-full object-cover border-4 border-[#F97171]"
        />
        <h3 className="text-xl font-semibold text-[#1E3A8A]">{name}</h3>
        <p className="text-[#475569] text-sm mt-1 mb-2">{specialty}</p>
        <p className="text-gray-500 text-sm mb-4">{bio}</p>
        <button className="bg-[#F97171] hover:bg-[#f75f5f] text-white font-semibold py-2 px-5 rounded-full transition duration-300">
          Book Appointment
        </button>
      </div>
    ))}
  </div>
</section>


      
      <section className="py-12 bg-white">
        <h2 className="text-3xl font-bold text-[#162B6A] mb-8">What Our Patients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
          {[
            { name: "Ellen M.", feedback: "Amazing doctors and fast service!" },
            { name: "Timothy A.", feedback: "Helped me get an appointment quickly!" },
            { name: "Nimdie J.", feedback: "Highly recommend DocOnGo+" },
          ].map(({ name, feedback }) => (
            <div key={name} className="bg-[#E1F4F3] p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <p className="text-gray-700 italic">"{feedback}"</p>
              <p className="text-[#1E3A8A] font-semibold mt-4">{name}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
