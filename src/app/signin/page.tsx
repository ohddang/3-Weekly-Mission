"use client";

import { InputType, Login } from "@/components/login/Login";

const Signin = () => {
  return (
    <Login>
      <Login.Header desc="회원이 아니신가요?" linkTitle="회원가입 하기" linkPath="/signup" />
      <Login.TextInput label="이메일" type={InputType.TEXT} />
      <Login.TextInput label="비밀번호" type={InputType.PASSWORD} />
      <Login.Button />
      <Login.SocialButton />
    </Login>
  );
};

export default Signin;
