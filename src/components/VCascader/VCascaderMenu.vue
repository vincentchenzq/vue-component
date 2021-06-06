<template>
  <ul>
    <li v-for="(item, idx) in list" :key="idx" @click="handleClick(item)">
      {{ item.name }}
      <span v-if="!item.leaf">下一级</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
    },
    index: {
      type: Number,
      requird: true,
    },
  },
  methods: {
    handleClick(item) {
      this.$emit('click', item, this.index);
    },
  },
};
</script>

<style></style>
