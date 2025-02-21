import comp from "D:/mydesktop/bestsoft/bs-antd/bs-documents/vuepress-starter/docs/.vuepress/.temp/components/test.html.vue"
const data = JSON.parse("{\"path\":\"/test.html\",\"title\":\"表单\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"main.md\"}")
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
