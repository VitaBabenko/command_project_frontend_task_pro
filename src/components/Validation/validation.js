export const validateEmail = (value) => {
    if (!value) {
      return 'This field is required';
    }
  
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i;
    if (!emailRegex.test(value)) {
      return 'Please enter a valid email';
    }
  
    return '';
  };
  
  export const validatePassword = (value) => {
    if (!value) {
      return 'This field is required';
    }
  
    if (value.length < 8) {
      return 'Password must be at least 8 characters long';
    }
  
    if (value.length > 64) {
      return 'Password can be maximum 64 characters long';
    }
  
    const passwordRegex = /^[A-Za-z0-9!@#$%^&*()_]+$/;
    if (!passwordRegex.test(value)) {
      return 'Password can only contain Latin letters, digits, and some special characters';
    }
  
    return '';
  };
  
  export const validateName = (value) => {
    if (value.length < 2) {
      return 'Name must be at least 2 characters long';
    }
  
    if (value.length > 32) {
      return 'Name can be maximum 32 characters long';
    }
  
    const nameRegex = /^[A-Za-z0-9]+$/;
    if (!nameRegex.test(value)) {
      return 'Name can only contain Latin letters and digits';
    }
  
    return '';
  };