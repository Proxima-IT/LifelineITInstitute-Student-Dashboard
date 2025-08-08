import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/Website Logo.png";
import MyCourses from "../../pages/MyCourses";
import {
  MdOutlineHome,
  MdOutlineInsertComment,
  MdOutlineShoppingCart,
} from "react-icons/md";
import { RiGraduationCapFill } from "react-icons/ri";
import {
  FaAngleDoubleUp,
  FaBars,
  FaRegClock,
  FaRegComment,
  FaUserGraduate,
} from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { GrCertificate } from "react-icons/gr";
import { IoChevronUpCircle, IoNewspaperOutline } from "react-icons/io5";

import student from "../../assets/student.jpg";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import axios from "axios";

import { CiLock } from "react-icons/ci";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { IoIosPaper, IoMdClose, IoMdLock } from "react-icons/io";
import { dashboardData } from "@/hooks/dashboardData";
import useNotice from "@/hooks/useNotice";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import { ProfileIcon } from "./ProfileIcon";
import Header from "./Header";

const SideNav = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { data, isLoading } = dashboardData();
  const { notices } = useNotice();

  const handleLogout = async () => {
    setTimeout(async () => {
      await axios.get(import.meta.env.VITE_API_URL + `/api/auth/logout`, {
        withCredentials: true,
      });
      window.location.href = import.meta.env.VITE_PUBLIC_PAGE;
    }, 4000);

    toast.success(`${data?.name} is successfully logged out`, {
      position: "top-center",
      autoClose: 3000,
      closeOnClick: true,
      draggable: false,
      theme: "dark",
    });
  };

  if (isLoading)
    return (
      <div>
        <div className="flex justify-center items-center h-40">
          <div className="flex space-x-2">
            <div className="w-4 h-4 rounded-full bg-blue-400 animate-bounce"></div>
            <div className="w-4 h-4 rounded-full bg-blue-500 animate-bounce [animation-delay:.2s]"></div>
            <div className="w-4 h-4 rounded-full bg-blue-600 animate-bounce [animation-delay:.4s]"></div>
          </div>
        </div>
      </div>
    );

  const handleClick = () => {
    // navigate("/our-courses");
    setTimeout(() => {
      window.scrollTo({ top: 320, behavior: "smooth" });
    }, 100); // delay to ensure page loads
  };

  return (
    <div>
      {/* <!-- Navigation --> */}

      <Header></Header>

      {/* <!-- Hero Banner --> */}
      <section className="bg-white py-10 px-2">
        <div className="max-w-screen-xl mx-auto bg-white rounded-xl shadow-card overflow-hidden flex flex-col lg:flex-row relative min-h-[170px] lg:min-h-[240px] ">
          <div className="flex-1 hidden  coverdesktop  bg-gradient-to-l from-[#0B254C] via-[#266ea1] to-[#041630] text-white  md:flex flex-col justify-center"></div>
          <div className="flex-1 covermobile md:hidden  bg-gradient-to-l from-[#0B254C] via-[#266ea1] to-[#041630] text-white  flex flex-col justify-center"></div>

          <div className="absolute left-6 bottom-[10px] lg:left-6 lg:bottom-[10px] w-20 h-20 rounded-full border-4 border-white bg-blue-500 flex items-center justify-center cursor-pointer overflow-hidden shadow shadow-blue-100">
            {/* <i className="fas fa-user text-white text-4xl"></i> */}
            <img
              src={data?.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute left-40 bottom-7 lg:bottom-6 text-gray-800 text-left">
            <div className="text-sm -ml-10 lg:text-xl font-semibold text-white mb-2 pr-2">
              {data?.name}
            </div>
            <div className="text-sm -ml-8 text-gray-100">{data?.sid}</div>
          </div>

          {/* <div className="absolute right-3 bottom-0 md:bottom-2 lg:bottom-4 text-xs text-gray-500">
            IP Address : 89.116.158.124
          </div> */}
        </div>
      </section>

      {/* <!-- Main Layout --> */}
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-6 lg:mt-5 px-2 lg:px-4 pb-5">
        {/* <!-- Sidebar --> */}
        <aside className="lg:w-1/4 w-full  lg:block border-2 border-[#0B254C] rounded-md py-2">
          <div className="bg-white shadow-card rounded-xl p-6">
            <div className="uppercase text-sm text-gray-500 mb-4">
              Welcome, <strong>{data?.name}</strong>
            </div>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/dashboard"
                  onClick={handleClick}
                  className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md"
                >
                  <FiHome /> My Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/orders"
                  onClick={handleClick}
                  className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md"
                >
                  <MdOutlineShoppingCart /> My Orders
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/courses"
                  onClick={handleClick}
                  className="flex items-center gap-2 p-2 rounded-md"
                >
                  <RiGraduationCapFill /> My Courses
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/notice"
                  onClick={handleClick}
                  className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md"
                >
                  <MdOutlineInsertComment /> Notice Board
                  <span className="ml-auto text-xs bg-[#ffa800] text-gray-900 font-bold px-2 py-0.5 rounded-full">
                    {notices?.length}
                  </span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/registration-card"
                  onClick={handleClick}
                  className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md"
                >
                  <IoNewspaperOutline /> Registration Card
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/certificate"
                  onClick={handleClick}
                  className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md"
                >
                  <GrCertificate /> My Certificate
                </NavLink>
              </li>

              <h3 className="text-left ml-3 text-gray-800">User</h3>
              <li>
                <NavLink
                  to="/profile"
                  onClick={handleClick}
                  className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md"
                >
                  <FaUserGraduate /> My Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/password-reset"
                  onClick={handleClick}
                  className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md"
                >
                  <IoMdLock /> Change Password
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  onClick={handleLogout}
                  className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md"
                >
                  <FaArrowRightFromBracket /> Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </aside>

        <div className="lg:w-3/4 bg-white shadow-card h-max rounded-xl lg:p-8 p-3 border border-[#ffa800]">
          {/* page wise content */}
          <Outlet></Outlet>
        </div>
      </div>

      <ToastContainer></ToastContainer>
    </div>
  );
};

export default SideNav;
