<template>
  <div id="content-route">
    <b-card class="card-top-dash">
      <b-row class="d-flex justify-content-center mb-4">
        <b-col>
          <section class="section card mb-5 h-100">
            <div class="card-body">
              <h5 class="pb-1">Brand</h5>
              <hr />
              <b-list-group-item href="/brand-manage-brand"
                >Manage Brand</b-list-group-item
              >
            </div>
          </section>
        </b-col>
        <b-col>
          <section class="section card mb-5 h-100">
            <div class="card-body">
              <h5 class="pb-1">Brand Warehouse</h5>
              <hr />
              <b-list-group-item href="/brand-manage-warehouse"
                >Manage Brand Warehouse</b-list-group-item
              >
              <b-list-group-item href="/brand-warehouse">Brand Warehouse</b-list-group-item>
            </div>
          </section>
        </b-col>
        <b-col>
          <section class="section card mb-5 h-100">
            <div class="card-body">
              <h5 class="pb-1">Store</h5>
              <hr />
              <b-list-group-item href="/brand-master-store">Manage Store</b-list-group-item>
            </div>
          </section>
        </b-col>
      </b-row>
      <b-row class="d-flex justify-content-center">
        <b-col>
          <section class="section card mb-5 h-100">
            <div class="card-body">
              <h5 class="pb-1">Customer</h5>
              <hr />
              <b-list-group-item
                href="/brand-master-customer-class">Manage Customer Classification</b-list-group-item
              >
              <b-list-group-item href="/brand-master-customer-membership">Manage Customer Membership</b-list-group-item>
              <b-list-group-item href="/brand-master-customer-list">Customer List</b-list-group-item>
            </div>
          </section>
        </b-col>
        <b-col>
          <section class="section card mb-5 h-100">
            <div class="card-body">
              <h5 class="pb-1">Collecttions</h5>
              <hr />
              <b-list-group-item href="/brand-master-collection">Collections List</b-list-group-item>
            </div>
          </section>
        </b-col>
        <b-col>
          <section class="section card mb-5 h-100">
            <div class="card-body">
              <h5 class="pb-1">Delivery Courier</h5>
              <hr />
              <b-list-group-item href="/brand-master-delivery">Manage Delivery Courier</b-list-group-item>
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

//Chart.register(...registerables);

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
.list-group-item {
  border: none !important;
  font-size: 14px !important;
  font-weight: 400 !important;
}
.list-group-item:hover {
  background-color: #141416 !important;
  color: #fff !important;
}
</style>
