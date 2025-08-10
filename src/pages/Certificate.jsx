import { dashboardData } from "@/hooks/dashboardData";
import useCourses from "@/hooks/useCourses";
import axios from "axios";
import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { FaDownload } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { VscGitStashApply } from "react-icons/vsc";
import { toast, ToastContainer } from "react-toastify";

const Certificate = () => {
  const [btnloading, setBtnloading] = useState(null);
  const { data, isLoading, error } = dashboardData();
  const [driveLink, setDriveLink] = useState("");

  const { courses } = useCourses();
  console.log(courses);

  const downloadRef = useRef({});

  const handleDownload = async (id, courseTitle) => {
    setBtnloading(id);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/dashboard/certificate`,
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
        "-certificate.pdf";
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

  const handleApply = async (id) => {
    const applyData = {
      sid: data.sid,
      courseId: id,
      driveLink,
    };
    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/dashboard/certificate/apply`,
      applyData
    );
    if (res.status === 201) {
      toast.success(` Certificate Request Applied successfully`, {
        position: "top-center",
        autoClose: 3000,
        closeOnClick: true,
        draggable: false,
        theme: "dark",
      });
    }
    else{
       toast.error(` Certificate Already Applied`, {
        position: "top-center",
        autoClose: 3000,
        closeOnClick: true,
        draggable: false,
        theme: "dark",
      });
    }
    console.log(res);
  };
  return (
    <div>
      <Helmet>
        <title>My Dashboard — Lifeline IT</title>
      </Helmet>
      <h1 className="text-2xl font-bold text-blue-700 mb-4">
        Download Certificate
      </h1>

      <div className="overflow-x-auto shadow-xl ">
        <table className="w-full text-left border-separate border-spacing-y-4">
          <thead className=" bg-gradient-to-l from-[#0B254C] via-[#266ea1] to-[#041630] text-white ">
            <tr className="text-center text-base ">
              <th className="p-3 text-left">Course Name</th>

              <th className="p-3">Action</th>
            </tr>
          </thead>
          {courses.length !== 0 && (
            <tbody className="pt-10">
              {courses.map((course) => (
                <tr
                  key={course._id}
                  className=" border-b font-bold border-gray-300 pt-3"
                >
                  <td className="p-3 text-left mt-10 border-b border-gray-300">
                    <p className="text-[#0B254C]">{course.title}</p>
                  </td>
                  {/* download btn  */}
                  <td className="w-1/4 pr-4 border-b border-gray-300">
                    {!course.canIssue ? (
                      <Dialog>
                        <form>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full flex mx-auto justify-center py-2 px-2 font-semibold rounded-md bg-gradient-to-l from-[#0B254C] via-[#266ea1] to-[#041630] text-white cursor-pointer hover:text-[#ffa800] text-base"
                            >
                              {" "}
                              <VscGitStashApply />
                              Apply
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="w-[94%]  py-3 rounded-md">
                            <DialogHeader>
                              <DialogTitle className="text-center text-2xl font-roboto mt-4">
                                Assignment Submission
                              </DialogTitle>
                              <DialogDescription>
                                <span className="font-bold text-black">
                                  Note:{" "}
                                </span>
                                <span className="text-[#FF2C2C]">
                                  When applying for a certificate, you must
                                  compile all homework and assignments given
                                  during the course into a single folder, upload
                                  it to Google Drive, paste the shared link
                                  here, and then click the Submit button.
                                </span>
                              </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4">
                              <div className="grid gap-3">
                                <Label htmlFor="drive">Drive Link</Label>
                                <Input
                                  id="drive"
                                  name="name"
                                  value={driveLink}
                                  onChange={(e) => setDriveLink(e.target.value)}
                                  placeholder="Enter your drive link"
                                />
                              </div>
                            </div>
                            <DialogFooter>
                              <DialogClose asChild>
                                <Button variant="outline">Cancel</Button>
                              </DialogClose>
                              <Button
                                type="submit"
                                className="mb-2"
                                onClick={() => {
                                  handleApply(course._id);
                                }}
                              >
                                Submit
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </form>
                      </Dialog>
                    ) : (
                      <button
                        onClick={() => {
                          if (downloadRef.current[course._id]) return; // already downloading
                          downloadRef.current[course._id] = true; // mark as downloading
                          handleDownload(course._id, course.title).finally(
                            () => {
                              downloadRef.current[course._id] = false; // mark as done
                            }
                          );
                        }}
                        disabled={btnloading === course._id}
                        className={`w-full flex mx-auto justify-center py-2 px-2 font-semibold rounded-md bg-gradient-to-l from-[#0B254C] via-[#266ea1] to-[#041630] text-white cursor-pointer ${
                          btnloading === course._id
                            ? "opacity-80 cursor-not-allowed"
                            : ""
                        }`}
                      >
                        <span
                          className={`flex items-center gap-3 ${
                            btnloading === course._id && "hidden"
                          }`}
                        >
                          <span className="flex gap-3 items-center hover:text-[#ffa800]">
                            <FaDownload /> Download
                          </span>
                        </span>

                        {btnloading === course._id && (
                          <div className="w-6 h-6 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
                        )}
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
        {courses.length === 0 && (
          <h1 className="text-xl text-blue-900 font-bold  flex justify-center mx-auto">
            No course found
          </h1>
        )}
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Certificate;
