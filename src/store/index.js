import { createStore } from 'vuex'
import Lang from '@/assets/scripts/Lang/Lang';

export default createStore({
  state: {
    menuList: [{
      id: 1,
      title: Lang.ru.mainNavLink,
    },
    {
      id:2,
      title: Lang.ru.tariffsLink,
    },
    {
      id:3,
      title: Lang.ru.worksLink,
    },
    {
      id:4,
      title: Lang.ru.checkLink
    },
    {
      id:5,
      title: Lang.ru.blogLink
    },
    {
      id:6,
      title: Lang.ru.support,
    },],
    lang:Lang,
    MainLang: window.navigator.language,
  },
  getters: {
    getMenuList(state){
      return state.menuList
    },
    getLang(state){
      if (MainLang == "ru-RU") {
        return state.lang.ru
      }else{
        return state.lang.en
      }
    }
  },
  mutations: {
  },
  actions: {

  },
  modules: {
  }
})
