<template>
  <div>
    <v-tree-node
      :nodeData="treeData"
      @node-checked="handleCheckNode"
    ></v-tree-node>
  </div>
</template>

<script>
import VTreeNode from '@/components/VTree/VTreeNode';
export default {
  components: {
    VTreeNode,
  },
  provide() {
    return {
      // handleCheckNode: this.handleCheckNode,
    };
  },
  props: {
    treeData: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleCheckNode(data) {
      debugger;
      console.log(data);
    },
  },
};
</script>

<style></style>
