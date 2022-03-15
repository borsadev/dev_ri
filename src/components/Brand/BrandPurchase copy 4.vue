<template>
  <div id="content-route">
    <b-card class="card-top-dash">
      <b-card>
        <table-lite
          :has-checkbox="true"
          :is-loading="table.isLoading"
          :is-re-search="table.isReSearch"
          :columns="table.columns"
          :rows="table.rows"
          :total="table.totalRecordCount"
          :sortable="table.sortable"
          :messages="table.messages"
          @do-search="doSearch"
          @is-finished="tableLoadingFinish"
          @return-checked-rows="updateCheckedRows"
        ></table-lite>
      </b-card>
    </b-card>
  </div>
</template>

<script lang="ts">
import { number, string } from 'alga-js';
import { defineComponent, reactive } from 'vue';
import TableLite from 'vue3-table-lite/ts';
// Fake Data for 'asc' sortable
const sampleData1 = (offst: number, limit: number) => {
  offst = offst + 1;
  let data = [];
  for (let i = offst; i <= limit; i++) {
    data.push({
      id: i,
      name: 'TEST' + i,
      email: 'test' + i + '@example.com'
    });
  }
  return data;
};
// Fake Data for 'desc' sortable
const sampleData2 = (offst: number, limit: number) => {
  let data = [];
  for (let i = limit; i > offst; i--) {
    data.push({
      id: i,
      name: 'TEST' + i,
      email: 'test' + i + '@example.com'
    });
  }
  return data;
};

interface Row{
  id: number;
  name?: string;
  email?: string;  
}
export default defineComponent({
  name: 'App',
  components: { TableLite },
  setup() {
    // Table config
    const table = reactive({
      isLoading: false,
      isReSearch: false,
      columns: [
        {
          label: 'ID',
          field: 'id',
          width: '3%',
          sortable: true,
          isKey: true
        },
        {
          label: 'Name',
          field: 'name',
          width: '10%',
          sortable: true,
          display: function (row: Row) {
            return (
              '<a href="javascript:void(0)" data-id="' +
              row.id +
              '" class="is-rows-el name-btn">' +
              row.name +
              '</a>'
            );
          }
        },
        {
          label: 'Email',
          field: 'email',
          width: '15%',
          sortable: true
        },
        {
          label: '',
          field: 'quick',
          width: '10%',
          display: function (row: Row) {
            return (
              '<button type="button" data-id="' +
              row.id +
              '" class="is-rows-el quick-btn">Button</button>'
            );
          }
        }
      ],
      rows: [],
      totalRecordCount: 0,
      sortable: {
        order: 'id',
        sort: 'asc'
      },
      messages: {
        pagingInfo: 'Showing {0}-{1} of {2}',
        pageSizeChangeLabel: 'Row count:',
        gotoPageLabel: 'Go to page:',
        noDataAvailable: 'No data'
      }
    });
    /**
     * Search Event
     */
    const doSearch = (
      offset: number,
      limit: number,
      order: string,
      sort: string
    ) => {
      table.isLoading = true;
      setTimeout(() => {
        table.isReSearch = offset == undefined ? true : false;
        if (offset >= 10 || limit >= 20) {
          limit = 20;
        }
        if (sort == 'asc') {
          table.rows = sampleData1(offset, limit);
        } else {
          table.rows = sampleData2(offset, limit);
        }
        table.totalRecordCount = 20;
        table.sortable.order = order;
        table.sortable.sort = sort;
      }, 600);
    };
    /**
     * Loading finish event
     */
    const tableLoadingFinish = (elements: HTMLElement) => {
      table.isLoading = false;
      Array.prototype.forEach.call(elements, function (element) {
        if (element.classList.contains('name-btn')) {
          element.addEventListener('click', function () {
            console.log(this.dataset.id + ' name-btn click!!');
          });
        }
        if (element.classList.contains('quick-btn')) {
          element.addEventListener('click', function () {
            console.log(this.dataset.id + ' quick-btn click!!');
          });
        }
      });
    };
    /**
     * Row checked event
     */
    const updateCheckedRows = (rowsKey: number) => {
      console.log(rowsKey);
    };
    // First get data
    doSearch(0, 10, 'id', 'asc');
    return {
      table,
      doSearch,
      tableLoadingFinish,
      updateCheckedRows
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

::v-deep(.vtl-table .vtl-thead .vtl-thead-th) {
  color: #141416;
  background-color: #fff;
  border: none;
}
::v-deep(.vtl-table td) {
  border: none;
}
::v-deep(.vtl-paging-info) {
  color: rgb(172, 0, 0);
}
::v-deep(.vtl-paging-count-label),
::v-deep(.vtl-paging-page-label) {
  color: rgb(172, 0, 0);
}
::v-deep(.vtl-paging-pagination-page-link) {
  border: none;
}
</style>
