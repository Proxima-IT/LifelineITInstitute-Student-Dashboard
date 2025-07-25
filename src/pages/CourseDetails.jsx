import React, { useEffect, useState } from "react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Plus } from "lucide-react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import useCourseDetails from "@/hooks/useCourseDetails"
import { Helmet } from "react-helmet-async"
import { dashboardData } from "@/hooks/dashboardData"
import useCourses from "@/hooks/useCourses"

const CourseDetails = () => {
  const { route } = useParams()
  console.log(route)

  // const [instructor, setInstructor] = useState([])
  const { data } = dashboardData()
  const { course, loading } = useCourseDetails(route)
  console.log(data)
  // setInstructor(course.instructors)
  const instructors = course?.instructors
  console.log(instructors)
  const liveSupport = course?.links[0].fb
  const liveClasses = course?.links[0].zoom
  console.log(course)
  if (loading)
    return <p className="text-center mt-10">Loading course details...</p>
  return (
    <>
      <Helmet>
        <title>Course Details — Lifeline IT</title>
      </Helmet>

      <div className="text-left space-y-5">
        <h2 className="mb-4 text-2xl text-left font-semibold leading-tight">
          Course Details
        </h2>

        <div>
          {/* <h1 className="font-bold text-lg">Course & Batch</h1> */}
          <p className="text-2xl font-bold text-[#0B254C] mb-4 ">
            {course.title}
          </p>
          <p className="text-lg font-bold text-[#0B254C]">{course.subtitle}</p>
        </div>

        <h1 className="font-bold text-lg">Instructor</h1>
        <div className="grid grid-cols-3 gap-4">
          {instructors.map((instructor) => (
            <div
              key={instructor}
              className="relative group w-64 bg-white p-4 rounded-2xl shadow-md text-center transition"
            >
              {/* Profile Picture */}
              <img
                src={instructor.image}
                alt="Instructor"
                className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-blue-200 shadow"
              />

              {/* Name & Designation */}
              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                {instructor.name}
              </h3>
              <p className="text-sm text-gray-500">Frontend Mentor</p>

              {/* Floating Pop-up Below the Card */}
              <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 w-60 bg-white text-gray-700 text-sm shadow-lg p-3 rounded-lg opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 z-20">
                <p>{instructor.about}</p>
              </div>
            </div>
          ))}
        </div>

        <h1 className="font-bold text-lg pt-5">Facebook live Support</h1>

        <Accordion type="single" collapsible className="w-full  p-1 mx-auto">
          {liveSupport.map((zoom) => (
            <AccordionItem value={zoom} key={zoom}>
              <AccordionTrigger className="flex justify-between items-center text-left text-lg font-medium ">
                {zoom.title}
              </AccordionTrigger>
              <AccordionContent className="text-blue-800 font-bold text-base px-1 pb-4 transition-all duration-300 ease-in-out">
                <Link to={zoom.link} target="blank">
                  {zoom.link}
                </Link>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <h1 className="font-bold text-lg pt-5">Zoom live Class Link</h1>
        <Accordion type="single" collapsible className="w-full p-1 mx-auto">
          {liveClasses.map((liveClass) => (
            <AccordionItem value={liveClass} key={liveClass}>
              <AccordionTrigger className="text-left text-lg font-medium py-4">
                {liveClass.title}
              </AccordionTrigger>
              <AccordionContent className="text-blue-800 font-bold text-base px-1 pb-4 transition-all duration-300 ease-in-out">
                <Link to={liveClass.link} target="blank">
                  {liveClass.link}
                </Link>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <h1 className="font-bold text-lg pb-4">Course Modules</h1>
        <Link to={`/courses/${course.route}/modules`}>
          <button className="bg-[#0B254C] px-4 py-2 rounded-lg text-white">
            Modules
          </button>
        </Link>
      </div>
    </>
  )
}

export default CourseDetails
