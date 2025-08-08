import React, { useEffect, useState } from "react"
import { Link, NavLink, Outlet } from "react-router-dom"
import logo from "../../assets/Website Logo.png"
import MyCourses from "../../pages/MyCourses"
import {
  MdOutlineHome,
  MdOutlineInsertComment,
  MdOutlineShoppingCart,
} from "react-icons/md"
import { RiGraduationCapFill } from "react-icons/ri"
import {
  FaAngleDoubleUp,
  FaBars,
  FaRegClock,
  FaRegComment,
  FaUserGraduate,
} from "react-icons/fa"
import { FiHome } from "react-icons/fi"
import { GrCertificate } from "react-icons/gr"
import { IoChevronUpCircle, IoNewspaperOutline } from "react-icons/io5"

import student from "../../assets/student.jpg"

import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import Tooltip from "@mui/material/Tooltip"
import MenuItem from "@mui/material/MenuItem"
import AdbIcon from "@mui/icons-material/Adb"
import axios from "axios"

import { CiLock } from "react-icons/ci"
import { FaArrowRightFromBracket } from "react-icons/fa6"
import { IoIosPaper, IoMdClose, IoMdLock } from "react-icons/io"
import { dashboardData } from "@/hooks/dashboardData"
import useNotice from "@/hooks/useNotice"
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai"
import { toast, ToastContainer } from "react-toastify"
import { ProfileIcon } from "./ProfileIcon"

