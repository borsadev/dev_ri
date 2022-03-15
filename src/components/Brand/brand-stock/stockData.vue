<template>
  <div id="content-route">
    <b-card class="card-top-dash">
      <b-card class="mb-4">
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="1"
          label-cols-lg="1"
          content-cols-sm
          content-cols-lg="10"
          label-for="input-horizontal"
          label=""
          class="label-g"
        >
          <b-row>
            <b-col lg="3" md="3">
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
              <div class="d-flex justify-content-start">
                <b-button
                  pill
                  variant="dark"
                  href="/brand-product-consumer-edit"
                  class="mx-1 mb-3 mt-4"
                  >Search</b-button
                >
              </div>
            </b-col>
          </b-row>
        </b-form-group>
      </b-card>
      <b-card>
        <b-row>
          <b-col>
            <div class="d-flex justify-content-start">
              <b-button
                pill
                variant="dark"
                href="/brand-product-consumer-edit"
                class="mx-1 mb-3"
                >Export to Excel</b-button
              >
            </div>
          </b-col>
          <b-col>
            <div class="d-flex justify-content-end">
              <div class="certain-category-search-wrapper mb-3">
                <a-auto-complete
                  class="certain-category-search"
                  dropdown-class-name="certain-category-search-dropdown"
                  :dropdown-match-select-width="false"
                  :dropdown-style="{ width: '300px' }"
                  size="large"
                  style="width: 100%"
                  option-label-prop="value"
                >
                  <a-input placeholder="input here">
                    <template #suffix
                      ><search-outlined class="certain-category-icon"
                    /></template>
                  </a-input>
                </a-auto-complete>
              </div>
            </div>
          </b-col>
        </b-row>
        <a-table
          :columns="columns"
          :data-source="data"
          size="middle"
          :scroll="{ x: 'calc(700px + 50%)', y: 540 }"
        >
        </a-table>
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
    title: 'Product Name',
    dataIndex: 'refNum',
    key: 'refNum',
    width: '20%',

    sorter: (a: TableDataType, b: TableDataType) =>
      a.refNum.length - b.refNum.length
    // filters: [
    //   {
    //     text: 'Joe',
    //     value: 'Joe'
    //   },
    //   {
    //     text: 'John',
    //     value: 'John'
    //   }
    // ],
    // onFilter: (value: string, record: TableDataType) =>
    //   record.name.indexOf(value) === 0
  },
  {
    title: 'Main Color Name',
    dataIndex: 'refDate',
    key: 'age',
    width: '10%',
    sorter: (a: TableDataType, b: TableDataType) =>
      a.refDate.length - b.refDate.length
  },
  {
    title: 'XXS',
    dataIndex: 'refDate',
    key: 'age',
    sorter: (a: TableDataType, b: TableDataType) =>
      a.refDate.length - b.refDate.length
  },
  {
    title: 'XS',
    dataIndex: 'refDate',
    key: 'age',
    sorter: (a: TableDataType, b: TableDataType) =>
      a.refDate.length - b.refDate.length
  },
  {
    title: 'XS',
    dataIndex: 'refDate',
    key: 'age',
    sorter: (a: TableDataType, b: TableDataType) =>
      a.refDate.length - b.refDate.length
  },
  {
    title: 'S',
    dataIndex: 'refDate',
    key: 'age',
    sorter: (a: TableDataType, b: TableDataType) =>
      a.refDate.length - b.refDate.length
  },
  {
    title: 'M',
    dataIndex: 'refDate',
    key: 'age',
    sorter: (a: TableDataType, b: TableDataType) =>
      a.refDate.length - b.refDate.length
  },
  {
    title: 'L',
    dataIndex: 'refDate',
    key: 'age',
    sorter: (a: TableDataType, b: TableDataType) =>
      a.refDate.length - b.refDate.length
  },
  {
    title: 'XL',
    dataIndex: 'refDate',
    key: 'age',
    sorter: (a: TableDataType, b: TableDataType) =>
      a.refDate.length - b.refDate.length
  },
  {
    title: '2XL',
    dataIndex: 'refDate',
    key: 'age',
    sorter: (a: TableDataType, b: TableDataType) =>
      a.refDate.length - b.refDate.length
  },
  {
    title: '3XL',
    dataIndex: 'refDate',
    key: 'age',
    sorter: (a: TableDataType, b: TableDataType) =>
      a.refDate.length - b.refDate.length
  },
  {
    title: '4XL',
    dataIndex: 'refDate',
    key: 'age',
    sorter: (a: TableDataType, b: TableDataType) =>
      a.refDate.length - b.refDate.length
  },
  {
    title: '5XL',
    dataIndex: 'refDate',
    key: 'age',
    sorter: (a: TableDataType, b: TableDataType) =>
      a.refDate.length - b.refDate.length
  },
  {
    title: 'All Size',
    dataIndex: 'refDate',
    key: 'age',
    sorter: (a: TableDataType, b: TableDataType) =>
      a.refDate.length - b.refDate.length
  },
  {
    title: 'Discount',
    dataIndex: 'refDate',
    key: 'age',
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
  components: {
    SearchOutlined
  },
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
.btn-status-on {
  border: none;
  color: white;
  background-color: #141416;
}
.btn-status-re {
  border: none;
  color: white;
  background-color: #ff0022;
}
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

.certain-category-search-dropdown .ant-select-dropdown-menu-item-group-title {
  color: #666;
  font-weight: bold;
}

.certain-category-search-dropdown .ant-select-dropdown-menu-item-group {
  border-bottom: 1px solid #f6f6f6;
}

.certain-category-search-dropdown .ant-select-dropdown-menu-item {
  padding-left: 16px;
}

.certain-category-search-dropdown .ant-select-dropdown-menu-item.show-all {
  text-align: center;
  cursor: default;
}

.certain-category-search-dropdown .ant-select-dropdown-menu {
  max-height: 300px;
}
.certain-category-search-wrapper
  :deep(.certain-category-search.ant-select-auto-complete)
  .ant-input-affix-wrapper
  .ant-input-suffix {
  right: 12px;
  justify-content: end;
}
.certain-category-search-wrapper :deep(.certain-search-item-count) {
  position: absolute;
  color: #999;
  right: 16px;
}
.certain-category-search-wrapper
  :deep(.certain-category-search.ant-select-focused)
  .certain-category-icon {
  color: #108ee9;
}
.certain-category-search-wrapper :deep(.certain-category-icon) {
  color: #6e6e6e;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  font-size: 16px;
}
.bt-tabs {
  background-color: #141416 !important;
  color: #fff !important;
}
</style>
