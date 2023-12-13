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

  return (
    <div className="w-screen h-screen flex flex-col items-center bg-gray-200">
      <Header />
      <h1>Sorting Page</h1>
      <h2>Page for finding students by querying API</h2>
      <div>
        <h2>All Students</h2>
        {students &&
          students.map((student) => {
            return <p key={student._id}>{student.name}</p>;
          })}
      </div>
    </div>
  );
};

export default StudentSortingPage;
