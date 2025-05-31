import { NavLink } from "react-router-dom";

const NavbarLinks = ({ classes, hrTag, hideSidebar }) => {
  const links = [
    { to: "/", label: "HOME" },
    { to: "/collection", label: "COLLECTION" },
    { to: "/about", label: "ABOUT" },
    { to: "/contact", label: "CONTACT" },
  ];

  return (
    <>
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={classes}
          onClick={() => hideSidebar?.(false)}
        >
          <p>{link.label}</p>
          {hrTag && <hr className="w-0 border-none h-[1.5px] bg-gray-700" />}
        </NavLink>
      ))}
    </>
  );
};

export default NavbarLinks;
