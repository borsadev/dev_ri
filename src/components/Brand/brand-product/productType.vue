<template>
  <div id="content-route">
    <b-card class="card-top-dash">
      <div class="d-flex justify-content-end">
        <b-button
          pill
          variant="dark"
          href="/brand-product-type-edit"
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
          :scroll="{ x: 'calc(700px + 50%)', y: 540 }"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'status'">
              <a-button
                v-if="record.status === 'active'"
                class="btn-status-on"
                shape="round"
                >{{ record.status }}</a-button
              >
              <a-button v-else class="btn-status-re" shape="round">{{
                record.status
              }}</a-button>
            </template>
            <template v-if="column.key === 'action'">
              <a-button
                type="text"
                shape="circle"
                href="/brand-product-type-edit"
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
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Code',
    dataIndex: 'code',
    key: 'code',
    width: '12%'
  },
  {
    title: 'Numeric Code',
    dataIndex: 'nume',
    width: '12%',
    key: 'nume'
  },
  {
    title: 'Status',
    dataIndex: 'status',
    width: '12%',
    key: 'status'
  },
  {
    title: '',
    dataIndex: 'action',
    width: '12%',
    key: 'action'
  }
];

interface DataItem {
  key: number;
  name: string;
  nume?: number;
  code: string;
  status?: string;
  children?: DataItem[];
}

