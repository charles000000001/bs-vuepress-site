import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
export default defineUserConfig({
  base:'/bs-vuepress-site/',
  lang: 'en-US',
  title: 'BS-前端Ui组件库',
  description: 'BS-前端Ui组件库',
  themeConfig: {
    darkMode:false,
  },
  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',
    navbar: ['/', '/get-started'],
    sidebar:[
      {
        text:"Button 按钮",
        link:"/components/button/"
      },
      {
        text:" Drawer 弹框表单",
        link:"/components/form/"
      },
      {
        text:"Table 表格",
        link:"/components/table/"
      }
    ]
  }),
  bundler: viteBundler()
})
