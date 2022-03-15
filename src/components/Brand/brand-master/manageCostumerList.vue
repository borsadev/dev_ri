<template>
  <div id="content-route">
    <b-card class="card-top-dash">
      <div class="d-flex justify-content-end">
        <b-button
          pill
          variant="dark"
          href="/brand-master-customer-list-edit"
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
          
            <template v-if="column.key === 'number'">
              <a-button
                v-if="record.number === 'Default'"
                class="btn-status-on"
                shape="round"
                >{{ record.number }}</a-button
              >
            </template>
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
                href="/brand-master-customer-list-edit"
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
  email: string;
  class: string;
  sale: string;
  phone: string;

};

const state = reactive({
  searchText: '',
  searchedColumn: ''
});

const searchInput = ref();

const columns: TableColumnsType = [
  {
    title: 'First Name',
    dataIndex: 'refNum',
    key: 'refNum',

    sorter: (a: TableDataType, b: TableDataType) =>a.refNum.length - b.refNum.length
    
  },
  {
    title: 'Last Name',
    dataIndex: 'refDate',
    key: 'refDate',
    sorter: (a: TableDataType, b: TableDataType) =>a.refDate.length - b.refDate.length
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    sorter: (a: TableDataType, b: TableDataType) => a.email.length - b.email.length
  },
  {
    title: 'Mobile Number',
    dataIndex: 'phone',
    key: 'phone',
    sorter: (a: TableDataType, b: TableDataType) => a.phone.length - b.phone.length
  },
  {
    title: 'Classification / Membership',
    dataIndex: 'class',
    key: 'class',
    sorter: (a: TableDataType, b: TableDataType) => a.class.length - b.class.length
  },
  {
    title: 'Sales Channel',
    dataIndex: 'sale',
    key: 'sale',
    sorter: (a: TableDataType, b: TableDataType) => a.sale.length - b.sale.length
  },
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



const data = ref([
  {
    key: '1',
    refNum: 'ana',
    refDate: 'jamal',
    companyName: '100',
    phone: '565572',
    companyAddress: 'Active'
  },
  {
    key: '2',
    refNum: 'Afa',
    refDate: 'fery',
    companyName: '500',
    phone: '243525345',
    companyAddress: 'Active'
  },
  {
    key: '2',
    refNum: 'ede',
    refDate: 'caca',
    companyName: '1000',
    phone: '2352352',
    companyAddress: 'Active'
  },
  {
    key: '2',
    refNum: 'DEDE',
    refDate: 'rara',
    companyName: '2000',
    phone: '2352352',
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
