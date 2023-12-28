const ADMIN_EMAIL = "test@codeit.com";
const ADMIN_PW = "codeit101";

const TEXT_EMAIL_INSERT = "이메일을 입력해주세요.";
const TEXT_EMAIL_INCORRECT = "올바른 이메일 주소가 아닙니다.";
const TEXT_EMAIL_EXIST = "이미 사용 중인 이메일입니다.";
const TEXT_EMAIL_CHECK = "이메일을 확인해주세요.";

const TEXT_PASSWORD_INSERT = "비밀번호를 입력해주세요.";
const TEXT_PASSWORD_POLICY =
  "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
const TEXT_PASSWORD_CHECK = "비밀번호를 확인해주세요.";
export const TEXT_PASSWORD_DIFFERENT = "비밀번호가 일치하지 않습니다.";
const regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const eye_off_path = "../assets/eye-off.svg";
const eye_on_path = "../assets/eye-on.svg";

export const clearInputElement = (elements) => {
  const { input, desc } = elements;

  input.classList.remove("input_login_error");
  desc.textContent = "";
};

export const existTextContent = (elements, desc_text) => {
  const { input, desc } = elements;

  if (input.value == "") {
    input.classList.add("input_login_error");
    desc.textContent = desc_text;
    return false;
  } else {
    return true;
  }
};

export const invalidEmailContent = (elements) => {
  const { input, desc } = elements;

  const emailVal = input.value;
  if (emailVal.match(regEmail) != null) {
    return true;
  } else {
    input.classList.add("input_login_error");
    desc.textContent = TEXT_EMAIL_INCORRECT;
    return false;
  }
};

export const isEmailExist = (elements) => {
  const { input, desc } = elements;

  if (ADMIN_EMAIL === input.value) {
    input.classList.add("input_login_error");
    desc.textContent = TEXT_EMAIL_EXIST;
    return false;
  }
  return true;
};

export const isInvalidPasswordContent = (elements) => {
  const { input, desc } = elements;

  if (!regPass.test(input.value)) {
    input.classList.add("input_login_error");
    desc.textContent = TEXT_PASSWORD_POLICY;
    return false;
  }
  return true;
};

export const showPasswordToggle = (element_icon, element_input) => {
  if (element_input.type == "text") {
    element_input.type = "password";
    element_icon.src = eye_off_path;
  } else {
    element_input.type = "text";
    element_icon.src = eye_on_path;
  }
};

export const checkLoginRequest = (
  element_email,
  element_email_desc,
  element_pw,
  element_pw_desc
) => {
  if (element_email.value != ADMIN_EMAIL) {
    element_email.classList.add("input_login_error");
    element_email_desc.textContent = TEXT_EMAIL_CHECK;
    return false;
  }
  if (element_pw.value != ADMIN_PW) {
    element_pw.classList.add("input_login_error");
    element_pw_desc.textContent = TEXT_PASSWORD_CHECK;
    return false;
  }
  return true;
};

export const checkSignupRequest = (
  element_email,
  element_pw,
  element_pw_check
) => {
  if (
    element_email.value === "" ||
    element_pw.value === "" ||
    element_pw_check.value === ""
  )
    return false;

  const invaild_email = element_email.classList.contains("input_login_error");
  const invaild_pw = element_pw.classList.contains("input_login_error");
  const invaild_pw_check =
    element_pw_check.classList.contains("input_login_error");

  if (!(invaild_email || invaild_pw || invaild_pw_check)) {
    location.href = "../folder/folder.html";
  } else {
    return false;
  }
};

export const accessTokenExist = () => {
  if (null === window.localStorage.getItem("accessToken")) return false;
  return true;
};

export const inputEmailAddListener = (emails) => {
  console.log(emails.input);

  emails.input.addEventListener("focusout", () => {
    if (false == existTextContent(emails, TEXT_EMAIL_INSERT)) return;

    if (false == invalidEmailContent(emails)) return;

    clearInputElement(emails);
    return true;
  });

  console.log(emails.input);
};

export const inputPasswordAddListener = (passwords) => {
  passwords.input.addEventListener("input", () => {
    if (false == existTextContent(passwords, TEXT_PASSWORD_INSERT)) return;

    if (false == invalidPasswordContent(passwords)) return;

    clearInputElement(passwords);
  });
};
