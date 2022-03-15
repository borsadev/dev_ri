<template>
  <div id="content-route">
    <b-card class="card-top-dash">
      <b-card
        style="border: none; margin-bottom: 1rem"
        header-tag="header"
        class="shadow-sm"
      >
        <b-accordion flush>
          <b-accordion-item title="Product Title">
            <b-form-group
              id="fieldset-horizontal"
              label-cols-sm="4"
              label-cols-lg="3"
              content-cols-sm
              content-cols-lg="9"
              label="Name"
              label-for="input-horizontal"
              class="label-g"
              description="Minimum length is 5 characters and maximum length is 100 characters"
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
              content-cols-lg="9"
              label="SKU"
              label-for="input-horizontal"
              class="label-g"
              description="Stock Keeping Unit"
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
              content-cols-lg="9"
              label="Slug"
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
              content-cols-lg="9"
              label-for="input-horizontal"
              label="Status"
              class="label-g"
            >
              <!-- <b-form-checkbox switch> Default Warehouse </b-form-checkbox>
          <b-form-checkbox switch> For Brand Sales </b-form-checkbox> -->
              <b-form-checkbox switch> Active </b-form-checkbox>
            </b-form-group>
            <b-form-group
              id="fieldset-horizontal"
              label-cols-sm="4"
              label-cols-lg="3"
              content-cols-sm
              content-cols-lg="9"
              label-for="input-horizontal"
              label="Product Default"
              class="label-g"
            >
              <b-form-select
                id="inline-form-custom-select-pref"
                class="mb-2 mr-sm-2 mb-sm-0"
                :options="[
                  { text: 'RIORS & Club', value: null },
                  'PSIS Semarang',
                  'Factory'
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
              label-for="input-horizontal"
              label="Product Package"
              class="label-g"
            >
              <!-- <b-form-checkbox switch> Default Warehouse </b-form-checkbox>
          <b-form-checkbox switch> For Brand Sales </b-form-checkbox> -->
              <b-form-checkbox switch> </b-form-checkbox>
            </b-form-group>
            <b-form-group
              id="fieldset-horizontal"
              label-cols-sm="4"
              label-cols-lg="3"
              content-cols-sm
              content-cols-lg="9"
              label-for="input-horizontal"
              label="Publish"
              class="label-g"
            >
              <!-- <b-form-checkbox switch> Default Warehouse </b-form-checkbox>
          <b-form-checkbox switch> For Brand Sales </b-form-checkbox> -->
              <b-form-checkbox switch> </b-form-checkbox>
            </b-form-group>
            <b-form-group
              id="fieldset-horizontal"
              label-cols-sm="4"
              label-cols-lg="3"
              content-cols-sm
              content-cols-lg="9"
              label-for="input-horizontal"
              label="Upload to Instagram Catalogue"
              class="label-g"
            >
              <b-button variant="dark" pill>
                <i class="bx bxl-instagram-alt">
                  Upload to Instagram Catalogue
                </i>
              </b-button>
            </b-form-group>
          </b-accordion-item>
          <b-accordion-item title="Product Master">
            <b-form-group
              id="fieldset-horizontal"
              label-cols-sm="4"
              label-cols-lg="3"
              content-cols-sm
              content-cols-lg="9"
              label-for="input-horizontal"
              label="Season"
              class="label-g"
            >
              <b-form-select
                id="inline-form-custom-select-pref"
                class="mb-2 mr-sm-2 mb-sm-0"
                :options="[
                  { text: '', value: null },
                  'PSIS Semarang',
                  'Factory'
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
              label-for="input-horizontal"
              label="Season"
              class="label-g"
            >
              <b-form-select
                id="inline-form-custom-select-pref"
                class="mb-2 mr-sm-2 mb-sm-0"
                :options="[{ text: '', value: null }, 'Male', 'Female']"
                :value="null"
              ></b-form-select>
            </b-form-group>
            <b-form-group
              id="fieldset-horizontal"
              label-cols-sm="4"
              label-cols-lg="3"
              content-cols-sm
              content-cols-lg="9"
              label-for="input-horizontal"
              label="Product Style"
              class="label-g"
            >
              <b-form-select
                id="inline-form-custom-select-pref"
                class="mb-2 mr-sm-2 mb-sm-0"
                :options="[{ text: '', value: null }, 'Male', 'Female']"
                :value="null"
              ></b-form-select>
            </b-form-group>
            <b-form-group
              id="fieldset-horizontal"
              label-cols-sm="4"
              label-cols-lg="3"
              content-cols-sm
              content-cols-lg="9"
              label-for="input-horizontal"
              label="Product Classification"
              class="label-g"
            >
              <b-form-select
                id="inline-form-custom-select-pref"
                class="mb-2 mr-sm-2 mb-sm-0"
                :options="[{ text: '', value: null }, 'Male', 'Female']"
                :value="null"
              ></b-form-select>
            </b-form-group>
            <b-form-group
              id="fieldset-horizontal"
              label-cols-sm="4"
              label-cols-lg="3"
              content-cols-sm
              content-cols-lg="9"
              label-for="input-horizontal"
              label="Product Category"
              class="label-g"
            >
              <b-form-select
                id="inline-form-custom-select-pref"
                class="mb-2 mr-sm-2 mb-sm-0"
                :options="[{ text: '', value: null }, 'Male', 'Female']"
                :value="null"
              ></b-form-select>
            </b-form-group>
            <b-form-group
              id="fieldset-horizontal"
              label-cols-sm="4"
              label-cols-lg="3"
              content-cols-sm
              content-cols-lg="9"
              label-for="input-horizontal"
              label="Product Type"
              class="label-g"
            >
              <b-form-select
                id="inline-form-custom-select-pref"
                class="mb-2 mr-sm-2 mb-sm-0"
                :options="[{ text: '', value: null }, 'Male', 'Female']"
                :value="null"
              ></b-form-select>
            </b-form-group>
          </b-accordion-item>
          <b-accordion-item title="Product Filter">
            <b-form-group
              id="fieldset-horizontal"
              label-cols-sm="4"
              label-cols-lg="3"
              content-cols-sm
              content-cols-lg="9"
              label-for="input-horizontal"
              label="Color"
              class="label-g"
            >
              <b-form-select
                id="inline-form-custom-select-pref"
                class="mb-2 mr-sm-2 mb-sm-0"
                :options="[{ text: '', value: null }, 'Male', 'Female']"
                :value="null"
              ></b-form-select>
            </b-form-group>
            <b-form-group
              id="fieldset-horizontal"
              label-cols-sm="4"
              label-cols-lg="3"
              content-cols-sm
              content-cols-lg="9"
              label-for="input-horizontal"
              label="Fitting"
              class="label-g"
            >
              <b-form-select
                id="inline-form-custom-select-pref"
                class="mb-2 mr-sm-2 mb-sm-0"
                :options="[{ text: '', value: null }, 'Male', 'Female']"
                :value="null"
              ></b-form-select>
            </b-form-group>
            <b-form-group
              id="fieldset-horizontal"
              label-cols-sm="4"
              label-cols-lg="3"
              content-cols-sm
              content-cols-lg="9"
              label-for="input-horizontal"
              label="Sports"
              class="label-g"
            >
              <b-form-select
                id="inline-form-custom-select-pref"
                class="mb-2 mr-sm-2 mb-sm-0"
                :options="[{ text: '', value: null }, 'Male', 'Female']"
                :value="null"
              ></b-form-select>
            </b-form-group>
            <b-form-group
              id="fieldset-horizontal"
              label-cols-sm="4"
              label-cols-lg="3"
              content-cols-sm
              content-cols-lg="9"
              label-for="input-horizontal"
              label="Technology"
              class="label-g"
            >
              <b-form-select
                id="inline-form-custom-select-pref"
                class="mb-2 mr-sm-2 mb-sm-0"
                :options="[{ text: '', value: null }, 'Male', 'Female']"
                :value="null"
              ></b-form-select>
            </b-form-group>
            <b-form-group
              id="fieldset-horizontal"
              label-cols-sm="4"
              label-cols-lg="3"
              content-cols-sm
              content-cols-lg="9"
              label-for="input-horizontal"
              label="Necklines"
              class="label-g"
            >
              <b-form-select
                id="inline-form-custom-select-pref"
                class="mb-2 mr-sm-2 mb-sm-0"
                :options="[{ text: '', value: null }, 'Male', 'Female']"
                :value="null"
              ></b-form-select>
            </b-form-group>
            <b-form-group
              id="fieldset-horizontal"
              label-cols-sm="4"
              label-cols-lg="3"
              content-cols-sm
              content-cols-lg="9"
              label-for="input-horizontal"
              label="Sleeve"
              class="label-g"
            >
              <b-form-select
                id="inline-form-custom-select-pref"
                class="mb-2 mr-sm-2 mb-sm-0"
                :options="[{ text: '', value: null }, 'Male', 'Female']"
                :value="null"
              ></b-form-select>
            </b-form-group>
            <b-form-group
              id="fieldset-horizontal"
              label-cols-sm="4"
              label-cols-lg="3"
              content-cols-sm
              content-cols-lg="9"
              label-for="input-horizontal"
              label="Sleeve Length"
              class="label-g"
            >
              <b-form-select
                id="inline-form-custom-select-pref"
                class="mb-2 mr-sm-2 mb-sm-0"
                :options="[{ text: '', value: null }, 'Male', 'Female']"
                :value="null"
              ></b-form-select>
            </b-form-group>
            <b-form-group
              id="fieldset-horizontal"
              label-cols-sm="4"
              label-cols-lg="3"
              content-cols-sm
              content-cols-lg="9"
              label-for="input-horizontal"
              label="Pants Length"
              class="label-g"
            >
              <b-form-select
                id="inline-form-custom-select-pref"
                class="mb-2 mr-sm-2 mb-sm-0"
                :options="[{ text: '', value: null }, 'Male', 'Female']"
                :value="null"
              ></b-form-select>
            </b-form-group>
            <b-form-group
              id="fieldset-horizontal"
              label-cols-sm="4"
              label-cols-lg="3"
              content-cols-sm
              content-cols-lg="9"
              label-for="input-horizontal"
              label="Colections"
              class="label-g"
            >
              <b-form-select
                id="inline-form-custom-select-pref"
                class="mb-2 mr-sm-2 mb-sm-0"
                :options="[{ text: '', value: null }, 'Male', 'Female']"
                :value="null"
              ></b-form-select>
            </b-form-group>
            <b-form-group
              id="fieldset-horizontal"
              label-cols-sm="4"
              label-cols-lg="3"
              content-cols-sm
              content-cols-lg="9"
              label-for="input-horizontal"
              label="Series"
              class="label-g"
            >
              <b-form-select
                id="inline-form-custom-select-pref"
                class="mb-2 mr-sm-2 mb-sm-0"
                :options="[{ text: '', value: null }, 'Male', 'Female']"
                :value="null"
              ></b-form-select>
            </b-form-group>
            <b-form-group
              id="fieldset-horizontal"
              label-cols-sm="4"
              label-cols-lg="3"
              content-cols-sm
              content-cols-lg="9"
              label-for="input-horizontal"
              label="Related"
              class="label-g"
            >
              <b-form-select
                id="inline-form-custom-select-pref"
                class="mb-2 mr-sm-2 mb-sm-0"
                :options="[{ text: '', value: null }, 'Male', 'Female']"
                :value="null"
              ></b-form-select>
            </b-form-group>
          </b-accordion-item>
          <b-accordion-item title="Product Description">
            <b-form-group
              id="fieldset-horizontal"
              label-cols-sm="4"
              label-cols-lg="3"
              content-cols-sm
              content-cols-lg="9"
              label-for="input-horizontal"
              label="Headline (Key Insight Product)"
              class="label-g"
            >
              <b-form-textarea
                id="textarea-no-resize"
                placeholder="Short Description (Minimum length is 10 characters and maximum length is 200 characters)"
                rows="5"
                no-resize
              ></b-form-textarea>
            </b-form-group>
            <b-form-group
              id="fieldset-horizontal"
              label-cols-sm="4"
              label-cols-lg="3"
              content-cols-sm
              content-cols-lg="9"
              label-for="input-horizontal"
              label="Sub Heading (Description Key Insight Product)"
              class="label-g"
            >
              <b-form-textarea
                id="textarea-no-resize"
                placeholder="Long Description (Minimum length is 50 characters and maximum length is 2000 characters)"
                rows="8"
                no-resize
              ></b-form-textarea>
            </b-form-group>
            <b-form-group
              id="fieldset-horizontal"
              label-cols-sm="4"
              label-cols-lg="3"
              content-cols-sm
              content-cols-lg="9"
              label-for="input-horizontal"
              label="Body Copy (Benefit Products)"
              class="label-g"
            >
              <b-form-textarea
                id="textarea-no-resize"
                placeholder=""
                rows="5"
                no-resize
              ></b-form-textarea>
            </b-form-group>
            <b-form-group
              id="fieldset-horizontal"
              label-cols-sm="4"
              label-cols-lg="3"
              content-cols-sm
              content-cols-lg="9"
              label-for="input-horizontal"
              label="Body Copy (Products Details)"
              class="label-g"
            >
              <b-form-textarea
                id="textarea-no-resize"
                placeholder=""
                rows="5"
                no-resize
              ></b-form-textarea>
            </b-form-group>
          </b-accordion-item>
          <b-accordion-item title="Product Images">
            <b-form-group
              id="fieldset-horizontal"
              label-cols-sm="4"
              label-cols-lg="3"
              content-cols-sm
              content-cols-lg="9"
              label-for="input-horizontal"
              label="Upload product images"
              feedback="First image will be set as product main image"
              class="label-g"
            >
              <b-button
                variant="dark"
                v-b-tooltip.hover
                title="First image will be set as product main image"
              >
                <i class="bx bxs-folder-open"> Upload</i>
              </b-button>
            </b-form-group>
            <b-form-group
              id="fieldset-horizontal"
              label-cols-sm="4"
              label-cols-lg="3"
              content-cols-sm
              content-cols-lg="9"
              label-for="input-horizontal"
              label=""
              class="label-g"
            >
              <!-- <b-form-checkbox switch> Default Warehouse </b-form-checkbox>
          <b-form-checkbox switch> For Brand Sales </b-form-checkbox> -->
              <b-form-checkbox switch>Customize</b-form-checkbox>
              <b-form-checkbox switch>Customize Name </b-form-checkbox>

              <b-form-checkbox switch>Customize Number </b-form-checkbox>
            </b-form-group>
          </b-accordion-item>
          <b-accordion-item title="Product Videos">
            <b-form-group
              id="fieldset-horizontal"
              label-cols-sm="4"
              label-cols-lg="3"
              content-cols-sm
              content-cols-lg="9"
              label-for="input-horizontal"
              label="Upload product images"
              valid-feedback=""
              class="label-g"
              tooltip="true"
            >
              <b-button
                variant="dark"
                v-b-tooltip.hover
                title="First video will be set as product main video"
              >
                <i class="bx bxs-folder-open"> Upload Videos</i>
              </b-button>
            </b-form-group>
          </b-accordion-item>
          <b-accordion-item title="Product Variant">
            <b-form-group
              id="fieldset-horizontal"
              label-cols-sm="4"
              label-cols-lg="3"
              content-cols-sm
              content-cols-lg="9"
              label-for="input-horizontal"
              label="Variant Size"
              class="label-g"
            >
              <b-form-select
                id="inline-form-custom-select-pref"
                class="mb-2 mr-sm-2 mb-sm-0"
                :options="[
                  { text: 'All Size', value: null },
                  'XXS',
                  'XS',
                  'S',
                  'M',
                  'L',
                  'XL',
                  '2XL',
                  '3XL',
                  '4XL',
                  '5XL'
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
              label-for="input-horizontal"
              label="Variant Color"
              class="label-g"
            >
              <b-form-select
                id="inline-form-custom-select-pref"
                class="mb-2 mr-sm-2 mb-sm-0"
                :options="[
                  { text: '', value: null },
                  'Pirate Black',
                  'Midnight Navy',
                  ' Monkey Grey'
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
              label-for="input-horizontal"
              label="Product Variant Table"
              class="label-g"
            >
            </b-form-group>
            <a-table :columns="field" />
          </b-accordion-item>
          <b-accordion-item title="Shipment">
            <b-form-group
              id="fieldset-horizontal"
              label-cols-sm="4"
              label-cols-lg="3"
              content-cols-sm
              content-cols-lg="1"
              label="Length"
              label-for="input-horizontal"
              class="label-g"
              append="cm"
            >
              <b-input-group append="cm">
                <b-form-input></b-form-input>
              </b-input-group>
            </b-form-group>
            <b-form-group
              id="fieldset-horizontal"
              label-cols-sm="4"
              label-cols-lg="3"
              content-cols-sm
              content-cols-lg="1"
              label="Width"
              label-for="input-horizontal"
              class="label-g"
              append="cm"
            >
              <b-input-group append="cm">
                <b-form-input></b-form-input>
              </b-input-group>
            </b-form-group>
            <b-form-group
              id="fieldset-horizontal"
              label-cols-sm="4"
              label-cols-lg="3"
              content-cols-sm
              content-cols-lg="1"
              label="Heigth"
              label-for="input-horizontal"
              class="label-g"
              append="cm"
            >
              <b-input-group append="cm">
                <b-form-input></b-form-input>
              </b-input-group>
            </b-form-group>
          </b-accordion-item>
          <b-accordion-item title="Product Point">
            <b-form-group
              id="fieldset-horizontal"
              label-cols-sm="4"
              label-cols-lg="3"
              content-cols-sm
              content-cols-lg="1"
              label="Product Point Reward Value"
              label-for="input-horizontal"
              class="label-g"
              description="Point"
              append="cm"
            >
              <b-input-group>
                <b-form-input></b-form-input>
              </b-input-group>
            </b-form-group>
          </b-accordion-item>

        </b-accordion>

        <div class="d-flex justify-content-end">
          <!-- <b-button pill variant="primary" class="mx-1">New</b-button> -->
          <b-button pill variant="dark" class="mx-1">Save</b-button>
          <!-- <b-button pill variant="danger" class="mx-1">Delete</b-button> -->
          <b-button
            pill
            variant="outline-dark"
            href="/brand-product-view-all"
            class="mx-1"
            >Close</b-button
          >
        </div>
      </b-card>
    </b-card>
  </div>
</template>

<script lang="ts">
import type { TableColumnsType } from 'ant-design-vue';
import { defineComponent, reactive, ref, toRefs } from 'vue';

const field: TableColumnsType = [
  {
    title: 'SKU'
  },
  {
    title: 'Size'
  },
  {
    title: 'Color'
  },
  {
    title: 'Factory Price'
  },
  {
    title: 'Brand Prize'
  },
  {
    title: 'Sell Price'
  },
  {
    title: 'Weight'
  },
  {
    title: 'Status'
  }
];
export default defineComponent({
  components: {},
  setup() {
    return {
      field
    };
  }
});
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
.accordion-button:focus {
  z-index: 3;
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.accordion-button:not(.collapsed) {
  color: #fff !important;
  background-color: #141416 !important;
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.125);
}
.accordion-toggle {
  background-color: gray;
  display: block;
  padding: 10px;
  margin: -10px -15px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.accordion-toggle.collapsed {
  background-color: white;
}
</style>
