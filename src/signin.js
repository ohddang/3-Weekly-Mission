import * as sign from './signModule.js'

const input_email = document.getElementById("email");
const input_email_desc = document.getElementById("email_desc");

input_email.addEventListener('focusout', ()=>{
  sign.existTextContent(input_email, input_email_desc);
  sign.invaildTextContent(input_email, input_email_desc);
  sign.existEmail(input_email, input_email_desc);
});