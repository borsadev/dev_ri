<template>
  <div>
    <b-card
      style="border: none"
      img-src="https://i.ibb.co/XV3FPsk/LOGO-RIS2.png"
      header-tag="header"
      title="Login"
      class="text-center card-top-dash"
    >
      <b-card class="card-login">
        <b-row class="d-flex justify-content-center">
          <b-col lg="5" md="5">
            <b-row class="d-flex justify-content-center my-5">
              <b-form-input
                id="input-default"
                placeholder="Username"
                description="We will convert your name to lowercase instantly"
                style="border-radius: 2rem"
              ></b-form-input>
            </b-row>
            <b-row class="d-flex justify-content-center my-5">
              <b-form-input
                id="input-default"
                placeholder="Passsword"
                description="We will convert your name to lowercase instantly"
                style="border-radius: 2rem"
              ></b-form-input>
            </b-row>
            <b-row class="d-flex justify-content-center my-5">
              <b-button block pill variant="dark">Login</b-button>
            </b-row>
          </b-col>
        </b-row>
      </b-card>
    </b-card>
    <div class="footer-login fixed-bottom text-center">
      <h5>
        Copyright &copy;2022. RIORS Integrated System Version
        2.0.0-dev-120222.1414.
      </h5>
    </div>
  </div>
</template>

<script lang="ts">
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export default {
  name: 'Login',
  components: {}
};
</script>

<style scoped>
.card-top-dash {
  background-color: #eff0f0;
  border: none;
  padding-top: 2%;
  padding-left: 25%;
  padding-right: 25%;
}
.card-grap {
  background-color: #eff0f0;
  border: none;
}
.card-login {
  border: none;
  background-color: #eff0f0;
}
.footer-login {
  margin-bottom: 3% !important;
}
.card-grap-content {
  border: none;
}
.switch label input[type='checkbox']:checked + .lever {
  background-color: #141416 !important;
}

.switch label input[type='checkbox']:checked + .lever:after {
  background-color: #ffffff !important;
}
.form-check-input:checked {
  background-color: #141416 !important;
  border-color: #141416 !important;
}
.form-check-input:focus {
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
</style>
