// get the cookie from the browser
export default function isAuthenticated (name) {
  const cookie = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return cookie&&cookie[2];
}
