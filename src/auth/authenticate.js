import authData from '../store/modules/authData';

export default (to, from, next) => {
  console.log(authData.actions.checkUser());
  if (
    localStorage.getItem('userInfo') != null &&
    localStorage.getItem('userInfo').length > 0
  ) {
    next()
  } else {
    localStorage.removeItem('userInfo')
    next('/app/sessions/sign-in-two')
  }
}
