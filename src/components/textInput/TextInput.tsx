"use client";

import "./textInput.css";
import Image from "next/image";

const enum InputType {
  TEXT = 0,
  PASSWORD,
  EMAIL,
}

interface TextInputProps {
  type: InputType;
}

const TextInput: React.FC<TextInputProps> = ({ type }) => {
  const inputTagType = type === InputType.PASSWORD ? "password" : "text";

  let showPassword = false;

  const onHandleClick = () => {
    showPassword = !showPassword;
  };

  return (
    <div>
      <div>
        <input className="input" type={showPassword ? "password" : inputTagType} placeholder="내용 입력" />
        {type === InputType.PASSWORD ? (
          <Image className="eye" src="/images/pen.svg" alt="eye" width="16" height="16" onClick={onHandleClick} />
        ) : null}
      </div>
      <div></div>
    </div>
  );
};

export default TextInput;
