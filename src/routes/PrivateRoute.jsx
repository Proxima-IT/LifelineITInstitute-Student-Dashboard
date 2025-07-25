// src/components/PrivateRoute.jsx
import { Navigate, useNavigate } from "react-router-dom"
import { dashboardData } from "@/hooks/dashboardData"
import { useEffect, useState } from "react"

const PrivateRoute = ({ children }) => {
  const { data, isLoading, error } = dashboardData()
  const [isLoggedIn, setIsLoggedIn] = useState(null) // null = loading, true = logged in, false = not

  const navigate = useNavigate()

  useEffect(() => {
    if (data?.status != false) {
      setIsLoggedIn(true)
    } else if (!isLoading && !error) {
      setIsLoggedIn(false)
    }
  }, [data, isLoading, error])

  console.log(isLoading, isLoggedIn, error)

  // Show loading while checking login
  if (isLoggedIn === null || isLoading) {
    return <div>Loading...</div>
  }

  // Redirect if not logged in
  if (!isLoggedIn) {
    console.log("User is not logged in, redirecting to login page")
    // window.location.href = import.meta.env.VITE_PUBLIC_PAGE + "/login"
    // window.location.href = "http://localhost:5173/login";
    // window.location.href = "http://localhost:5174/login";
  }

  // Render children if logged in
  return children
}

export default PrivateRoute
