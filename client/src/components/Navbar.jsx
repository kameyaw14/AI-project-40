import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [closeTimeout, setCloseTimeout] = useState(null);
  const navigate = useNavigate()

  const navigation = [
    { name: "Home", href: "#", current: true },
    {
      name: "Services",
      href: "#",
      submenu: [
        { name: "Fraud Detection", href: "/fraud-detection" },
        { name: "Loan Approval", href: "#" },
      ],
    },
    {
      name: "Products",
      href: "#",
      submenu: [
        { name: "Software Suite", href: "#" },
        { name: "Security Tools", href: "#" },
        { name: "Analytics Platform", href: "#" },
      ],
    },
    { name: "About", href: "#", current: false },
  ];

  const handleMenuEnter = (menuName) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setActiveSubmenu(menuName);
  };

  const handleMenuLeave = () => {
    const timeout = setTimeout(() => {
      setActiveSubmenu(null);
    }, 300);
    setCloseTimeout(timeout);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-black cursor-pointer" onClick={() =>navigate("/") }>Personetics</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.submenu && handleMenuEnter(item.name)}
                onMouseLeave={handleMenuLeave}
              >
                <button
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                    item.current
                      ? "text-black bg-yellow-500"
                      : "text-gray-600 hover:text-black hover:bg-yellow-500"
                  }`}
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
                </button>

                {/* Dropdown Menu */}
                {item.submenu && (
                  <div
                    className={`absolute top-10 left-0 w-48 bg-white shadow-lg rounded-md py-1 ${
                      activeSubmenu === item.name ? "block" : "hidden"
                    }`}
                    onMouseEnter={() => handleMenuEnter(item.name)}
                    onMouseLeave={handleMenuLeave}
                  >
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-500 hover:text-black"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button className="bg-yellow-500 text-black px-6 py-2 rounded-md hover:bg-yellow-700 transition-colors">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-black"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-2">
            {navigation.map((item) => (
              <div key={item.name} className="space-y-2">
                <button
                  className="flex items-center justify-between w-full px-3 py-2 rounded-md text-gray-600 hover:text-black hover:bg-yellow-50"
                  onClick={() => {
                    if (item.submenu) {
                      setActiveSubmenu(
                        activeSubmenu === item.name ? null : item.name
                      );
                    }
                  }}
                >
                  <span>{item.name}</span>
                  {item.submenu && <ChevronDown className="h-4 w-4" />}
                </button>

                {/* Mobile Dropdown */}
                {item.submenu && (
                  <div
                    className={`pl-4 ${
                      activeSubmenu === item.name ? "block" : "hidden"
                    }`}
                  >
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-black hover:bg-yellow-50 rounded-md"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button className="w-full bg-yellow-500 text-black px-6 py-2 rounded-md hover:bg-yellow-700 transition-colors">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;