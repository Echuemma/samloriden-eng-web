// ContactForm.jsx - Clean main component
import React, { useState } from 'react';
import useAOS from '../../hooks/useAOS';
import { createFormHandlers } from './formHandlers';
import ContactInfoSection from './ContactInfoSection';
import FormComponent from './FormComponent';
import LocationSection from './LocationSection';

const ContactForm = () => {
  useAOS({ duration: 1000, once: true });
  
  // State management
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    newsletter: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Get handlers
  const { handleInputChange, handleSubmit } = createFormHandlers(
    formData,
    setFormData,
    errors,
    setErrors,
    setIsSubmitting,
    setSubmitStatus
  );

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
              <ContactInfoSection />
              
              <FormComponent 
                formData={formData}
                errors={errors}
                isSubmitting={isSubmitting}
                submitStatus={submitStatus}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>

      <LocationSection />
    </>
  );
};

export default ContactForm;