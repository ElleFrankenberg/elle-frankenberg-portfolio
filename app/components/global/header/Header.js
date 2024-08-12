"use client";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { useRef, useEffect } from "react";

const Header = () => {
  const pathname = usePathname();
  const params = useParams();
  const headerRef = useRef();

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
      className="pr-sm pt-sm pb-sm border-b border-b-darkBlue sticky top-0 z-10 bg-white "
    >
      <nav>
        <ul className="flex gap-4 font-bold text-reg uppercase">
          <li
            className={`hover:text-darkBlue ${
              pathname === "/" ? "text-darkBlue" : "text-darkGray"
            }`}
          >
            <Link href="/">Elle Frankenberg</Link>
          </li>
          <li
            className={`hover:text-darkBlue ${
              pathname === "/projects" ||
              pathname === `/projects/${params.slug}`
                ? "text-darkBlue"
                : "text-darkGray"
            }`}
          >
            <Link href="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
