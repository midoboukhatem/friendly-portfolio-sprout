import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";

const Layout = ({ children }) => {
  // Disable manual scrolling (wheel, touch, keyboard). Programmatic scrolls still work.
  // Allow scrolling inside any element that has the attribute: data-allow-scroll
  useEffect(() => {
    const isMobile = () => window.matchMedia('(max-width: 767px)').matches;

    const isInsideAllowedScroll = (target: EventTarget | null): boolean => {
      let node = target as HTMLElement | null;
      while (node && node !== document.body) {
        if (node instanceof HTMLElement && node.hasAttribute("data-allow-scroll")) {
          return true;
        }
        node = node.parentElement;
      }
      return false;
    };

    const preventDefault = (e: Event) => {
      if (!isMobile()) return; // only block on phones
      if (isInsideAllowedScroll(e.target)) return; // let inner scroll containers work
      e.preventDefault();
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (!isMobile()) return; // only block on phones
      if (isInsideAllowedScroll(document.activeElement)) return;
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

    const onResize = () => {
      // no-op; handlers check isMobile on each event
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener("wheel", preventDefault as EventListener);
      window.removeEventListener("touchmove", preventDefault as EventListener);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener('resize', onResize);
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
