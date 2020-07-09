export const state = () => ({
  tree: []
})

export const mutation = {
  setTree(state, tree) {
    state.tree = tree
  }
}

export const actions = {
  async fetchTree({commit}) {
    // условная модель дерева
    let tree = {
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
            title: 'Немного о фигме',
            items: [
              'Урок фигма 1',
              'Урок фигма 2',
              'Урок фигма 3',
            ]
          },
          'Постигаем фреймворки',
          'Заканчиваем изучение'
        ]
      }
    }
    commit('setTree', tree)
  }
}

export const getters = {
  getTree: s => s.tree
}
