
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import HeroImage from '../home/HeroImage';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroImage />
      <Navbar />
      <main className="flex-grow">{children}</main>
      {/* Remove Footer since we're handling footer elements in each page */}
    </div>
  );
};

export default Layout;
