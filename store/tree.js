export const state = () => ({
  tree: []
})

export const mutations = {
  setTree (state, tree) {
    state.tree = tree
  }
}

export const actions = {
  fetchTree ({ commit }) {
    // eslint-disable-next-line no-unused-vars
    const tree2 = {
      design: {
        title: 'Дизайн',
        items: [
          'Начало пути дизайна',
          'Осваиваем Figma',
          'Конец пути дизайна'
        ]
      },
      engineer: {
        title: 'Программирование',
        items: [
          'Изучаем основы',
          {
            title: 'Немного о фронте',
            items: [
              'Урок 1 ',
              'Урок 2',
              'Урок 3'
            ]
          },
          'Постигаем фреймворки',
          'Заканчиваем изучение'
        ]
      }
    }
    // eslint-disable-next-line no-unused-vars
    // условная модель дерева
    const tree = {
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

    commit('setTree', tree)
  }
}

export const getters = {
  getTree: s => s.tree
}
