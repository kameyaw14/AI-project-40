const InfiniteLogoBanner = () => {
    // Array of bank logos (update with your actual image paths)
    const banks = [
      { name: "Bank of America", logo: "/banks/bank-of-america.svg" },
      { name: "Chase", logo: "/banks/chase.svg" },
      { name: "Wells Fargo", logo: "/banks/wells-fargo.svg" },
      { name: "Citi Bank", logo: "/banks/citi.svg" },
      { name: "HSBC", logo: "/banks/hsbc.svg" },
      { name: "Barclays", logo: "/banks/barclays.svg" },
      { name: "Santander", logo: "/banks/santander.svg" },
      { name: "TD Bank", logo: "/banks/td-bank.svg" },
    ];
  
    // Duplicate the array for seamless looping
    const duplicatedBanks = [...banks, ...banks];
  
    return (
      <div className="w-full bg-yellow-500 py-8 overflow-hidden">
        <div className="relative">
          <div className="flex animate-marquee whitespace-nowrap will-change-transform">
            {duplicatedBanks.map((bank, index) => (
              <div
                key={index}
                className="flex items-center mx-12"
              >
                <img
                  src={bank.logo}
                  alt={bank.name}
                  className="h-16 w-auto max-w-[200px] object-contain opacity-90 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  width={200}
                  height={64}
                />
              </div>
            ))}
          </div>
  
          {/* Reduced motion alternative */}
          <style jsx>{`
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-100%); }
            }
  
            .animate-marquee {
              animation: marquee 40s linear infinite;
            }
  
            @media (prefers-reduced-motion: reduce) {
              .animate-marquee {
                animation: none;
                justify-content: center;
                flex-wrap: wrap;
                gap: 2rem;
              }
            }
          `}</style>
        </div>
      </div>
    );
  };
  
  export default InfiniteLogoBanner;