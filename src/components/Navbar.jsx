import { useState } from "react";
import { useNavigate } from "react-router";
import { Menu, X } from "lucide-react";
import { Button } from "../components/Button";
import Logo from "../assets/images/Logo1.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#7ECD26]/80 backdrop-blur-md shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-3 relative">
        <div className="flex items-center justify-center bg-white rounded-full p-1">
          <img src={Logo} alt="DocOnGo Logo" className="h-10 w-auto" />
        </div>

        <div className="hidden md:flex gap-8 items-center">
          <a href="#home" className="text-white hover:text-[#162B6A] transition duration-300">
            Home
          </a>
          <a href="#about" className="text-white hover:text-[#162B6A] transition duration-300">
            About
          </a>
          <a href="#services" className="text-white hover:text-[#162B6A] transition duration-300">
            Services
          </a>
          <a href="#contact" className="text-white hover:text-[#162B6A] transition duration-300">
            Contact
          </a>

          <Button
            className="bg-[#1A6436] hover:bg-[#6BBF1F] text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300"
            onClick={() => navigate("/select-role")}
          >
            Get Started
          </Button>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </div>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#7ECD26]/80 backdrop-blur-md shadow-md flex flex-col items-center gap-4 py-6 md:hidden">
            <a href="#home" className="text-white hover:text-[#162B6A] transition duration-300" onClick={toggleMenu}>
              Home
            </a>
            <a href="#about" className="text-white hover:text-[#162B6A] transition duration-300" onClick={toggleMenu}>
              About
            </a>
            <a href="#services" className="text-white hover:text-[#162B6A] transition duration-300" onClick={toggleMenu}>
              Services
            </a>
            <a href="#contact" className="text-white hover:text-[#162B6A] transition duration-300" onClick={toggleMenu}>
              Contact
            </a>

            <Button
              className="bg-[#1A6436] hover:bg-[#1A6436] text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300"
              onClick={() => {
                toggleMenu();
                navigate("/select-role");
              }}
            >
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
