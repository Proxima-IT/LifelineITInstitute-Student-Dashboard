import React from "react";
import { Helmet } from "react-helmet-async";

const MyOrders = () => {
  return (
    <div>
      <Helmet>
        <title>My Orders — Lifeline IT</title>
      </Helmet>
      <div className="container p-2 mx-auto sm:p-4 ">
        <h2 className="mb-4 text-2xl text-left font-semibold leading-tight">
          My Orders
        </h2>
        <div className="overflow-x-auto mb-5">
          <table className="min-w-full text-center">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col />
            </colgroup>
            <thead className="">
              <tr className="text-center lg:text-base text-sm ">
                <th className="p-3">No</th>
                <th className="p-3">Date</th>
                <th className="p-3">Total</th>
                <th className="p-3">Paid</th>
                <th className="p-3 ">Due</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-opacity-20 text-center border-gray-700 ">
                <td className="p-3">
                  <p>SRDON908</p>
                </td>
                <td className="p-3">
                  <p>14,Jan,2022</p>
                </td>
                <td className="p-3">
                  <p>4300.00</p>
                </td>
                <td className="p-3">
                  <p>4400.00</p>
                </td>
                <td className="p-3 ">
                  <p>0.00</p>
                </td>
                <td className="p-3 ">
                  <span className="px-3 py-1 font-semibold rounded-md bg-violet-400 text-white">
                    <span>View</span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
