<template>
  <div class="page-wrap">
    <div class="session-form-hold">
      <base-card>
        <v-card-text class="text-center">
          <v-avatar size="60" class="mb-4">
            <img src="@/assets/images/logo.svg" alt="">
          </v-avatar>
          <h5>{{ $t('register.getStarted') }}</h5>
          <div v-if="done">
            <v-card-text>
              {{ $t('register.done')}}
            </v-card-text>
          </div>
          <form v-if="!done">
            <FormError :errors="formErrors.email">
              <v-text-field v-model="email" :label="$t('register.email')" id="email"/>
            </FormError>
            <FormError :errors="formErrors.password">
              <v-text-field
                  v-model="password"
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show ? 'text' : 'password'"
                  name="input-10-2"
                  :label="$t('register.password')"
                  @click:append="show = !show"
              ></v-text-field>
            </FormError>
            <FormError :errors="formErrors.passwordConfirmation">
              <v-text-field
                  v-model="passwordConfirmation"
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show ? 'text' : 'password'"
                  name="input-10-2"
                  :label="$t('register.passwordConfirmation')"
                  value=""
                  @click:append="show = !show"
              ></v-text-field>
            </FormError>
            <FormError :errors="formErrors.firstAddress">
              <v-text-field v-model="firstAddress" :label="$t('register.firstAddress')"/>
            </FormError>
            <FormError :errors="formErrors.secondAddress">
              <v-text-field v-model="secondAddress" :label="$t('register.secondAddress')"/>
            </FormError>
            <FormError :errors="formErrors.city">
              <v-text-field v-model="city" :label="$t('register.city')"/>
            </FormError>
            <FormError :errors="formErrors.state">
              <v-text-field v-model="state" :label="$t('register.state')"/>
            </FormError>
            <FormError :errors="formErrors.zip">
              <v-text-field v-model="zip" :label="$t('register.zip')"/>
            </FormError>

  <!--          <v-checkbox v-model="checkbox1" :label="$t('register.terms')"></v-checkbox>-->

            <v-btn class="mb-4" block color="primary" dark v-on:click="signup">{{ $t('register.register') }}</v-btn>
          </form>
          <div class="flex justify-around flex-wrap">
            <v-btn text small color="primary" to="/user/sign-in">{{ $t('login.login') }}</v-btn>
          </div>
        </v-card-text>
      </base-card>
    </div>
  </div>
</template>
<script>
import firebase, {firestore} from "firebase";
  import FormError from 'vue-form-error';
  import "vue-form-error/dist/FormError.css";
  export default {
    name: "SignUp",
    metaInfo: {
      title: "SignUp",
    },
    components: {
      FormError
    },
    data () {
      return {
        done: false,
        email: '',
        password: '',
        passwordConfirmation: '',
        firstAddress: '',
        secondAddress: '',
        city: '',
        state: '',
        zip: '',
        checkbox1: false,
        show: false,
        formErrors: {},
        errors: {
        }
      }
    },
    methods: {
      async signup() {
        this.formErrors = {};
        if (!this.email) {
          this.formErrors.email = [this.$t('register.errors.empty')];
        } else if (!this.validEmail(this.email)) {
          this.formErrors.email = [this.$t('register.errors.invalidEmail')];
        }
        if (!this.password) {
          this.formErrors.password = [this.$t('register.errors.empty')];
        }
        if (!this.passwordConfirmation) {
          this.formErrors.passwordConfirmation = [this.$t('register.errors.empty')];
        }
        if (!this.firstAddress) {
          this.formErrors.firstAddress = [this.$t('register.errors.empty')];
        }
        if (!this.secondAddress) {
          this.formErrors.secondAddress = [this.$t('register.errors.empty')];
        }
        if (!this.city) {
          this.formErrors.city = [this.$t('register.errors.empty')];
        }
        if (!this.state) {
          this.formErrors.state = [this.$t('register.errors.empty')];
        }
        if (!this.zip) {
          this.formErrors.zip = [this.$t('register.errors.empty')];
        }
        if (this.password !== this.passwordConfirmation) {
          this.formErrors.password = ['Password is not equals to confirmation password.'];
          this.formErrors.passwordConfirmation = ['Password is not equals to confirmation password.'];
        }
        if (Object.values(this.formErrors).length > 0) {
          return;
        }

        try {
          const userCredentials = await firebase.auth().createUserWithEmailAndPassword(
              this.email,
              this.password
          )
          await firebase.firestore().collection('users').doc(userCredentials.user.uid).set({
            email: this.email,
            firstAddress: this.firstAddress,
            secondAddress: this.secondAddress,
            city: this.city,
            state: this.state,
            zip: this.zip,
            license: 'no-license',
            verify: false
          });

          await userCredentials.user.sendEmailVerification();
          this.done = true;
        } catch (e) {
          if (e.code === 'weak-password') {
            console.log('The password provided is too weak.')
          } else if (e.code === 'auth/email-already-in-use') {
            this.formErrors.email = [this.$t('register.errors.exists')];
          }
        }
      },
      validEmail (email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
    },

  }
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