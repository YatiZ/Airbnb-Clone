"use client";
import { useState } from "react";
import useLoginModal from "@/app/hooks/useLoginModal";
import Modal from "./Modal";
import CustomButton from "../forms/CustomButton";
import { useRouter } from "next/navigation";
import apiService from "@/app/services/apiService";
import { handleLogin } from "@/app/lib/action";


const LoginModal = () => {
  const loginModal = useLoginModal();
  const router = useRouter()
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<string[]>([]);

  const submitLogin = async () => {
    const formData = {
      email: email,
      password: password
    }
    
    const response = await apiService.postWithoutToken('/api/auth/login/', JSON.stringify(formData))
    console.log('from login',response)

    if(response.access){
      handleLogin(response.user.pk, response.access, response.refresh);

      loginModal.close();
      router.push('/')
    }else{
      setErrors(response.non_field_errors)
    }
  }

  const content = (
    <>
      <h2 className="mb-6 text-2xl">Welcome to Django, please login in</h2>
      <form action={submitLogin} className="space-y-4">
        <input onChange={(e)=>setEmail(e.target.value)} type="email" className="w-full p-3 h-[54px] border border-gray-300 rounded-xl" placeholder="your email address"/>

        <input onChange={(e)=> setPassword(e.target.value)} type="password" className="w-full p-3 h-[54px] border border-gray-300 rounded-xl" placeholder="your password"/>
        
        {errors.map((error, index) => {
          return (
            <div key={`error_${index}`} className="p-5 bg-airbnb text-white rounded-xl opacity-80">
              {error}
            </div>
          );
        })}
       
        <CustomButton label="Submit" onClick={submitLogin}/>
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
