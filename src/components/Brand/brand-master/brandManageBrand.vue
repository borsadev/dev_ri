<template>
  <div id="content-route">
    <b-card class="card-top-dash">
      <b-card
        style="border: none; margin-bottom: 1rem"
        header-tag="header"
        class="shadow-sm"
      >
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="4"
          label-cols-lg="3"
          content-cols-sm
          content-cols-lg="9"
          label="Code"
          label-for="input-horizontal"
          class="label-g"
        >
          <b-form-input
            id="input-horizontal"
            placeholder="RIORS"
            disabled
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="4"
          label-cols-lg="3"
          content-cols-sm
          content-cols-lg="9"
          label="Name"
          label-for="input-horizontal"
          class="label-g"
        >
          <b-form-input
            id="input-horizontal"
            placeholder="RIORS"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="4"
          label-cols-lg="3"
          content-cols-sm
          content-cols-lg="9"
          label="Address"
          label-for="input-horizontal"
          class="label-g"
        >
          <b-form-textarea
            id="input-horizontal"
            rows="3"
            placeholder="Jl. Modern Golf Raya (RUKO COSTA RICA CK 1 NO 10) RT 001 RW 006 Kelapa Indah Kecamatan Tangerang, Kota Tangerang Selatan Banten 15117 Indonesia"
            disabled
            class="input-xl"
          ></b-form-textarea>
        </b-form-group>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="4"
          label-cols-lg="3"
          content-cols-sm
          content-cols-lg="9"
          label="Province"
          label-for="input-horizontal"
          class="label-g"
        >
          <b-form-input
            id="input-horizontal"
            placeholder="Banten"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="4"
          label-cols-lg="3"
          content-cols-sm
          content-cols-lg="9"
          label="City"
          label-for="input-horizontal"
          class="label-g"
        >
          <b-form-input
            id="input-horizontal"
            placeholder="Kota Tangerang"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="4"
          label-cols-lg="3"
          content-cols-sm
          content-cols-lg="9"
          label="Zip Code"
          label-for="input-horizontal"
          class="label-g"
        >
          <b-form-input
            id="input-horizontal"
            placeholder="15117"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="4"
          label-cols-lg="3"
          content-cols-sm
          content-cols-lg="9"
          label="Phone Number"
          label-for="input-horizontal"
          class="label-g"
        >
          <b-form-input
            id="input-horizontal"
            placeholder="021-59728296"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="4"
          label-cols-lg="3"
          content-cols-sm
          content-cols-lg="9"
          label="Email"
          label-for="input-horizontal"
          class="label-g"
        >
          <b-form-input
            id="input-horizontal"
            placeholder="bizdev@riors.id"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="4"
          label-cols-lg="3"
          content-cols-sm
          content-cols-lg="9"
          label="Person In Charge"
          label-for="input-horizontal"
          class="label-g"
        >
          <b-form-input
            id="input-horizontal"
            placeholder="Yudhi Setiawie"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="4"
          label-cols-lg="3"
          content-cols-sm
          content-cols-lg="9"
          label-for="input-horizontal"
          class="label-g"
        >
          <b-form-checkbox switch> Active </b-form-checkbox>
        </b-form-group>
      </b-card>
    </b-card>
  </div>
</template>

<script lang="ts">
import { computed, ref } from 'vue';
import { shuffle } from 'lodash';
import { DoughnutChart, useDoughnutChart } from 'vue-chart-3';
import { Chart, ChartData, ChartOptions, registerables } from 'chart.js';

export default {
  name: 'Brand Config',
  components: {},
  data() {
    return {
      selected: [], // Must be an array reference!
      options: [
        { text: 'Store Sales Report', value: 'Store Sales Report' },
        { text: 'Store Stock Report', value: 'Store Stock Report' },
        { text: 'Brand Stock Report', value: 'Brand Stock Report' }
      ]
    };
  }
};
</script>

<style scoped>
.card-top-dash {
  background-color: #eff0f0;
  border: none;
  padding-top: 2%;
}
.card-grap {
  background-color: #eff0f0;
  border: none;
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
.label-g {
  font-size: 14px !important;
}
.input-xl {
  min-height: calc(1.5em + 1rem + 2px);
}
</style>
