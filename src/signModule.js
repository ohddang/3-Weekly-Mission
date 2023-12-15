
export function resetInputElement(element, element_desc){
  element.classList.remove("input_login_error");
  element_desc.textContent = "";
}

export function existTextContent(element, element_desc){
  if(element.value == ""){
    element.classList.add("input_login_error");
    element_desc.textContent = "이메일을 입력해주세요.";
  }
  else{
    resetInputElement(element, element_desc);
  }
  console.log("existTextContent");
}

export function invaildTextContent(element, element_desc){
  var emailVal = element.value;

  var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  if (emailVal.match(regExp) != null) {
    resetInputElement(element, element_desc);
  }
  else {
    element.classList.add("input_login_error");
    element_desc.textContent = "올바른 이메일 주소가 아닙니다.";
  }

  console.log("invaildTextContent");
}

export function existEmail(element, element_desc){
  if("test@codeit.com" == element.value){
    element.classList.add("input_login_error");
    element_desc.textContent = "이미 사용 중인 이메일입니다.";
  }

  console.log("existEmail");
}