<template>
  <div id="content-route">
    <b-card class="card-top-dash">
      <!-- <div class="d-flex justify-content-end mb-4">
        <b-button pill variant="dark">Add Product</b-button>
      </div> -->
      <b-row class="d-flex justify-content-center mb-4">
        <b-col>
          <section class="section card mb-5 h-100">
            <div class="card-body">
              <h5 class="pb-1">Stock Report</h5>
              <hr />
              <b-list-group-item>Global Stock Report</b-list-group-item>
              <b-list-group-item>Specific Stock Report</b-list-group-item>
            </div>
          </section>
        </b-col>
        <b-col>
          <section class="section card mb-5 h-100">
            <div class="card-body">
              <h5 class="pb-1">Stock Mutation Report</h5>
              <hr />
              <b-list-group-item>Stock Mutation Report</b-list-group-item>
              <b-list-group-item>Bad Stock Mutation Report</b-list-group-item>
            </div>
          </section>
        </b-col>
        <b-col>
          <section class="section card mb-5 h-100">
            <div class="card-body">
              <h5 class="pb-1">Purchase Report</h5>
              <hr />
              <b-list-group-item>Purchase Report</b-list-group-item>
            </div>
          </section>
        </b-col>
      </b-row>
      <b-row class="d-flex content-justify-start">
        <b-col lg="4" md="4">
          <section class="section card mb-5 h-100">
            <div class="card-body">
              <h5 class="pb-1">Sales Report</h5>
              <hr />
              <b-list-group-item>Daily Sales Report</b-list-group-item>
              <b-list-group-item>Weekly Sales Report</b-list-group-item>
              <b-list-group-item>Monthly Sales Report</b-list-group-item>
              <b-list-group-item>Annualy Sales Report</b-list-group-item>
            </div>
          </section>
        </b-col>
        <b-col lg="4" md="4">
          <section class="section card mb-5 h-100">
            <div class="card-body">
              <h5 class="pb-1">Brand Sales Report</h5>
              <hr />
              <b-list-group-item>Daily Brand Sales</b-list-group-item>
              <b-list-group-item>Report (Only Sales Type)</b-list-group-item>
            </div>
          </section>
        </b-col>
      </b-row>
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
.list-group-item{
  border: none !important;
  font-size: 15px !important;
  font-weight: 400 !important;
}
.list-group-item:hover{
  background-color: #141416 !important;
  color: #fff !important
}
</style>
