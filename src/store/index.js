import { createStore } from 'vuex'
import Lang from '@/assets/scripts/Lang/Lang'

export default createStore({
  state: {
    menuList: [{
      id: 1,
      title: "Главная",
    },
    {
      id:2,
      title: "Активы и тарифы"
    },
    {
      id:3,
      title: "Как это работает",
    },
    {
      id:4,
      title: "Крипто-проверки"
    },
    {
      id:5,
      title: "Блог"
    },
    {
      id:6,
      title: "Поддержка",
    },]
  },
  getters: {
    getMenuList(state){
      return state.menuList
    }
  },
  mutations: {

  },
  actions: {
  },
  modules: {
  }
})
