<template>
  <div id="content-route">
    <b-card class="card-top-dash">
      <b-card
        style="border: none; margin-bottom: 1rem"
        header-tag="header"
        class="shadow-sm"
      >
        <b-row class="my-4">
          <b-col sm="2">
            <label class="gray" for="input-default">Current Password</label>
          </b-col>
          <b-col sm="10">
            <b-form-input
              id="input-default"
              placeholder="info@riors.id"
              description="We will convert your name to lowercase instantly"
              style="border-radius: 2rem"
            ></b-form-input>
          </b-col>
        </b-row>
        <b-row class="my-4">
          <b-col sm="2">
            <label class="gray" for="input-default">New Password</label>
          </b-col>
          <b-col sm="10">
            <b-form-input
              id="input-default"
              placeholder="info@riors.id"
              description="We will convert your name to lowercase instantly"
              style="border-radius: 2rem"
            ></b-form-input>
          </b-col>
        </b-row>
        <b-row class="my-4">
          <b-col sm="2">
            <label class="gray" for="input-default">Confirm New Password</label>
          </b-col>
          <b-col sm="10">
            <b-form-input
              id="input-default"
              placeholder="info@riors.id"
              description="We will convert your name to lowercase instantly"
              style="border-radius: 2rem"
            ></b-form-input>
          </b-col>
        </b-row>
        <div class="d-flex justify-content-end mb-4">
          <b-button pill variant="dark">Apply</b-button>
        </div>
      </b-card>
    </b-card>
  </div>
</template>

<script lang="ts">
import { computed, ref } from 'vue';
import { shuffle } from 'lodash';
import { DoughnutChart, useDoughnutChart } from 'vue-chart-3';
import { Chart, ChartData, ChartOptions, registerables } from 'chart.js';

Chart.register(...registerables);

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
</style>
