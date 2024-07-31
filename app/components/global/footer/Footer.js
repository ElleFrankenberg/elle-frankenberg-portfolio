"use client";

import { useRef, useEffect } from "react";

const Footer = () => {
  const footerRef = useRef();
  const currentYear = new Date().getFullYear();

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

  return (
    <footer ref={footerRef} className="p-sm">
      <small>&copy; Copyright {currentYear}, Elle Frankenberg</small>
    </footer>
  );
};

export default Footer;
