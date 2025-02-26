import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Spencer',
      position: 'Business Owner',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
      text: 'I had a great experience at this amazing gallery for our rental needs. The staff was knowledgeable and helped me find the perfect vehicle for my weekend adventure.',
    },
    {
      name: 'Sarah Johnson',
      position: 'Travel Enthusiast',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      text: 'The amphibious vehicle exceeded all my expectations. The team made sure I was comfortable with all the features before heading out. Highly recommended!',
    },
    {
      name: 'Michael Chen',
      position: 'Tech Executive',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
      text: 'Outstanding service and an incredible fleet of vehicles. The ability to traverse both land and water opened up amazing possibilities for our corporate retreat.',
    },
    {
      name: 'Emily Davis',
      position: 'Adventure Blogger',
      image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&q=80',
      text: 'The vehicles are top-notch, and the customer service is exceptional. I had an unforgettable experience exploring both land and water!',
    },
    {
      name: 'David Martinez',
      position: 'Event Planner',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80',
      text: 'The team went above and beyond to ensure our event was a success. The vehicles were a hit with our guests!',
    },
  ];

  return (
    <section id="Testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-12 transition-all duration-300 ease-in-out transform hover:text-[#A4D037] hover:scale-105">
          What Our Customers Are Saying
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto ">
          Hear from our satisfied customers about their experiences with our affordable mini vans and multi-cabs. We take pride in delivering top-quality vehicles and exceptional service.
        </p>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1} // Default for mobile
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000, // Auto-slide every 5 seconds
            disableOnInteraction: false, // Continue autoplay after user interaction
          }}
          breakpoints={{
            640: { slidesPerView: 1 }, // 1 slide on mobile
            768: { slidesPerView: 2 }, // 2 slides on tablet
            1024: { slidesPerView: 3 }, // 3 slides on desktop
          }}
          className="relative"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-4 border-white hover:border-[#FDC735] transition-all duration-300"
                />
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-[#FDC735] fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <h3 className="font-bold text-lg">{testimonial.name}</h3>
                <p className="text-gray-500">{testimonial.position}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;