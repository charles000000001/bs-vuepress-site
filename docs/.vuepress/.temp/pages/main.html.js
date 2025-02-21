import comp from "D:/mydesktop/bestsoft/bs-antd/bs-documents/vuepress-starter/docs/.vuepress/.temp/components/main.html.vue"
const data = JSON.parse("{\"path\":\"/main.html\",\"title\":\"表单\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"表单\",\"link\":\"/form.html\",\"description\":\"关于表单组件的介绍\"},\"headers\":[{\"level\":2,\"title\":\"lang: zh-CNtitle: 表格link: /table.htmldescription: 关于表格组件的介绍\",\"slug\":\"lang-zh-cntitle-表格link-table-htmldescription-关于表格组件的介绍\",\"link\":\"#lang-zh-cntitle-表格link-table-htmldescription-关于表格组件的介绍\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"main.md\"}")
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
