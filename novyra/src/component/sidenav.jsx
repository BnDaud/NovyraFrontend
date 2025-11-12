import { AiFillDashboard } from "react-icons/ai";
import { FaBlog } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
const Sidenav = () => {
  const classes = "  text-xl";
  const navcontent = [
    {
      name: "Dash Board ",
      logo: <AiFillDashboard className={classes} />,
      active: false,
    },
    { name: "Blog", logo: <FaBlog className={classes} />, active: false },
    {
      name: "Portfolio",
      logo: <FaBriefcase className={classes} />,
      active: false,
    },
    { name: "User", logo: <FaUsers className={classes} />, active: false },
    {
      name: "Settings",
      logo: <IoMdSettings className={classes} />,
      active: false,
    },
  ];

  return (
    <>
      <div className="flex flex-col h-screen bg-darkblue md:w-62 w-20 ">
        <div className="py-5 px-2 text-center border border-darkblue border-b-gray text-white">
          {" "}
          Novyra CMS
        </div>
        <div className="mt-5 space-y-5">
          {" "}
          {navcontent.map((item) => {
            return (
              <div className="flex  hover:text-white text-gray-300 border-amber-400  hover:bg-gray/30 border-l-2 h-13 hover:animate-pulse duration-1000 ">
                {" "}
                <div className=" flex  md:mx-10 mx-auto items-center gap-4">
                  {item.logo} <p className="hidden md:block">{item.name}</p>
                </div>{" "}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidenav;
