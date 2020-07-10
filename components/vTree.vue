<template>
  <ul class="tree-list">
    <div class="tree-list__title">
      <h3>{{ list.title }}</h3>
    </div>
    <draggable v-model="list.items" group="people" @start="drag=true" @end="drag=false">
      <li v-for="(item, key) in list.items" :key="key" class="tree-list__item">
        <v-tree v-if="isList(item)" :list="item" />
        <span v-else>{{ item }}</span>
      </li>
    </draggable>
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

<style lang="scss">
.tree-list {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  &__title {
    display: flex;
    font-family: "Lobster", sans-serif;
    margin: 5px 0;
    font-size: 25px;
    h3 {
      margin: 0;
      &:hover {
        border-bottom: 3px solid #1c23b5;
      }
    }

  }
  &__item {
    margin: 10px 0 ;
    cursor: crosshair;
    span {
      margin-left: 25px;
      font-family: "Comfortaa" , sans-serif;
      font-size: 16px;
      &:hover {
        border-bottom: 3px solid #1c23b5;
      }
    }
  }
}
</style>
