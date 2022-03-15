<template>
  <div id="content-route">
    <b-card class="card-top-dash">
      <a-table
        :columns="columns"
        :row-key="(record) => record.login.uuid"
        :data-source="dataSource"
        :pagination="pagination"
        :loading="loading"
        @change="handleTableChange"
      >
        <template #bodyCell="{ column, text }">
          <template v-if="column.dataIndex === 'name'"
            >{{ text.first }} {{ text.last }}</template
          >
        </template>
      </a-table>
    </b-card>
  </div>
</template>

<script lang="ts">
import type { TableProps } from 'ant-design-vue';
import { usePagination } from 'vue-request';
import { computed, defineComponent } from 'vue';
import axios from 'axios';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    width: '20%'
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' }
    ],
    width: '20%'
  },
  {
    title: 'Email',
    dataIndex: 'email'
  }
];

type APIParams = {
  results: number;
  page?: number;
  sortField?: string;
  sortOrder?: number;
  [key: string]: any;
};
type APIResult = {
  results: {
    gender: 'female' | 'male';
    name: string;
    email: string;
  }[];
};

const queryData = (params: APIParams) => {
  return axios.get<APIResult>('https://randomuser.me/api?noinfo', { params });
};

export default defineComponent({
  setup() {
    const {
      data: dataSource,
      run,
      loading,
      current,
      pageSize
    } = usePagination(queryData, {
      formatResult: (res) => res.data.results,
      pagination: {
        currentKey: 'page',
        pageSizeKey: 'results'
      }
    });

    const pagination = computed(() => ({
      total: 200,
      current: current.value,
      pageSize: pageSize.value
    }));

    const handleTableChange: TableProps['onChange'] = (
      pag: { pageSize: number; current: number },
      filters: any,
      sorter: any
    ) => {
      run({
        results: pag.pageSize!,
        page: pag?.current,
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters
      });
    };

    return {
      dataSource,
      pagination,
      loading,
      columns,
      handleTableChange
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
</style>
