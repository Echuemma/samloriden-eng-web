export const formValidation = {
  validateEmail: (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

validatePhone: (phone) => {
  const phoneRegex = /^(\+?\d{11})$/;
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
},


  validateName: (name) => {
    return name.trim().length >= 2 && /^[a-zA-Z\s]+$/.test(name.trim());
  },

  validateMessage: (message) => {
    return message.trim().length >= 10;
  },

  validateForm: (formData) => {
    const errors = {};

    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required';
    } else if (!formValidation.validateName(formData.firstName)) {
      errors.firstName = 'First name must be at least 2 characters and contain only letters';
    }

    if (!formData.lastName.trim()) {
      errors.lastName = 'Last name is required';
    } else if (!formValidation.validateName(formData.lastName)) {
      errors.lastName = 'Last name must be at least 2 characters and contain only letters';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!formValidation.validateEmail(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!formValidation.validatePhone(formData.phone)) {
      errors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (!formValidation.validateMessage(formData.message)) {
      errors.message = 'Message must be at least 10 characters long';
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  }
};