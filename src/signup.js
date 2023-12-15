import * as sign from './signModule.js'

const input_email = document.getElementById("email");
const input_email_desc = document.getElementById("email_desc");

const input_pw = document.getElementById("pw");
const input_pw_desc = document.getElementById("pw_desc");
const input_pw_icon = document.getElementById("pw_icon");

const input_pw_check = document.getElementById("pw_check");
const input_pw_check_desc = document.getElementById("pw_check_desc");
const input_pw_check_icon = document.getElementById("pw_check_icon");

const btn_signup = document.getElementById("signup");

input_email.addEventListener('focusout', ()=>{

  if(false == sign.existTextContent(input_email, input_email_desc))
    return;

  if(false == sign.invaildTextContent(input_email, input_email_desc))
    return;  

  if(false == sign.existEmail(input_email, input_email_desc))
    return;
});

input_pw.addEventListener('focusout', ()=>{
  if(false == sign.existTextContent(input_pw, input_pw_desc))
    return;

  if(false == sign.correctPassword(input_pw, input_pw_desc))
    return;
});

input_pw_icon.addEventListener('click', ()=>{
  sign.showPasswordToggle(input_pw_icon, input_pw);
});

input_pw_check.addEventListener('focusout', ()=>{
  if(input_pw.value != input_pw_check.value)
    return;

  if(false == sign.existTextContent(input_pw_check, input_pw_check_desc))
    return;

  if(false == sign.correctPassword(input_pw_check, input_pw_check_desc))
    return;
});

input_pw_check.addEventListener('input', ()=>{

  console.log(`${input_pw.value} vs ${input_pw_check.value}`);
  if(input_pw.value != input_pw_check.value)
  {
    console.log("compare error");
    input_pw_check.classList.add("input_login_error");
    input_pw_check_desc.textContent = "비밀번호가 일치하지 않아요.";
  }  
})

input_pw_check_icon.addEventListener('click', ()=>{
  sign.showPasswordToggle(input_pw_check_icon, input_pw_check);
});

btn_signup.addEventListener('click', ()=>{
  sign.checkSignupRequest(input_email, input_pw, input_pw_check);
});

btn_signup.addEventListener('keydown', (event)=>{
  if(event.keyCode == 13){
    sign.checkSignupRequest(input_email, input_pw, input_pw_check);
  }
});