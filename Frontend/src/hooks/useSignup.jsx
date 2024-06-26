import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "../config/axiosConfig";

export const useSignup = () => {
  const { login } = useAuthContext();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const signup = async (firstName, lastName, email, password,profileUrl) => {
    setIsLoading(true);
    setError(null);
    let isSuccess=false;
    let resMessg="";
    try {
      const response = await axios.post("/auth/signup", {
        firstname: firstName,
        lastname: lastName,
        email: email,
        password: password,
        profileurl:profileUrl
      });
      const resData= await response.data
      resMessg = resData.message;
      console.log('ResMessg: ',resMessg);
      if (response.status === 200) {
        console.log(response);
        const json = await response.data;
        console.log(json);
        // Save token to local storage
        console.log("Sign Up Successful from backend!!");
        localStorage.setItem("user", JSON.stringify(json));
        login(JSON.stringify(json));
        setError(null)
        isSuccess=true;
        setIsLoading(false);
      } else {
        setIsLoading(false);
        console.log('Sign Up Failed from BAckend');
        console.log('message from backend',response.data.message);
        setError("Signup failed. Please try again.", response.data.message);
      }
    } catch (err) {
      console.log('message from backend',resMessg);
      setError("Signup failed. Please try again.", resMessg);
    } finally {
      setIsLoading(false);
    }
    return isSuccess;
  };

  return { signup, isLoading, error };
};
