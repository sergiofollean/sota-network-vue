<template>
  <div class="page-wrap">
    <div class="session-form-hold">
      <base-card>
        <v-progress-linear
          :active="loading"
          :indeterminate="loading"
          absolute
          top
          color="primary"
        ></v-progress-linear>
        <v-card-text class="text-center">
          <v-avatar size="60" class="mb-4">
            <img src="@/assets/images/logo.svg" alt="" />
          </v-avatar>

          <h6 class="text-muted font-semibold mb-10">
            {{ $t('login.enterToAccount') }}
          </h6>
          <v-form>
            <v-text-field
              label="email"
              v-model="email"
              :rules="emailRules"
              required
            />

            <v-text-field
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show ? 'text' : 'password'"
              name="input-10-2"
              label="пароль"
              :rules="nameRules"
              v-model="ePassword"
              @click:append="show = !show"
            ></v-text-field>
            <v-card-text v-if="error" class="error">
              {{ $t(error) }}
            </v-card-text>
            <v-btn class="mt-4 mb-4" @click="formSubmit" block color="primary" dark>
              <v-icon left>mdi-login</v-icon>
              {{ $t('login.login') }}</v-btn>
            <div class="flex justify-around flex-wrap">
              <v-btn text small color="primary" class="mb-2"
                >{{ $t('login.forgotPassword') }}</v-btn
              >
              <v-btn text small color="primary" to="/user/sign-up"
                >{{ $t('login.signUp') }}</v-btn
              >
            </div>
          </v-form>
        </v-card-text>
      </base-card>
    </div>
  </div>
</template>
<script>
import firebase from "firebase/app";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "login",
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: "SignIn Two",
  },
  data() {
    return {
      show: false,
      password: "Password",
      checkbox1: true,
      checkbox2: false,
      email: "",
      ePassword: "",
      loading: false,
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      nameRules: [
        (v) => !!v || "Password is required",
      ],
    };
  },
  computed: {
    ...mapGetters(["loggedInUser", "error"]),
  },
  methods: {
    ...mapActions(["login"]),
    formSubmit() {
      this.login({ email: this.email, password: this.ePassword });
    },
    googleSignIn() {
      const provider = new firebase.auth.GoogleAuthProvider();

      firebase.auth().signInWithPopup(provider)
        .then((result) => {
          const newUser = { uid: result.user.uid };
          localStorage.setItem("userInfo", JSON.stringify(newUser));
          this.$router.push("/")
        })
        .catch((err) => {
          alert('Oops' + err.message);
        });
    }
  },
  watch: {
    loggedInUser(val) {
      if (val && val.uid && val.uid.length > 0) {
        console.log("logged in successfully ");
        this.loading = true;
        setTimeout(() => {
          this.$router.push("/");
        }, 500);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.page-wrap {
  background-color: #242939 !important;
  display: flex;
  align-items: center;
  padding: 40px 1rem;
  height: 100%;
  min-height: 100vh;
}
.session-form-hold {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}
</style>