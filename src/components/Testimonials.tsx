import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  name: string;
  position: string;
  image: string;
  text: string;
  rating: number;
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [progress, setProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const testimonials: Testimonial[] = [
    {
      name: 'John Spencer',
      position: 'Business Owner',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
      text: 'I had a great experience at this amazing gallery for our rental needs. The staff was knowledgeable and helped me find the perfect vehicle for my weekend adventure.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      position: 'Travel Enthusiast',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      text: 'The amphibious vehicle exceeded all my expectations. The team made sure I was comfortable with all the features before heading out. Highly recommended!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      position: 'Tech Executive',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
      text: 'Outstanding service and an incredible fleet of vehicles. The ability to traverse both land and water opened up amazing possibilities for our corporate retreat.',
      rating: 5
    },
    {
      name: 'Emily Davis',
      position: 'Adventure Blogger',
      image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&q=80',
      text: 'The vehicles are top-notch, and the customer service is exceptional. I had an unforgettable experience exploring both land and water!',
      rating: 5
    },
    {
      name: 'David Martinez',
      position: 'Event Planner',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80',
      text: 'The team went above and beyond to ensure our event was a success. The vehicles were a hit with our guests!',
      rating: 5
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setDirection(1);
          setCurrentIndex((prev) => (prev + 1) % testimonials.length);
          return 0;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [currentIndex]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
    setProgress(0);
  };

  return (
    <section className="py-24 relative overflow-hidden min-h-screen flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/10 rounded-full"
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0.5, 0.2, 0.5],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(164,208,55,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#A4D037] font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-white">
            What Our Customers Are Saying
          </h2>
          <motion.div
            className="w-24 h-1 bg-[#A4D037] mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Discover why our customers love our affordable mini vans and multi-cabs. 
            Quality vehicles backed by exceptional service.
          </p>
        </motion.div>

        <div className="relative h-[600px] w-full max-w-4xl mx-auto">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full"
            >
              <div 
                className="backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl p-8 mx-4 transform hover:scale-105 transition-all duration-300 border border-white/20"
                style={{
                  transform: `perspective(1000px) rotateX(${(mousePosition.y - window.innerHeight / 2) / 50}deg) rotateY(${(mousePosition.x - window.innerWidth / 2) / 50}deg)`,
                }}
              >
                <div className="relative">
                  {/* Quote Icon */}
                  <div className="absolute -top-6 -left-6 z-10">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#A4D037] to-[#7FA728] rounded-full flex items-center justify-center shadow-lg">
                      <Quote size={24} className="text-white" />
                    </div>
                  </div>

                  {/* Profile Image */}
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#A4D037] to-[#7FA728] rounded-full blur opacity-50"></div>
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="relative w-32 h-32 rounded-full object-cover border-4 border-white/20 shadow-xl"
                    />
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center mb-6 space-x-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star size={24} className="text-[#FDC735] fill-current" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-200 text-lg text-center mb-8 leading-relaxed">
                    "{testimonials[currentIndex].text}"
                  </p>

                  {/* Author Info */}
                  <div className="text-center">
                    <h3 className="font-bold text-xl text-white mb-1">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-[#A4D037] font-medium">
                      {testimonials[currentIndex].position}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none">
            <button
              onClick={() => paginate(-1)}
              className="w-12 h-12 rounded-full backdrop-blur-md bg-white/10 border border-white/20 shadow-lg flex items-center justify-center text-white hover:text-[#A4D037] transition-all duration-300 focus:outline-none pointer-events-auto hover:scale-110 hover:bg-white/20"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => paginate(1)}
              className="w-12 h-12 rounded-full backdrop-blur-md bg-white/10 border border-white/20 shadow-lg flex items-center justify-center text-white hover:text-[#A4D037] transition-all duration-300 focus:outline-none pointer-events-auto hover:scale-110 hover:bg-white/20"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#A4D037]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
                setProgress(0);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-[#A4D037] scale-125 shadow-lg shadow-[#A4D037]/50'
                  : 'bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;