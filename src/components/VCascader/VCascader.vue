<template>
  <div>
    <v-cascader-menu
      v-for="(item, index) in menuList"
      :key="index"
      :index="index"
      :list="item"
      @click="handleClick"
    />
  </div>
</template>

<script>
import VCascaderMenu from './VCascaderMenu';
export default {
  components: {
    VCascaderMenu,
  },
  props: {
    value: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      menuList: [],
    };
  },
  created() {
    this.menuList.push(this.mockData(0));
  },
  methods: {
    handleClick(item, index) {
      // 说明是切换选中的目标
      if (this.value[index]) {
        this.$emit('input', this.value.splice(index, -1, item.value));
      } else if (item.leaf) {
      }
    },
    mockData(idx) {
      return Array.apply(null, { length: 10 }).map((item, index) => {
        return {
          name: `${idx}-${index}`,
          value: `${idx}-${index}`,
          leaf: idx > 2,
        };
      });
    },
  },
};
</script>

<style></style>
