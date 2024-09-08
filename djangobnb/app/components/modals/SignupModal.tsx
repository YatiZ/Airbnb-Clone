'use client'
import useSignupModal from '@/app/hooks/useSignupModal';
import React from 'react'
import CustomButton from '../forms/CustomButton';
import Modal from './Modal';

const SignupModal = () => {
    const signupModal = useSignupModal();

    const content = (
      <>
        <h2 className="mb-6 text-2xl">Welcome to Django, please sign up</h2>
        <form className="space-y-4">
          <input type="email" className="w-full p-3 h-[54px] border border-gray-300 rounded-xl" placeholder="your email address"/>
  
          <input type="password" className="w-full p-3 h-[54px] border border-gray-300 rounded-xl" placeholder="your password"/>

          <input type="password" className="w-full p-3 h-[54px] border border-gray-300 rounded-xl" placeholder="Repeat password"/>
          
          <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">Error message</div>
          <CustomButton label="Submit" onClick={()=>console.log('Submit')}/>
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

export default SignupModal