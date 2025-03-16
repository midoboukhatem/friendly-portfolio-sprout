
import { ReactNode } from 'react';
import Navbar from './Navbar';
import HeroImage from '../home/HeroImage';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <HeroImage />
      <Navbar />
      <main className="flex-grow flex">{children}</main>
    </div>
  );
};

export default Layout;
