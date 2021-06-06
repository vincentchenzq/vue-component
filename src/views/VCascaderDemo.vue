<template>
  <div>
    <v-cascader v-model="checkedValue" />
  </div>
</template>

<script>
import VCascader from '../components/VCascader/VCascader';
export default {
  components: {
    VCascader,
  },
  data() {
    return {
      checkedValue: [],
      showList: [],
    };
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
