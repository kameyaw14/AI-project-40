import { BrainCircuit, Crosshair, DatabaseZap, GalleryHorizontalEnd } from 'lucide-react';

const AIPlatformSection = () => {
  const features = [
    {
      icon: <Crosshair className="h-6 w-6" />,
      title: "Precision Targeting",
      description: "AI-driven customer segmentation for hyper-personalized campaigns"
    },
    {
      icon: <DatabaseZap className="h-6 w-6" />,
      title: "Real-time Analytics",
      description: "Instant insights across all customer touchpoints"
    },
    {
      icon: <GalleryHorizontalEnd className="h-6 w-6" />,
      title: "Omnichannel Sync",
      description: "Consistent experiences across web, mobile, and physical"
    },
    {
      icon: <BrainCircuit className="h-6 w-6" />,
      title: "Self-learning Models",
      description: "Continuously improving customer interaction algorithms"
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left Image Section */}
          <div className="md:w-1/2">
            <div className="relative bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 rounded-3xl p-8">
              <div className="absolute inset-0 bg-white/50 backdrop-blur-lg rounded-3xl" />
              <div className="relative">
                <div className="aspect-square bg-gradient-to-tr from-yellow-500 to-yellow-400 rounded-2xl overflow-hidden">
                  {/* Replace with actual image */}
                  <div className="w-full h-full flex items-center justify-center text-black">
                    <svg 
                      className="w-3/4 h-3/4"
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="none" />
                      <path d="M30 40L50 20L70 40L50 60L30 40Z" fill="currentColor"/>
                      <path d="M30 70L50 50L70 70L50 90L30 70Z" fill="currentColor"/>
                      <circle cx="50" cy="50" r="8" fill="#FACC15"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              AI-based Platform Powering Personalized Experiences Across Channels
            </h2>
            
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="p-3 bg-yellow-500/10 rounded-lg group-hover:bg-yellow-500 transition-colors">
                    <span className="text-yellow-500 group-hover:text-white">
                      {feature.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIPlatformSection;