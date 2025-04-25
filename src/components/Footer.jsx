export default function Footer() {
  return (
    <footer className="bg-[#1A6436] text-white mt-12">
      <div className="max-w-7xl mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-[#7ECD26]">DocOnGo+</h2>
          <p className="mt-2 text-sm text-[#F4FBF4]">Your Pocket Doctor</p>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-[#7ECD26]">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <a href="#home" className="hover:text-[#7ECD26] transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#7ECD26] transition">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-[#7ECD26] transition">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#7ECD26] transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-[#7ECD26]">Contact</h3>
          <p>Email: info@docongo.com</p>
          <p>Phone: (+233) 030-7890-879</p>
          <p>Address: 123 Wellness St, Accra-Ghana</p>
        </div>
      </div>
      <div className="text-center text-sm py-4 border-t border-[#7ECD26] text-[#F4FBF4]">
        © {new Date().getFullYear()} DocOnGo+. All rights reserved.
      </div>
    </footer>
  );
}
