import { Home, Settings, LogOut, Menu, FileText } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-hot-toast";

const Sidebar = () => {
  const [active, setActive] = useState("Dashboard");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { name: "Dashboard", icon: <Home size={20} />, path: "/dashboard" },
    {
      name: "All Requests",
      icon: <FileText size={20} />,
      path: "/doctor/request",
    },
    { name: "Settings", icon: <Settings size={20} />, path: "/setting" },
    { name: "Logout", icon: <LogOut size={20} />, path: "/" },
  ];

  const handleMenuClick = (item) => {
    setActive(item.name);

    if (item.name === "Logout") {
      toast(
        (t) => (
          <span className="flex flex-col gap-2">
            <span>Do you want to log out?</span>
            <div className="flex gap-2 justify-center mt-2">
              <button
                className="bg-[#1A6436] text-white px-3 py-1 rounded hover:bg-[#14592F]"
                onClick={() => {
                  toast.dismiss(t.id);
                  toast.success("Logged out successfully!");
                  navigate(item.path);
                  setIsOpen(false);
                }}
              >
                Yes
              </button>
              <button
                className="bg-gray-300 text-gray-800 px-3 py-1 rounded hover:bg-gray-400"
                onClick={() => {
                  toast.dismiss(t.id);
                  toast.error("Logout canceled");
                }}
              >
                No
              </button>
            </div>
          </span>
        ),
        {
          duration: 6000,
        }
      );
    } else {
      navigate(item.path);
      setIsOpen(false);
    }
  };

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-[#1A6436] p-2 rounded-full text-white shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={24} />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed md:static top-0 left-0 z-40 h-screen w-64 bg-[#F4FBF4] text-gray-800 shadow-lg p-6 transition-transform duration-300 ease-in-out 
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"} 
        rounded-r-2xl md:rounded-none`}
      >
        <div className="flex justify-center">
          <div className="text-2xl font-bold text-[#1A6436] mb-8 whitespace-nowrap overflow-hidden text-ellipsis text-center">
            DocOnGo
          </div>
        </div>

        <nav className="flex flex-col space-y-4">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleMenuClick(item)}
              className={`flex items-center space-x-3 text-sm font-semibold py-3 px-4 rounded-lg transition ${
                active === item.name
                  ? "bg-[#1A6436] text-white"
                  : "text-gray-700 hover:bg-[#E8F7E8] hover:shadow"
              }`}
            >
              {item.icon}
              <span className="truncate">{item.name}</span>
            </button>
          ))}
        </nav>

        <div className="absolute bottom-6 left-6 text-xs text-gray-400">
          © {new Date().getFullYear()} DocOnGo
        </div>
      </div>
    </>
  );
};

export default Sidebar;
