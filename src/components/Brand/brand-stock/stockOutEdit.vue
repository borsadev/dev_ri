<template>
  <div id="content-route">
    <b-card class="card-top-dash">
      <b-card
        style="border: none; margin-bottom: 1rem"
        header-tag="header"
        class="shadow-sm"
      >
        <b-row>
          <b-col>
            <b-form-group
              id="fieldset-horizontal"
              label-cols-sm="1"
              label-cols-lg="3"
              content-cols-sm
              content-cols-lg="9"
              label-for="input-horizontal"
              label="Transfer Type"
              class="label-g"
            >
              <b-form-select
                id="inline-form-custom-select-pref"
                class="mb-2 mr-sm-2 mb-sm-0"
                :options="[{ text: '', value: null }, 'Male', 'Female']"
                :value="null"
              ></b-form-select>
            </b-form-group>
          </b-col>
          <b-col> </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group
              id="fieldset-horizontal"
              label-cols-sm="1"
              label-cols-lg="3"
              content-cols-sm
              content-cols-lg="9"
              label-for="input-horizontal"
              label="Transfer From"
              class="label-g"
            >
              <b-form-select
                id="inline-form-custom-select-pref"
                class="mb-2 mr-sm-2 mb-sm-0"
                :options="[{ text: '', value: null }, 'Male', 'Female']"
                :value="null"
              ></b-form-select>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group
              id="fieldset-horizontal"
              label-cols-sm="1"
              label-cols-lg="3"
              content-cols-sm
              content-cols-lg="9"
              label-for="input-horizontal"
              label="Transfer To"
              class="label-g"
            >
              <b-form-select
                id="inline-form-custom-select-pref"
                class="mb-2 mr-sm-2 mb-sm-0"
                :options="[{ text: '', value: null }, 'Male', 'Female']"
                :value="null"
              ></b-form-select>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group
              id="fieldset-horizontal"
              label-cols-sm="1"
              label-cols-lg="3"
              content-cols-sm
              content-cols-lg="9"
              label-for="input-horizontal"
              label="Ref. Number"
              class="label-g"
            >
              <b-input-group>
                <b-form-input class="me-1 w-50"></b-form-input>
                <b-form-input placeholder="Pending" class="ms-5"></b-form-input>
              </b-input-group>
              <b-input-group> </b-input-group>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group
              id="fieldset-horizontal"
              label-cols-sm="1"
              label-cols-lg="3"
              content-cols-sm
              content-cols-lg="9"
              label-for="input-horizontal"
              label="Date"
              class="label-g"
            >
              <a-date-picker />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group
              id="fieldset-horizontal"
              label-cols-sm="1"
              label-cols-lg="3"
              content-cols-sm
              content-cols-lg="9"
              label-for="input-horizontal"
              label="From"
              class="label-g"
            >
              <b-input-group>
                <b-form-input class=""></b-form-input>
              </b-input-group>
              <b-input-group> </b-input-group>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group
              id="fieldset-horizontal"
              label-cols-sm="1"
              label-cols-lg="3"
              content-cols-sm
              content-cols-lg="9"
              label-for="input-horizontal"
              label="Remarks"
              class="label-g"
            >
              <b-form-textarea
                id="textarea"
                placeholder=""
                rows="3"
                max-rows="6"
              ></b-form-textarea>
            </b-form-group>
          </b-col>
        </b-row>

        <div class="d-flex justify-content-end">
          <!-- <b-button pill variant="primary" class="mx-1">New</b-button> -->
          <b-button pill variant="dark" class="mx-1">Save</b-button>
          <!-- <b-button pill variant="danger" class="mx-1">Delete</b-button> -->
          <b-button
            pill
            variant="outline-dark"
            href="/brand-stock-out"
            class="mx-1"
            >Close</b-button
          >
        </div>
      </b-card>
      <b-card title="Products">
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="1"
          label-cols-lg="3"
          content-cols-sm
          content-cols-lg="9"
          label-for="input-horizontal"
          label="Product"
          class="label-g"
        >
          <b-row>
            <b-col lg="5" md="5">
              <b-form-select
                id="inline-form-custom-select-pref"
                class="mb-2 mr-sm-2 mb-sm-0"
                :options="[{ text: '', value: null }, 'Male', 'Female']"
                :value="null"
              ></b-form-select>
            </b-col>
            <b-col>
              <b-form-select
                id="inline-form-custom-select-pref"
                class="mb-2 mr-sm-2 mb-sm-0"
                :options="[{ text: '', value: null }, 'Male', 'Female']"
                :value="null"
              ></b-form-select>
            </b-col>
            <b-col>
              <b-form-input> </b-form-input>
            </b-col>
          </b-row>
        </b-form-group>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="1"
          label-cols-lg="3"
          content-cols-sm
          content-cols-lg="9"
          label-for="input-horizontal"
          label="Qty"
          class="label-g"
        >
          <b-row>
            <b-col lg="5" md="5">
              <b-form-input> </b-form-input>
            </b-col>
            <b-col>
              <b-button pill variant="dark" class="mx-1">Add</b-button>
            </b-col>
          </b-row>
        </b-form-group>
        <a-table
          :columns="columns"
          :data-source="data"
          size="middle"
          :scroll="{ x: 'calc(700px + 50%)', y: 540 }"
        ></a-table>
        <b-row class="mt-5">
          <b-col> </b-col>
          <b-col>
            <b-form-group
              id="fieldset-horizontal"
              label-cols-sm="1"
              label-cols-lg="3"
              content-cols-sm
              content-cols-lg="9"
              label-for="input-horizontal"
              label="Total"
              class="label-g"
            >
           <b-form-input>

           </b-form-input>
           </b-form-group
          ></b-col>
        </b-row>
      </b-card>
    </b-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue';
