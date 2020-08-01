<template>
  <div>
    <table>
      <tbody v-for="item in showTbodyList" :key="item.name">
        <tr v-for="(tr, index) in item.children" :key="index">
          <td v-for="it in tr" :key="it.key" :rowspan="it.rowspan">
            {{ it.name }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TableColumn',
  props: {
    levelList: {
      type: Array,
      required: true,
    },
    list: {
      type: Array,
      required: true,
    },
  },
  computed: {
    maxColumns() {
      const { list, levelList } = this;
      for (let len = levelList.length, i = len - 1; i >= 0; i--) {
        const level = levelList[i];
        if (list.some(item => item[level])) {
          return i + 1;
        }
      }
      return 0;
    },
    showTbodyList() {
      const tbody = this.getTbodyList();
      this.setTableRowSpan(tbody);
      this.cleanEmptyTd(tbody);
      return tbody;
    },
  },
  methods: {
    getTbodyList() {
      const { list, levelList, maxColumns } = this;
      // 获取第一列有几种
      const classification = Array.from(
        new Set(list.map(item => item[levelList[0]])),
      );
      return classification.map(name => {
        const tbodyList = list.filter(item => item[levelList[0]] === name);
        const trLength = tbodyList.length;
        const children = [];
        // 行
        for (let i = 0; i < trLength; i++) {
          const tr = [];
          // 列
          for (let j = 0; j < maxColumns; j++) {
            const tdName = tbodyList[i][levelList[j]] || '';
            tr.push({
              name: tdName,
              rowspan: null,
              key: Math.random(),
            });
          }
          children.push(tr);
        }
        return {
          name,
          children,
        };
      });
    },
    setTableRowSpan(tableData) {
      const { maxColumns } = this;
      function setRowspan(tbodyData, i = 0) {
        if (i >= maxColumns) {
          return;
        }
        const classification = Array.from(
          new Set(tbodyData.map(item => item[i].name)),
        );
        for (let j = 0; j < classification.length; j++) {
          const trs = tbodyData.filter(
            item => item[i].name === classification[j],
          );
          trs[0][i].rowspan = trs.length;
          setRowspan(trs, i + 1);
        }
      }
      tableData.forEach(item => {
        setRowspan(item.children);
      });
    },
    cleanEmptyTd(table) {
      table.forEach(tbody => {
        tbody.children.forEach(tr => {
          for (let i = tr.length - 1; i >= 0; i--) {
            const td = tr[i];
            if (!td.rowspan) {
              tr.splice(i, 1);
            }
          }
        });
      });
    },
  },
};
</script>

<style lang="less" scoped>
table {
  border-collapse: collapse;
  width: 100%;
}
</style>
