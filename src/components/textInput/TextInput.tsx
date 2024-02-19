"use client";

import "./textInput.css";
import { useState, useRef } from "react";
import Image from "next/image";

const enum InputType {
  TEXT = 0,
  PASSWORD,
  EMAIL,
}

interface TextInputProps {
  type: InputType;
}

const TextInput = ({ type }: TextInputProps) => {
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
    <div>
      <div>
        <input
          className="input"
          type={showToggle ? "password" : inputTagType}
          placeholder="내용 입력"
          onBlur={onHandleBlur}
          ref={inputRef}
        />
        {type === InputType.PASSWORD ? (
          <Image
            className="input_eye"
            src="/images/eye_off.svg"
            alt="eye"
            width="16"
            height="16"
            onClick={onHandleClick}
          />
        ) : null}
      </div>
      {errorCase && <div>내용을 다시 작성해주세요</div>}
    </div>
  );
};

export default TextInput;
