export const getInputClassName = (fieldName, errors) => {
  const baseClasses = "w-full px-3 sm:px-4 md:px-5 lg:px-4 xl:px-5 py-2.5 sm:py-3 md:py-4 lg:py-3 xl:py-1.5 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg border rounded-lg md:rounded-xl outline-none transition-all duration-200";
  const errorClasses = "border-red-500 focus:ring-2 focus:ring-red-500 focus:border-red-500";
  const normalClasses = "border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent";
  
  return `${baseClasses} ${errors[fieldName] ? errorClasses : normalClasses}`;
};

export const getSubmitButtonClassName = (isSubmitting) => {
  const baseClasses = "w-full font-semibold py-3 sm:py-3.5 md:py-4 lg:py-3 xl:py-1.5 px-4 sm:px-6 md:px-8 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg rounded-lg md:rounded-xl transition-all duration-200 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 outline-none transform";
  
  return `${baseClasses} ${
    isSubmitting
      ? 'bg-gray-400 cursor-not-allowed'
      : 'bg-yellow-600 hover:bg-gray-900 text-white hover:shadow-lg hover:-translate-y-0.5'
  }`;
};