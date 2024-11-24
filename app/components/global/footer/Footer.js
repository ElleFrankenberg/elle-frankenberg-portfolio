"use client";

import { useRef, useEffect, useContext } from "react";
import { NavContext } from "@/app/store/navContext";
import ScrollToTopBtn from "../../ui/ScrollToTopBtn";
import { scrollToTopAndFocus } from "@/app/helpers/scrollToTopAndFocus";

const Footer = () => {
  const footerRef = useRef();
  const navRef = useContext(NavContext);
  // const currentYear = new Date().getFullYear();

  useEffect(() => {
    const setFooterHeight = (footer) => {
      if (footer) {
        const height = footer.offsetHeight;
        document.documentElement.style.setProperty(
          "--footer-height",
          `${height}px`
        );
      }
    };

    setFooterHeight(footerRef.current);
  }, [footerRef.current]);

  const handleScrollToTop = () => {
    scrollToTopAndFocus(window, navRef);
  };

  return (
    <footer ref={footerRef} className="flex p-sm items-center justify-end">
      <ScrollToTopBtn
        handleScrollToTop={handleScrollToTop}
        showOnLargeScreen={false}
      />
    </footer>
  );
};

export default Footer;
