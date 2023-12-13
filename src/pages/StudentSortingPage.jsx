import { useState } from "react";
import axios from "axios";
import Header from "../components/Header";

const StudentSortingPage = () => {
  const [students, setstudents] = useState(null);

  const fetchStudents = () => {
    // Fetch Students
    // Set State of Students
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center bg-gray-200">
      <Header />
      <h1>Sorting Page</h1>
      <h2>Page for finding students by querying API</h2>
    </div>
  );
};

export default StudentSortingPage;
