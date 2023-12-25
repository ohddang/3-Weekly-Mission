import * as sign from './signModule.js'

export const input_emails = {
  input : document.getElementById("email"),
  desc : document.getElementById("email_desc")
}

export const input_passwords = {
  input : document.getElementById("pw"),
  desc : document.getElementById("pw_desc"),
  icon : document.getElementById("pw_icon")
}

export const input_passwords_check = {
  input : document.getElementById("pw_check"),
  desc : document.getElementById("pw_check_desc"),
  icon : document.getElementById("pw_check_icon")
}

const btn_signup = document.getElementById("signup");
const form_signup = document.querySelector(".form_signup");

document.addEventListener("DOMContentLoaded", onPageLoad);

sign.InputEmailAddListener(input_emails);
sign.InputPasswordAddListener(input_passwords);

input_emails.input.addEventListener('focusout', ()=>{
  if(false == sign.isEmailExist(input_emails))
    return;
});

input_passwords.icon.addEventListener('click', ()=>{
  sign.showPasswordToggle(input_passwords.icon, input_passwords.input);
});


input_passwords_check.input.addEventListener('focusout', ()=>{
  if(input_passwords.input.value != input_passwords_check.input.value)
    return;

  if(false == sign.existTextContent(input_passwords_check))
    return;

  if(false == sign.invalidPasswordContent(input_passwords_check))
    return;

  sign.clearInputElement(input_passwords_check);
});

input_passwords_check.input.addEventListener('input', ()=>{
  if(input_passwords.input.value != input_passwords_check.input.value)
  {
    input_passwords_check.input.classList.add("input_login_error");
    input_passwords_check.desc.textContent = sign.TEXT_PASSWORD_DIFFERENT;
  }
  else{
    sign.clearInputElement(input_passwords_check);
  }
})

input_passwords_check.icon.addEventListener('click', ()=>{
  sign.showPasswordToggle(input_passwords_check.icon, input_passwords_check.input);
});

// btn_signup.addEventListener('click', ()=>{
//   sign.checkSignupRequest(input_email, input_pw, input_pw_check);
// });

// btn_signup.addEventListener('keydown', (event)=>{
//   if(event.keyCode == 13){
//     sign.checkSignupRequest(input_email, input_pw, input_pw_check);
//   }
// });

form_signup.addEventListener('submit', (event) => {
  console.log("submit");
  event.preventDefault();  
  requestSignup(event.target);
})

function onPageLoad(){
  if(sign.accessTokenExist()){
    location.href = "../folder/folder.html";
  }   
}

async function requestSignup(target){
  const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-up",{
    method: 'POST',
    headers:{ "Content-type": "application/json" },
    body: JSON.stringify({
      email: target['email'].value,
      password: target['password'].value,
    }),
  }).then(
    rsp => {
      if(rsp.status === 200) {
        window.localStorage.setItem('accessToken', result.data['accessToken']);
        location.href = "../folder/folder.html";
      }
    }
  ).catch(error => console.log(error));
}