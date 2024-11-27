"use client";

import { useRef, useEffect, useContext } from "react";
import { NavContext } from "@/app/store/navContext";
import ScrollToTopBtn from "../../ui/ScrollToTopBtn";
import { scrollToTopAndFocus } from "@/app/helpers/scrollToTopAndFocus";
import Button from "../../ui/Button";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const footerRef = useRef();
  const navRef = useContext(NavContext);

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
    <footer
      ref={footerRef}
      className="flex p-sm items-center gap-4 flex-wrap justify-between"
    >
      <Button
        isLink={true}
        href="https://github.com/ElleFrankenberg/elle-frankenberg-portfolio"
        label="View the portfolio code on Github."
      >
        <FaGithub className="w-[30px] h-[30px] " aria-hidden="true" />
        <span>View portfolio code</span>
      </Button>
      <ScrollToTopBtn
        handleScrollToTop={handleScrollToTop}
        showOnLargeScreen={false}
      />
    </footer>
  );
};

export default Footer;
