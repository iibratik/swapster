import { createStore } from 'vuex'
import Lang from '@/assets/scripts/Lang/Lang';

export default createStore({
  state: {
    menuList: [{
      id: 1,
      title: Lang.en.mainNavLink,
    },
    {
      id:2,
      title: Lang.en.tariffsLink,
    },
    {
      id:3,
      title: Lang.en.worksLink,
    },
    {
      id:4,
      title: Lang.en.checkLink
    },
    {
      id:5,
      title: Lang.en.blogLink
    },
    {
      id:6,
      title: Lang.en.support,
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
