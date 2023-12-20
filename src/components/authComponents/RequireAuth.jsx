import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import authStore from "../../../stores/authStore";

export default function RequireAuth(props) {
  const store = authStore();

  useEffect(() => {
    if (store.loggedIn === null) {
      store.checkAuth();
    }
  }, []);

  if (store.loggedIn === null) {
    return <div>Sidan Laddas, Vänligen Vänta</div>;
  }

  if (store.loggedIn === false) {
    return <Navigate to={"/login"} />;
  }
  // eslint-disable-next-line react/prop-types
  return <div>{props.children}</div>;
}
