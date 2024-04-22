'use client'
import React from 'react'
import Styles from "../styles/Inputs.module.css"
import { Button, Form, Input, InputNumber, Space, type FormItemProps } from 'antd';

interface ChildComponentProps {
  title: string;
  type: string;
  size: string;
  width: string;
  color: string;
  bgColor: string;
  onClick: ()=>void;
  htmlType: string
}

const SimpleButton: React.FC<ChildComponentProps> = ({type,title, size, width,color, bgColor, onClick, htmlType}) => {
  return (
    <div>
       <Button style={{
                          width: `${width}`,
                          backgroundColor: `${bgColor}`,
                          color: `${color}`
                        }}  size={size === "large" ? "large" : "small"} 
                        onClick={onClick} htmlType="submit">{title}</Button>
    </div>
  )
}

export default SimpleButton