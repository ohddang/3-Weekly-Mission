"use client";

import { InputType, Login } from "@/components/login/Login";

const Signup = () => {
  return (
    <Login>
      <Login.Header desc="이미 회원이신가요?" linkTitle="로그인 하기" linkPath="/signin" />
      <Login.TextInput label="이메일" type={InputType.TEXT} />
      <Login.TextInput label="비밀번호" type={InputType.PASSWORD} />
      <Login.TextInput label="비밀번호 확인" type={InputType.PASSWORD} />
      <Login.Button />
      <Login.SocialButton />
    </Login>
  );
};

export default Signup;
