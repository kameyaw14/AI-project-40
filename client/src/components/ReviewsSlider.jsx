import { useState } from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// Install required packages
// npm install react-slick slick-carousel

const ReviewsSlider = () => {
  const [sliderRef, setSliderRef] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      text: "The AI platform transformed our customer engagement. Personalization at scale finally made possible!",
      image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO, FinTech Startup",
      text: "Unmatched real-time analytics capabilities. Our cross-channel strategy improved by 150%.",
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      id: 3,
      name: "Emma Williams",
      role: "E-commerce Manager",
      text: "The omnichannel sync feature eliminated our coordination headaches. Truly revolutionary!",
      image: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      id: 4,
      name: "David Martinez",
      role: "Banking Solutions Lead",
      text: "Implementation was seamless. Now we deliver personalized experiences effortlessly.",
      image: "https://randomuser.me/api/portraits/men/2.jpg"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const PreviousArrow = () => (
    <button
      onClick={() => sliderRef?.slickPrev()}
      className="absolute left-[-40px] top-1/2 -translate-y-1/2 p-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors shadow-lg"
    >
      <ChevronLeft className="h-6 w-6 text-black" />
    </button>
  );

  const NextArrow = () => (
    <button
      onClick={() => sliderRef?.slickNext()}
      className="absolute right-[-40px] top-1/2 -translate-y-1/2 p-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors shadow-lg"
    >
      <ChevronRight className="h-6 w-6 text-black" />
    </button>
  );

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how we're transforming customer experiences across industries
          </p>
        </div>

        <div className="relative">
          <Slider ref={setSliderRef} {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-4">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <Quote className="h-8 w-8 text-yellow-500 mb-4" />
                  <p className="text-gray-600 mb-6">{testimonial.text}</p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-black">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Custom Arrows */}
          <PreviousArrow />
          <NextArrow />
        </div>

        {/* Custom dot styles */}
        <style>{`
          .slick-dots li button:before {
            color: #e5e7eb;
            font-size: 10px;
          }
          .slick-dots li.slick-active button:before {
            color: #facc15;
          }
          .slick-dots {
            bottom: -50px;
          }
        `}</style>
      </div>
    </section>
  );
};

export default ReviewsSlider;