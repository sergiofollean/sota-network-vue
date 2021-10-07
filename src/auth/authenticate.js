import authData from '../store/modules/authData';
import firebase from "firebase/app";
import "firebase/auth";

export default (to, from, next) => {

  firebase.auth().onAuthStateChanged(async user => {
    if (user) {
      next();
    } else {
      next('/user/sign-in');
    }
  });
}
