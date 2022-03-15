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
          label="Brand"
          label-for="input-horizontal"
          class="label-g"
        >
          <b-form-input
            id="input-horizontal"
            placeholder="RIORS"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="4"
          label-cols-lg="3"
          content-cols-sm
          content-cols-lg="1"
          label="Price"
          label-for="input-horizontal"
          class="label-g"
        >
          <b-input-group>
            <b-form-input></b-form-input>
          </b-input-group>
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
          <!-- <b-form-checkbox switch> Default Warehouse </b-form-checkbox>
          <b-form-checkbox switch> For Brand Sales </b-form-checkbox> -->
          <b-form-checkbox switch> Active </b-form-checkbox>
        </b-form-group>

        <div class="d-flex justify-content-end">
          <!-- <b-button pill variant="primary" class="mx-1">New</b-button> -->
          <b-button pill variant="dark" class="mx-1">Save</b-button>
          <!-- <b-button pill variant="danger" class="mx-1">Delete</b-button> -->
          <b-button
            pill
            variant="outline-dark"
            href="/brand-product-service"
            class="mx-1"
            >Close</b-button
          >
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
  font-size: 1rem !important;
}
.input-xl {
  min-height: calc(1.5em + 1rem + 2px);
}
</style>
