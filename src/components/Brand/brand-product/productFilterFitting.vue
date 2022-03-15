<template>
  <div id="content-route">
    <b-card class="card-top-dash">
      <div class="d-flex justify-content-end">
        <b-button
          pill
          variant="dark"
          href="/brand-product-filter-fitting-edit"
          class="mx-1 mb-3"
          >New</b-button
        >
      </div>
      <b-card>
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
        <a-table
          :columns="columns"
          :data-source="data"
          size="middle"
          :scroll="{ x: 'calc(700px + 50%)', y: 540 }"
        >
          <template #bodyCell="{ column, record }">
            <!-- <template v-if="column.key === 'companyName'">
              <a-button
                v-if="record.companyName === 'Yes'"
                class="btn-status-on"
                shape="round"
                >{{ record.companyName }}</a-button
              >
              <a-button v-else class="btn-status-re" shape="round">{{
                record.companyName
              }}</a-button>
            </template> -->

            <template v-if="column.key === 'companyAddress'">
              <a-button
                v-if="record.companyAddress === 'Active'"
                class="btn-status-on"
                shape="round"
                >{{ record.companyAddress }}</a-button
              >
              <a-button v-else class="btn-status-re" shape="round">{{
                record.companyAddress
              }}</a-button>
            </template>
            <template v-if="column.key === 'gender'">
              <a-button
                type="text"
                shape="circle"
                href="/brand-product-filter-fitting-edit"
                class="bt-tabs"
              >
                <template #icon
                  ><edit-outlined two-tone-color="#52c41a"
                /></template>
              </a-button>
            </template>
          </template>
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
    title: 'Fitting',
    dataIndex: 'refNum',
    key: 'refNum',
    width: '30%',

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
    title: 'Code',
    dataIndex: 'refDate',
    key: 'age',
    sorter: (a: TableDataType, b: TableDataType) =>
      a.refDate.length - b.refDate.length
  },
  {
    title: 'Numeric Code',

    dataIndex: 'companyName',
    key: 'companyName',
    sorter: (a: TableDataType, b: TableDataType) =>
      a.companyName.length - b.companyName.length,
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => {
          searchInput.value.focus();
        }, 100);
      }
    }
  },
  // {
  //   title: 'Default',

  //   dataIndex: 'number',
  //   key: 'number',
  //   sorter: (a: TableDataType, b: TableDataType) =>
  //     a.number.length - b.number.length
  //   // sorter: (a: TableDataType, b: TableDataType) =>
  //   //   a.companyName !== b.companyName
  //   //     ? a.companyName < b.companyName
  //   //       ? -1
  //   //       : 1
  //   //     : 0
  // },
  {
    title: 'Status',

    dataIndex: 'companyAddress',
    key: 'companyAddress',
    filters: [
      {
        text: 'Active',
        value: 'Active'
      },
      {
        text: 'Deactive',
        value: 'Deactive'
      }
    ],
    onFilter: (value: any, record: TableDataType) =>
      record.companyAddress
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase())
    // onFilter: (value: string, record: TableDataType) => record.companyAddress
    //     ? record.companyAddress.toString().toLowerCase().includes(value.toLowerCase())
    //     : '',
  },
  {
    title: '',
    dataIndex: 'gender',
    key: 'gender',
    width: 100,
    fixed: 'right'
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

const data = ref([
  {
    key: 1,
    refNum: 'Loose Fit',
    refDate: 'LF',
    companyName: 1,
    number: 'Default',
    companyAddress: 'Active'
  },
  {
    key: 2,
    refNum: 'Regular Fit',
    refDate: 'RF',
    companyName: 2,
    number: 'Default',
    companyAddress: 'Active'
  },
  {
    key: 3,
    refNum: 'Slim Fit',
    refDate: 'SF',
    companyName: 3,
    number: 'Default',
    companyAddress: 'Active'
  },
  {
    key: 4,
    refNum: 'Tight Fit',
    refDate: 'TF',
    companyName: 4,
    number: 'Default',
    companyAddress: 'Active'
  }
]);
export default defineComponent({
  components: {
    EditOutlined,
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
