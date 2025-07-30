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

      {!isHomePage && <Footer />}
    </div>
  );
};

export default Layout;
