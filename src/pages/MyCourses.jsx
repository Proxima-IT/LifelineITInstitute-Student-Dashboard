import React from "react"
import { BsArrowRight } from "react-icons/bs"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import useCourses from "@/hooks/useCourses"

const MyCourses = () => {
  const { courses, isLoading, error } = useCourses()

  console.log(courses, isLoading, error)

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

                <div className="p-4">
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
                    <button className="flex w-full items-center justify-center text-blue-600 font-bold hover:underline">
                      Details
                      <BsArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default MyCourses
