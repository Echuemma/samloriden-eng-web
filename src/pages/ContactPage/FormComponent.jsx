import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getInputClassName, getSubmitButtonClassName } from "./formStyles";
import { formValidation } from './formValidation';
import { createFormHandlers } from './createFormHandlers';

const Button = ({ children, onClick, className, disabled, type = "button" }) => (
  <button onClick={onClick} className={className} disabled={disabled} type={type}>
    {children}
  </button>
);

const FormComponent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    newsletter: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Create form handlers using the utility
  const { handleInputChange, handleSubmit } = createFormHandlers(
    formData,
    setFormData,
    errors,
    setErrors,
    setIsSubmitting,
    setSubmitStatus
  );

  // Toasts are already handled in the createFormHandlers utility
  // Remove the useEffect for toasts since they're now in the handlers

  return (
    <div
      className="order-2 lg:order-2 w-full max-w-md mx-auto lg:max-w-lg xl:max-w-xl lg:ml-auto lg:mx-0"
      data-aos="fade-left"
    >
      <div className="bg-white rounded-xl lg:rounded-2xl p-6 sm:p-8 lg:p-8 xl:p-10 shadow-2xl">
        <div className="mb-6 lg:mb-4">
          <h5
            className="text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-semibold text-gray-800 mb-2 lg:mb-3"
            style={{ color: "var(--color-primary-alt, #1f2937)" }}
          >
            Tell Us What You Need
          </h5>
          <p className="text-sm sm:text-base lg:text-base xl:text-lg text-gray-600">
            Our team is ready to assist you with every detail, big or small.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 lg:space-y-4 xl:space-y-5"
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                className={getInputClassName("firstName", errors)}
                disabled={isSubmitting}
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                className={getInputClassName("lastName", errors)}
                disabled={isSubmitting}
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className={getInputClassName("email", errors)}
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              className={getInputClassName("phone", errors)}
              disabled={isSubmitting}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              value={formData.message}
              onChange={handleInputChange}
              className={`${getInputClassName(
                "message",
                errors
              )} resize-vertical min-h-[100px] md:min-h-[120px] lg:min-h-[100px] xl:min-h-[120px]`}
              disabled={isSubmitting}
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>

          <div className="flex items-start space-x-3 md:space-x-4">
            <input
              type="checkbox"
              id="newsletter"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleInputChange}
              className="w-4 h-4 md:w-5 md:h-5 mt-0.5 md:mt-1 text-blue-600 border-gray-300 rounded focus:ring-blue-500 flex-shrink-0"
              disabled={isSubmitting}
            />
            <label
              htmlFor="newsletter"
              className="text-xs sm:text-sm md:text-base lg:text-sm xl:text-base text-gray-600 leading-relaxed"
            >
              I'd like to receive exclusive offers and updates
            </label>
          </div>

          <div className="pt-2 md:pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className={getSubmitButtonClassName(isSubmitting)}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;