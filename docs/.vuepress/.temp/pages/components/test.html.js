import comp from "D:/mydesktop/bestsoft/bs-antd/bs-documents/vuepress-starter/docs/.vuepress/.temp/pages/components/test.html.vue"
const data = JSON.parse("{\"path\":\"/components/test.html\",\"title\":\"按钮实例\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"components/test.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
