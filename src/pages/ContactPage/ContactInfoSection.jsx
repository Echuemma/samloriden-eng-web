// ContactInfoSection.jsx
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Send, Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactInfoSection = () => {
  return (
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
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5" style={{ color: "var(--color-primary-alt)" }} />
              <div>
                <p>Block C'2 24 Central market.</p>
                <p>Kubwa, FCT,</p>
                <p>Abuja.</p>
              </div>
            </div>
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
            <span>info.samloriden@gmail.com</span>
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
  );
};

export default ContactInfoSection;