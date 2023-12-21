import Header from "../components/Header";
import RegisterForm from "../components/authComponents/RegisterForm";

export default function Register() {
  return (
    <div className="w-screen h-screen flex flex-col items-center bg-gray-200">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <RegisterForm />
      </div>
    </div>
  );
}
