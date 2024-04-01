"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { postRequestCookies, postCheckEmail } from "@/api/api";
import { loginFn, postUserLogin, postUserLoginMutation, postUserSignup } from "@/api/authApi";
import { Login } from "@/components/login/Login";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

interface LoginFields {
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
  const [emailError, setEmailError] = useState(false);
  const [loginData, setLoginData] = useState<LoginFields>({ email: "", password: "" });
  const router = useRouter();

  const onCheckEmail = async (email: string) => {
    const res = await postCheckEmail(email);
    if (res === null) setEmailError(true);
  };

  const mutation = useMutation({ mutationFn: loginFn });

  useEffect(() => {
    setSubmitError(!(watchAllFields.email !== loginData.email || watchAllFields.password !== loginData.password));
    setEmailError(!(watchAllFields.email !== loginData.email || watchAllFields.password !== loginData.password));
  }, [watchAllFields.email, watchAllFields.password]);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      // router.push("/folder");
    }
  }, []);

  useEffect(() => {
    mutation.mutate({ email: loginData.email, password: loginData.password });
  }, [loginData]);

  return (
    <>
      <Login
        onSubmit={handleSubmit(async (data) => {
          setLoginData({ email: data.email, password: data.password });

          let res = null;
          if (pathname === "signin") {
            if (mutation.status === "success") res = mutation.data;
          } else if (pathname === "signup") res = await postUserSignup(data.email, data.password);

          if (res === null) {
            setSubmitError(true);
          } else {
            const cookiesResponse = await postRequestCookies("accessToken", res.data.accessToken);
            if (cookiesResponse === null) return;

            // TODO : redirect /folder -> /folder/전체
            localStorage.setItem("accessToken", res.data.accessToken);
            localStorage.setItem("refreshToken", res.data.refreshToken);

            router.push("/folder");
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
          emailError={emailError}
          onCheckEmail={onCheckEmail}
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
            submitError={submitError}
            comparePassword={watchAllFields.password === watchAllFields.passwordCheck}
          />
        )}
        <Login.Button />
        <Login.SocialButton />
      </Login>
    </>
  );
};

export default LoginForm;
