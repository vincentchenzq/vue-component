<template>
  <div style="margin-left:20px;">
    <el-checkbox v-model="isChecked">{{ nodeData.name }}</el-checkbox>
    <v-tree-node
      v-for="(treeData, index) in treeDatas"
      :key="index"
      :nodeData="treeData"
      @node-checked="handleCheckNode"
    ></v-tree-node>
  </div>
</template>

<script>
export default {
  name: 'VTreeNode',
  directives: {},
  mixins: [],
  provide: {},
  inject: {
    // handleCheckNode: { default: () => {} },
  },
  props: {
    nodeData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    isChecked: {
      get() {
        return this.nodeData.checked;
      },
      set(val) {
        this.nodeData.checked = val;
        this.treeDatas.forEach(element => {
          element.checked = val;
        });
        this.$emit('node-checked', { node: this.nodeData, val });
      },
    },
    treeDatas() {
      return this.nodeData.children || [];
    },
  },
  watch: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  methods: {
    handleCheckNode({ node, val }) {
      this.$emit('node-checked', { node, val });
    },
  },
};
</script>

<style></style>
