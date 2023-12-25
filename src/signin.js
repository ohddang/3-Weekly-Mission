import * as sign from './signModule.js'

export const input_emails = {
  input : document.getElementById("email"),
  desc : document.getElementById("email_desc")
}

export const input_passwords = {
  input : document.getElementById("pw"),
  desc : document.getElementById("pw_desc")
}

const input_pw_icon = document.querySelector(".input_password_toggle");
const form_login = document.querySelector(".form_login");

document.addEventListener("DOMContentLoaded", onPageLoad);

sign.InputEmailAddListener(input_emails);
sign.InputPasswordAddListener(input_passwords);

input_pw_icon.addEventListener('click', ()=>{
  sign.showPasswordToggle(input_pw_icon, input_passwords.input);
});

// btn_signin.addEventListener('click', (event) => {
//   if(sign.checkLoginRequest(input_email, input_email_desc, input_pw, input_pw_desc)){
//     location.href = "../folder/folder.html";
//   }
// });

form_login.addEventListener('submit', (event) => {
  event.preventDefault();  
  requestlogin(event.target);
})

function onPageLoad(){
  if(sign.accessTokenExist()){
    location.href = "../folder/folder.html";
  }   
}

async function requestlogin(target){
  const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in",{
    method: 'POST',
    headers:{ "Content-type": "application/json" },
    body: JSON.stringify({
      email: target['email'].value,
      password: target['password'].value,
    }),
  }).then(
    rsp => {
      if(rsp.status === 200){
        console.log(rsp);
        return rsp.json();
      }
    }
  ).then(
    result => {
      window.localStorage.setItem('accessToken', result.data['accessToken']);
      location.href = "../folder/folder.html";
    }
  ).catch(error => console.log(error));
}