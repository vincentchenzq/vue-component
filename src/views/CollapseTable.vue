<template>
  <div>
    <el-table
      :data="tableData"
      :span-method="objectSpanMethod"
      border
      stripe
      style="width: 100%; margin-top: 20px"
    >
      <el-table-column
        prop="id"
        label="分类"
        width="180"
        class-name="border-none"
      >
        <table-column :levelList="levelList" :list="tableData"></table-column>
      </el-table-column>
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="amount1" label="数值 1（元）"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import TableColumn from '../components/table-colmn';
export default {
  components: {
    TableColumn,
  },
  data() {
    return {
      levelList: ['level1', 'level2', 'level3', 'level4', 'level5'],
      tableData: list,
    };
  },
  methods: {
    objectSpanMethod({ rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex === 0) {
          return {
            rowspan: this.tableData.length,
            colspan: 1,
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0,
          };
        }
      }
    },
  },
};

const list = [
  {
    level1: 'A1',
    level2: 'B1',
    level3: 'C1',
    level4: '',
    level5: '',
    name: '姓名1',
    amount1: '1',
  },
  {
    level1: 'A1',
    level2: 'B2',
    level3: 'C1',
    level4: '',
    level5: '',
    name: '姓名2',
    amount1: '12',
  },
  {
    level1: 'A1',
    level2: 'B2',
    level3: 'C2',
    level4: '',
    level5: '',
    name: '姓名3',
    amount1: '3',
  },
  {
    level1: 'A1',
    level2: 'B2',
    level3: 'C3',
    level4: '',
    level5: '',
    name: '姓名4',
    amount1: '4',
  },
  {
    level1: 'A2',
    level2: '',
    level3: '',
    level4: '',
    level5: '',
    name: '姓名5',
    amount1: '5',
  },
];
</script>

<style lang="less">
.border-none {
  padding: 0 !important;
  & > .cell {
    padding: 0 !important;
  }
}
</style>
