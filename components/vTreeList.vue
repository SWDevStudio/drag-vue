<template>
  <div class="tree-list">
    <h2 class="tree-list__title">
      {{ list.title }}
    </h2>
    <ul class="tree-list__list list">
      <draggable v-model="list.items" group="people" @start="drag=true" @end="drag=false">
        <li v-for="(index, key) in list.items" :key="key" class="list__item">
          <v-tree-list v-if="isList(index)" :list="index" />
          <span v-else>{{ index }}</span>
        </li>
      </draggable>
    </ul>
    <ul class="tree-list__list list" />
  </div>
</template>

<script>
export default {
  name: 'VTreeList',
  props: {
    list: {
      type: Object,
      default () {
        return {
          title: 'Программирование',
          items: [
            'Изучаем основы',
            {
              title: 'Немного о фигме',
              items: [
                'Немного о фигме',
                'Урок фигма 2',
                'Урок фигма 3'
              ]
            },
            'Постигаем фреймворки',
            'Заканчиваем изучение'
          ]
        }
      }
    }
  },
  methods: {
    isList (obj) {
      if (obj.title) {
        return obj
      }
    }
  }
}
</script>

<style lang="scss">
  .tree-list {
    &__title {
      font-family: sans-serif;
      font-size: 20px;
      margin: 0;
      background: #8e8eee;
    }
  }

  .list {
    list-style-type: none;
    font-family: sans-serif;
    font-size: 16px;
    font-weight: bold;
    margin: 0;

    &__item {
      margin: 5px 0;
      background: #6dd86d;
      border: 1px solid white;
    }
  }
</style>
