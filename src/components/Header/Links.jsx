import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
function Links() {
  return (
    <div className="  flex text-lg justify-evenly gap-6 items-center">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${
            isActive ? "underline underline-offset-4" : ""
          }hidden lg:block hover:scale-110 transition duration-300 cursor-pointer`
        }
      >
        <img src={logo} alt="icon" className="mr-10 w-[128px]" />
      </NavLink>
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
      <NavLink
        to="/users"
        className={({ isActive }) =>
          `${
            isActive ? "underline underline-offset-4" : ""
          } hidden lg:block hover:scale-110 transition duration-300 cursor-pointer`
        }
      >
        Users
      </NavLink>
    </div>
  );
}

export default Links;
