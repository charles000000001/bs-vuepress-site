import comp from "D:/mydesktop/bestsoft/bs-antd/bs-documents/vuepress-starter/docs/.vuepress/.temp/components/components/table/index.html.vue"
const data = JSON.parse("{\"path\":\"/components/table/\",\"title\":\"表格\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"components/table/index.md\"}")
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