import type { TableColumnsType } from 'ant-design-vue';
import { SearchOutlined } from '@ant-design/icons-vue';
import { EditOutlined } from '@ant-design/icons-vue';
type TableDataType = {
  key: number;
  refNum: string;
  refDate: string;
  street: string;
  building: string;
  number: string;
  companyAddress: string;
  companyName: string;
  gender: string;
};

const state = reactive({
  searchText: '',
  searchedColumn: ''
});

const searchInput = ref();

const columns: TableColumnsType = [
  {
    title: 'No',
    dataIndex: 'refNum',
    key: 'refNum',
    width: '5%',

    sorter: (a: TableDataType, b: TableDataType) =>
      a.refNum.length - b.refNum.length
  },
  {
    title: 'Product',
    dataIndex: 'refDate',
    key: 'age',
    width: '40%',
    sorter: (a: TableDataType, b: TableDataType) =>
      a.refDate.length - b.refDate.length
  },
  {
    title: 'Price',
    dataIndex: 'refDate',
    key: 'age',
    width: '10%',
    sorter: (a: TableDataType, b: TableDataType) =>
      a.refDate.length - b.refDate.length
  },
  {
    title: 'Qty',
    dataIndex: 'refDate',
    key: 'age',
    width: '5%',
    sorter: (a: TableDataType, b: TableDataType) =>
      a.refDate.length - b.refDate.length
  },
  {
    title: 'Total',
    dataIndex: 'refDate',
    key: 'age',
    width: '15%',
    sorter: (a: TableDataType, b: TableDataType) =>
      a.refDate.length - b.refDate.length
  }
];

const handleSearch = (selectedKeys: any, confirm: any, dataIndex: any) => {
  confirm();
  state.searchText = selectedKeys[0];
  state.searchedColumn = dataIndex;
};

const handleReset = (clearFilters: any) => {
  clearFilters();
  state.searchText = '';
};

// const data = [...Array(100)].map((_, i) => ({
//   key: i,
//   refNum: 'RIORS-2022-0' + i,
//   refDate: i + 1 + '-03-2022',
//   street: 'Lake Park',
//   building: 'C',
//   number: 2035000 + i * 32,
//   companyAddress: 'Ongoing',
//   companyName: 'SoftLake Co',
//   gender: 'M'
// }));

const data = ref([]);
export default defineComponent({
  components: {},
  setup() {
    return {
      data,
      columns,
      handleSearch,
      handleReset,
      searchInput,
      ...toRefs(state)
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
</style>
