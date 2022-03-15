<template>
  <div id="content-route" class="table-responsive">
    <b-card class="card-top-dash">
      <b-card>
        <table class="table table-hover">
          <thead>
            <tr>
              <th @click="sortByColumn('refNo')">Ref. No
                 <span v-if="sortColumn == 'refNo'" class="material-icons">{{arrowIconName}}</span>
                    <span v-else class="material-icons">sort</span>
              </th>
              <th @click="sortByColumn('refData')">
                 <span v-if="sortColumn == 'refData'" class="material-icons">{{arrowIconName}}</span>
                    <span v-else class="material-icons">sort</span>
              </th>
              <th @click="sortByColumn('vendor')">
                 <span v-if="sortColumn == 'vendor'" class="material-icons">{{arrowIconName}}</span>
                    <span v-else class="material-icons">sort</span>
              </th>
              <th @click="sortByColumn('total')">
                 <span v-if="sortColumn == 'total'" class="material-icons">{{arrowIconName}}</span>
                    <span v-else class="material-icons">sort</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in tableData" :key="row.refNo">
                <td>{{row.refNo}}</td>
                <td>{{row.refData}}</td>
                <td>{{row.vendor}}</td>
                <td>{{row.total}}</td>
            </tr>
          </tbody>
        </table>
      </b-card>
    </b-card>
  </div>
</template>

<script lang="ts">
import { computed, ref, defineComponent } from 'vue';
import { shuffle } from 'lodash';
import { DoughnutChart, useDoughnutChart } from 'vue-chart-3';
import { Chart, ChartData, ChartOptions, registerables } from 'chart.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

export default defineComponent({
  setup() {
    interface dataInfo {
      refNo: string;
      refData: string;
      vendor: string;
      total: string;
    }

    let data: Array<dataInfo> = [
      {
        refNo: ' Riors-1010-D10',
        refData: '20-10-22',
        vendor: 'java',
        total: '9.000.000'
      },
      {
        refNo: ' Riors-1010-D09',
        refData: '20-09-22',
        vendor: 'java',
        total: '2.000.000'
      },
      {
        refNo: ' Riors-1010-D08',
        refData: '20-08-22',
        vendor: 'java',
        total: '3.000.000'
      },
      {
        refNo: ' Riors-1010-D07',
        refData: '13-07-22',
        vendor: 'java',
        total: '5.000.000'
      },
      {
        refNo: ' Riors-1010-D06',
        refData: '12-09-22',
        vendor: 'java',
        total: '2.000.000'
      },
      {
        refNo: ' Riors-1010-D05',
        refData: '14-08-22',
        vendor: 'java',
        total: '3.000.000'
      },
      {
        refNo: ' Riors-1010-D04',
        refData: '14-07-22',
        vendor: 'java',
        total: '5.000.000'
      },
      {
        refNo: ' Riors-1010-D03',
        refData: '12-09-22',
        vendor: 'java',
        total: '2.000.000'
      },
      {
        refNo: ' Riors-1010-D02',
        refData: '11-08-22',
        vendor: 'java',
        total: '3.000.000'
      },
      {
        refNo: ' Riors-1010-D01',
        refData: '10-07-22',
        vendor: 'java',
        total: '5.000.000'
      }
    ];

    const tableData = ref(data);
    const sortColumn = ref('refNo');
    const sortDirection = ref(1);
    const arrowIconName = ref('arrow_drop_up');
    const sortByColumn = (columnName: keyof dataInfo) => {
      sortColumn.value = columnName;
      sortDirection.value = -1 * sortDirection.value;
      if (sortDirection.value == 1) {
        arrowIconName.value = 'arrow_drop_up';
        tableData.value.sort((a, b) =>
          a[columnName] > b[columnName] ? 1 : -1
        );
      } else {
        arrowIconName.value = 'arrow_drop_down';
        tableData.value.sort((a, b) =>
          a[columnName] < b[columnName] ? 1 : -1
        );
      }
    };
    return {
      tableData,
      sortColumn,
      sortDirection,
      arrowIconName,
      sortByColumn
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
