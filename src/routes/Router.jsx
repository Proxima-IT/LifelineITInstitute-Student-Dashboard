import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import MyDashboard from "../pages/MyDashboard";
import MyCourses from "../pages/MyCourses";
import MyOrders from "../pages/MyOrders";
import Notices from "../pages/Notices";
import Profile from "../pages/Profile";
import CourseDetails from "../pages/CourseDetails";
import Modules from "@/pages/Modules";
import Certificate from "@/pages/Certificate";
import RegistartionCard from "@/pages/RegistartionCard";
import ChangePass from "@/pages/ChangePass";
import PrivateRoute from "./PrivateRoute";
import NotFound from "@/pages/NotFound";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <MyDashboard></MyDashboard>
          </PrivateRoute>
        ),
      },
      {
        path: "/courses",
        element: (
          <PrivateRoute>
            <MyCourses></MyCourses>
          </PrivateRoute>
        ),
      },
      {
        path: "/courses/:route",
        element: (
          <PrivateRoute>
            <CourseDetails></CourseDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/courses/:route/modules",
        element: (
          <PrivateRoute>
            <Modules></Modules>
          </PrivateRoute>
        ),
      },

      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <MyOrders></MyOrders>
          </PrivateRoute>
        ),
      },
      {
        path: "/notice",
        element: (
          <PrivateRoute>
            <Notices></Notices>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/password-reset",
        element: (
          <PrivateRoute>
            <ChangePass></ChangePass>
          </PrivateRoute>
        ),
      },
      {
        path: "/certificate",
        element: (
          <PrivateRoute>
            <Certificate></Certificate>
          </PrivateRoute>
        ),
      },
      {
        path: "/registration-card",
        element: (
          <PrivateRoute>
            <RegistartionCard></RegistartionCard>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

export default Router;
