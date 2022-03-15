<template>
  <div id="content-route">
    <b-card class="card-top-dash">
      <b-card-group deck>
        <b-card
          style="border: none; margin-bottom: 1%"
          header-tag="header"
          title="5090"
        >
          <b-card-text>Registered Customer</b-card-text>
          <b-card-sub-title>By Walk-In and E-Commerce</b-card-sub-title>
        </b-card>
        <b-card
          style="border: none; margin-bottom: 1%"
          header-tag="header"
          title="5090"
        >
          <b-card-text>Registered Customer</b-card-text>
          <b-card-sub-title>By Walk-In and E-Commerce</b-card-sub-title>
        </b-card>
        <b-card
          style="border: none; margin-bottom: 1%"
          header-tag="header"
          title="5090"
        >
          <b-card-text>Registered Customer</b-card-text>
          <b-card-sub-title>By Walk-In and E-Commerce</b-card-sub-title>
        </b-card>
        <b-card
          style="border: none; margin-bottom: 1%"
          header-tag="header"
          title="5090"
        >
          <b-card-text>Registered Customer</b-card-text>
          <b-card-sub-title>By Walk-In and E-Commerce</b-card-sub-title>
        </b-card>
      </b-card-group>
    </b-card>
    <b-card class="card-grap">
      <b-row>
        <b-col md="8" lg="8">
          <b-card class="card-grap-content">
            <div style="display: flex; justify-content: center">
              <button type="button" @click="shuffleData">Shuffle</button>
              <button type="button" @click="switchLegend">
                Swicth legends
              </button>
            </div>
            <DoughnutChart v-bind="doughnutChartProps" />
          </b-card>
        </b-col>
        <b-col md="4" lg="4">
          <b-card class="card-grap-content">
            <h3 class="">Top 10 Product Sold</h3>
            <b-table id="table-dash1" :items="itemsDash1" hover></b-table>
          </b-card>
        </b-col>
        <b-col md="8" lg="8">
          <b-card class="card-grap-content">
            <div style="display: flex; justify-content: center">
              <button type="button" @click="shuffleData">Shuffle</button>
              <button type="button" @click="switchLegend">
                Swicth legends
              </button>
            </div>
            <DoughnutChart v-bind="doughnutChartProps" />
          </b-card>
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
  name: 'App',
  components: { DoughnutChart },
  setup() {
    const dataValues = ref([30, 40, 60, 70, 5]);
    const toggleLegend = ref(true);

    const testData = computed<ChartData<'doughnut'>>(() => ({
      labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
      datasets: [
        {
          data: dataValues.value,
          backgroundColor: [
            '#77CEFF',
            '#0079AF',
            '#123E6B',
            '#97B0C4',
            '#A5C8ED'
          ]
        }
      ]
    }));

    const options = computed<ChartOptions<'doughnut'>>(() => ({
      scales: {
        myScale: {
          type: 'logarithmic',
          position: toggleLegend.value ? 'left' : 'right'
        }
      },
      plugins: {
        legend: {
          position: toggleLegend.value ? 'top' : 'bottom'
        },
        title: {
          display: true,
          text: 'Chart.js Doughnut Chart'
        }
      }
    }));

    const { doughnutChartProps, doughnutChartRef } = useDoughnutChart({
      chartData: testData,
      options
    });

    function shuffleData() {
      dataValues.value = shuffle(dataValues.value);
      // console.log(doughnutChartRef.value.chartInstance);
    }

    function switchLegend() {
      toggleLegend.value = !toggleLegend.value;
    }

    return {
      shuffleData,
      switchLegend,
      testData,
      options,
      doughnutChartRef,
      doughnutChartProps
    };
  },
  data() {
    return {
      isBusy: false,
      itemsDash1: [
        { No: '1', Product: 'MacDonald', Total: 40 },
        { No: '2', Product: 'Shaw', Total: 21 },
        { No: '3', Product: 'Wilson', Total: 89 },
        { No: '4', Product: 'Carney', Total: 38 },
        { No: '6', Product: 'MacDonald', Total: 40 },
        { No: '7', Product: 'Shaw', Total: 21 },
        { No: '8', Product: 'Wilson', Total: 89 },
        { No: '9', Product: 'Carney', Total: 38 },
        { No: '10', Product: 'MacDonald', Total: 40 }
      ]
    };
  }
};
</script>

<style scoped>
.card-top-dash {
  background-color: #eff0f0;
  border: none;
  padding-top: 0;
  margin-top: 2%;
}
.card-grap {
  background-color: #eff0f0;
  border: none;
}
.card-grap-content {
  border: none;
  padding-bottom: 0.5%;
}
</style>
