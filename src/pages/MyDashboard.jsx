import React from "react"

import { MdOutlineDone, MdOutlineShoppingCart } from "react-icons/md"
import { FaBorderAll } from "react-icons/fa"
import { dashboardData } from "@/hooks/dashboardData"
import { Helmet } from "react-helmet-async"

const MyDashboard = () => {
  const { data, isLoading, error } = dashboardData()

  console.log(data, isLoading, error)
  return (
    <>
      <Helmet>
        <title>My Dashboard — Lifeline IT</title>
      </Helmet>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
        <div className="bg-[#1B3E69] cursor-pointer rounded-xl p-5 space-y-4 flex flex-col items-center h-fit hover:scale-105 transition-all duration-1000">
          <div className="bg-gray-300 rounded-full p-4">
            <MdOutlineShoppingCart />
          </div>
          <h2 className="font-bold text-2xl text-white">
            {data?.totalOrders?.length}
          </h2>
          <h3 className="text-xl uppercase text-gray-50">Total Orders</h3>
        </div>
        <div className=" bg-[#37abd8] cursor-pointer rounded-xl p-5 space-y-4 flex flex-col items-center h-fit hover:scale-105 transition-all duration-1000">
          <div className="bg-gray-300 rounded-full p-4">
            <FaBorderAll />
          </div>
          <h2 className="font-bold text-2xl text-white">
            {data?.courseStatus.approvedCourses.length}
          </h2>
          <h3 className="text-xl uppercase text-gray-50"> Total Courses</h3>
        </div>
        <div className="bg-[#F7931E] cursor-pointer rounded-xl p-5 space-y-4 flex flex-col items-center h-fit hover:scale-105 transition-all duration-1000">
          <div className="bg-gray-300 rounded-full p-4">
            <MdOutlineDone />
          </div>
          <h2 className="font-bold text-2xl text-white">
            {data?.totalPaid || 0}
          </h2>
          <h3 className="text-xl uppercase text-gray-50">Verified Paid</h3>
        </div>
      </div>
    </>
  )
}

export default MyDashboard
