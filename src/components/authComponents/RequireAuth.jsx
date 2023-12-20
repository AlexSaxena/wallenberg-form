import authStore from "../../../stores/authStore";

export default function RequireAuth(props) {
  const store = authStore();

  if (!store.loggedIn) {
    return <div>Not Logged in </div>;
  }
  // eslint-disable-next-line react/prop-types
  return <div>{props.children}</div>;
}
