import comp from "D:/mydesktop/bestsoft/bs-antd/bs-documents/vuepress-starter/docs/.vuepress/.temp/pages/components/table/index.html.vue"
const data = JSON.parse("{\"path\":\"/components/table/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":3,\"title\":\"表格用法\",\"slug\":\"表格用法\",\"link\":\"#表格用法\",\"children\":[]},{\"level\":3,\"title\":\"Api\",\"slug\":\"api\",\"link\":\"#api\",\"children\":[]},{\"level\":3,\"title\":\"事件\",\"slug\":\"事件\",\"link\":\"#事件\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"components/table/index.md\"}")
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