const data: DataItem[] = [
  {
    key: 1,
    name: 'TOP & SHIRTS',
    code: '',
    children: [
      {
        key: 11,
        name: 'Shirt',
        nume: 1,
        code: 'SRT',
        status: 'active'
      },
      {
        key: 12,
        name: 'T-Shirt',
        nume: 2,
        code: 'TSRT',
        status: 'active'
      },
      {
        key: 13,
        name: 'Polo Shirt',
        nume: 3,
        code: 'PSRT',
        status: 'active'
      },
      {
        key: 14,
        name: 'Sleeveless Shirt',
        nume: 4,
        code: 'SSRT',
        status: 'active'
      },
      {
        key: 14,
        name: 'Tank Shirt',
        nume: 5,
        code: 'TKSRT',
        status: 'active'
      },
      {
        key: 15,
        name: 'Formal Shirt',
        nume: 6,
        code: 'FSRT',
        status: 'active'
      },
      {
        key: 16,
        name: 'Sweatshirt',
        nume: 7,
        code: 'SWSRT',
        status: 'active'
      },
      {
        key: 17,
        name: 'Kit & Jersey',
        nume: 8,
        code: 'JRY',
        status: 'active'
      }
    ]
  },
  {
    key: 2,
    name: 'Jacket',
    code: '',
    children: [
      {
        key: 21,
        name: 'Track Jacket',
        nume: 1,
        code: 'TJC',
        status: 'active'
      },
      {
        key: 22,
        name: 'Half Zip Jacket',
        nume: 2,
        code: 'HZJC',
        status: 'active'
      },
      {
        key: 23,
        name: 'Windrunner Jacket',
        nume: 3,
        code: 'WNRJC',
        status: 'active'
      },
      {
        key: 24,
        name: 'Rain Jacket (Waterproof)',
        nume: 4,
        code: 'RNJC',
        status: 'active'
      },
      {
        key: 25,
        name: 'Windbreaker Jacket',
        nume: 5,
        code: 'WNBJC',
        status: 'active'
      },
      {
        key: 26,
        name: 'Fleece Jacket',
        nume: 6,
        code: 'FJC',
        status: 'active'
      },
      {
        key: 27,
        name: 'Bomber Jacket',
        nume: 7,
        code: 'BJC',
        status: 'active'
      },
      {
        key: 28,
        name: 'Insulated Jacket',
        nume: 8,
        code: 'IJC',
        status: 'active'
      },
      {
        key: 29,
        name: 'Gilets Jacket',
        nume: 9,
        code: 'GJC',
        status: 'active'
      },
      {
        key: 200,
        name: 'Hoodie',
        nume: 10,
        code: 'HOOD',
        status: 'active'
      },
      {
        key: 201,
        name: 'Padded Winter Jacket',
        nume: 11,
        code: 'PWJC',
        status: 'active'
      }
    ]
  },
  {
    key: 3,
    name: 'SHORTS',
    code: '',
    children: [
      {
        key: 31,
        name: 'Shorts',
        nume: 1,
        code: 'SOT'
      },
      {
        key: 32,
        name: '2 IN 5 Shorts',
        code: 'TIFSOT',
        nume: 2
      },
      {
        key: 33,
        name: '2 IN 7 Shorts',
        code: 'TISSOT',
        nume: 3
      },
      {
        key: 34,
        name: 'Walkshorts',
        code: 'WSOT',
        nume: 4
      },
      {
        key: 35,
        name: 'Chino Shorts',
        code: 'CHSOT',
        nume: 5
      },
      {
        key: 36,
        name: 'Cargo Shorts',
        code: 'CRSOT',
        nume: 6
      }
    ]
  },
  {
    key: 4,
    name: 'SKIRTS & DRESS',
    code: '',
    children: [
      {
        key: 41,
        name: 'Skirts',
        code: 'SKT',
        nume: 1
      },
      {
        key: 42,
        name: 'Dress',
        code: 'DRS',
        nume: 2
      }
    ]
  },
  {
    key: 5,
    name: 'PANTS',
    code: '',
    children: [
      {
        key: 51,
        name: 'Track Pants',
        code: 'TPN',
        nume: 1
      },
      {
        key: 52,
        name: 'Jogger Pants',
        code: 'JPN',
        nume: 2
      },
      {
        key: 53,
        name: 'Sweatpants',
        code: 'SWPN',
        nume: 3
      },
      {
        key: 54,
        name: 'Shorts Pants',
        code: 'SPN',
        nume: 4
      },
      {
        key: 55,
        name: '3/4 Pants',
        code: 'TFPN',
        nume: 5
      },
      {
        key: 56,
        name: 'Chino Pants',
        code: 'CHPN',
        nume: 6
      },
      {
        key: 57,
        name: 'Cargo Pants',
        code: 'CRPN',
        nume: 7
      }
    ]
  },
  {
    key: 6,
    name: 'TRACKSUITS',
    code: '',
    children: [
      {
        key: 61,
        name: 'Tracksuits',
        code: 'TCS',
        nume: 1
      }
    ]
  },
  {
    key: 7,
    name: 'FORCEKNIT',
    code: '',
    children: [
      {
        key: 71,
        name: 'Sleeveless Top Forceknit',
        code: 'STF',
        nume: 1
      },
      {
        key: 72,
        name: 'SS Top Forceknit',
        code: 'SSTF',
        nume: 2
      },
      {
        key: 73,
        name: 'LS Top Forceknit',
        code: 'LSTF',
        nume: 3
      },
      {
        key: 74,
        name: '1/2 Shorts Forceknit',
        code: 'FTSF',
        nume: 4
      },
      {
        key: 75,
        name: 'Shorts Forceknit',
        code: 'SF',
        nume: 5
      },
      {
        key: 76,
        name: '3/4 Pants Forceknit',
        code: 'TFPF',
        nume: 6
      },
      {
        key: 77,
        name: 'Pants Forceknit',
        code: 'PF',
        nume: 7
      }
    ]
  },
  {
    key: 8,
    name: 'UNDERWEAR',
    code: '',
    children: [
      {
        key: 81,
        name: 'Sports BRA',
        code: 'SPBR',
        nume: 1
      },
      {
        key: 82,
        name: 'Boxer Brief',
        code: 'BXBR',
        nume: 2
      }
    ]
  },
  {
    key: 9,
    name: 'SHOES',
    code: ''
  },
  {
    key: 10,
    name: 'SANDAL',
    code: ''
  },
  {
    key: 11,
    name: 'SOCKS',
    code: '',
    children: [
      {
        key: 111,
        name: 'Extra Low Cut Socks',
        code: 'ELCS',
        nume: 1
      },
      {
        key: 112,
        name: 'Ankle Socks',
        code: 'AES',
        nume: 2
      },
      {
        key: 113,
        name: 'Crew Socks',
        code: 'CWS',
        nume: 3
      },
      {
        key: 114,
        name: 'Calf Length Socks',
        code: 'CLS',
        nume: 4
      },
      {
        key: 115,
        name: 'Loose Socks',
        code: 'LSS',
        nume: 5
      },
      {
        key: 116,
        name: 'Over The Calf Socks',
        code: 'OTCS',
        nume: 6
      }
    ]
  },
  {
    key: 12,
    name: 'BIB',
    code: '',
    children: [
      {
        key: 121,
        name: 'Training BIB ',
        code: 'TBIB',
        nume: 1
      },
      {
        key: 122,
        name: 'Training Elast BIB',
        code: 'TEBIB',
        nume: 2
      },
      {
        key: 123,
        name: 'Training Half Body BIB',
        code: 'THBIB',
        nume: 3
      }
    ]
  },
  {
    key: 13,
    name: 'ARM & LEG SLEEVES',
    code: '',
    children: [
      {
        key: 131,
        name: 'ARM Sleeves',
        code: 'ARMS',
        nume: 1
      },
      {
        key: 132,
        name: 'CALF LEG Sleeves',
        code: 'CALS',
        nume: 2
      },
      {
        key: 133,
        name: 'LEG Sleeves',
        code: 'LEGS',
        nume: 3
      }
    ]
  },
  {
    key: 14,
    name: 'HEADWEAR',
    code: '',
    children: [
      {
        key: 141,
        name: 'Sporty Cap',
        code: 'SYC',
        nume: 1
      },
      {
        key: 142,
        name: 'Snapback Cap',
        code: 'TKC',
        nume: 2
      },
      {
        key: 143,
        name: 'Trucker Cap',
        code: 'TRC',
        nume: 3
      },
      {
        key: 144,
        name: 'Classic Cap',
        code: 'CLC',
        nume: 4
      },
      {
        key: 145,
        name: 'Hairband',
        code: 'HRB',
        nume: 5
      },
      {
        key: 146,
        name: 'Headband',
        code: 'HDB',
        nume: 6
      },
      {
        key: 147,
        name: 'Hijab',
        code: 'HJB',
        nume: 7
      }
    ]
  },
  {
    key: 15,
    name: 'FACE COVER',
    code: '',
    children: [
      {
        key: 151,
        name: 'Buff',
        code: 'BUFF',
        nume: 1
      },
      {
        key: 152,
        name: 'Mask',
        code: 'MASK',
        nume: 2
      },
      {
        key: 153,
        name: 'Neck Warmer',
        code: 'NKWR',
        nume: 3
      }
    ]
  },
  {
    key: 16,
    name: 'BAG',
    code: '',
    children: [
      {
        key: 161,
        name: 'Backpacks Bag',
        code: 'BCB',
        nume: 1
      },
      {
        key: 162,
        name: 'Duffle Bag',
        code: 'DFB',
        nume: 2
      },
      {
        key: 163,
        name: 'Gymsack Bag',
        code: 'GYB',
        nume: 3
      },
      {
        key: 164,
        name: 'Sling Bag',
        code: 'SLB',
        nume: 4
      },
      {
        key: 165,
        name: 'Pouch Bag',
        code: 'POB',
        nume: 5
      },
      {
        key: 166,
        name: 'Travel Troley Bag',
        code: 'TTB',
        nume: 6
      },
      {
        key: 167,
        name: 'Laundry Bag',
        code: 'LDB',
        nume: 7
      },
      {
        key: 168,
        name: 'Medical Bag',
        code: 'MDB',
        nume: 8
      },
      {
        key: 169,
        name: 'Shoes Bag',
        code: 'SHB',
        nume: 9
      },
      {
        key: 160,
        name: 'Ball Bag',
        code: 'BLB',
        nume: 10
      }
    ]
  },
  {
    key: 17,
    name: 'BALLS',
    code: '',
    children: [
      {
        key: 171,
        name: 'Football Balls #5',
        code: 'FTBB5',
        nume: 1
      },
      {
        key: 172,
        name: 'Football Balls #4',
        code: 'FTBB4',
        nume: 2
      },
      {
        key: 173,
        name: 'Futsal Balls #4',
        code: 'FTLB4',
        nume: 3
      },
      {
        key: 174,
        name: 'Basket Balls',
        code: 'BSKB',
        nume: 4
      },
      {
        key: 175,
        name: 'Volley Balls',
        code: 'VLYB',
        nume: 5
      }
    ]
  },
  {
    key: 18,
    name: 'PROTECTION GEAR',
    code: '',
    children: [
      {
        key: 181,
        name: 'FTB Gloves',
        code: 'FTBGLS',
        nume: 1
      },
      {
        key: 182,
        name: 'GYM Gloves',
        code: 'GYMGLS',
        nume: 2
      },
      {
        key: 182,
        name: 'GLF Gloves',
        code: 'GLFGLS',
        nume: 3
      },
      {
        key: 182,
        name: 'Shin Guard',
        code: 'SHNG',
        nume: 4
      }
    ]
  },
  {
    key: 19,
    name: 'OTHER EQUIPMENT & ACCESSORIES',
    code: '',
    children: [
      {
        key: 191,
        name: 'Water Bottle',
        code: 'WBT',
        nume: 1
      },
      {
        key: 192,
        name: 'Tumbler',
        code: 'TMBT',
        nume: 2
      },
      {
        key: 193,
        name: 'Sports Towel',
        code: 'STL',
        nume: 3
      },
      {
        key: 194,
        name: 'Lanyard',
        code: 'LND',
        nume: 4
      },
      {
        key: 195,
        name: 'Umbrella',
        code: 'UMBA',
        nume: 5
      },
      {
        key: 196,
        name: 'E Card',
        code: 'ECD',
        nume: 6
      }
    ]
  },
  {
    key: 20,
    name: 'CUSTOMIZING PRINTED',
    code: '',
    children: [
      {
        key: 201,
        name: 'Small Alphabet SS20',
        code: 'SALP20',
        nume: 1
      },
      {
        key: 202,
        name: 'Medium Alphabet SS20',
        code: 'MALP20',
        nume: 2
      },
      {
        key: 203,
        name: 'Small Number SS20',
        code: 'SNM20',
        nume: 3
      },
      {
        key: 204,
        name: 'Medium Number SS20',
        code: 'MNM20',
        nume: 4
      },
      {
        key: 205,
        name: 'Large Number SS20',
        code: 'LNM20',
        nume: 5
      },
      {
        key: 206,
        name: 'Patch',
        code: 'PTC',
        nume: 6
      },
      {
        key: 207,
        name: 'Logo',
        code: 'LGO',
        nume: 7
      },
      {
        key: 208,
        name: 'Printed Sponsor Small',
        code: 'PSSL',
        nume: 8
      },
      {
        key: 209,
        name: 'Printed Sponsor Medium',
        code: 'PSMD',
        nume: 9
      },
      {
        key: 210,
        name: 'Printed Sponsor Large',
        code: 'PSLE',
        nume: 10
      }
    ]
  }
];

const rowSelection = ref({
  checkStrictly: false,
  onChange: (
    selectedRowKeys: (string | number)[],
    selectedRows: DataItem[]
  ) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      'selectedRows: ',
      selectedRows
    );
  },
  onSelect: (record: DataItem, selected: boolean, selectedRows: DataItem[]) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (
    selected: boolean,
    selectedRows: DataItem[],
    changeRows: DataItem[]
  ) => {
    console.log(selected, selectedRows, changeRows);
  }
});
export default defineComponent({
  components: {
    EditOutlined,
    SearchOutlined
  },
  setup() {
    return {
      data,
      columns
      // handleSearch,
      // handleReset,
      //searchInput,
      //...toRefs(state)
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
