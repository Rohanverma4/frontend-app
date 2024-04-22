'use client'
import React from 'react'
import Style from "../../styles/UserLogin.module.css"
import SimpleNumberInput from "../../components/SimpleNumberInput"
import SimpleButton from "./../../components/SimpleButton"
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import loginLock from "../../../public/assets/login-lock.png"


const LoginPage: React.FC = () => {

  const router = useRouter()
  const handleContinue : any = () => {
    console.log('TESTING')
    // router.push('/login')
    router.push('/auth/otpVerification')
  }

  return (
    <div className={Style.mainContainer}>
      <div className={Style.verificationImageDiv}>
        <Image
          src={loginLock}
          alt="My SVG"
          width={200}
          height={211}
        />
        <p className={Style.verificationImageTitle}>Login Or SignUp</p>
      </div>
      <div className={Style.PhoneNumberDiv}>
          <SimpleNumberInput type='number' title='Phone Number' width='360px' size='large' />
          <SimpleButton htmlType='Submit' onClick={handleContinue} type='number' title='Continue' width='360px' size='large' bgColor='#F5434F' color='#f0f0f0'/>
      </div>
      <div className={Style.termsConditions}>
        <p>By Continuing, I agree to the </p> <Link href="http://localhost:3000/auth/login"> Terms and Conditions </Link>
      </div>
    </div>
  )
}

export default LoginPage