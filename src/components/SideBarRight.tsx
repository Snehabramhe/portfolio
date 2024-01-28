import { Link } from "react-router-dom";
import { sideBarRightMail } from "../assets/lib/data";
import React from "react";

const SiteBarRight: React.FC = () => {
  return (
    <div className="absolute flex items-center flex-col  bottom-0 right-0 mr-8  h-[50vh] max-lg:hidden ">
      <div className=" h-[65%] w-[4rem] flex items-center justify-center ">
        <Link
          to={sideBarRightMail.link}
          className=" text-gray-700 mb-2 [writing-mode:vertical-lr] absolute top-0 right-0  h-[50%] text-[--orange] hover:text-[--lightblue] transition-all duration-200 "
        >
          {sideBarRightMail.text}
        </Link>
      </div>
    </div>
  );
};

export default SiteBarRight;
