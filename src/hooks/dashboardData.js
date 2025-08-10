import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const dashboardData = () => {
  return useQuery({
    queryKey: ["userData"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/dashboard`,
        { withCredentials: true }
      );

      if (res.status !== 200) {
        window.location.href = import.meta.env.VITE_PUBLIC_PAGE + "/login";
      }
      console.log(res);
      return res.data;
    },
    onError: (error) => {
      console.error("Dashboard API Error:", error);
    },
  });
};
