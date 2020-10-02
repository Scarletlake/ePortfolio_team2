// check whether an email address is valid or not 
export default function validateEmail (email_address) {

  var re = /^([A-Za-z0-9_\-.\u4e00-\u9fa5])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,8})$/;
  return re.test(String(email_address));
}
