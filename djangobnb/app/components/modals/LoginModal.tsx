"use client";
import { useState } from "react";
import useLoginModal from "@/app/hooks/useLoginModal";
import Modal from "./Modal";
import CustomButton from "../forms/CustomButton";

const LoginModal = () => {
  const loginModal = useLoginModal();

  const content = (
    <>
      <h2 className="mb-6 text-2xl">Welcome to Django, please login in</h2>
      <form className="space-y-4">
        <input type="email" className="w-full p-3 h-[54px] border border-gray-300 rounded-xl" placeholder="your email address"/>

        <input type="password" className="w-full p-3 h-[54px] border border-gray-300 rounded-xl" placeholder="your password"/>
        
        <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">Error message</div>
        <CustomButton label="Submit" onClick={()=>console.log('Submit')}/>
      </form>
    </>
  );

  return (
    <Modal
      isOpen={loginModal.isOpen}
      close={loginModal.close}
      label="Log in"
      content={content}
    />
  );
};

export default LoginModal;
