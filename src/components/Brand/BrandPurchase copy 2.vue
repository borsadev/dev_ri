<template>
  <div id="content-route">
    <b-card class="card-top-dash">
      <b-card>
        <div style="text-align: left">
          <label>SearchBy:</label><input v-model="searchTerm" />
        </div>
        <table-lite
          :is-static-mode="true"
          :is-loading="table.isLoading"
          :columns="table.columns"
          :rows="table.rows"
          :total="table.totalRecordCount"
          :sortable="table.sortable"
        ></table-lite>
      </b-card>
    </b-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed, watch } from 'vue';
import TableLite from 'vue3-table-lite/ts';
export default defineComponent({
  name: 'App',
  components: { TableLite },
  setup() {
    const searchTerm = ref(''); // Search text
    // Fake data
    const data = reactive({
      rows: []
    });
    /**
     * Get server data request
     */
    const myRequest = async (keyword: string) => {
      const fakeData: { id: string; name: string; email: string }[] = [];
      for (let i = 0; i < 126; i++) {
        fakeData.push({
          id: 'RIORS'+i,
          name: 'RIORS' + i,
          email: 'riores' + i + '@riors.id'
        });
      }
      return await new Promise((resolve, reject) => {
        try {
          table.isLoading = false;
          // Remove setTimeout() and change to your Axios request or AJAX request on here.
          setTimeout(() => {
            table.isLoading = false;
            let newData = fakeData.filter(
              (x) =>
                x.email.toLowerCase().includes(keyword.toLowerCase()) ||
                x.name.toLowerCase().includes(keyword.toLowerCase())
            );
            resolve(newData);
          }, 2000);
        } catch (error) {
          console.log('Fetch error', error);
          reject();
        }
      });
    };
    // Table config
    const table = reactive({
      isLoading: false,
      columns: [
        {
          label: 'ID',
          field: 'id',
          width: '1%',
          sortable: true,
          isKey: true
        },
        {
          label: 'Name',
          field: 'name',
          width: '10%',
          sortable: true
        },
        {
          label: 'Email',
          field: 'email',
          width: '15%',
          sortable: true
        }
      ],
      rows: computed(() => {
        return data.rows;
      }),
      totalRecordCount: computed(() => {
        return table.rows.length;
      }),
      sortable: {
        order: 'id',
        sort: 'asc'
      }
    });
    /**
     * Use vue.js watch to watch your state's change
     */
    watch(
      () => searchTerm.value,
      (val) => {
        myRequest(val).then((newData) => {
          data.rows = newData;
        });
      }
    );
    // Get data on first rendering
    myRequest('').then((newData) => {
      data.rows = newData;
    });
    return {
      searchTerm,
      table
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
::v-deep(.vtl-table td){
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
