"use client";

import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { postUserLogin } from "@/api/api";
import { Login } from "@/components/login/Login";

interface SubmitFields {
  email: string;
  password: string;
}

// TODO : zod 도입
const LoginForm = ({ pathname }: { pathname: string }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, isSubmitted, errors },
  } = useForm({
    mode: "onBlur",
  });
  const watchAllFields = watch();
  const [submitError, setSubmitError] = useState(false);
  const [submitData, setSubmitData] = useState<SubmitFields>({ email: "", password: "" });

  useEffect(() => {
    setSubmitError(!(watchAllFields.email !== submitData.email || watchAllFields.password !== submitData.password));
  }, [watchAllFields.email, watchAllFields.password]);

  return (
    <>
      <Login
        onSubmit={handleSubmit(async (data) => {
          setSubmitData({ email: data.email, password: data.password });
          const res = await postUserLogin(data.email, data.password);
          if (res === null) {
            setSubmitError(true);
          }
        })}>
        {pathname === "signin" ? (
          <Login.Header desc="회원이 아니신가요?" linkTitle="회원가입 하기" linkPath="/signup" />
        ) : (
          <Login.Header desc="이미 회원이신가요?" linkTitle="로그인 하기" linkPath="/signin" />
        )}
        <Login.EmailInput
          label="이메일"
          register={register}
          formState={{ isSubmitting, isSubmitted, errors }}
          submitError={submitError}
        />
        <Login.PasswordInput
          label="비밀번호"
          check={false}
          register={register}
          formState={{ isSubmitting, isSubmitted, errors }}
          submitError={submitError}
        />
        {pathname === "signup" && (
          <Login.PasswordInput
            label="비밀번호 확인"
            check={true}
            register={register}
            formState={{ isSubmitting, isSubmitted, errors }}
          />
        )}
        <Login.Button />
        <Login.SocialButton />
      </Login>
    </>
  );
};

export default LoginForm;
