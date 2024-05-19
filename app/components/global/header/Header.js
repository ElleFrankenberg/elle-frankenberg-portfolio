"use client";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const params = useParams();

  return (
    <header className="p-sm border border-b-darkBlue sticky top-0 z-10 bg-white">
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
          <li
            className={`hover:text-darkBlue ${
              pathname === "/cv" ? "text-darkBlue" : "text-darkGray"
            }`}
          >
            <Link href="/cv">CV</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
