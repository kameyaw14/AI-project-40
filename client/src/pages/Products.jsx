import {
  ShieldCheck,
  BadgeDollarSign,
  BrainCircuit,
  Zap,
  Database,
  Lock,
} from "lucide-react";
import Navbar from "../components/Navbar";
import InfiniteLogoBanner from "../components/InfiniteBanner";
import Footer from "../components/Footer";

const ProductsPage = () => {
  const services = [
    {
      title: "AI-Powered Fraud Detection System",
      icon: <ShieldCheck className="h-8 w-8" />,
      features: [
        "Real-time transaction monitoring",
        "Behavioral pattern analysis",
        "Deep learning anomaly detection",
        "Cross-channel threat identification",
      ],
      description:
        "Our advanced AI system detects and prevents fraudulent activities across all digital channels with 99.8% accuracy.",
    },
    {
      title: "Instant Loan Approval Platform",
      icon: <BadgeDollarSign className="h-8 w-8" />,
      features: [
        "Creditworthiness analysis",
        "Automated document verification",
        "Risk assessment algorithms",
        "Instant decision making",
      ],
      description:
        "Revolutionary AI-driven loan processing that reduces approval time from days to minutes while maintaining compliance.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-yellow-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
              Financial Technology Solutions
            </h1>
            <p className="text-xl text-black/90 max-w-3xl mx-auto">
              Leveraging cutting-edge AI to transform financial security and
              lending processes
            </p>
          </div>
        </div>
      </div>

      {/* Products/Services Section */}
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Image/Graphic Section */}
                <div className="md:w-1/2">
                  <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 rounded-3xl p-8 h-full">
                    <div className="bg-white rounded-2xl p-6 shadow-lg h-full">
                      <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center">
                        <div className="text-yellow-500">{service.icon}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="md:w-1/2 flex flex-col justify-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-3">
                        <div className="p-2 bg-yellow-500/10 rounded-lg">
                          <Zap className="h-5 w-5 text-yellow-500" />
                        </div>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
                      Request Demo
                    </button>
                    <button className="border-2 border-black text-black px-6 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors">
                      Technical Specs
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-yellow-500 mb-2">
                99.8%
              </div>
              <div className="text-gray-400">Fraud Detection Accuracy</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-yellow-500 mb-2">
                2.7s
              </div>
              <div className="text-gray-400">Average Loan Decision Time</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-yellow-500 mb-2">1B+</div>
              <div className="text-gray-400">Daily Transactions Analyzed</div>
            </div>
          </div>
        </div>
      </div>

      <InfiniteLogoBanner />
      <Footer />
    </div>
  );
};

export default ProductsPage;
