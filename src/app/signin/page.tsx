"use client";

import { Login } from "@/components/login/Login";

// FIX IT : InputType is not exported from TextInput.tsx
const Signin = async () => {
  return (
    <Login>
      <Login.Header />
      <Login.TextInput type={0} />
      <Login.TextInput type={1} />
      <Login.TextInput type={1} />
      <Login.Button />
      <Login.SocialButton />
    </Login>
  );
};

export default Signin;
