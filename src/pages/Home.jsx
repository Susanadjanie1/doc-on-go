import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import doctor1 from "../assets/images/dr-nanaama.jpeg";
import doctor2 from "../assets/images/dr-vanessa.jpeg";
import doctor3 from "../assets/images/dr-susan.jpeg";
import usImage from "../assets/images/us.jpeg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-[#F4FBF4]">
      <Navbar />

      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-20 gap-10 text-center md:text-left">
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#1A6436] mb-4">
            DocOnGo
          </h1>
          <p className="text-xl md:text-2xl text-[#4B6B53] mb-6">
            Your Pocket Doctor
          </p>
          <p className="text-[#334155] mb-6 leading-relaxed">
            Expert treatment & top doctors <br className="hidden md:block" />
            right at your fingertips.
          </p>
          <button
            onClick={() => navigate("/select-role")}
            className="bg-[#7ECD26] hover:bg-[#6bbf1f] text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300"
          >
            Get Started
          </button>
        </div>

        <div className="mt-8 md:mt-0">
          <img
            src={usImage}
            alt="Us Illustration"
            className="w-full md:w-96 rounded-2xl shadow-xl object-cover"
          />
        </div>
      </div>

      <section className="py-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1A6436] text-center mb-12">
          Our Specialties
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 md:px-20">
          {[
            "General Physician",
            "Public Health",
            "Pediatrician",
            "Gynecologist",
          ].map((specialty) => (
            <div
              key={specialty}
              className="bg-[#F4FBF4] p-6 rounded-xl shadow-sm hover:shadow-xl transition duration-300 text-center"
            >
              <h3 className="text-xl font-semibold text-[#1A6436]">
                {specialty}
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                World-class {specialty} care at your convenience.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-[#F4FBF4]">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1A6436] text-center mb-12">
          Meet Our Doctors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6 md:px-20">
          {[
            {
              name: "Dr. Nana Ama",
              specialty: "General Physician",
              bio: "Heart specialist with 10+ years of experience in advanced cardiac care.",
              image: doctor1,
            },
            {
              name: "Dr. Vanessa",
              specialty: "Pediatrician",
              bio: "Expert in skin treatments, acne care, and cosmetic procedures.",
              image: doctor2,
            },
            {
              name: "Dr. Susana",
              specialty: "Public Health",
              bio: "Specialist in brain and nerve disorders with a compassionate approach.",
              image: doctor3,
            },
          ].map(({ name, specialty, bio, image }) => (
            <div
              key={name}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-center relative group"
            >
              <img
                src={image}
                alt={name}
                className="w-32 h-32 mx-auto mb-4 rounded-full object-cover border-4 border-[#7ECD26] group-hover:rotate-12 transition-all duration-300"
              />
              <h3 className="text-xl font-semibold text-[#1A6436]">{name}</h3>
              <p className="text-[#475569] text-sm mt-1">{specialty}</p>
              <p className="text-gray-500 text-sm mt-2 mb-4">{bio}</p>

              <button className="bg-[#7ECD26] hover:bg-[#6BBF1F] text-white font-medium py-2 px-5 rounded-full transition duration-300">
                View More
              </button>

              {/* Extra Details on Hover */}
              <div className="absolute inset-0 bg-[#7ECD26] bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 text-white p-4 rounded-xl">
                <p className="text-sm">
                  Detailed information about the doctor...
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1A6436] text-center mb-12">
          What Our Patients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20">
          {[
            { name: "Ellen M.", feedback: "Amazing doctors and fast service!" },
            {
              name: "Timothy A.",
              feedback: "Helped me get an appointment quickly!",
            },
            { name: "Nimdie J.", feedback: "Highly recommend DocOnGo+" },
          ].map(({ name, feedback }) => (
            <div
              key={name}
              className="bg-[#F4FBF4] p-6 rounded-xl shadow-sm hover:shadow-xl transition text-center"
            >
              <p className="text-gray-700 italic mb-4">"{feedback}"</p>
              <p className="text-[#1A6436] font-semibold">{name}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
