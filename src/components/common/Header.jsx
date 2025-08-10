//  // src/components/common/Header.jsx
// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { companyInfo } from '../../data/company';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();

//   const navigation = [
//     { name: 'Home', href: '/' },
//     { name: 'About Us', href: '/about' },
//     { name: 'Services', href: '/services' },
//     { name: 'Projects', href: '/projects' },
//     { name: 'Careers', href: '/careers' },
//     { name: 'News & Insights', href: '/news-insights' },
//     { name: 'Contact', href: '/contact' },
//   ];

//   const isActive = (path) => location.pathname === path;

//   return (
//     <header className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center py-4">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Link to="/" className="flex items-center">
//               <img
//                 className="h-12 w-auto"
//                 src="/images/logo.png"
//                 alt={companyInfo.name}
//                 onError={(e) => {
//                   e.target.style.display = 'none';
//                   e.target.nextElementSibling.style.display = 'block';
//                 }}
//               />
//               <div 
//                 className="hidden bg-primary-600 text-white px-4 py-2 rounded font-bold text-xl"
//                 style={{ display: 'none' }}
//               >
//                 {companyInfo.name.split(' ').map(word => word[0]).join('')}
//               </div>
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex space-x-8">
//             {navigation.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.href}
//                 className={`px-3 py-2 text-sm font-medium transition-colors ${
//                   isActive(item.href)
//                     ? 'text-primary-600 border-b-2 border-primary-600'
//                     : 'text-secondary-700 hover:text-primary-600'
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </nav>

//           {/* CTA Button */}
//           <div className="hidden md:flex">
//             <Link
//               to="/contact"
//               className="bg-primary-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors"
//             >
//               Request Quote
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-secondary-600 hover:text-secondary-900 focus:outline-none focus:text-secondary-900 p-2"
//             >
//               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 {isMenuOpen ? (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 ) : (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden border-t border-secondary-200">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               {navigation.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.href}
//                   className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
//                     isActive(item.href)
//                       ? 'text-primary-600 bg-primary-50'
//                       : 'text-secondary-700 hover:text-primary-600 hover:bg-secondary-50'
//                   }`}
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//               <Link
//                 to="/contact"
//                 className="block px-3 py-2 mt-4 bg-primary-600 text-white rounded-md text-base font-medium hover:bg-primary-700 transition-colors text-center"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Request Quote
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;

function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                className="h-12 w-auto"
                src="/images/logo.png"
                alt="Company Logo"
              />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            {/* Navigation links will go here */}
          </nav>
          <div className="hidden md:flex">
            <Link to="/contact" className="bg-primary-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors">
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
