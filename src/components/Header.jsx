import svg from "/logo.svg";

function Links() {
  return (
    <div className=" hidden md:flex text-lg justify-evenly gap-6 items-center">
      <img src={svg} alt="icon" className="mr-10" />
      <a className="hover:scale-110 transition duration-300 cursor-pointer">
        Product
      </a>
      <a className="hover:scale-110 transition duration-300 cursor-pointer">
        Team
      </a>
      <a className="hover:scale-110 transition duration-300 cursor-pointer">
        Enterprise
      </a>
      <a className="hover:scale-110 transition duration-300 cursor-pointer">
        Explore
      </a>
      <a className="hover:scale-110 transition duration-300 cursor-pointer">
        Maketplace
      </a>
      <a className="hover:scale-110 transition duration-300 cursor-pointer">
        Pricing
      </a>
      <a className="hover:scale-110 transition duration-300 cursor-pointer">
        Users
      </a>
    </div>
  );
}

function Searchbar() {
  return (
    <div className="flex bg-[#272F43] items-center pr-2 rounded-sm">
      <input
        className="bg-[#272F43] outline-none w-[230px]  tracking-wide placeholder:text-[#C0C3C9] h-8 p-2 rounded-sm"
        placeholder="Search DOML"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="25"
        viewBox="0 0 18 18"
        fill="none"
      >
        <path
          d="M0.826131 3.59253C0.826131 1.93956 2.16612 0.599568 3.81909 0.599568H13.4714C15.1243 0.599568 16.4643 1.93956 16.4643 3.59253V14.3672C16.4643 16.0201 15.1243 17.3601 13.4714 17.3601H3.81909C2.16612 17.3601 0.826131 16.0201 0.826131 14.3672V3.59253Z"
          stroke="#515868"
          strokeWidth="1.19718"
        />
        <line
          x1="6.39745"
          y1="14.3926"
          x2="9.76453"
          y2="4.85252"
          stroke="#7A7D86"
          strokeWidth="1.19718"
        />
      </svg>
    </div>
  );
}

function AuthButtons() {
  return (
    <div className="flex gap-6">
      <button className="hover:scale-110 transition duration-300">
        Sign in
      </button>
      <button className="border hover:bg-white hover:text-black hover:scale-110 transition duration-300 ease-in-out border-white rounded-md p-[2px] px-1">
        Sign up
      </button>
    </div>
  );
}

function Header() {
  return (
    <header className="mt-4 h-[15px] text-white py-5 flex items-center justify-evenly">
      <Links />
      <div className="flex gap-10">
        <Searchbar />
        <AuthButtons />
      </div>
    </header>
  );
}

export default Header;
