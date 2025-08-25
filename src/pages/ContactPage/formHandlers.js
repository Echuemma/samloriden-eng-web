import { formValidation } from './formValidation';
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const validation = formValidation.validateForm(formData);
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      setIsSubmitting(false);
      return;
    }

    try {
      const submitData = new FormData();
      submitData.append('name', `${formData.firstName} ${formData.lastName}`);
      submitData.append('email', formData.email);
      submitData.append('phone', formData.phone);
      submitData.append('message', formData.message);
      submitData.append('newsletter', formData.newsletter ? 'Yes' : 'No');
      
      submitData.append('_subject', 'New Contact Form Submission');
      submitData.append('_captcha', 'false');
      submitData.append('_template', 'table');

      const response = await fetch('https://formsubmit.co/info.samloriden@gmail.com', {
        method: 'POST',
        body: submitData
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
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    handleInputChange,
    handleSubmit
  };
};