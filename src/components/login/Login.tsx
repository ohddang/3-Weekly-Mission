"use client";

import "@/app/index.css";
import "./login.css";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export const enum InputType {
  TEXT = 0,
  PASSWORD,
}

export interface TextInputProps {
  label: string;
  type: InputType;
}

export interface LoginHeaderProps {
  desc: string;
  linkTitle: string;
  linkPath: string;
}

export const Login = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="login_container">
      <form>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { ...child.props });
          }
          return child;
        })}
      </form>
    </div>
  );
};

const Header = ({ desc, linkTitle, linkPath }: LoginHeaderProps) => {
  return (
    <div className="login_header">
      <Image src="/images/linkbrary.svg" alt="linkbrary" width="210" height="38" className="login_logo" />
      <div>
        <span>{desc}</span>
        <Link href={linkPath}>{linkTitle}</Link>
      </div>
    </div>
  );
};

const TextInput = ({ label, type }: TextInputProps) => {
  const [showToggle, setShowToggle] = useState(false);
  const [errorCase, setErrorCase] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onHandleBlur = () => {
    console.log("focus out");
  };

  const onHandleClick = () => {
    setShowToggle(!showToggle);
  };

  const onError = (error: boolean) => {
    if (!inputRef.current) return;

    if (error) inputRef.current.classList.add("input_error");
    else inputRef.current.classList.remove("input_error");

    setErrorCase(error);
  };

  const inputTagType = type === InputType.PASSWORD ? "password" : "text";

  return (
    <div className="login_textInput_container">
      <div>
        <label>{label}</label>
        <div className="textInput_container">
          <input
            className="input"
            type={showToggle ? "password" : inputTagType}
            placeholder="내용 입력"
            onBlur={onHandleBlur}
            ref={inputRef}
          />
          {type === InputType.PASSWORD && (
            <Image
              className="eye_toggle"
              src="/images/eye_off.svg"
              alt="eye"
              width="16"
              height="16"
              onClick={onHandleClick}
            />
          )}
        </div>
      </div>
      {errorCase && <div>내용을 다시 작성해주세요</div>}
    </div>
  );
};

const Button = () => {
  return <button className="login_button">로그인</button>;
};

const SocialButton = () => {
  return (
    <div className="login_social_container">
      <span>소셜 버튼</span>
      <div className="social_button_container">
        <div className="google_icon">
          <Image src="/images/google_login.svg" alt="google" width="22" height="22" />
        </div>
        <div className="kakao_icon">
          <Image src="/images/kakao_login.svg" alt="kakao" width="22" height="22" />
        </div>
      </div>
    </div>
  );
};

Login.Header = Header;
Login.TextInput = TextInput;
Login.Button = Button;
Login.SocialButton = SocialButton;
