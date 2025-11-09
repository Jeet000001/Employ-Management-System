import { useState } from "react";
import { LuEye, LuEyeClosed } from "react-icons/lu";

const Login = ({handelLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    handelLogin(email, password)
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="shadow-2xl p-10 rounded-md">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col  items-center gap-3"
        >
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            required
            className="w-64 border-2 border-blue-500 px-4 py-2 rounded-4xl text-black font-medium outline-none bg-transparent"
            type="email"
            placeholder="Enter your email"
          />

          <div className=" w-64 flex border-2 border-blue-500 rounded-4xl px-4 py-2 outline-none bg-transparent">
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type={showPassword ? "text" : "password"}
              value={password}
              required
              className=" text-black font-medium outline-none pr-2"
              placeholder="Enter your password"
            />

            <button
              className="outline-none"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <LuEye /> : <LuEyeClosed />}
            </button>
          </div>
          <button className="w-64 bg-blue-400 px-22 py-2 rounded-4xl font-bold active:scale-95 mt-3">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
