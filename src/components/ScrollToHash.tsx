import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  const scrollToElement = (elementId: string) => {
    const id = elementId.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    if (hash) {
      // Use a timeout to ensure the DOM is ready, especially on page transitions
      const timer = setTimeout(() => {
        scrollToElement(hash);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  // Listen for clicks on the same hash link
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      
      if (anchor && anchor.hash && anchor.pathname === window.location.pathname) {
        if (anchor.hash === window.location.hash) {
          e.preventDefault();
          scrollToElement(anchor.hash);
        }
      }
    };

    window.addEventListener("click", handleLinkClick);
    return () => window.removeEventListener("click", handleLinkClick);
  }, [pathname, hash]);

  return null;
};

export default ScrollToHash;
