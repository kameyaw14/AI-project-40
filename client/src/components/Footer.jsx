import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-yellow-500">Personetics</h3>
            <p className="text-gray-400">
            Explore how Personetics can help you leverage financial-data intelligence to optimize
            customer experiences and deliver business impact.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-yellow-500 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-yellow-500 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-yellow-500 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-yellow-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-500">Solutions</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">AI Platform</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Analytics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Omnichannel</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Security</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-500">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Partners</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-500">Contact</h4>
            <div className="flex items-start space-x-2">
              <Mail className="h-5 w-5 text-yellow-500 mt-1" />
              <div>
                <p className="text-gray-400">kameyaw14@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Phone className="h-5 w-5 text-yellow-500 mt-1" />
              <p className="text-gray-400">+233 20 080 5961</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Brand. All rights reserved.
          </p>
          <div className="mt-2 flex justify-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;