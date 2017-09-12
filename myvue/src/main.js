// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Element from "element-ui"
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import router from './router'
import axios from "axios"
import FastClick from 'fastclick'
import VueKindEditor from 'vue-kindeditor'
import 'kindeditor/kindeditor-all-min.js'
import 'kindeditor/themes/default/default.css'

Vue.config.productionTip = false
Vue.use(Element)
FastClick.attach(document.body) //过度点击
Vue.use(VueKindEditor)
Vue.prototype.$http=axios;
Vue.prototype.Boot="/api"
Vue.prototype.Book="/apibook"

const eventBus = new Vue()
Vue.prototype.eventBus = eventBus;




// const router=new router()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
