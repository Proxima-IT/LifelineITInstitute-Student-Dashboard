import React, { useEffect, useState } from "react"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Link } from "react-router-dom"
import {
  Avatar,
  Box,
  IconButton,
  ListItem,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material"
import { FaUserGraduate } from "react-icons/fa"
import { IoMdLock } from "react-icons/io"
import { FaArrowRightFromBracket, FaQ } from "react-icons/fa6"
import { GrCloudSoftware, GrResources } from "react-icons/gr"
import { SiCodementor } from "react-icons/si"
import { AiOutlineTeam } from "react-icons/ai"
import { HashLink } from "react-router-hash-link"
import axios from "axios"
import { ProfileIcon } from "./ProfileIcon"

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const [isOpen, setIsOpen] = useState(false)
  //  const toggleNavbar = () => setIsOpen(!isOpen)

  const handleClick = () => {
    // navigate("/our-courses");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100) // delay to ensure page loads
  }
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
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

  return (
    <div className="flex px-2">
      <NavigationMenu>
        <NavigationMenuList className="gap-2 text-white">
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
              onClick={handleClick}
            >
              <Link
                to="https://lifelineitinstitute.com"
                className="bg-transparent text-navmenu text-xl font-roboto"
              >
                Home
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
              onClick={handleClick}
            >
              <Link
                to="https://lifelineitinstitute.com/courses"
                className="bg-transparent text-navmenu text-xl font-roboto"
              >
                Courses
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent text-navmenu text-xl font-roboto">
              Students
            </NavigationMenuTrigger>
            <NavigationMenuContent side="bottom" align="start" sideOffset={8}>
              <ul className="grid gap-2 md:w-[100px] lg:w-[200px] w-fit ">
                <li className="flex flex-col items-start p-3 gap-2 text-lg">
                  <NavigationMenuLink asChild onClick={handleClick}>
                    <Link
                      to="https://lifelineitinstitute.com/certificate"
                      className="hover:bg-gray-100 px-3 py-2 rounded-lg"
                    >
                      Certificate Verify
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild onClick={handleClick}>
                    <Link
                      to="https://lifelineitinstitute.com/success-story"
                      className="hover:bg-gray-100 px-3 py-2 rounded-lg"
                    >
                      Success Story
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild onClick={handleClick}>
                    <Link
                      to="https://lifelineitinstitute.com/student-review"
                      className="hover:bg-gray-100 px-3 py-2 rounded-lg"
                    >
                      Student Reviews
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
              onClick={handleClick}
            >
              <Link
                to="https://lifelineitinstitute.com/about"
                className="bg-transparent text-navmenu text-xl font-roboto"
              >
                About Us
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
              onClick={handleClick}
            >
              <Link
                to="https://lifelineitinstitute.com/contact"
                className="bg-transparent text-navmenu text-xl font-roboto"
              >
                Contact
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenu>
            <NavigationMenuList className="gap-2 relative ">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-navmenu text-xl font-roboto">
                  More
                </NavigationMenuTrigger>
                <NavigationMenuContent
                  side="bottom"
                  align="start"
                  sideOffset={-20}
                >
                  <ul className="grid gap-2 md:w-[100px] lg:w-[188px] w-fit ">
                    <li className="flex flex-col items-start p-[6px] gap-2 text-[17px]">
                      <NavigationMenuLink asChild onClick={handleClick}>
                        <Link
                          to="https://lifelineitinstitute.com"
                          // onClick={handleLogout}
                          className="flex items-center gap-2 p-2 hover:bg-gray-100 transition-all duration-300 rounded-md w-full "
                        >
                          <SiCodementor /> Join as a Mentor
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild onClick={handleClick}>
                        <Link
                          to="https://lifelineitinstitute.com/our-team"
                          // onClick={handleLogout}
                          className="flex items-center gap-2 p-2 hover:bg-gray-100 transition-all duration-300 rounded-md w-full"
                        >
                          <AiOutlineTeam /> Our Team
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild onClick={handleClick}>
                        <Link
                          to="https://lifelineitinstitute.com"
                          // onClick={handleLogout}
                          className="flex items-center gap-2 p-2 hover:bg-gray-100 transition-all duration-300 rounded-md w-full"
                        >
                          <FaArrowRightFromBracket /> Our Agency
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild onClick={handleClick}>
                        <HashLink
                          to="https://lifelineitinstitute.com/about#faq"
                          className="flex items-center gap-2 p-2 hover:bg-gray-100 transition-all duration-300 rounded-md w-full"
                        >
                          <FaQ /> FAQ
                        </HashLink>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </NavigationMenuList>
      </NavigationMenu>

      
    </div>
  )
}

export default Navbar