const SideNav = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => setIsOpen(!isOpen)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const { data, isLoading } = dashboardData()
  const { notices } = useNotice()

  const handleLogout = async () => {
    setTimeout(async () => {
      await axios.get(import.meta.env.VITE_API_URL + `/api/auth/logout`, {
        withCredentials: true,
      })
      window.location.href = import.meta.env.VITE_PUBLIC_PAGE
    }, 4000)

    toast.success(`${data?.name} is successfully logged out`, {
      position: "top-center",
      autoClose: 3000,
      closeOnClick: true,
      draggable: false,
      theme: "dark",
    })
  }

  
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
    )

  const handleClick = () => {
    // navigate("/our-courses");
    setTimeout(() => {
      window.scrollTo({ top: 320, behavior: "smooth" })
    }, 100) // delay to ensure page loads
  }

  return (
    <div>
      {/* <!-- Navigation --> */}
      <header className="sticky top-0 z-50 bg-white shadow">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center bg-[#0B254C] h-16 px-4">
          <Link
            to={`${import.meta.env.VITE_PUBLIC_PAGE}`}
            className="w-1/2 md:w-1/4"
          >
            <img
              src={logo}
              alt="SR DREAM IT Logo"
              className="w-full lg:w-1/2"
            />
          </Link>

          <div
            className="text-[#f2f3f5] text-2xl lg:hidden flex justify-end"
            onClick={toggleNavbar}
          >
            <AiOutlineMenuUnfold />
          </div>
          {isOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setIsOpen(false)}
            />
          )}

          {/* Mobile Drawer */}
          <div
            className={`fixed z-50 bottom-0 right-0 h-[80vh] overflow-auto lg:hidden w-full bg-blue-50 border-l border-neutral-300 shadow-lg transition-transform duration-500 ease-in-out transform ${
              isOpen ? "translate-y-0" : "translate-y-full"
            }`}
          >
            {/* Drawer Header */}
            <div className="w-full flex items-center justify-between px-4">
              {/* <Link
                to="/"
                className="text-lg font-semibold text-sky-700 flex items-center gap-x-2"
              >
                <img src={logo} alt="" className="w-1/2 md:w-1/3" />
              </Link> */}
              {/* <div></div> */}
              {/* <div className="lg:hidden flex justify-end py-6">
                <button
                  onClick={toggleNavbar}
                  className="text-gold focus:outline-none"
                >
                  <IoMdClose size={30} />
                </button>
              </div> */}
            </div>

            {/* <div className="border-b border-gray-700 pt-4"></div> */}

            <div className="flex-1 flex flex-col  items-center justify-between gap-6 p-6">
              <ul
                onClick={() => setIsOpen(false)}
                className="flex flex-col items-start justify-center gap-6 text-base  font-normal font-roboto"
              >
                <li>
                  <NavLink
                    to="/dashboard"
                    onClick={handleClick}
                    className="flex  items-center gap-2 hover:bg-gray-100 p-2 rounded-md"
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
                    <span className="ml-auto text-xs bg-red-300 text-red-900 font-bold px-2 py-0.5 rounded-full">
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

                <h3 className="text-left -ml-4  text-gray-800">User</h3>
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
          </div>

          <nav className="hidden md:flex items-center justify-evenly text-white space-x-4 text-sm">
            {/* <Link
              to="/"
              className="relative font-semibold text-brand after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-brand"
            >
              Home
            </Link> */}
            <Link to="https://lifelineitinstitute.com/">Home</Link>
            <Link to="https://lifelineitinstitute.com/about">About Us</Link>
            <Link to="https://lifelineitinstitute.com/courses">Courses</Link>

            <Link to="https://lifelineitinstitute.com/success-story">
              Success Story
            </Link>
            <Link to="https://lifelineitinstitute.com/student-review">
              Student Reviews
            </Link>
           
            <Link to="https://lifelineitinstitute.com/contact">Contact Us</Link>

             <ProfileIcon></ProfileIcon>

            {/* <Box sx={{ flexGrow: 0 }} className="border-2 border-white rounded-full">
              <Tooltip title="My Profile" className="bg-white text-black">
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0 }}
                  className="border-2 border-blue-700 "
                >
                  <Avatar alt="" src={data?.image} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem
                  onClick={handleCloseUserMenu}
                  sx={{
                    "&:hover": {
                      backgroundColor: "transparent", // removes hover background
                    },
                    padding: 1.5,
                    // optional: remove default padding if needed
                  }}
                >
                  <Typography sx={{ textAlign: "center" }}>
                    <Link
                      to="/profile"
                      className="flex items-center gap-2 hover:bg-gray-100 transition-all duration-300 p-2 rounded-md pb-2"
                    >
                      <FaUserGraduate /> My Profile
                    </Link>

                    <Link
                      to="/password-reset"
                      className="flex items-center gap-2 hover:bg-gray-100 transition-all duration-300  p-2 rounded-md "
                    >
                      <IoMdLock /> Change Password
                    </Link>

                    <Link
                      to="/"
                      onClick={handleLogout}
                      className="flex items-center gap-2 p-2 hover:bg-gray-100 transition-all duration-300 rounded-md"
                    >
                      <FaArrowRightFromBracket /> Logout
                    </Link>
                  </Typography>
                </MenuItem>
              </Menu>
            </Box> */}
           
          </nav>
        </div>
      </header>

      {/* <!-- Hero Banner --> */}
      <section className="bg-white py-10 px-2">
        <div className="max-w-screen-xl mx-auto bg-white rounded-xl shadow-card overflow-hidden flex flex-col lg:flex-row relative min-h-[250px] lg:min-h-[240px] ">
          <div className="flex-1 bg-gradient-to-l from-[#0B254C] via-[#266ea1] to-[#041630] text-white  flex flex-col justify-center">
            <h1 className="text-xl lg:text-3xl font-bold">
              Where Learners Meet Success
            </h1>
            <p className="text-[#ffc25a] font-bold text-sm lg:text-lg my-6 pb-2">
              40K+ Students $3.5M+ Earned*
            </p>
          </div>

          <div className="absolute left-6 bottom-[4px] lg:left-6 lg:bottom-[12px] w-24 h-24 rounded-full border-4 border-white bg-blue-500 flex items-center justify-center cursor-pointer overflow-hidden shadow shadow-blue-100">
            {/* <i className="fas fa-user text-white text-4xl"></i> */}
            <img
              src={data?.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute left-40 bottom-4 lg:bottom-8 text-gray-800">
            <div className="text-sm -ml-6 lg:text-xl font-semibold text-white mb-2 pr-2">
              {data?.name}
            </div>
            <div className="text-xs -ml-8 text-gray-100">{data?.sid}</div>
          </div>

          {/* <div className="absolute right-3 bottom-0 md:bottom-2 lg:bottom-4 text-xs text-gray-600">
            IP Address : 89.116.158.124
          </div> */}
        </div>
      </section>

      {/* <!-- Main Layout --> */}
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-6 lg:mt-5 px-2 lg:px-4">
        {/* <!-- Sidebar --> */}
        <aside className="lg:w-1/4 w-full hidden lg:block border-2 border-[#0B254C] rounded-md py-2">
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

        <div className="lg:w-3/4 bg-white shadow-card h-max rounded-xl lg:p-8 border border-[#ffa800]">
          {/* page wise content */}

          <Outlet></Outlet>
        </div>
      </div>

      <ToastContainer></ToastContainer>
    </div>
  )
}

export default SideNav
