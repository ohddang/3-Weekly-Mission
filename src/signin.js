import * as sign from './signModule.js'

const input_email = document.getElementById("email");
const input_email_desc = document.getElementById("email_desc");

const input_pw = document.getElementById("pw");
const input_pw_desc = document.getElementById("pw_desc");
const input_pw_icon = document.querySelector(".input_password_toggle");

const btn_signin = document.getElementById("sign_btn");

input_email.addEventListener('focusout', ()=>{
  if(false == sign.existTextContent( input_email, input_email_desc ))
    return;

  if(false == sign.invalidEmailContent(input_email, input_email_desc))
    return;
    
  sign.clearInputElement(input_email, input_email_desc);
});

input_pw.addEventListener('input', ()=>{
  if(false == sign.existTextContent(input_pw, input_pw_desc))
    return;

  if(false == sign.invalidPasswordContent(input_pw, input_pw_desc))
    return;

  sign.clearInputElement(input_pw, input_pw_desc);
});

input_pw_icon.addEventListener('click', ()=>{
  sign.showPasswordToggle(input_pw_icon, input_pw);
});

btn_signin.addEventListener('click', () => {
  if(sign.checkLoginRequest(input_email, input_email_desc, input_pw, input_pw_desc)){
    console.log("로그인 성공");
    location.href = "../folder/folder.html";
  }
});