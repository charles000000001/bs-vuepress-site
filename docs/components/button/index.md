### 基础用法
<bs-button type="primary" >按钮</bs-button>
<details open>
<summary><a>查看代码</a></summary>

```vue
<bs-space>
    <bs-button type="primary" >Primary</bs-button>
    <bs-button >Normal</bs-button>
    <bs-button type="dashed" >Dashed</bs-button>
    <bs-button danger >Danger</bs-button>
    <bs-button type="link" >Link</bs-button>
</bs-space>
```
</details>

### 加载按钮
<bs-button type="primary" :demoType='2'></bs-button>
<details open>
<summary><a>查看代码</a></summary>

```vue
<bs-space>
    <bs-button type="primary" loading>Primary</bs-button>
    <bs-button loading>Normal</bs-button>
    <bs-button type="dashed" loading>Dashed</bs-button>
    <bs-button danger loading>Danger</bs-button>
    <bs-button type="link" loading>Link</bs-button>
</bs-space>
```
</details>


### API
通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：type -> shape -> size -> loading -> disabled。

**按钮的属性说明如下：**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 设置按钮类型，可选值为 primary、dashed、link、text 或者不设 | string | - |
| shape | 设置按钮形状，可选值为 circle 或者不设 | string | - |
| size | 设置按钮大小，可选值为 small、large 或者不设 | string | - |
| loading | 设置按钮载入状态 | boolean | false |
| disabled | 设置按钮禁用 | boolean | false |
| icon | 设置按钮的图标组件 | VNode | - |
| href | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 | string | - |
| target | 相当于 a 链接的 target 属性，href 存在时生效 | string | - |
| block | 设置按钮为块级元素 | boolean | false |
| ghost | 幽灵属性，使按钮背景透明 | boolean | false |
| danger | 危险按钮 | boolean | false |
| htmlType | 设置 button 原生的 type 值，可选值请参考 HTML 标准 | string | button |
| onClick | 点击按钮时的回调 | (event: MouseEvent) => void | - |
| autoInsertSpace | 是否在按钮的图标之后自动插入空格 | boolean | true |
| demoType | 设置按钮的类型，可选值为 1、2、3、4、5 | number | 1 |
| demoSize | 设置按钮的大小，可选值为 small、large | string | - |
| demoShape | 设置按钮的形状，可选值为 circle | string | - |
| demoLoading | 设置按钮的载入状态 | boolean | false |




