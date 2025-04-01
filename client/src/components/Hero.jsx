import { useNavigate } from "react-router-dom";

const Hero = () => {

 

  const navigate = useNavigate();

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
              The Cognitive Banking
              <span className="text-yellow-500"> Company</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 md:pr-8">
              AI-Powered Customer Experience that Drives Results. Unlock the
              Power of Cognitive Banking to Build & Monetize Customer
              Relationships
            </p>
            <div className="flex space-x-4">
              <button onClick={() => navigate("/products")} className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                Get Started
              </button>
              <button className="border-2 border-black text-black px-8 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-yellow-500 rounded-full opacity-20 blur-3xl" />
              <svg
                className="relative w-full h-auto"
                viewBox="0 0 500 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="250"
                  cy="250"
                  r="250"
                  fill="#FACC15"
                  fillOpacity="0.1"
                />
                <rect
                  x="100"
                  y="120"
                  width="300"
                  height="300"
                  rx="30"
                  fill="white"
                  stroke="black"
                  strokeWidth="2"
                />
                <path
                  d="M150 200L350 200"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle
                  cx="250"
                  cy="280"
                  r="60"
                  fill="#FACC15"
                  stroke="black"
                  strokeWidth="2"
                />
                <path
                  d="M150 360L350 360"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
