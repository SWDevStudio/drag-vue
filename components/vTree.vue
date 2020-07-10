<template>
  <ul class="tree-list">
    <div class="tree-list__title">
      {{ list.title }}
    </div>
    <li v-for="(item, key) in list.items" :key="key" class="tree-list__item">
      <v-tree v-if="isList(item)" :list="item" />
      <span v-else>{{ item }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'VTree',
  props: {
    list: Object || Array
  },
  methods: {
    isList (obj) {
      if (obj.title) {
        return true
      }
    }
  }
}
</script>

<style scoped>

</style>
