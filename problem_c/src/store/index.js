import { createStore } from 'vuex'

export default createStore({
  state: {
    leftItems: ["Apple", "Grape", "Strawberry", "Cherry", "Plum"],
    rightItems: ["Watermelon", "Banana", "Peach"],
  },
  getters: {
    storeLeftItems(state) {
      return state.leftItems
    },
    storeRightItems(state) {
      return state.rightItems
    },
  },
  mutations: {
    moveLeftItemToRightArea(state) {
      const moveItem = state.leftItems.pop()
      state.rightItems.push(moveItem)
    },
    moveRightItemToLeftArea(state) {
      const moveItem = state.rightItems.pop()
      state.leftItems.push(moveItem)
    },
  },
  actions: {
    moveLeftItemToRightArea(context) {
      context.commit('moveLeftItemToRightArea')
    },
    moveRightItemToLeftArea(context) {
      context.commit('moveRightItemToLeftArea')
    },
  },
})
