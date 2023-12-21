import { useEffect } from "react";
import authStore from "../../stores/authStore";
import Header from "../components/Header";

export default function LogoutPage() {
  const store = authStore();
  useEffect(() => {
    store.logout();
    console.log("User Logged out");
  }, []);

  return (
    <div>
      <Header />
      <div>Du är nu utloggad</div>
    </div>
  );
}
