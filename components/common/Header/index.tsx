/**
 * TODO: Need to design for mobile device
 */
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const navItems: {
  name: string;
  href: string;
  disabled: boolean;
}[] = [
  {
    name: "Meetup",
    href: "#",
    disabled: true,
  },
];

/**
 * Header in the default template
 */
const Header = () => {
  const [detached, setDetached] = useState(false);
  const [openNavbar, setOpenNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => setDetached(window.scrollY > 10);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNavbar = () => setOpenNavbar((prevOpenNavbar) => !prevOpenNavbar);

  const comingSoon = () => alert("Coming Soon!");

  const headerStyle = detached
    ? "bg-white h-12"
    : "bg-transparent h-14 text-white";

  const mobileNavbarStyle = detached ? "text-black bg-white" : "text-white";

  return (
    <header
      className={`w-screen box-border px-8 fixed top-0 z-10 transition-colors transition-height ${headerStyle}`}
    >
      <nav className="w-full h-full flex items-center justify-between md:justify-normal">
        <Link href="/" className="mr-10 font-bold text-lg">
          FCT
        </Link>
        <FontAwesomeIcon
          icon={faBars}
          className="w-4 h-4 md:hidden"
          onClick={toggleNavbar}
        />
        {openNavbar && (
          <div
            className={`flex md:hidden fixed top-12 w-full left-0 p-2 ${mobileNavbarStyle}`}
          >
            <ul className="w-full">
              {navItems.map((item) => (
                <li key={item.name} className="w-full">
                  <Link
                    href={item.href}
                    className="p-2 w-full block"
                    {...(item.disabled && { onClick: comingSoon })}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        <ul className="items-center hidden md:flex">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                {...(item.disabled && { onClick: comingSoon })}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
