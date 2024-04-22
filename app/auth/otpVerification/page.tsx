'use client'
import React from 'react'
import Style from "../../styles/UserLogin.module.css"
import SimpleNumberInput from "../../components/SimpleNumberInput"
import SimpleButton from "./../../components/SimpleButton"
import Link from 'next/link'
import { Button, Form } from 'antd'
import Image from 'next/image';
import { InputOTP } from 'antd-input-otp'
import otpVerificationIcon from "../../../public/assets/otp-verification.png"

const OtpVarification: React.FC = () => {
  const [form] = Form.useForm();
  const handleFinish = (values:any) => {
    // Your logic
    console.log('VALUES',values)
  };
  const handleVerification: any = () => {}

  return (
    <div className={Style.mainContainer}>
      <div className={Style.PhoneNumberDiv}>
      <div className={Style.verificationImageDiv}>
        <Image
          src={otpVerificationIcon}
          alt="My SVG"
          width={258}
          height={200}
        />
        <p className={Style.verificationImageTitle}>Verify with OTP</p>
      </div>
      <p className={Style.otpText}>Sent to 6238949933</p>
      <p className={Style.otpText}>Enter 4 digit OTP</p>
      <Form onFinish={handleFinish} form={form}>
        <Form.Item label="" name="">
          <InputOTP inputStyle={{height:"60px"}} length={4} autoSubmit={form} inputType="numeric" />
        </Form.Item>

        <Form.Item>
          {/* <Button htmlType="submit">Submit</Button> */}
          <SimpleButton htmlType="submit" onClick={handleVerification} type='number' title='Verify' width='320px' size='large' bgColor='#F5434F' color='#f0f0f0'/>
        </Form.Item>
      </Form>
     </div>
    </div>
  )
}

export default OtpVarification