<template>
  <div class="cover">
    <div class="leftInfo">
      <div class="container">
        <app-nav></app-nav>

        <Section>
          <h1 class="sign-up">Login</h1>
          <div class="line"></div>
          <p class="para">
            Sign in to start managing your inventory like a boss.
          </p>
        </Section>

        <form>
          <label for="Email">Email</label>
          <input type="text" />
          <label for="Password">Password</label>
          <input type="text" />
          <app-btn class="loginbtn" :text="signUp"></app-btn>
          <p class="already-account">
            Already have an account? <span><a href="#">Sign up</a></span>
          </p>
        </form>
      </div>
      <div class="subFlex">
        <figure>
          <img
            src="../assets/MobileLogin.svg"
            alt="animated person holding a phone"
            class="subscriberImg"
          />
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationItemsVue from "@/components/NavigationItems.vue";
import ButtonVue from "@/components/Button.vue";
export default {
  components: {
    "app-nav": NavigationItemsVue,
    "app-btn": ButtonVue,
  },
  name: "SignUp",
  data() {
    return {
      signUp: "Sign up",
    };
  },
};
</script>

<style scoped>
.cover {
  background: #873AB6;
  max-width: 1328px;
}

.container {
  background: #f5f7fc;
  width: 467px;
  padding: 0px 56px;
}

.leftInfo {
  display: flex;
}

.sign-up {
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 130%;
  /* identical to box height, or 52px */
  letter-spacing: -0.06em;
  color: #1d2128;
  margin-top: 88.83px;
}

.line {
  background: #873AB6;
  width: 24px;
  height: 5px;
}

.para {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  /* or 27px */
  color: #747880;
  margin: 24px 0px 48px 0px;
  max-width: 248px;
}

label {
  font-family: "Lato";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */
  color: #3a3f46;
}

input {
  width: 100%;
  max-width: 375px;
  height: 48px;
  background: #ffffff;
  border: 1px solid #ced1d9;
  border-radius: 4px;
  margin-bottom: 16px;
  display: block;
}

.already-account {
  font-family: "Lato";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  /* identical to box height, or 27px */
  color: #000000;
  margin-top: 16px;
}

span {
  color: #2656D1;
  font-family: "Lato";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  /* identical to box height, or 27px */
  color: #000000;
}

span a {
  text-decoration: none;
}

.subFlex {
  display: flex;
  justify-content: center;
  text-align: center;
  width: 65%;
}

.subscriberImg {
  width: 90%;
  max-width: 587px;
  text-align: center;
  margin-top: 142px;
}

@media only screen and (max-width: 375px) {
  /* .container {
    width: calc(100% - 112px);
    margin: 0 auto;
  } */

  .rightInfo {
    display: none;
  }

  .subFlex {
    display: none;
  }
}
</style>

