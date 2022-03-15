<template>
  <div id="content-route">
    <b-card class="card-top-dash">
      <b-card>
        <div class="d-flex justify-content-end">
          <div
          class="certain-category-search-wrapper mb-3"
          
          
        >
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
          bordered
          size="middle"
          :scroll="{ x: 'calc(700px + 50%)', y: 540 }"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'companyAddress'">
              <a-button
                v-if="record.companyAddress === 'Ongoing'"
                class="btn-status-on"
                shape="round"
                >{{ record.companyAddress }}</a-button
              >
              <a-button v-else class="btn-status-re" shape="round">{{
                record.companyAddress
              }}</a-button>
            </template>
            <template v-if="column.key === 'gender'">
              <a-button class="btn-status-on" shape="round"
                ><edit-outlined
              /></a-button>
            </template>
          </template>
        </a-table>
      </b-card>
    </b-card>
  </div>
</template>

<script lang="ts">
import type { TableProps } from 'ant-design-vue';
import { usePagination } from 'vue-request';
import { computed, defineComponent, reactive, ref, toRefs } from 'vue';
import axios from 'axios';
import type { TableColumnsType } from 'ant-design-vue';
import { SearchOutlined } from '@ant-design/icons-vue';
import { EditOutlined } from '@ant-design/icons-vue';
type TableDataType = {
  key: number;
  refNum: string;
  refDate: string;
  street: string;
  building: string;
  number: number;
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
    title: 'Ref No.',
    dataIndex: 'refNum',
    key: 'refNum',
    width: 150,
    
    sorter: (a: TableDataType, b: TableDataType) =>
      a.refNum.split('-').reverse().join('') !== b.refNum.split('-').reverse().join('')
        ? a.refNum.split('-').reverse().join('') < b.refNum.split('-').reverse().join('')
          ? -1
          : 1
        : 0
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
    title: 'Ref Date',
    dataIndex: 'refDate',
    key: 'age',
    width: 200,
    sorter: (a: TableDataType, b: TableDataType) =>
      a.refDate.split('-').reverse().join('') !==
      b.refDate.split('-').reverse().join('')
        ? a.refDate.split('-').reverse().join('') <
          b.refDate.split('-').reverse().join('')
          ? -1
          : 1
        : 0
  },
  {
    title: 'Vendor',

    dataIndex: 'companyName',
    key: 'companyName',
    sorter: (a: TableDataType, b: TableDataType) =>
      a.companyName !== b.companyName
        ? a.companyName < b.companyName
          ? -1
          : 1
        : 0,
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => {
          searchInput.value.focus();
        }, 100);
      }
    }
  },
  {
    title: 'Total',

    dataIndex: 'number',
    key: 'number',
    sorter: (a: TableDataType, b: TableDataType) => a.number - b.number
    // sorter: (a: TableDataType, b: TableDataType) =>
    //   a.companyName !== b.companyName
    //     ? a.companyName < b.companyName
    //       ? -1
    //       : 1
    //     : 0
  },
  {
    title: 'Status',

    dataIndex: 'companyAddress',
    key: 'companyAddress',
    filters: [
      {
        text: 'Ongoing',
        value: 'Ongoing'
      },
      {
        text: 'Successful',
        value: 'Successful'
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

const data = [...Array(100)].map((_, i) => ({
  key: i,
  refNum: 'RIORS-2022-0' + i,
  refDate: i + 1 + '-03-2022',
  street: 'Lake Park',
  building: 'C',
  number: 2035000 + i * 32,
  companyAddress: 'Ongoing',
  companyName: 'SoftLake Co',
  gender: 'M'
}));
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
  width: 30%;
}
.btn-status-re {
  border: none;
  color: white;
  background-color: #ff0022;
  width: 30%;
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
</style>
