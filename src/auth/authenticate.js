// import authData from '../store/modules/authData';
import store from '../store';
import firebase, {storage} from "firebase/app";
import "firebase/auth";

export default (to, from, next) => {

  firebase.auth().onAuthStateChanged(async user => {
    if (user) {
      // authData.actions.getUserData();
      store.dispatch('setUserData', user);
      next();
    } else {
      next('/user/sign-in');
    }
  });
}
