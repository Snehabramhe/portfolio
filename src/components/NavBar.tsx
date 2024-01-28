import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../assets/lib/data";
import ScrollToAnchor from "./Listener";
import { useActiveSectionContext } from "../context/active-section-context";
import { useTheme } from "../context/theme-context";

const NavBar: React.FC = () => {
  const { theme } = useTheme();

  const [isSticky, setIsSticky] = useState(false);
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setIsMobileMenuActive(true);
        setIsSticky(false);
      } else {
        setIsMobileMenuActive(false);
        setIsSticky(true);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const CustomNavLink: React.FC<CustomNavLinkProps> = ({
    link,
    children,
    linkEn,
  }) => {
    const [isHovered, setIsHovered] = useState(false);
    const isLinkActive = isHovered || linkEn === activeSection;

    const linkClasses = isLinkActive
      ? "transition-all duration-200 relative"
      : "opacity-20 transition-all duration-700";

    const leftArrow = isLinkActive && (
      <span className="text-[--orange] absolute -left-5 top-0 max-lg:hidden">
        &lt;
      </span>
    );

    const rightArrow = isLinkActive && (
      <span className="text-[--orange] absolute top-0 -right-10 max-lg:hidden">
        /&gt;
      </span>
    );

    return (
      <NavLink
        to={link}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative ${linkClasses}`}
        aria-aria-current={link}
      >
        <span>
          {leftArrow}
          {children}
          {rightArrow}
        </span>
      </NavLink>
    );
  };  

  return (
    <React.Fragment>
      <ScrollToAnchor />
      {!isMobileMenuActive && (
        <nav
          className={`max-lg:hidden flex-row flex justify-center items-center gap-24 font-semibold p-5 top-4 ${
            isSticky && !isMobileMenuActive
              ? `sticky top-10 z-50 ml-auto mr-auto  w-max  px-16 py-5 transition-all ease-in-out duration-100 rounded-full border border-white border-opacity-40  bg-opacity-70 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] ${
                  theme === "dark" ? "bg-darkblue" : "bg-white"
                }`
              : "mt-4 p-5"
          }
   `}
        >
          {navLinks.map((link, index) => (
            <CustomNavLink key={index} link={link.hash} linkEn={link.text}>
              {link.text === activeSection ? (
                <div>
                  <span className="text-[--orange] absolute -left-5 top-0">
                    &lt;
                  </span>
                  {link.text}
                </div>
              ) : (
                <div
                  onClick={() => {
                    setActiveSection(link.text);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.text}
                </div>
              )}
            </CustomNavLink>
          ))}
        </nav>
      )}
      {isMobileMenuActive && (
        <nav
          className={` max-lg:flex w-[100vw] flex-row justify-between fixed bottom-0 left-0 z-50 bg-darkblue p-10  text-center items-center transition-all ease-in-out duration-100 rounded-t-3xl bg-opacity-100 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] ${
            theme === "dark" ? "bg-darkblue" : "bg-white"
          }`}
        >
          {navLinks.map((link, mobileIndex) => (
            <CustomNavLink
              key={mobileIndex}
              link={link.hash}
              linkEn={link.text}
            >
              {link.text === activeSection ? (
                <div className="text-[3.2rem] flex flex-col items-center">
                  <link.icon />
                </div>
              ) : (
                <div
                  className="text-[2rem] flex flex-col items-center "
                  onClick={() => {
                    setActiveSection(link.text);
                    setTimeOfLastClick(Date.now());
                    if (link.text === "Home") {
                      document.body.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                >
                  <link.icon />
                </div>
              )}
            </CustomNavLink>
          ))}
        </nav>
      )}
    </React.Fragment>
  );
};

interface CustomNavLinkProps {
  link: string;
  children: React.ReactNode;
  linkEn?: string;
}

export default NavBar;
