// check whether an email address is valid or not 
export default function validateEmail (email_address) {

  var re = /^\w+[\w-.]*@\w+((-\w+)|(\w*)).[a-z]{2,3}$/;
  return re.test(String(email_address));
}