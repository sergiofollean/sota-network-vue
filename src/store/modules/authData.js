import firebase from "firebase";
import "firebase/auth";

export default {
  state: {
    loggedInUser:
      localStorage.getItem("userInfo") != null
        ? JSON.parse(localStorage.getItem("userInfo"))
        : null,
    currentUser: false,
    loading: false,
    error: null,
    userData: null,
  },
  getters: {
    loggedInUser: state => state.loggedInUser,
    loading: state => state.loading,
    error: state => state.error,
    userData: state => state.userData,
  },
  mutations: {
    setUserData(state, data) {
      state.userData = data;
    },
    setUser(state, data) {
      state.loggedInUser = data;
      state.loading = false;
      state.error = null;
    },
    setLogout(state) {
      state.loggedInUser = null;
      state.loading = false;
      state.error = null;
      // this.$router.go("/");
    },
    setLoading(state, data) {
      state.loading = data;
      state.error = null;
    },
    setError(state, data) {
      state.error = data;
      state.loggedInUser = null;
      state.loading = false;
    },
    clearError(state) {
      state.error = null;
    }
  },
  actions: {
    setUserData({commit}, user) {
      var firestore = firebase.firestore();

      var userData = {
        email: user.email,
        license: null
      };

      var userDoc = firestore.collection('users').doc(user.uid).get().then(async data => {
        console.log(data.data())
        userData.license = data.data().license;
      });

      commit("setUserData", userData);
    },
    async login({ commit }, data) {
      let userCredential = await firebase
          .auth()
          .signInWithEmailAndPassword(data.email, data.password);
      if (!userCredential.user.emailVerified) {
          commit("setError", 'login.verify');
      }
      commit("setUser", { uid: userCredential.user.uid });
    },
    async verify({ commit }, data) {
      firebase.auth().applyActionCode(data.actionCode).then(async (res) => {
      }).catch((error) => {
        console.log(error);
      });
    },

    signUserUp({ commit }, data) {
      commit("setLoading", true);
      commit("clearError");
      firebase
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password)
        .then(user => {
          commit("setLoading", false);

          const newUser = {
            uid: user.user.uid
          };
          console.log(newUser);
          localStorage.setItem("userInfo", JSON.stringify(newUser));
          commit("setUser", newUser);
        })
        .catch(error => {
          commit("setLoading", false);
          commit("setError", error);
          localStorage.removeItem("userInfo");
          console.log(error);
        });
    },
    signOut({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(
          () => {
            localStorage.removeItem("userInfo");
            commit("setLogout");
          },
          _error => {}
        );
    }
  }
};
