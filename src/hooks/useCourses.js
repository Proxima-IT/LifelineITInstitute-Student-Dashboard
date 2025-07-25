import React, { useEffect, useState } from "react"
import { dashboardData } from "./dashboardData"
import axios from "axios"

const useCourses = () => {
  const { data, isLoading, error, refetch } = dashboardData()

  const [approvedCourse, setApprovedCourse] = useState([])
  const [courses, setCourses] = useState([])

  console.log(data?.courseStatus.approvedCourses)

  useEffect(() => {
    const fetchCourses = async () => {
      if (data && data.courseStatus?.approvedCourses) {
        const approved = data.courseStatus.approvedCourses
        console.log(approved)
        setApprovedCourse(approved)

        const allCourses = []

        console.log(approved.courseId)
        for (const appcourse of approved) {
          try {
            const res = await axios.get(
              `${import.meta.env.VITE_API_URL}/api/courses/id/${
                appcourse.courseId
              }`
            )
            console.log(res.data)
            allCourses.push(res.data)
          } catch (error) {
            console.error("Error fetching a course:", error)
          }
        }

        setCourses(allCourses)
      }
    }

    fetchCourses()
  }, [data])
  return { courses, isLoading, error }
}

export default useCourses
