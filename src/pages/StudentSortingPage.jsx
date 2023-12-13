import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";

const StudentSortingPage = () => {
  const [students, setstudents] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    // Fetch Students
    const res = await axios.get("http://localhost:3001/showStudents");
    console.log(res.data.showStudents);
    // Set State of Students

    setstudents(res.data.showStudents);
  };

  const deleteStudent = async (_id) => {
    console.log("Deleted");
    // Delete the selected Student
    const res = await axios.delete(`http://localhost:3001/showStudents/${_id}`);
    console.log(res);

    // Update State
    const newStudents = [...students].filter((student) => {
      return student._id !== _id;
    });

    setstudents(newStudents);
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center bg-gray-200">
      <Header />
      <h1>Sorting Page</h1>
      <h2>Page for finding students by querying API</h2>
      <div>
        <h2>All Students</h2>
        {students &&
          students.map((student) => {
            return (
              <div key={student._id}>
                {student.name} {student.city}
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-red"
                  type="button"
                  onClick={() => deleteStudent(student._id)}
                >
                  Delete
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default StudentSortingPage;
