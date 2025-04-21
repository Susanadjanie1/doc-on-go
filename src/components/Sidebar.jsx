import { Home, Settings, LogOut, Menu } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-hot-toast";

const Sidebar = () => {
  const [active, setActive] = useState("Dashboard");
  const [isOpen, setIsOpen] = useState(false); // Mobile collapse
  const navigate = useNavigate();

  const menuItems = [
    { name: "Dashboard", icon: <Home size={20} />, path: "/dashboard" },
    { name: "Settings", icon: <Settings size={20} />, path: "/setting" },
    { name: "Logout", icon: <LogOut size={20} />, path: "/" },
  ];

  const handleMenuClick = (item) => {
    setActive(item.name);
    if (item.name === "Logout") {
      toast.success("Logged out successfully!");
      navigate(item.path);
    } else {
      navigate(item.path);
    }
    if (isOpen) setIsOpen(false); // Close mobile sidebar on click
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-[#0A5271] p-2 rounded-full text-white shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 z-40 h-full w-64 bg-[#E1F4F3] text-gray-800 shadow-lg p-6 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } rounded-r-2xl`}
      >
        {/* Logo / Title */}
        <div className="text-2xl font-bold text-[#0A5271] mb-8">
          DocOnGo
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col space-y-4">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleMenuClick(item)}
              className={`flex items-center space-x-3 text-sm font-semibold py-3 px-4 rounded-lg transition ${
                active === item.name
                  ? "bg-[#0A5271] text-white"
                  : "text-gray-700 hover:bg-white hover:shadow"
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-6 left-6 text-xs text-gray-400">
          © {new Date().getFullYear()} DocOnGo
        </div>
      </div>
    </>
  );
};

export default Sidebar;
