import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import BOOK from '@/components/BOOK'
import MOVIE from '@/components/MOVIE'
import MUSIC from '@/components/MUSIC'
import LIST1  from '@/components/moviecomponents/LIST'
import LIST2 from '@/components/musiccomponents/LIST'
import TRANSLATE from '@/components/TRANSLATE'
import PLAYER from '@/components/PLAYER'
import KINDEDITOR from '@/components/KINDEDITOR'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/book',
      name: 'BOOK',
      component: BOOK
    },
    {
      path: '/movie',
      name: 'MOVIE',
      component: MOVIE,
       children: [
            { path: "/list", component: LIST1 }
        ]

    },
          {
      path: '/music',
      name: 'MUSIC',
      component: MUSIC,
       children: [
            { path: "/singerlist", component: LIST2 }
        ]
    },
      {
      path: '/translate',
      name: 'TRANSLATE',
      component: TRANSLATE
    },
    {
      path: '/player',
      name: 'PLAYER',
      component: PLAYER
    },
     {
      path: '/kindeditor',
      name: 'KINDEDITOR',
      component: KINDEDITOR
    },

  ]
})
