"use client";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { useRef, useEffect, useContext } from "react";
import { NavContext } from "@/app/store/navContext";

const Header = () => {
  const pathname = usePathname();
  const params = useParams();
  const headerRef = useRef();
  const navRef = useContext(NavContext);

  useEffect(() => {
    const setHeaderHeight = (header) => {
      if (header) {
        const height = header.offsetHeight;
        document.documentElement.style.setProperty(
          "--header-height",
          `${height}px`
        );
      }
    };

    setHeaderHeight(headerRef.current);
  }, [headerRef.current]);

  return (
    <header
      ref={headerRef}
      className="pr-sm  p-sm border-b border-b-darkBlue sticky top-0 z-10 bg-white "
    >
      <nav ref={navRef} tabIndex="-1" aria-label="Main navigation">
        <ul className="flex gap-4 font-bold text-reg uppercase">
          <li
            className={`hover:text-darkBlue ${
              pathname === "/" ? "text-darkBlue" : "text-darkGray"
            }`}
          >
            <Link href="/" aria-label="Go to Elle Frankenberg's homepage">
              Elle Frankenberg
            </Link>
          </li>
          <li
            className={`hover:text-darkBlue ${
              pathname === "/projects" ||
              pathname === `/projects/${params.slug}`
                ? "text-darkBlue"
                : "text-darkGray"
            }`}
          >
            <Link
              href="/projects"
              aria-label="Go to Elle Frankenberg's projects"
            >
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
