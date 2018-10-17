const Button = { template: '#button' }
const Alert = { template: '#alert' }
const Breadcrumb = { template: '#breadcrumb' }
const Panel = { template: '#panel' }
const List = { template: '#list' }
const Media = { template: '#media' }
const Tag = { template: '#tag' }

var routes = [{
  path: '/button',
  component: Button
}, {
  path: '/alert',
  component: Alert
}, {
  path: '/breadcrumb',
  component: Breadcrumb
}, {
  path: '/panel',
  component: Panel
}, {
  path: '/list',
  component: List
}, {
  path: '/media',
  component: Media
}, {
  path: '/tag',
  component: Tag
}]

var router = new VueRouter({
  routes: routes
})

new Vue({
  router
}).$mount('#app')
