import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isProjectsPage = location.pathname === "/projects"; // ✅ Detect Projects Page

  return (
    <div className={`min-h-screen flex flex-col ${isHomePage ? "home-page" : "normal-background"} relative`}>
      <Navbar />
<main className="w-full flex flex-col items-center justify-center">{children}</main>

      {/* ✅ Social Buttons - Shown Everywhere EXCEPT Projects Page */}
      {!isProjectsPage && (
        <div className="social-buttons">
          <a href="https://www.linkedin.com/in/mohamedboukhatem/" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.png" alt="LinkedIn" className="w-12 h-12 transition-transform hover:scale-110" />
          </a>

          <a href="https://www.salesforce.com/trailblazer/medboukhatem" target="_blank" rel="noopener noreferrer">
            <img src="/trailhead2.png" alt="Trailhead" className="w-12 h-12 transition-transform hover:scale-110" />
          </a>

          <a href="mailto:midoboukhatem@gmail.com">
            <img src="/gmail.png" alt="Email" className="w-12 h-12 transition-transform hover:scale-110" />
          </a>
        </div>
      )}

      {!isHomePage && <Footer />}
    </div>
  );
};

export default Layout;
