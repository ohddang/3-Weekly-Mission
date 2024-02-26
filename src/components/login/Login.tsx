"use client";

import "@/app/index.css";
import "./login.css";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export interface ReactHookFormProps {
  label: string;
  register: UseFormRegister<FieldValues>;
  formState: {
    isSubmitted: boolean;
    isSubmitting: boolean;
    errors: FieldErrors<FieldValues>;
  };
  submitError: boolean | undefined;
}

export interface EmailInputProps extends ReactHookFormProps {
  emailError?: boolean;
  onCheckEmail: (email: string) => void;
}

export interface PasswordInputProps extends ReactHookFormProps {
  check: boolean;
  comparePassword?: boolean;
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

const EmailInput = ({ label, register, formState, submitError, emailError, onCheckEmail }: EmailInputProps) => {
  const { isSubmitted, isSubmitting, errors } = formState;

  const errorMsg = submitError
    ? "이메일을 확인해주세요"
    : emailError
    ? "이미 사용중인 이메일입니다."
    : errors.email?.message || "";

  const errorStyle = submitError || errors.email ? "error" : "";
  const inputKey = "email";

  const onBlurHandle = async (event: any) => {
    if (errors.email) return;

    const email = (event.target as HTMLInputElement).value;
    onCheckEmail(email);
  };

  return (
    <div className="login_textInput_container">
      <div>
        <label>{label}</label>
        <div className="textInput_container">
          <input
            id={inputKey}
            className={errorStyle}
            type="text"
            aria-invalid={errors.email ? "true" : "false"}
            placeholder="내용 입력"
            {...register(inputKey, {
              required: "이메일을 입력해 주세요.",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "이메일 형식에 맞지 않습니다.",
              },
              onBlur: (event) => onBlurHandle(event),
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

const PasswordInput = ({
  label,
  check,
  register,
  formState,
  submitError,
  comparePassword = true,
}: PasswordInputProps) => {
  const [passwordToggle, setPasswordToggle] = useState<boolean>(true);
  const { isSubmitted, isSubmitting, errors } = formState;

  const onHandleClick = () => {
    setPasswordToggle(!passwordToggle);
  };

  const errorMsg = !comparePassword
    ? "비밀번호가 일치하지 않아요."
    : submitError
    ? "비밀번호를 확인해주세요"
    : errors.password?.message || "";
  const errorStyle = submitError ? "error" : errors.password ? "error" : "";
  const inputKey = check ? "passwordCheck" : "password";

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
            src={passwordToggle ? "/images/eye_off.svg" : "/images/eye_on.svg"}
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
        <Link href="https://www.google.com" target="_blank" className="google_icon">
          <Image src="/images/google_login.svg" alt="google" width="22" height="22" />
        </Link>
        <Link href="https://www.kakaocorp.com/page" target="_blank" className="kakao_icon">
          <Image src="/images/kakao_login.svg" alt="kakao" width="22" height="22" />
        </Link>
      </div>
    </div>
  );
};

Login.Header = Header;
Login.EmailInput = EmailInput;
Login.PasswordInput = PasswordInput;
Login.Button = Button;
Login.SocialButton = SocialButton;
