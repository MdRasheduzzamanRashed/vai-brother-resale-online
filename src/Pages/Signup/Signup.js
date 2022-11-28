import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Link,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-hot-toast";
import { GoogleAuthProvider } from "firebase/auth";
import useToken from "./../../hooks/useToken";

const Signup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const { createUser, updateUser, googleSignIn } = useContext(AuthContext);
  const users = useLoaderData();
  const googleProvider = new GoogleAuthProvider();
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  const location = useLocation();
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const from = location.state?.from.pathname || "/";

  if (token) {
    navigate("/");
  }

  const handleSignup = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        // console.log(imgData);
        if (imgData.success) {
          const image = { image: imgData.data.url };
          createUser(data.email, data.password)
            .then((result) => {
              const user = result.user;
              toast.success("User create successfully");
              const userInfo = {
                displayName: data.name,
                photoURL: image.image,
              };
              updateUser(userInfo)
                .then(() => {
                  saveUser(data.name, data.email, image.image);
                })
                .catch((e) => {
                  toast.error(e.message);
                });
              console.log(userInfo);
            })
            .catch((e) => {
              toast.error(e.message);
            });
        }
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        toast.success("Google sign in successfully");
        navigate(from, { replace: true });
        saveUser(user.displayName, user.email, user.photoURL);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  const saveUser = (name, email, image) => {
    const user = { name, email, image, status: "Member" };

    fetch(
      "https://b612-used-products-resale-server-side-md-rasheduzzaman-rashed.vercel.app/users",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email);
        navigate(from, { replace: true });
      });
  };

  return (
    <div className=" my-60">
      <div className=" w-96 p-7 mx-auto shadow-lg rounded-lg">
        <h2 className="text-2xl text-center mb-9">Register Now</h2>
        <form onSubmit={handleSubmit(handleSignup)}>
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            className="input input-bordered w-full"
          />
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
              minLength: {
                value: 8,
                message: "Password must be 8 characters or longer.",
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Password must be strong with character, number, symbol",
              },
            })}
            type="password"
            className="input input-bordered w-full"
          />
          {errors.password && (
            <p className=" text-error">{errors.password?.message}</p>
          )}
          <label className="label">
            <span className="label-text-alt">Forget password?</span>
          </label>
          <label className="label">
            <span className="label-text">Upload Profile Picture</span>
          </label>
          <input
            {...register("image", { required: "Photo is required" })}
            type="file"
            className="mb-2 w-full"
          />
          <input type="submit" className="w-full btn" value="SIGN UP" />
        </form>
        <p className=" text-center text-xs pt-3">
          Already have an account?
          <Link to="/login" className="pl-1 text-secondary">
            Login
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
    </div>
  );
};

export default Signup;
