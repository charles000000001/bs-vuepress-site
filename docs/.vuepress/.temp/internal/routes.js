export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"D:/mydesktop/bestsoft/bs-antd/bs-documents/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"组件库"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/mydesktop/bestsoft/bs-antd/bs-documents/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"首页"} }],
  ["/components/button/", { loader: () => import(/* webpackChunkName: "components_button_index.html" */"D:/mydesktop/bestsoft/bs-antd/bs-documents/vuepress-starter/docs/.vuepress/.temp/pages/components/button/index.html.js"), meta: {"title":""} }],
  ["/components/form/", { loader: () => import(/* webpackChunkName: "components_form_index.html" */"D:/mydesktop/bestsoft/bs-antd/bs-documents/vuepress-starter/docs/.vuepress/.temp/pages/components/form/index.html.js"), meta: {"title":""} }],
  ["/components/table/", { loader: () => import(/* webpackChunkName: "components_table_index.html" */"D:/mydesktop/bestsoft/bs-antd/bs-documents/vuepress-starter/docs/.vuepress/.temp/pages/components/table/index.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/mydesktop/bestsoft/bs-antd/bs-documents/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
