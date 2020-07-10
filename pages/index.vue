<template>
  <div class="tree">
    <draggable v-model="tree" group="people" @start="drag=true" @end="drag=false">
      <v-tree v-for="(item, key) in tree" :key="key" :list="item" />
    </draggable>
  </div>
</template>

<script>

import VTree from '~/components/vTree'

export default {
  components: { VTree },
  data () {
    return {
      tree: [
        {
          title: 'Деверо',
          items: [
            {
              title: 'Программирование',
              items: [
                'Начинаем изучать программирование',
                'Типы данных',
                'Гуки они везде даже на фреймворках'
              ]
            },
            {
              title: 'Дизайн',
              items: [
                'Дизайн это дизайн',
                'Пазязя дайте четкое ТЗ'
              ]
            }
          ]
        }
      ]
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
