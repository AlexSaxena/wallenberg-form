import { useEffect } from "react";
import authStore from "../../stores/authStore";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

export default function LogoutPage() {
  const store = authStore();
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await store.logout();
        console.log("User Logged out");
        // Waits 2 seconds then navigates the user to home
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } catch (error) {
        console.error("Logout error:", error);
      }
    };

    handleLogout();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-2xl font-bold mb-4">Du är nu utloggad!</p>
        </div>
      </div>
    </div>
  );
}
