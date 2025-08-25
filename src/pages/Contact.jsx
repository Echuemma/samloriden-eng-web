import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Send, Phone, Mail, MapPin, Clock } from "lucide-react";
import useAOS from '../hooks/useAOS';

const Button = ({ children, onClick, className }) => (
  <button onClick={onClick} className={className}>
    {children}
  </button>
);

const ContactForm = () => {
  useAOS({ duration: 1000, once: true });
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    newsletter: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
          }}
        >
        </div>
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 py-16 md:py-20 lg:py-24 h-[100%]">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-start">

              <div className="text-white space-y-6 lg:space-y-8 order-1 lg:order-1" data-aos="fade-right">
                <div>
                  <h5 className="text-2xl sm:text-3xl text-on-dark lg:text-4xl xl:text-5xl font-light mb-3 sm:mb-4 leading-tight">
                    You Have Questions?<br />
                    We Have Answers
                  </h5>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed max-w-lg">
                    Discover experiences you won't find anywhere else — thoughtfully
                    designed to immerse you in the heart of the destination. Soulful
                    stories waiting to be lived.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-10 pt-4 sm:pt-6 lg:pt-8">
                  <div>
                    <h5 className="text-base sm:text-lg font-semibold text-on-dark mb-2 sm:mb-3">Location</h5>
                    <div className="text-gray-200 space-y-1 text-xs sm:text-sm">

                      {/* Location */}
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 mt-0.5" style={{ color: "var(--color-primary-alt)" }} />
                        <div>
                          <p>Central Business District</p>
                          <p>FCT</p>
                          <p>Abuja</p>
                        </div>
                      </div>

                      {/* Time */}
                      <div className="flex items-start gap-2 mt-2 sm:mt-3">
                        <Clock className="w-4 h-4 mt-0.5" style={{ color: "var(--color-primary-alt)" }} />
                        <div>
                          <p>Monday - Sunday | 08:00 - 22:00</p>
                          <p className="text-xs opacity-80">(local time)</p>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div>
                    <h5 className="text-base sm:text-lg font-semibold text-on-dark mb-2 sm:mb-3">Social Media</h5>
                    <div className="space-y-1 sm:space-y-2">
                      <div className="flex items-center gap-2">
                        <Instagram className="w-4 h-4" style={{ color: "var(--color-primary-alt)" }} />
                        <a href="#" className="text-gray-200 hover:text-white transition-colors text-xs sm:text-sm hover:underline">Instagram</a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Linkedin className="w-4 h-4" style={{ color: "var(--color-primary-alt)" }} />
                        <a href="#" className="text-gray-200 hover:text-white transition-colors text-xs sm:text-sm hover:underline">LinkedIn</a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Facebook className="w-4 h-4" style={{ color: "var(--color-primary-alt)" }} />
                        <a href="#" className="text-gray-200 hover:text-white transition-colors text-xs sm:text-sm hover:underline">Facebook</a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Send className="w-4 h-4" style={{ color: "var(--color-primary-alt)" }} />
                        <a href="#" className="text-gray-200 hover:text-white transition-colors text-xs sm:text-sm hover:underline">TikTok</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
                  <div>
                    <h5 className="text-base sm:text-lg font-semibold text-on-dark mb-2 sm:mb-3">Email</h5>
                    <div className="flex items-center text-[var(--color-text-light)] text-xs">
                      <Mail className="w-4 h-4 mr-2" style={{ color: "var(--color-primary-alt)" }} />
                      <span>samlorig@email.com</span>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-base sm:text-lg font-semibold mb-2 text-on-dark sm:mb-3">Contact</h5>
                    <div className="flex items-center text-[var(--color-text-light)] text-sm">
                      <Phone className="w-4 h-4 mr-2" style={{ color: "var(--color-primary-alt)" }} />
                      <div>
                        +234 803 954 1382 <br />
                        +234 803 954 1382
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-2 lg:order-2 w-full max-w-md mx-auto lg:max-w-lg xl:max-w-xl lg:ml-auto lg:mx-0" data-aos="fade-left">
                <div className="bg-white rounded-xl lg:rounded-2xl p-6 sm:p-8 lg:p-8 xl:p-10 shadow-2xl">
                  <div className="mb-6 lg:mb-8">
                    <h5 className="text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-semibold text-gray-800 mb-2 lg:mb-3" style={{ color: 'var(--color-primary-alt, #1f2937)' }}>
                      Tell Us What You Need
                    </h5>
                    <p className="text-sm sm:text-base lg:text-base xl:text-lg text-gray-600">
                      Our team is ready to assist you with every detail, big or small.
                    </p>
                  </div>

                  <div className="space-y-4 lg:space-y-4 xl:space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                      <div>
                        <input
                          type="text"
                          name="firstName"
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-3 sm:px-4 md:px-5 lg:px-4 xl:px-5 py-2.5 sm:py-3 md:py-4 lg:py-3 xl:py-1.5 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg border border-gray-300 rounded-lg md:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-3 sm:px-4 md:px-5 lg:px-4 xl:px-5 py-2.5 sm:py-3 md:py-4 lg:py-3 xl:py-1.5 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg border border-gray-300 rounded-lg md:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 md:px-5 lg:px-4 xl:px-5 py-2.5 sm:py-3 md:py-4 lg:py-3 xl:py-1.5 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg border border-gray-300 rounded-lg md:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 md:px-5 lg:px-4 xl:px-5 py-2.5 sm:py-3 md:py-4 lg:py-3 xl:py-1.5 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg border border-gray-300 rounded-lg md:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                      />
                    </div>

                    <div>
                      <textarea
                        name="message"
                        placeholder="Message"
                        rows="4"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 md:px-5 lg:px-4 xl:px-5 py-2.5 sm:py-3 md:py-4 lg:py-3 xl:py-4 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg border border-gray-300 rounded-lg md:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 resize-vertical min-h-[100px] md:min-h-[120px] lg:min-h-[100px] xl:min-h-[120px]"
                      ></textarea>
                    </div>

                    <div className="flex items-start space-x-3 md:space-x-4">
                      <input
                        type="checkbox"
                        id="newsletter"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleInputChange}
                        className="w-4 h-4 md:w-5 md:h-5 mt-0.5 md:mt-1 text-blue-600 border-gray-300 rounded focus:ring-blue-500 flex-shrink-0"
                      />
                      <label htmlFor="newsletter" className="text-xs sm:text-sm md:text-base lg:text-sm xl:text-base text-gray-600 leading-relaxed">
                        I'd like to receive exclusive offers and updates
                      </label>
                    </div>

                    <div className="pt-2 md:pt-4">
                      <Button
                        onClick={handleSubmit}
                        className="w-full bg-yellow-600 hover:bg-gray-900 text-white font-semibold py-3 sm:py-3.5 md:py-4 lg:py-3 xl:py-1.5 px-4 sm:px-6 md:px-8 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg rounded-lg md:rounded-xl transition-all duration-200 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 outline-none hover:shadow-lg transform hover:-translate-y-0.5"
                      >
                        Submit
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    <section id="location" className="py-4 sm:py-6 md:py-16 lg:py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h5 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-0 sm:mb-8 md:mb-10 lg:mb-4 text-center lg:text-left"
          style={{color: 'var(--color-primary-alt, #1f2937)'}}>
          Our Location
        </h5>

        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[450px] xl:h-[500px] rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden">
          <iframe
            title="Our Location - Central Market Kubwa Abuja"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31511.127683261406!2d7.283141767009242!3d9.164308342482219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104dd9005ad4b53f%3A0x2ee477f4dfe35074!2sCentral%20market%20Kubwa%20Abuja!5e0!3m2!1sen!2sng!4v1756115134591!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{border: 0}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full">
          </iframe>
        </div>
      </div>
    </section>

    </>
  );
};

export default ContactForm;