import useNotice from "@/hooks/useNotice";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Notices = () => {
  const { notices, loading, error } = useNotice();
  return (
    <>
      <Helmet>
        <title>Notice — Lifeline IT</title>
      </Helmet>

      <div className="space-y-4 font-baloo mb-5">
        <h2 className="mb-4 text-2xl text-left font-semibold leading-tight">
          Notices
        </h2>
        {notices.length > 0 ? (
          notices.map((notice) => (
            <div className="w-full rounded-xl p-4 shadow-lg text-left space-y-3">
              <img src={notice.image} alt="" className="w-full " />
              <h2 className="italic text-sm">Date: 12, July, 2025</h2>
              <h1 className="font-bold text-2xl">{notice.title}</h1>
              <p>{notice.description}</p>
            </div>
          ))
        ) : (
          <div className="bg-blue-50 rounded-lg p-4 min-h-28">
            <p className="text-3xl font-bold text-[#b96c16]">No Notices Found</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Notices;
