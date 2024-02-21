import Button from "@/components/button/Button";
import LoginHeader from "@/components/loginHeader/LoginHeader";
import SocialButton from "@/components/socialButton/SocialButton";
import TextInput, { InputType } from "@/components/textInput/TextInput";

// FIX IT : InputType is not exported from TextInput.tsx
const Signup = async () => {
  return (
    <>
      <LoginHeader />
      <TextInput type={0} />
      <TextInput type={1} />
      <TextInput type={1} />
      <Button />
      <SocialButton />
    </>
  );
};

export default Signup;
