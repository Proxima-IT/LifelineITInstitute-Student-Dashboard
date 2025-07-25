import axios from "axios";
import React, { useEffect, useState } from "react";

const useNotice = () => {
  const [notices, setNotices] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/dashboard/notices`
        );
        setNotices(res.data);
        // console.log(res.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, []);
  return { notices, loading, error };
};

export default useNotice;
