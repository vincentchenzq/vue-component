<template>
  <div>
    <v-tree-panel :treeData="treeData"></v-tree-panel>
  </div>
</template>

<script>
import vTreePanel from '@/components/VTree/vTreePanel';
export default {
  components: {
    vTreePanel,
  },
  data() {
    return {
      treeData: {
        name: 'A',
        checked: false,
        children: [
          {
            name: 'B',
            checked: false,
            children: [
              {
                name: 'C',
                checked: false,
              },
              {
                name: 'D',
                checked: false,
              },
            ],
          },
          {
            name: 'E',
            checked: false,
            children: [
              {
                name: 'F',
                checked: false,
              },
            ],
          },
        ],
      },
    };
  },
};
</script>

<style></style>
