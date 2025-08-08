// import React from 'react';

// const BackupHeader = () => {
//     return (
//         <div>
//              <header className="sticky top-0 z-50 bg-white shadow">
//         <div className="max-w-screen-xl mx-auto flex justify-between items-center bg-[#0B254C] h-16 px-4">
//           <Link
//             to={`${import.meta.env.VITE_PUBLIC_PAGE}`}
//             className="w-1/2 md:w-1/4"
//           >
//             <img
//               src={logo}
//               alt="SR DREAM IT Logo"
//               className="w-full lg:w-1/2"
//             />
//           </Link>

//           <div
//             className="text-[#f2f3f5] text-2xl lg:hidden flex justify-end"
//             onClick={toggleNavbar}
//           >
//             <AiOutlineMenuUnfold />
//           </div>
//           {isOpen && (
//             <div
//               className="fixed inset-0 bg-black bg-opacity-50 z-40"
//               onClick={() => setIsOpen(false)}
//             />
//           )}

//           {/* Mobile Drawer */}
//           <div
//             className={`fixed z-50 bottom-0 right-0 h-[80vh] overflow-auto lg:hidden w-full bg-blue-50 border-l border-neutral-300 shadow-lg transition-transform duration-500 ease-in-out transform ${
//               isOpen ? "translate-y-0" : "translate-y-full"
//             }`}
//           >
            

//             <div className="flex-1 flex flex-col  items-center justify-between gap-6 p-6">
//               <ul
//                 onClick={() => setIsOpen(false)}
//                 className="flex flex-col items-start justify-center gap-6 text-base  font-normal font-roboto"
//               >
//                 <li>
//                   <NavLink
//                     to="/dashboard"
//                     onClick={handleClick}
//                     className="flex  items-center gap-2 hover:bg-gray-100 p-2 rounded-md"
//                   >
//                     <FiHome /> My Dashboard
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink
//                     to="/orders"
//                     onClick={handleClick}
//                     className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md"
//                   >
//                     <MdOutlineShoppingCart /> My Orders
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink
//                     to="/courses"
//                     onClick={handleClick}
//                     className="flex items-center gap-2 p-2 rounded-md"
//                   >
//                     <RiGraduationCapFill /> My Courses
//                   </NavLink>
//                 </li>

//                 <li>
//                   <NavLink
//                     to="/notice"
//                     onClick={handleClick}
//                     className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md"
//                   >
//                     <MdOutlineInsertComment /> Notice Board
//                     <span className="ml-auto text-xs bg-red-300 text-red-900 font-bold px-2 py-0.5 rounded-full">
//                       {notices?.length}
//                     </span>
//                   </NavLink>
//                 </li>

//                 <li>
//                   <NavLink
//                     to="/registration-card"
//                     onClick={handleClick}
//                     className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md"
//                   >
//                     <IoNewspaperOutline /> Registration Card
//                   </NavLink>
//                 </li>

//                 <li>
//                   <NavLink
//                     to="/certificate"
//                     onClick={handleClick}
//                     className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md"
//                   >
//                     <GrCertificate /> My Certificate
//                   </NavLink>
//                 </li>

//                 <h3 className="text-left -ml-4  text-gray-800">User</h3>
//                 <li>
//                   <NavLink
//                     to="/profile"
//                     onClick={handleClick}
//                     className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md"
//                   >
//                     <FaUserGraduate /> My Profile
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink
//                     to="/password-reset"
//                     onClick={handleClick}
//                     className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md"
//                   >
//                     <IoMdLock /> Change Password
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink
//                     to="/"
//                     onClick={handleLogout}
//                     className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md"
//                   >
//                     <FaArrowRightFromBracket /> Logout
//                   </NavLink>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <nav className="hidden md:flex items-center justify-evenly text-white space-x-4 text-sm">
           
//             <Link to="https://lifelineitinstitute.com/">Home</Link>
//             <Link to="https://lifelineitinstitute.com/about">About Us</Link>
//             <Link to="https://lifelineitinstitute.com/courses">Courses</Link>

//             <Link to="https://lifelineitinstitute.com/success-story">
//               Success Story
//             </Link>
//             <Link to="https://lifelineitinstitute.com/student-review">
//               Student Reviews
//             </Link>
           
//             <Link to="https://lifelineitinstitute.com/contact">Contact Us</Link>

//              <ProfileIcon></ProfileIcon>

//             <Box sx={{ flexGrow: 0 }} className="border-2 border-white rounded-full">
//               <Tooltip title="My Profile" className="bg-white text-black">
//                 <IconButton
//                   onClick={handleOpenUserMenu}
//                   sx={{ p: 0 }}
//                   className="border-2 border-blue-700 "
//                 >
//                   <Avatar alt="" src={data?.image} />
//                 </IconButton>
//               </Tooltip>
//               <Menu
//                 sx={{ mt: "45px" }}
//                 id="menu-appbar"
//                 anchorEl={anchorElUser}
//                 anchorOrigin={{
//                   vertical: "top",
//                   horizontal: "right",
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: "top",
//                   horizontal: "right",
//                 }}
//                 open={Boolean(anchorElUser)}
//                 onClose={handleCloseUserMenu}
//               >
//                 <MenuItem
//                   onClick={handleCloseUserMenu}
//                   sx={{
//                     "&:hover": {
//                       backgroundColor: "transparent", // removes hover background
//                     },
//                     padding: 1.5,
//                     // optional: remove default padding if needed
//                   }}
//                 >
//                   <Typography sx={{ textAlign: "center" }}>
//                     <Link
//                       to="/profile"
//                       className="flex items-center gap-2 hover:bg-gray-100 transition-all duration-300 p-2 rounded-md pb-2"
//                     >
//                       <FaUserGraduate /> My Profile
//                     </Link>

//                     <Link
//                       to="/password-reset"
//                       className="flex items-center gap-2 hover:bg-gray-100 transition-all duration-300  p-2 rounded-md "
//                     >
//                       <IoMdLock /> Change Password
//                     </Link>

//                     <Link
//                       to="/"
//                       onClick={handleLogout}
//                       className="flex items-center gap-2 p-2 hover:bg-gray-100 transition-all duration-300 rounded-md"
//                     >
//                       <FaArrowRightFromBracket /> Logout
//                     </Link>
//                   </Typography>
//                 </MenuItem>
//               </Menu>
//             </Box>
           
//           </nav>
//         </div>
//       </header>
//         </div>
//     );
// };

// export default BackupHeader;