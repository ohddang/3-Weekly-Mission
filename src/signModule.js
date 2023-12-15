const ADMIN_EMAIL = "test@codeit.com";
const ADMIN_PW ="codeit101";

export function resetInputElement(element, element_desc){
  element.classList.remove("input_login_error");
  element_desc.textContent = "";
}

export function existTextContent(element, element_desc){
  if(element.value == ""){
    element.classList.add("input_login_error");
    element_desc.textContent = element.id == "email" ? "이메일을 입력해주세요." : "비밀번호를 입력해주세요.";
    return false;
  }
  else{
    resetInputElement(element, element_desc);
    return true;
  }
}

export function invaildTextContent(element, element_desc){
  var emailVal = element.value;

  var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  if (emailVal.match(regExp) != null) {
    resetInputElement(element, element_desc);
    return true;
  }
  else {
    element.classList.add("input_login_error");
    element_desc.textContent = "올바른 이메일 주소가 아닙니다.";
    return false;
  }
}

export function existEmail(element, element_desc){
  if("test@codeit.com" == element.value){
    element.classList.add("input_login_error");
    element_desc.textContent = "이미 사용 중인 이메일입니다.";
    return false;
  }
}

export function correctPassword(element, element_desc){
  let regPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if(!regPass.test(element.value)){
    element.classList.add("input_login_error");
    element_desc.textContent = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
    return false;
  }
  else{
    resetInputElement(element, element_desc);
    return true;
  }
}

export function showPasswordToggle(element_icon, element_input){
  console.log(`pw toggle : ${element_input.type}`);
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

export function checkLoginRequest(element_email, element_email_desc, element_pw, element_pw_desc){
 
  if(element_email.value != ADMIN_EMAIL){
    element_email.classList.add("input_login_error");
    element_email_desc.textContent = "이메일을 확인해주세요";
    return false;
  }
  if(element_pw.value != ADMIN_PW){
    element_pw.classList.add("input_login_error");
    element_pw_desc.textContent = "비밀번호를 확인해주세요";
    return false;
  }
  return true;
}

export function checkSignupRequest(element_email, element_pw, element_pw_check){
  if(element_email.value == "" || element_pw.value == "" || element_pw_check.value == "")
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