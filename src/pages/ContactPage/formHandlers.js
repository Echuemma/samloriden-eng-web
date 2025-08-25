import { formValidation } from './formValidation';
import { toast } from 'react-toastify';

export const createFormHandlers = (
  formData,
  setFormData,
  errors,
  setErrors,
  setIsSubmitting,
  setSubmitStatus
) => {
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const validation = formValidation.validateForm(formData);
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      setIsSubmitting(false);
      toast.error('Please fix the form errors before submitting.');
      return;
    }

    try {
      const submitData = {
        "form-name": "contact",
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        newsletter: formData.newsletter ? 'Yes' : 'No'
      };

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(submitData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
          newsletter: false
        });
        setErrors({});
        toast.success('Thank you! Your message has been sent successfully.');
      } else {
        const errorText = await response.text();
        console.error('Form submission failed:', errorText);
        setSubmitStatus('error');
        toast.error('Sorry, there was an error sending your message. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      toast.error('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    handleInputChange,
    handleSubmit
  };
};