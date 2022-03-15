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
          label="Sales Type"
          label-for="input-horizontal"
          class="label-g"
        >
          <b-form-select
            id="inline-form-custom-select-pref"
            class="mb-2 mr-sm-2 mb-sm-0"
            :options="[
              { text: 'Marketplace', value: null },
              'Flagship',
              'Factory',
              'Website'
            ]"
            :value="null"
          ></b-form-select>
        </b-form-group>

        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="4"
          label-cols-lg="3"
          content-cols-sm
          content-cols-lg="9"
          label="Marketplace"
          label-for="input-horizontal"
          class="label-g"
        >
          <b-form-select
            id="inline-form-custom-select-pref"
            class="mb-2 mr-sm-2 mb-sm-0"
            :options="[
              { text: 'NA', value: null },
              'Flagship',
              'Factory',
              'Website'
            ]"
            :value="null"
          ></b-form-select>
        </b-form-group>

        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="4"
          label-cols-lg="3"
          content-cols-sm
          content-cols-lg="9"
          label=""
          label-for="input-horizontal"
          class="label-g"
        >
          <b-row>
            <b-col>
              <b-form-group
                id="fieldset-horizontal"
                label="App ID"
                label-for="input-horizontal"
                description="Ask your marketplace developer to get App ID"
                label-class="mb-2"
              >
                <b-form-input
                  id="input-horizontal"
                  placeholder=""
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group
                id="fieldset-horizontal"
                label="Shop ID"
                label-for="input-horizontal"
                description="Ask your marketplace developer to get Shop ID"
                label-class="mb-2"
              >
                <b-form-input
                  id="input-horizontal"
                  placeholder=""
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group
                id="fieldset-horizontal"
                label="Client ID"
                label-for="input-horizontal"
                label-class="mb-2"
              >
                <b-form-input
                  id="input-horizontal"
                  placeholder=""
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group
                id="fieldset-horizontal"
                label="Client Secret"
                label-for="input-horizontal"
                label-class="mb-2"
              >
                <b-form-input
                  id="input-horizontal"
                  placeholder=""
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
        </b-form-group>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="4"
          label-cols-lg="3"
          content-cols-sm
          content-cols-lg="9"
          label="Store Code"
          label-for="input-horizontal"
          class="label-g"
        >
          <b-form-input
            id="input-horizontal"
            placeholder="RIORSBRANDSTORE"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="4"
          label-cols-lg="3"
          content-cols-sm
          content-cols-lg="9"
          label="Store Name"
          label-for="input-horizontal"
          class="label-g"
        >
          <b-form-input
            id="input-horizontal"
            placeholder="RIORS Brand Store"
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
            class="input-xl"
          ></b-form-textarea>
        </b-form-group>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="4"
          label-cols-lg="3"
          content-cols-sm
          content-cols-lg="9"
          label="Country"
          label-for="input-horizontal"
          class="label-g"
        >
          <b-form-input
            id="input-horizontal"
            placeholder=""
          ></b-form-input>
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
            placeholder=""
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
            placeholder=""
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="4"
          label-cols-lg="3"
          content-cols-sm
          content-cols-lg="9"
          label="Suburb"
          label-for="input-horizontal"
          class="label-g"
        >
          <b-form-input
            id="input-horizontal"
            placeholder=""
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="4"
          label-cols-lg="3"
          content-cols-sm
          content-cols-lg="9"
          label="Area"
          label-for="input-horizontal"
          class="label-g"
        >
          <b-form-input
            id="input-horizontal"
            placeholder=""
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
            placeholder=""
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="4"
          label-cols-lg="3"
          content-cols-sm
          content-cols-lg="9"
          label="Location"
          label-for="input-horizontal"
          class="label-g"
        >
          <b-form-input
            id="input-horizontal"
            placeholder=""
          ></b-form-input>
          <b-row>

          </b-row>
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
            placeholder="5959599595"
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
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="4"
          label-cols-lg="3"
          content-cols-sm
          content-cols-lg="9"
          label=""
          label-for="input-horizontal"
          class="label-g"
        >
          <b-row>
            <b-col>
              <b-form-group
                id="fieldset-horizontal"
                label="Fee 1"
                label-for="input-horizontal"
                label-class="mb-2"
              >
                <b-form-input
                  id="input-horizontal"
                  placeholder=""
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group
                id="fieldset-horizontal"
                label="Fee 2"
                label-for="input-horizontal"
                label-class="mb-2"
              >
                <b-form-input
                  id="input-horizontal"
                  placeholder=""
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group
                id="fieldset-horizontal"
                label="Fee 3"
                label-for="input-horizontal"
                label-class="mb-2"
              >
                <b-form-input
                  id="input-horizontal"
                  placeholder=""
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
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
          <b-form-checkbox switch> Use Shift </b-form-checkbox>
          <b-form-checkbox switch> Event Store </b-form-checkbox>
          <b-form-checkbox switch> Active </b-form-checkbox>
                    <b-form-checkbox switch> Header Discount </b-form-checkbox>

        </b-form-group>

        <div class="d-flex justify-content-end">
          <b-button pill variant="primary" class="mx-1">New</b-button>
          <b-button pill variant="dark" class="mx-1">Save</b-button>
          <!-- <b-button pill variant="danger" class="mx-1">Delete</b-button> -->
          <b-button
            pill
            variant="outline-dark"
            href="/brand-master-store-concept"
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


const foods = [
  { text: 'Select One', value: null },
  'Carrots',
  'Beans',
  'Tomatoes',
  'Corn'
];

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
