import { dashboardData } from "@/hooks/dashboardData";
import useCourses from "@/hooks/useCourses";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaDownload } from "react-icons/fa";

const RegistartionCard = () => {
  const [btnloading, setBtnloading] = useState(null);
  const { data, isLoading, error, refetch } = dashboardData();

  console.log(data, isLoading, error)

  const { courses } = useCourses()

  console.log(courses)

  const handleDownload = async (id, courseTitle) => {
    setBtnloading(id);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/dashboard/registration`,
        { studentId: data.id, courseId: id },
        {
          headers: {
            "Content-Type": "application/json",
          },
          responseType: "blob",
        }
      );

      const url = window.URL.createObjectURL(new Blob([res.data]));
      const a = document.createElement("a");
      a.href = url;
      a.download =
        data.name.split(" ").join("_") +
        "-" +
        courseTitle.split(" ").join("_") +
        "-registration-card.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
    } finally {
      setBtnloading(null);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Registration Card — Lifeline IT</title>
      </Helmet>
      <h1 className="text-2xl font-bold text-blue-700 mb-4">
        Download Registration Card
      </h1>

      {/* {courses.map((course) => (
        
      ))} */}

      <div className="overflow-x-auto shadow-xl ">
        <table className="w-full text-left border-separate border-spacing-y-4">
          {/* <colgroup>
            <col />

            <col className="" />
          </colgroup> */}
          <thead className=" bg-gradient-to-l from-[#0B254C] via-[#266ea1] to-[#041630] text-white ">
            <tr className="text-center text-base ">
              <th className="p-3 text-left">Course Name</th>

              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody className="pt-10">
            {courses.map((course) => (
              <tr
                key={course._id}
                className=" border-b font-bold border-gray-300 pt-3"
              >
                <td className="p-3 text-left mt-10 border-b border-gray-300">
                  <p className="text-[#0B254C]">{course.title}</p>
                </td>

                <td className="w-1/4 pr-4 border-b border-gray-300">
                  <button
                    onClick={() => {
                      handleDownload(course._id, course.title)
                    }}
                    className={`w-full flex mx-auto  justify-center py-2 px-2 font-semibold rounded-md bg-gradient-to-l from-[#0B254C] via-[#266ea1] to-[#041630] text-white cursor-pointer`}
                  >
                    <span
                      className={`flex items-center gap-3 ${
                        btnloading === course._id && "hidden"
                      }`}
                    >
                      Download <FaDownload />
                    </span>

                    {btnloading === course._id && (
                      <div className="w-6 h-6 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RegistartionCard
