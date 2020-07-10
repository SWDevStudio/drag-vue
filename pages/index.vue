<template>
  <div class="tree">
    <v-tree-list class="tree__tree-list" />
  </div>
</template>

<script>

import VTreeList from '~/components/vTreeList'
export default {
  components: { VTreeList },
  async fetch ({ store }) {
    await store.dispatch('tree/fetchTree')
  },
  data () {
    return {
      myArray: [
        { id: 1, name: 'Kotaro' },
        { id: 2, name: 'Gif' },
        { id: 3, name: 'Memes' },
        { id: 4, name: 'Olga' }
      ]
    }
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
