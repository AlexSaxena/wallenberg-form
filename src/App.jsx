import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewStudentForm from "./pages/NewStudentForm";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import StudentSortingPage from "./pages/StudentSortingPage";
import RequireAuth from "./components/authComponents/requireAuth";
import LogoutPage from "./pages/LogoutPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/hem" element={<Home />} />
          <Route path="/studentform" element={<NewStudentForm />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route
            path="/studenter"
            element={
              <RequireAuth>
                <StudentSortingPage />
              </RequireAuth>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
