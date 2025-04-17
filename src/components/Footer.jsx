export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-12">
      <div className="max-w-7xl mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-[#162B6A]">DocOnGo+</h2>
          <p className="mt-2 text-sm">Your Pocket Doctor</p>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <a href="#home" className="hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-600">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-blue-600">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-600">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold">Contact</h3>
          <p>Email: info@docongo.com</p>
          <p>Phone: (+233) 030-7890-879</p>
          <p>Address: 123 Wellness St, Accra-Ghana</p>
        </div>
      </div>
      <div className="text-center text-sm py-4 border-t">
        © {new Date().getFullYear()} DocOnGo+. All rights reserved.
      </div>
    </footer>
  );
}
