import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className={`min-h-screen flex flex-col ${isHomePage ? "home-background" : "normal-background"}`}>
      <Navbar />
      <main className="flex-grow w-full">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
