import Header from "../components/Header";
import LoginForm from "../components/authComponents/LoginForm";

export default function Login() {
  return (
    <div className="w-screen h-screen flex flex-col items-center bg-gray-200">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <LoginForm />
      </div>
    </div>
  );
}
