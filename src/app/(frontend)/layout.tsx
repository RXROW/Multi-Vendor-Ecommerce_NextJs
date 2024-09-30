import Footer from '@/components/frontend/Footer';
import NavBar from '@/components/frontend/NavBar';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavBar />
      <div className=" mx-auto max-w-6xl py-6">{children}</div>
      <Footer/>
    
    </div>
  );
}
