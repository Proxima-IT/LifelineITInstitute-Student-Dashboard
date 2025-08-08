import React, { useEffect, useState } from "react";
import logo from "../../assets/Website Logo.png";
import { HiAdjustments } from "react-icons/hi";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Switch } from "@/components/ui/switch"

import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";
import { AiOutlineMenuFold } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { HashLink } from "react-router-hash-link";

import { useRef } from "react";
import { GiGraduateCap } from "react-icons/gi";
import { ProfileIcon } from "./ProfileIcon"

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [query, setQuery] = useState("");
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const navigate = useNavigate();

  const searchRef = useRef(null); // 👈 Add this

  useEffect(() => {
    const verifyLogin = async () => {
      try {
        const result = await axios.get(
          import.meta.env.VITE_API_URL + "/api/auth/check",
          { withCredentials: true }
        );
        if (result.status === 200 && result.data.status === true) {
          setIsLoggedIn(true);
          setUser(result.data.user);
        }
      } catch (error) {
        setIsLoggedIn(false);
        console.error("Login check error:", error.message);
      }
    };
    verifyLogin();
  }, []);

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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate("/courses", { state: { search: query } });
    setMobileSearchOpen(false); // close floating search if on mobile
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setMobileSearchOpen(false); // 👈 Close search
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    // navigate("/our-courses");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100); // delay to ensure page loads
  };

  return (
    <div className="p-[8px] flex items-center justify-around sticky top-0 z-50 bg-[#0c2851] shadow">
      {/* Logo */}
      <div className="lg:w-3/12">
        <Link to="https://lifelineitinstitute.com/">
          <img src={logo} alt="Logo" className="w-full md:w-2/5 lg:w-[85%] " />
        </Link>
      </div>

      {/* Main Controls */}
      <div className="flex lg:flex-col items-center  lg:gap-3">
        <div className="flex items-center justify-around gap-4">
          {/* Adjustments icon (desktop only) */}
          <div className="text-primary bg-secondary rounded-sm p-2 text-lg hidden lg:block">
            <HiAdjustments />
          </div>

          {/* Mobile Search Icon + Floating Search Bar */}
          {/* Mobile Search Trigger */}
          <div className="lg:hidden">
            <IconButton
              sx={{ p: "10px", color: "white" }}
              aria-label="search"
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
            >
              <SearchIcon />
            </IconButton>
          </div>

          {/* Floating Full-Width Search Bar */}
          {mobileSearchOpen && (
            <div
              ref={searchRef}
              className="fixed transition-all duration-200 top-20 left-0 right-0 z-50 px-4 w-[80%] mx-auto"
            >
              <Paper
                component="form"
                onSubmit={handleSearch}
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search here..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <IconButton type="submit" sx={{ p: "10px" }}>
                  <SearchIcon />
                </IconButton>
              </Paper>
            </div>
          )}

          {/* Desktop Search Bar */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <Paper
              component="form"
              onSubmit={handleSearch}
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 300,
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search here..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <IconButton type="submit" sx={{ p: "8px" }}>
                <SearchIcon />
              </IconButton>
            </Paper>
          </div>

          {/* Login/Dashboard button */}
          {/* <Link
            to={
              isLoggedIn
                ? "https://dashboard.lifelineitinstitute.com"
                : "/login"
            }
          >
            <button className="text-white text-sm lg:text-base text-center lg:px-[22px] px-[12px] py-[6px] lg:py-[11px] rounded-[10px] shadow-[0_0_10px_#000] bg-gradient-to-r from-[#f09619ee] via-[#d3c440] to-[#f9a917] bg-[length:200%_auto] transition-all duration-500 hover:bg-[position:right_center]  font-bold flex items-center gap-2">
              {isLoggedIn ? (
                <>
                  <span className="text-xl"><GiGraduateCap /></span> Dashboard
                </>
              ) : (
                "Login"
              )}
            </button>
          </Link> */}
          <ProfileIcon></ProfileIcon>

          {/* Success Stories (desktop only) */}
          <Link to="/success-story" className="hidden lg:flex">
            <button className="m-2 px-[26px] py-[12px] text-center uppercase transition-all duration-500 bg-[linear-gradient(to_right,_#249ffd_2%,_#3a7bd5_58%,_#00d2ff_100%)] bg-[length:200%_auto] text-white shadow-[0_0_15px_#000] rounded-[10px]  hover:bg-[position:right_center] hover:text-white flex items-center gap-3 font-bold">
              Success Stories <FaArrowRight />
            </button>
          </Link>

          {/* Language switch (desktop only) */}
          <div className="lg:flex items-center hidden rounded-full p-1 w-24 select-none">
            <span
              className={`text-xs font-semibold mr-1 z-10 ${
                !enabled ? "text-secondary" : "text-secondary"
              }`}
            >
              {!enabled ? "বাং" : "EN"}
            </span>
            <Switch checked={enabled} onCheckedChange={setEnabled} />
          </div>

          {/* Mobile Nav Toggle */}
          <div className="text-white text-2xl lg:hidden hover:text-blue-500" onClick={toggleNavbar}>
            <AiOutlineMenuFold />
          </div>
          {isOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setIsOpen(false)}
            />
          )}

          {/* Mobile Drawer */}
          <div
            className={`fixed z-50 top-0 right-0 h-screen pb-12 overflow-auto w-8/12 md:w-5/12  lg:hidden bg-gradient-to-b from-[#0B254C] via-[#348fd1] to-[#072043]  shadow-lg transition-transform duration-500 ease-in-out transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Drawer Header */}
            <div className="w-full flex items-center justify-between px-4">
              <Link
                to="https://lifelineitinstitute.com/"
                className="text-lg font-semibold text-sky-700 flex items-center gap-x-2"
              >
                <img src={logo} alt="" className="w-5/6 md:w-1/2" />
              </Link>
              <div className="lg:hidden flex justify-end py-6">
                <button
                  onClick={toggleNavbar}
                  className="text-gold focus:outline-none"
                >
                  <IoMdClose size={28} />
                </button>
              </div>
            </div>

            <div className="border-b border-[#9fe9ff88]"></div>

            <div className="flex-1 flex flex-col items-center justify-between gap-6 p-6">
              <ul
                onClick={() => setIsOpen(false)}
                className="flex flex-col items-center gap-6 text-base text-white font-normal font-roboto"
              >
                <Link
                  onClick={handleClick}
                  to="https://lifelineitinstitute.com/"
                  className="border border-[#9fe8ff] rounded-full px-3 py-2 text-gray-200 w-full"
                >
                  Home
                </Link>
                <Link
                  onClick={handleClick}
                  to="https://lifelineitinstitute.com/courses"
                  className="border border-[#9fe8ff] rounded-full px-3 py-2 text-gray-200 w-full"
                >
                  Courses
                </Link>
                <Link
                  onClick={handleClick}
                  to="https://lifelineitinstitute.com/certificate"
                  className="border border-[#9fe8ff] rounded-full px-4 py-2 text-gray-200 w-full"
                >
                  Certificate Verify
                </Link>
                <Link
                  onClick={handleClick}
                  to="https://lifelineitinstitute.com/success-story"
                  className="border border-[#9fe8ff] rounded-full px-4 py-2 text-gray-200 w-full"
                >
                  Success Story
                </Link>
                <Link
                  onClick={handleClick}
                  to="https://lifelineitinstitute.com/student-review"
                  className="border border-[#9fe8ff] rounded-full px-4 py-2 text-gray-200 w-full"
                >
                  Student Reviews
                </Link>
                <Link
                  onClick={handleClick}
                  to="https://lifelineitinstitute.com/about"
                  className="border border-[#9fe8ff] rounded-full px-3 py-2 text-gray-200 w-full"
                >
                  About Us
                </Link>
                <Link
                  onClick={handleClick}
                  to="https://lifelineitinstitute.com/contact"
                  className="border border-[#9fe8ff] rounded-full px-3 py-2 text-gray-200 w-full"
                >
                  Contact
                </Link>

                <Link
                  to="https://lifelineitinstitute.com/"
                  className="border border-[#9fe8ff] rounded-full px-3 py-2 text-gray-200 w-full"
                >
                  Join as a Mentor
                </Link>
                <Link
                  to="https://lifelineitinstitute.com/our-team"
                  className="border border-[#9fe8ff] rounded-full px-3 py-2 text-gray-200 w-full"
                >
                  Our Team
                </Link>
                <Link
                  to="https://lifelineitinstitute.com/"
                  // onClick={handleLogout}
                  className="border border-[#9fe8ff] rounded-full px-4 py-2 text-gray-200 w-full"
                >
                  Our Agency
                </Link>

                <HashLink
                  to="https://lifelineitinstitute.com/about#faq"
                  className="border border-[#9fe8ff] rounded-full px-4 py-2 text-gray-200 w-full"
                >
                  FAQ
                </HashLink>
              </ul>

              {/* <div
                onClick={() => setIsOpen(false)}
                className="flex flex-col items-center gap-4"
              >
                <Link to="/success-story">
                  <button className="m-2 px-[24px] py-[12px] font-bold text-center flex items-center transition-all duration-500 bg-[linear-gradient(to_right,_#fc00ff_0%,_#00dbde_51%,_#fc00ff_100%)] bg-[length:200%_auto] text-white rounded-[10px] shadow-[0_0_20px_#eee] gap-3 hover:bg-[position:right_center] hover:text-white">
                    Success Stories <FaArrowRight />
                  </button>
                </Link>
              </div> */}
            </div>
          </div>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden lg:flex">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Header;
