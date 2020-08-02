<template>
  <div>
    <table>
      <tr>
        <td>
          <el-checkbox v-model="checkAll">全选</el-checkbox>
        </td>
        <td>
          简介
        </td>
        <td>
          说明
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    checkAll: {
      get() {
        return true;
      },
      set(val) {
        console.log(val);
      },
    },
  },
};
</script>

<style lang="less">
table {
  width: 100%;
  border-collapse: collapse;
  & td {
    border: 1px solid #ddd;
  }
}
</style>
