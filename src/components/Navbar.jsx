import { useState } from "react";
import { useNavigate } from "react-router";
import { Menu, X } from "lucide-react";
import { Button } from "../components/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 relative">
        <div className="text-2xl font-bold text-[#162B6A]">DocOnGo+</div>

        <div className="hidden md:flex gap-8 items-center">
          <a href="#home" className="hover:text-blue-600 text-gray-700">
            Home
          </a>
          <a href="#about" className="hover:text-blue-600 text-gray-700">
            About
          </a>
          <a href="#services" className="hover:text-blue-600 text-gray-700">
            Services
          </a>
          <a href="#contact" className="hover:text-blue-600 text-gray-700">
            Contact
          </a>
          <Button
            className="bg-[#F97171] hover:bg-[#f75f5f] text-white font-semibold py-3 px-6 rounded-full shadow-sm transition duration-300"
            onClick={() => navigate("/select-role")}
          >
            Get Started
          </Button>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <X className="h-6 w-6 text-blue-700" />
            ) : (
              <Menu className="h-6 w-6 text-[#162B6A]" />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden">
            <a
              href="#home"
              className="hover:text-blue-600 text-gray-700"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-blue-600 text-gray-700"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#services"
              className="hover:text-blue-600 text-gray-700"
              onClick={toggleMenu}
            >
              Services
            </a>
            <a
              href="#contact"
              className="hover:text-blue-600 text-gray-700"
              onClick={toggleMenu}
            >
              Contact
            </a>

            <Button
              className="bg-[#F97171] hover:bg-[#f75f5f] text-white font-semibold py-3 px-6 rounded-full shadow-sm transition duration-300"
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
