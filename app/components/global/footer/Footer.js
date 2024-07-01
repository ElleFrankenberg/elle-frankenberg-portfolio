"use client";

import { useRef, useEffect } from "react";

const Footer = () => {
  const footerRef = useRef();

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
      footer
    </footer>
  );
};

export default Footer;
