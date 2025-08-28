import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";

const Layout = ({ children }) => {
  // Disable manual scrolling (wheel, touch, keyboard). Programmatic scrolls still work.
  useEffect(() => {
    const preventDefault = (e: Event) => {
      e.preventDefault();
    };

    const onKeyDown = (e: KeyboardEvent) => {
      const scrollKeys = [
        "ArrowUp",
        "ArrowDown",
        "PageUp",
        "PageDown",
        "Home",
        "End",
        " ", // Space
      ];
      if (scrollKeys.includes(e.key)) {
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", preventDefault as EventListener, { passive: false });
    window.addEventListener("touchmove", preventDefault as EventListener, { passive: false });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("wheel", preventDefault as EventListener);
      window.removeEventListener("touchmove", preventDefault as EventListener);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      <main className="w-full flex flex-col items-center justify-center">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
