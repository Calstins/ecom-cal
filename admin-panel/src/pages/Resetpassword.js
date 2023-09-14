import React from "react";
import CustomInput from "../components/CustomInput";

const Resetpassword = () => {
  return (
    <div className="py-5 d-flex" style={{ background: "#232f3e", minHeight: "100vh" }}>
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4 justify-content-center align-items-center">
        <h3 className="text-center title"> Reset Password</h3>
        <p className="text-center">Please Enter your new password.</p>
        <form action="">
          <CustomInput type="password" label="New Password" id="pass" />
          <CustomInput
            type="password"
            label="Confirm Password"
            id="confirmpass"
          />

          <button
            className="border-0 rounded-3 px-3 py-2 mt-3 text-white fw-bold w-100"
            style={{ background: "#febd69" , transition: "background 0.3s"}}
            type="submit"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default Resetpassword;
