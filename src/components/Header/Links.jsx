import svg from "/logo.svg";

function Links() {
  return (
    <div className="  flex text-lg justify-evenly gap-6 items-center">
      <img src={svg} alt="icon" className="mr-10" />
      <a className="hidden lg:block hover:scale-110 transition duration-300 cursor-pointer">
        Product
      </a>
      <a className="hidden lg:block hover:scale-110 transition duration-300 cursor-pointer">
        Team
      </a>
      <a className="hidden lg:block hover:scale-110 transition duration-300 cursor-pointer">
        Enterprise
      </a>
      <a className="hidden lg:block hover:scale-110 transition duration-300 cursor-pointer">
        Explore
      </a>
      <a className="hidden lg:block hover:scale-110 transition duration-300 cursor-pointer">
        Maketplace
      </a>
      <a className="hidden lg:block hover:scale-110 transition duration-300 cursor-pointer">
        Pricing
      </a>
      <a className="hidden lg:block hover:scale-110 transition duration-300 cursor-pointer">
        Users
      </a>
    </div>
  );
}

export default Links;
