const ADMIN_EMAIL = "test@codeit.com";
const ADMIN_PW ="codeit101";

const TEXT_EMAIL_INSERT = "이메일을 입력해주세요.";
const TEXT_EMAIL_INCORRECT = "올바른 이메일 주소가 아닙니다.";
const TEXT_EMAIL_EXIST = "이미 사용 중인 이메일입니다.";
const TEXT_EMAIL_CHECK = "이메일을 확인해주세요.";

const TEXT_PASSWORD_INSERT = "비밀번호를 입력해주세요.";
const TEXT_PASSWORD_POLICY = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
const TEXT_PASSWORD_CHECK = "비밀번호를 확인해주세요.";
export const TEXT_PASSWORD_DIFFERENT = "비밀번호가 일치하지 않습니다.";

export const clearInputElement = (element, element_desc) => {
  element.classList.remove("input_login_error");
  element_desc.textContent = "";
}

export const existTextContent = (element, element_desc) => {
  if(element.value == ""){
    element.classList.add("input_login_error");

    switch(element.id){
      case "email":
        element_desc.textContent = TEXT_EMAIL_INSERT;
        break;
      case "pw":
        element_desc.textContent = TEXT_PASSWORD_INSERT;
        break;
      default:
        break; 
    }
    return false;
  }
  else{
    return true;
  }
}

export const invalidEmailContent = (element, element_desc) => {
  const emailVal = element.value;

  const regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailVal.match(regExp) != null) {
    return true;
  }
  else {
    element.classList.add("input_login_error");
    element_desc.textContent = TEXT_EMAIL_INCORRECT;
    return false;
  }
}

export const isEmailExist = (element, element_desc) => {
  if(ADMIN_EMAIL === element.value){
    element.classList.add("input_login_error");
    element_desc.textContent = TEXT_EMAIL_EXIST;
    return false;
  }
  return true;
}

export const invalidPasswordContent = (element, element_desc) => {
  let regPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if(!regPass.test(element.value)){
    element.classList.add("input_login_error");
    element_desc.textContent = TEXT_PASSWORD_POLICY;
    return false;
  }
  return true;
}

export const showPasswordToggle = (element_icon, element_input) => {
  const img_path = "../assets/eye-off.svg";

  if(element_input.type == "text"){
    element_input.type = "password";
    element_icon.src = "../assets/eye-off.svg";
  }
  else{
    element_input.type = "text";
    element_icon.src = "../assets/eye-on.svg";
  }
}

export const checkLoginRequest = (element_email, element_email_desc, element_pw, element_pw_desc) => {
 
  if(element_email.value != ADMIN_EMAIL){
    element_email.classList.add("input_login_error");
    element_email_desc.textContent = TEXT_EMAIL_CHECK;
    return false;
  }
  if(element_pw.value != ADMIN_PW){
    element_pw.classList.add("input_login_error");
    element_pw_desc.textContent = TEXT_PASSWORD_CHECK;
    return false;
  }
  return true;
}

export const checkSignupRequest = (element_email, element_pw, element_pw_check) => {
  if(element_email.value === "" || element_pw.value === "" || element_pw_check.value === "")
    return false; 

  const invaild_email = element_email.classList.contains("input_login_error");
  const invaild_pw = element_pw.classList.contains("input_login_error");
  const invaild_pw_check = element_pw_check.classList.contains("input_login_error");

  if(! (invaild_email || invaild_pw || invaild_pw_check)){
    location.href = "../folder/folder.html";
  }
  else
    return false;
}

export const accessTokenExist = () => {
  if(null === window.localStorage.getItem("accessToken"))
    return false;
  return true;
}