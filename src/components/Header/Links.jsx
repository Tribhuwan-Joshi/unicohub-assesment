import svg from "/logo.svg";
import { NavLink } from "react-router-dom";

function Links() {
  return (
    <div className="  flex text-lg justify-evenly gap-6 items-center">
      <a className="hidden lg:block hover:scale-110 transition duration-300 cursor-pointer">
        
        <img src={svg} alt="icon" className="mr-10" />
      </a>
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
      <NavLink className="hidden lg:block hover:scale-110 transition duration-300 cursor-pointer">
        Users
      </NavLink>
    </div>
  );
}

export default Links;
