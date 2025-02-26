import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const LocationMap = () => {
  const locations = [
    {
      title: 'Main Showroom',
      address: 'Anayan, Pili, Camarines Sur, 4418 Philippines',
      phone: '+63 912 345 6789',
      email: 'info@highwaymotors.com',
      hours: 'Mon - Sat: 9:00 AM - 6:00 PM'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 transition-all duration-300 ease-in-out transform hover:text-[#A4D037] hover:scale-105">Our Locations</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Map */}
          <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.244078928259!2d123.2840638145075!3d13.53718549036693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a192240afdaa65%3A0xb73b445495295935!2sAnayan%2C%20Pili%2C%20Camarines%20Sur!5e0!3m2!1sen!2s!4v1709825169407!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Location Details */}
          <div className="space-y-8">
            {locations.map((location, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">{location.title}</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="text-[#A4D037] mt-1 mr-3" size={20} />
                    <p className="text-gray-600">{location.address}</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-[#A4D037] mr-3" size={20} />
                    <p className="text-gray-600">{location.phone}</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="text-[#A4D037] mr-3" size={20} />
                    <p className="text-gray-600">{location.email}</p>
                  </div>
                  <div className="flex items-center">
                    <Clock className="text-[#A4D037] mr-3" size={20} />
                    <p className="text-gray-600">{location.hours}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
