import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col relative">
    <Navbar />
    <main className="w-full flex flex-col items-center justify-center">{children}</main>
    <Footer />
  </div>
);

export default Layout;
