import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { getInputClassName, getSubmitButtonClassName } from "./formStyles";

const Button = ({ children, onClick, className, disabled, type = "button" }) => (
  <button onClick={onClick} className={className} disabled={disabled} type={type}>
    {children}
  </button>
);

const FormComponent = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      newsletter: false,
    },
    mode: "onChange"
  });

  const formData = watch();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formSubmissionData = new FormData();
      Object.keys(data).forEach(key => {
        formSubmissionData.append(key, data[key]);
      });
      formSubmissionData.append('form-name', 'contact');

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formSubmissionData).toString()
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setSubmitStatus('success');
        reset(); 
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
          onSubmit={handleSubmit(onSubmit)}
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
                placeholder="First Name"
                {...register("firstName", {
                  required: "First name is required",
                  minLength: {
                    value: 2,
                    message: "First name must be at least 2 characters"
                  }
                })}
                className={getInputClassName("firstName", errors)}
                disabled={isSubmitting}
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                {...register("lastName", {
                  required: "Last name is required",
                  minLength: {
                    value: 2,
                    message: "Last name must be at least 2 characters"
                  }
                })}
                className={getInputClassName("lastName", errors)}
                disabled={isSubmitting}
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div>
            <input
              type="email"
              placeholder="Email Address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              className={getInputClassName("email", errors)}
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <input
              type="tel"
              placeholder="Phone Number"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[\+]?[0-9\s\-\(\)]{10,}$/,
                  message: "Invalid phone number"
                }
              })}
              className={getInputClassName("phone", errors)}
              disabled={isSubmitting}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <textarea
              placeholder="Message"
              rows="4"
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters"
                }
              })}
              className={`${getInputClassName(
                "message",
                errors
              )} resize-vertical min-h-[100px] md:min-h-[120px] lg:min-h-[100px] xl:min-h-[120px]`}
              disabled={isSubmitting}
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
            )}
          </div>

          <div className="flex items-start space-x-3 md:space-x-4">
            <input
              type="checkbox"
              id="newsletter"
              {...register("newsletter")}
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