import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useCourses from "@/hooks/useCourses";
import { FaArrowRight } from "react-icons/fa";

const MyCourses = () => {
  const { courses, isLoading, error } = useCourses();

  console.log(courses, isLoading, error);

  return (
    <div>
      <Helmet>
        <title>My Courses — Lifeline IT</title>
      </Helmet>
      {/* <!-- Main Content --> */}
      <main class="flex-1">
        <div class="">
          <h2 class="text-2xl font-bold mb-4 text-left text-blue-700">
            My Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
            {courses.map((course) => (
              <div
                key={course._id}
                className="w-full xl:max-w-lg h-full rounded-xl overflow-hidden shadow-md bg-white relative border border-[#f09619e2] hover:shadow-lg hover:scale-[1.02] transition duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div className="h-2 bg-gradient-to-r from-[#F09819] via-[#EDDE5D] to-[#F09819]"></div>
                <img
                  src={course.thumbnail}
                  alt=""
                  className="w-full h-40 object-cover"
                />

                <div className="p-4 flex flex-col items-center">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {course.title}
                  </h2>
                  <p className="text-sm text-gray-500 mb-4">
                    Total Class: {course.totalClasses}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    Duration: {course.duration}
                  </p>

                  <Link to={`/courses/${course.route}`}>
                    <button className="m-2 px-[22px] py-[8px] text-center uppercase transition-all duration-500 bg-[linear-gradient(to_right,_#249ffd_2%,_#3a7bd5_58%,_#00d2ff_100%)] bg-[length:200%_auto] text-white shadow-[0_0_15px_#fff] rounded-[10px]  hover:bg-[position:right_center] hover:text-white flex items-center  gap-3 font-bold">
                      Open <FaArrowRight />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyCourses;
