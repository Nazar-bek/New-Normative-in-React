import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeThePassword, updateProfile } from "../redux/slices/profileSlice";
import { toast } from "sonner";

const Account = () => {
  const dispatch = useDispatch();
  const { firstName, lastName, email, address, passwordMain } = useSelector(
    (state) => state.profileSlice
  );

  const [formData, setFormData] = useState({
    firstName,
    lastName,
    email,
    address,
  });

  const [password, setPassword] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCancel = () => {
    setFormData({
      firstName,
      lastName,
      email,
      address,
    });
    setPassword({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
    toast.error("Canceled");
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPassword((prev) => ({ ...prev, [name]: value }));
  };
  console.log(password);

  const handleSaveAll = () => {
    const { currentPassword, newPassword, confirmPassword } = password;
    const passwordFieldFilled =
      currentPassword || newPassword || confirmPassword;

    if (passwordFieldFilled) {
      if (currentPassword !== passwordMain) {
        toast.error("The current password is not correct!");
        return;
      }

      if (newPassword !== confirmPassword) {
        toast.error("The confirm password does not match!");
        return;
      }
      dispatch(changeThePassword(password.newPassword));
    }

    setPassword({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });

    dispatch(updateProfile(formData));
  };

  return (
    <div>
      <div className="container max-w-[1170px] mx-auto mt-20 ">
        <div className="flex justify-between">
          <nav>
            <ul className="flex gap-3">
              <li className="cursor-pointer text-[#7F7F7F] font-normal text-sm leading-[21px] font-poppins">
                Home
              </li>
              <li className="text-[#7F7F7F] font-normal text-sm leading-[21px] font-poppins">
                /
              </li>
              <li className="cursor-pointer text-black font-normal text-sm leading-[21px] font-poppins">
                My Account
              </li>
            </ul>
          </nav>
          <div className="flex gap-1 ">
            <p>Welcome!</p>
            <h2 className="text-[#DB4444]">{firstName}</h2>
          </div>
        </div>
        <div>
          <div className="flex gap-25 mt-20">
            <div>
              <h3 className=" font-medium text-base leading-6 font-poppins">
                Manage My Account
              </h3>
              <div>
                <ul className="flex flex-col gap-2 ml-[35px] py-4">
                  <li className="font-normal text-base leading-6 font-poppins text-[#DB4444] cursor-pointer">
                    My Profile
                  </li>
                  <li className="font-normal text-base leading-6 font-poppins text-[#7F7F7F] cursor-pointer">
                    Address Book
                  </li>
                  <li className="font-normal text-base leading-6 font-poppins text-[#7F7F7F] cursor-pointer">
                    My Payment Options
                  </li>
                </ul>
              </div>
              <h3 className="font-medium text-base leading-6 font-poppins">
                My Orders
              </h3>
              <div>
                <ul className="flex flex-col gap-2 ml-[35px] py-4">
                  <li className="font-normal text-base leading-6 font-poppins text-[#7F7F7F] cursor-pointer">
                    My Returns
                  </li>
                  <li className="font-normal text-base leading-6 font-poppins text-[#7F7F7F] cursor-pointer">
                    My Cancellations
                  </li>
                </ul>
              </div>
              <h3 className="font-medium text-base leading-6 font-poppins">
                My WishList
              </h3>
            </div>
            <div className="py-10 px-20 shadow-md">
              <h1 className="font-medium text-xl leading-7 font-poppins text-[#DB4444]">
                Edit Your Profile
              </h1>
              <div className="flex gap-[50px] mt-4">
                <label
                  htmlFor="name"
                  className="flex flex-col gap-2 font-normal text-base leading-6 font-poppins"
                >
                  First Name
                  <input
                    name="firstName"
                    type="text"
                    className="w-[330px] outline-none  px-4 py-[13px] rounded bg-[#F5F5F5]"
                    onChange={(e) => handleChange(e)}
                    placeholder="Md"
                    value={formData.firstName}
                  />
                </label>
                <label
                  htmlFor="name"
                  className="flex flex-col gap-2 font-normal text-base leading-6 font-poppins"
                >
                  Last Name
                  <input
                    name="lastName"
                    className="w-[330px] outline-none  px-4 py-[13px] rounded bg-[#F5F5F5]"
                    onChange={(e) => handleChange(e)}
                    type="text"
                    placeholder="Rimel"
                    value={formData.lastName}
                  />
                </label>
              </div>
              <div className="flex gap-[50px] mt-6">
                <label
                  htmlFor="name"
                  className="flex flex-col gap-2 font-normal text-base leading-6 font-poppins"
                >
                  Email
                  <input
                    name="email"
                    type="text"
                    className="w-[330px] outline-none  px-4 py-[13px] rounded bg-[#F5F5F5]"
                    onChange={(e) => handleChange(e)}
                    placeholder="rimel1111@gmail.com"
                    value={formData.email}
                  />
                </label>
                <label
                  htmlFor="name"
                  className="flex flex-col gap-2 font-normal text-base leading-6 font-poppins"
                >
                  Address
                  <input
                    name="address"
                    className="w-[330px] outline-none  px-4 py-[13px] rounded bg-[#F5F5F5]"
                    type="text"
                    onChange={(e) => handleChange(e)}
                    placeholder="Kingston, 5236, United State"
                    value={formData.address}
                  />
                </label>
              </div>
              <div className="mt-6">
                <h3 className="font-normal text-base leading-6 font-poppins">
                  Password Changes
                </h3>
                <div className="flex flex-col gap-4 mt-2">
                  <input
                    className="outline-none  px-4 py-[13px] rounded bg-[#F5F5F5]"
                    type="password"
                    placeholder="Current Passwod"
                    name="currentPassword"
                    onChange={(e) => handlePasswordChange(e)}
                    value={password.currentPassword}
                  />
                  <input
                    className="outline-none  px-4 py-[13px] rounded bg-[#F5F5F5]"
                    type="password"
                    placeholder="New Passwod"
                    name="newPassword"
                    onChange={(e) => handlePasswordChange(e)}
                    value={password.newPassword}
                  />
                  <input
                    className="outline-none  px-4 py-[13px] rounded bg-[#F5F5F5]"
                    type="password"
                    placeholder="Confirm New Passwod"
                    name="confirmPassword"
                    onChange={(e) => handlePasswordChange(e)}
                    value={password.confirmPassword}
                  />
                </div>
              </div>
              <div className="flex gap-8 justify-end mt-6">
                <button
                  className="font-medium text-base leading-6 font-poppins"
                  onClick={() => handleCancel()}
                >
                  Cancel
                </button>
                <button
                  className="py-4 px-12 rounded bg-[#DB4444] font-medium text-base leading-6 font-poppins text-white"
                  onClick={() => handleSaveAll()}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
