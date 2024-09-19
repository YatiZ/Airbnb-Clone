"use client";
import useSignupModal from "@/app/hooks/useSignupModal";
import React, { useState } from "react";
import CustomButton from "../forms/CustomButton";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import apiService from "@/app/services/apiService";
import { handleLogin } from "@/app/lib/action";

const SignupModal = () => {
  const router = useRouter();
  const signupModal = useSignupModal();

  const [email, setEmail] = useState("");
  console.log('email',email)
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  //submit function
  const submitSignup = async () => {
    const formData = {
      email: email,
      password1: password1,
      password2: password2,
    }

    const response = await apiService.post('/api/auth/register/',JSON.stringify(formData))
    console.log(response)

    if(response.access){
      
      handleLogin(response.user.pk, response.access, response.refresh);

      signupModal.close();
      router.push('/')
    }else{
      const tmpErrors: string[]= Object.values(response).map((error: any)=>{
        return error;
      })
      setErrors(tmpErrors);
    }
  }

  const content = (
    <>
      <h2 className="mb-6 text-2xl">Welcome to Django, please sign up</h2>
      <form action={submitSignup} className="space-y-4">
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="w-full p-3 h-[54px] border border-gray-300 rounded-xl"
          placeholder="your email address"
        />

        <input
          onChange={(e) => setPassword1(e.target.value)}
          type="password"
          className="w-full p-3 h-[54px] border border-gray-300 rounded-xl"
          placeholder="your password"
        />

        <input
          onChange={(e) => setPassword2(e.target.value)}
          type="password"
          className="w-full p-3 h-[54px] border border-gray-300 rounded-xl"
          placeholder="Repeat password"
        />

        {errors.map((error, index) => {
          return (
            <div key={`error_${index}`} className="p-5 bg-airbnb text-white rounded-xl opacity-80">
              {error}
            </div>
          );
        })}

        <CustomButton label="Submit" onClick={submitSignup}/>
      </form>
    </>
  );

  return (
    <Modal
      isOpen={signupModal.isOpen}
      close={signupModal.close}
      label="Log in"
      content={content}
    />
  );
};

export default SignupModal;
