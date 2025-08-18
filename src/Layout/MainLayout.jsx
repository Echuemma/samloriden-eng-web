import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Navigation from '../components/common/Navigation';
import Footer from '../components/common/Footer';
import ScrollToTop from '../components/common/ScrollToTop';
import ScrollProgress from '../components/common/ScrollProgress';

const MainLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="loader">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <>
      <ScrollToTop />
      <Navigation />
      <main className="w-full mx-auto h-[100%] max-w-[1920px] overflow-x-hidden overflow-y-hidden">        <Outlet />
      </main>
      <Footer />
      <ScrollProgress />
    </>
  );
};

export default MainLayout;