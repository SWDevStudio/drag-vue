<template>
  <div class="tree">
    <v-tree v-for="(item, key) in tree" :key="key" :list="item" />
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
                'Тема1',
                'Тема2'
              ]
            },
            {
              title: 'Дизайн',
              items: [
                'Тема1',
                'Тема2'
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

</style>
