// hooks/useCourseDetails.js
import { useEffect, useState } from "react";
import axios from "axios";

const useCourseDetails = (courseRoute) => {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!courseRoute) return;

    const fetchCourse = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/courses/${courseRoute}`
        );
        setCourse(res.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [courseRoute]);

  return { course, loading, error };
};

export default useCourseDetails;
