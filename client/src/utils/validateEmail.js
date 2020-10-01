// check whether an email address is valid or not 
export default function validateEmail (email_address) {

  return re.test(String(email_address));
}