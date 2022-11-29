import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Link,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import ForgetPassword from "./ForgetPassword";
import useToken from "./../../hooks/useToken";
import toast from "react-hot-toast";
import Loading from "../SharedSections/Loading/Loading";
import { useQuery } from "@tanstack/react-query";
const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { signIn, googleSignIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from.pathname || "/";

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      const data = await res.json();
      return data;
    },
  });

  if (token) {
    navigate(from, { replace: true });
  }

  const handleLogin = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        setLoginUserEmail(data.email);
        setLoginError("");
      })
      .catch((e) => {
        console.error(e);
        setLoginError(e.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user.email);
        setLoginUserEmail(user.email);
        setLoginError("");
        toast.success("Google sign in successfully");
        const checkEmail = users.find((us) => user.email === us.email);
        if (!checkEmail) {
          const userInfo = {
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
            status: "Member",
          };
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userInfo),
          })
            .then((res) => res.json())
            .then((data) => {});
        }
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  return (
    <div className=" my-32">
      <div className=" w-2/5 p-7 mx-auto shadow-lg rounded-lg">
        <h2 className="text-2xl text-center mb-9">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            {...register("email", { required: "Email Address is required" })}
            aria-invalid={errors.email ? "true" : "false"}
            type="email"
            className="input input-bordered w-full"
          />
          {errors.email && (
            <p className=" text-error">{errors.email?.message}</p>
          )}
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            {...register("password", {
              required: "Password is required",
            })}
            type="password"
            className="input input-bordered w-full"
          />
          {errors.password && (
            <p className=" text-error">{errors.password?.message}</p>
          )}
          <label className="label cursor-pointer" htmlFor="forget-password">
            <span className="label-text-alt">Forget password?</span>
          </label>
          <input type="submit" className="w-full btn" value="LOGIN" />
          {loginError && <small className="text-error">{loginError}</small>}
        </form>
        <p className=" text-center text-xs pt-3">
          New to Doctor's Portal?
          <Link to="/register" className="pl-1 text-secondary">
            Create new account
          </Link>
        </p>
        <div className=" divider">OR</div>
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-ghost btn-outline uppercase w-full"
        >
          Continue With google
        </button>
      </div>
      <ForgetPassword></ForgetPassword>
    </div>
  );
};

export default Login;
