import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-hot-toast";

const ForgetPassword = () => {
  const { forgetPassword } = useContext(AuthContext);
  const handleReset = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    forgetPassword(email)
      .then(() => {
        toast("Password reset email sent!");
      })
      .catch((e) => console.error(e));
    console.log(email);
  };

  return (
    <>
      <input type="checkbox" id="forget-password" className="modal-toggle" />
      <div className="modal modal-middle">
        <div className="modal-box">
          <label
            htmlFor="forget-password"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">Reset your password</h3>
          <form onSubmit={handleReset}>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="input input-bordered w-full mt-3"
            />
            <div className="modal-action">
              <input
                htmlFor="forget-password"
                value="send reset email"
                className="btn"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
