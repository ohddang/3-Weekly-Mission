"use client";

import "@/app/index.css";
import "./login.css";
import React, { DOMAttributes, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export interface EmailInputProps {
  label: string;
  register: UseFormRegister<FieldValues>;
  formState: {
    isSubmitted: boolean;
    isSubmitting: boolean;
    errors: FieldErrors<FieldValues>;
  };
  submitError?: boolean;
}

export interface PasswordInputProps {
  label: string;
  check: boolean;
  register: UseFormRegister<FieldValues>;
  formState: {
    isSubmitted: boolean;
    isSubmitting: boolean;
    errors: FieldErrors<FieldValues>;
  };
  submitError?: boolean;
}

export interface LoginHeaderProps {
  desc: string;
  linkTitle: string;
  linkPath: string;
}

export const Login = ({
  children,
  onSubmit,
}: {
  children: React.ReactNode;
  onSubmit: React.FormEventHandler<HTMLElement>;
}) => {
  return (
    <div className="login_container">
      <form onSubmit={onSubmit}>
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

const EmailInput = ({ label, register, submitError, formState }: EmailInputProps) => {
  const { isSubmitted, isSubmitting, errors } = formState;

  const errorMsg = submitError ? "이메일을 확인해주세요" : errors.email?.message || "";
  const errorStyle = submitError ? "error" : errors.email ? "error" : "";
  const inputKey = "email";

  return (
    <div className="login_textInput_container">
      <div>
        <label>{label}</label>
        <div className="textInput_container">
          <input
            id={inputKey}
            className={errorStyle}
            type="text"
            aria-invalid={isSubmitted ? (errors.email ? "true" : "false") : "false"}
            placeholder="내용 입력"
            {...register(inputKey, {
              required: "이메일을 입력해 주세요.",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "이메일 형식에 맞지 않습니다.",
              },
            })}
          />
        </div>
      </div>
      {errors && (
        <small className="input_desc_error" role="alert">
          {errorMsg.toString()}
        </small>
      )}
    </div>
  );
};

const PasswordInput = ({ label, check, register, submitError, formState }: PasswordInputProps) => {
  const [passwordToggle, setPasswordToggle] = useState(false);
  const { isSubmitted, isSubmitting, errors } = formState;

  const onHandleClick = () => {
    setPasswordToggle(!passwordToggle);
  };

  const errorMsg = submitError ? "비밀번호를 확인해주세요" : errors.password?.message || "";
  const errorStyle = submitError ? "error" : errors.password ? "error" : "";
  const inputKey = "password";

  return (
    <div className="login_textInput_container">
      <div>
        <label>{label}</label>
        <div className="textInput_container">
          <input
            id={inputKey}
            className={errorStyle}
            type={passwordToggle ? "password" : "text"}
            aria-invalid={isSubmitted ? (errors.password ? "true" : "false") : "false"}
            placeholder="내용 입력"
            {...register(inputKey, {
              required: "비밀번호를 입력해 주세요.",
              pattern: {
                value: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/,
                message: "비밀번호는 영문, 숫자 조합 8자 이상이어야 합니다.",
              },
              minLength: {
                value: 8,
                message: "비밀번호는 영문, 숫자 조합8자 이상이어야 합니다.",
              },
            })}
          />
          <Image
            className="eye_toggle"
            src="/images/eye_off.svg"
            alt="eye"
            width="16"
            height="16"
            onClick={onHandleClick}
          />
        </div>
      </div>
      {errors && (
        <small className="input_desc_error" role="alert">
          {errorMsg.toString()}
        </small>
      )}
    </div>
  );
};

const Button = () => {
  return (
    <button className="login_button" type="submit">
      로그인
    </button>
  );
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
Login.EmailInput = EmailInput;
Login.PasswordInput = PasswordInput;
Login.Button = Button;
Login.SocialButton = SocialButton;
