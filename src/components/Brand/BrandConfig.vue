<template>
  <div id="content-route">
    <b-card class="card-top-dash">
      <b-card
        style="border: none; margin-bottom: 1rem"
        header-tag="header"
        title="Daily Report"
        class="shadow-sm"
      >
        <b-row>
          <b-col md="6" offset-md="3">
            <b-form-checkbox
              name="check-button"
              switch
              size="lg"
              variant="green"
            >
              Daily Report
            </b-form-checkbox>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="9" offset-md="3">
            <hr />
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6" offset-md="3">
            <div class="my-2">
              <h4>Store Sales Report</h4>
            </div>
            <b-form-group label="" v-slot="{ ariaDescribedby }">
              <b-form-checkbox-group
                v-model="selected"
                :options="options"
                :aria-describedby="ariaDescribedby"
                switches
                stacked
                size="lg"
              ></b-form-checkbox-group>
            </b-form-group>
          </b-col>
        </b-row>
      </b-card>
      <b-card
        style="border: none; margin-bottom: 1rem"
        header-tag="header"
        title="Daily Report Recipients"
        class="shadow-sm"
      >
        <b-row class="my-1">
          <b-col sm="2">
            <label class="gray" for="input-default"
              >Daily Report Email To</label
            >
          </b-col>
          <b-col sm="10">
            <b-form-input
              id="input-default"
              placeholder="info@riors.id"
              disabled
              description="We will convert your name to lowercase instantly"
              style="border-radius: 2rem"
            ></b-form-input>
            <div class="mt-2 gray">Multiple emails separate by comma</div>
          </b-col>
        </b-row>
      </b-card>
      <div class="d-flex justify-content-end mb-4">
        <b-col
          offset="10"
          lg="1"
          md="1"
          class="d-flex justify-content-end mb-4"
        >
          <b-button pill variant="dark">Save</b-button>
        </b-col>
        <b-col lg="1" md="1" class="d-flex justify-content-center mb-4 mr-4">
          <b-button pill variant="light" size="lg">Close</b-button>
        </b-col>
      </div>
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
</style>
