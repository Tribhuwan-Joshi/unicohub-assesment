import { useState, useEffect } from "react";
import AuthButtons from "./AuthButtons";
import Links from "./Links";
import Searchbar from "./SearchBar";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full pt-8   pb-8 h-[12px] lg:h-[15px] duration-500 ease-in-out transition text-white py-5 flex items-center justify-evenly ${
        scrolled ? "bg-gray-900" : "" // Change the background color when scrolled
      }`}
    >
      <Links />
      <div className="flex gap-10">
        <Searchbar />
        <AuthButtons />
      </div>
    </header>
  );
}

export default Header;
