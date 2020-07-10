<template>
  <div class="tree">
    <v-tree-list :list="tree" class="tree__tree-list" />
  </div>
</template>

<script>

import vTreeList from '~/components/vTreeList'
export default {
  components: { vTreeList },
  async fetch ({ store }) {
    await store.dispatch('tree/fetchTree')
  },
  computed: {
    tree () {
      return this.$store.getters['tree/getTree']
    }
  }
}
</script>

<style lang="scss">
  .tree {
    width: 1024px;
    margin: 0 auto;

  }
</style>
