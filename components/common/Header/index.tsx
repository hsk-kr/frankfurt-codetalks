/**
 * TODO: Need to design for mobile device
 */
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * Header in the default template
 */
const Header = () => {
  const [detached, setDetached] = useState(false);

  useEffect(() => {
    const handleScroll = () => setDetached(window.scrollY > 10);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerStylde = detached ? "bg-white h-12" : "bg-transparent h-14";

  return (
    <header
      className={`w-screen box-border px-8 fixed top-0 z-10 transition-colors transition-height ${headerStylde}`}
    >
      <nav className="w-full h-full flex items-center">
        <Link href="/" className="mr-10 font-bold text-lg">
          FCT
        </Link>
        <ul className="items-center hidden md:flex">
          <li>
            <Link href="#" onClick={() => alert("Coming Soon!")}>
              Meetup
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
