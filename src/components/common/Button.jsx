import React from 'react';

const Button = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`btn text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 group outline-none focus:outline-none ${className}`}
      style={{
        backgroundColor: 'var(--color-primary-alt)',
        transition: 'background-color 0.3s ease',
        outline: 'none',
        boxShadow: 'none',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#a16203';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--color-primary-alt)';
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;