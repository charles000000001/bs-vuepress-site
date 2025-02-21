### 表格用法
<bs-table/>
<details open>
<summary><a>查看代码</a></summary>

```vue
<script setup lang="ts">
const columns: Array<ITableColumnsType> = [
  {
    title: "编号",
    dataIndex: "id",
    key: "id",
    align: "center",
    width: 120
  },
  {
    title: "姓名",
    customFilterDropdown: true,
    dataIndex: "name",
    key: "name",
    align: "center",
    width: 200
  },
  {
    dataIndex: 'status',
    title: '状态',
    key: 'status',
    align: 'center',
    switchSource: [
      {label: '启用', value: 1},
      {label: '禁用', value: 0}
    ],
    width: 200
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
    align: "center",
    width: 200
  },
  {
    title: "地址",
    dataIndex: "address",
    key: "address",
    align: "center",
    width: 200
  },
  {
    title: "操作",
    dataIndex: "operation",
    align: "center",
    customFilterDropdown: true,
    noDel: false,
    noDesign: true,
    noShow: false,
    noEdit: false,
    isHistoryVersion: false
  }
];
const dataSource = [
  {
    id: 1,
    name: "张三",
    age: 18,
    address: "北京"
  },
  {
    id: 2,
    name: "李四",
    age: 20,
    address: "上海"
  },
  {
    id: 3,
    name: "王五",
    age: 22,
    address: "广州"
  }
];

const onEdit = (record: any) => {
  console.log("编辑", record);
};
const onDesign = (record: any) => {
  console.log("设计", record);
};
const onShow = (record: any) => {
  console.log("查看", record);
};
const onDelete = (record: any) => {
  console.log("删除", record);
};
const onSearch = (record: any) => {
  console.log("搜索", record);
};
const onHistoryVersion = (record: any) => {
  console.log("历史版本", record);
};
const onSwitch = (record: any) => {
  console.log("切换", record);
};

</script>

<template>
  <div>
    <TableCustom :pagination="false" :columns="columns" :dataSource="dataSource"
                 @edit="onEdit"
                 @design="onDesign"
                 @show="onShow"
                 @delete="onDelete"
                 @on-search="onSearch"
                 @on-history-version="onHistoryVersion"
                 @onSwitch="onSwitch"/>
  </div>

</template>

<style scoped lang="scss">

</style>
```
</details>

### Api

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| columns | 表格列的配置描述，具体项见下表 | ITableColumnsType[] | [] |
| dataSource | 数据数组 | any[] | [] |
| pagination | 分页器，参考 antd 的 Table 组件 | boolean | true |
| rowKey | 表格行 key 的取值，可以是字符串或一个函数 | string \| ((record: any) => string) | 'key' |
| scroll | 设置横向或纵向滚动，也可用于指定滚动区域的宽和高，可以设置为像素值，百分比，true 和 'max-content' | { x: number \| string, y: number \| string } | - |
| size | 表格大小 | 'default' \| 'middle' \| 'small' | 'default' |
| title | 表格标题 | string \| slot | - |
| footer | 表格尾部 | string \| slot | - |
| loading | 页面是否加载中 | boolean | false |
| bordered | 是否展示外边框和列边框 | boolean | false |
| showHeader | 是否显示表头 | boolean | true |
| rowSelection | 表格行是否可选择 | object | - |
| rowClassName | 表格行的类名 | string \| ((record: any, index: number) => string) | - |
| rowStyle | 表格行的样式 | object \| ((record: any, index: number) => object) | - |
| expandable | 表格是否可展开 | object | - |
| expandedRowRender | 额外的展开行 | (record: any, index: number, indent: number, expanded: boolean) => VNode \| string | - |
| defaultExpandAllRows | 初始时，是否展开所有行 | boolean | false |
| defaultExpandedRowKeys | 初始时，展开的行 | string[] | [] |
| expandedRowKeys | 展开的行，控制属性 | string[] | [] |
| expandRowByClick | 通过点击行来展开子行 | boolean | false |
| onExpand | 展开/关闭的回调 | (expanded: boolean, record: any) => void | - |
| onRow | 设置行属性 | (record: any, index: number) => object | - |
| onHeaderRow | 设置表头行属性 | (column: ITableColumnsType, index: number) => object | - |
| customFilterDropdown | 是否自定义筛选 | boolean | false |
| noDel | 是否显示删除按钮 | boolean | false |
| noDesign | 是否显示设计按钮 | boolean | false |
| noShow | 是否显示查看按钮 | boolean | false |
| noEdit | 是否显示编辑按钮 | boolean | false |
| isHistoryVersion | 是否显示历史版本按钮 | boolean | false |
| switchSource | 开关的数据源 | {label: string, value: string \| number}[] | [] |

### 事件
| 事件名 | 说明 | 回调参数 | 参数 |
| --- | --- | --- | -- |
| onSearch | 搜索回调 | (record: any) => void | record为当前对应的记录 |
| onSwitch | 开关回调 | (record: any) => void |  record为当前对应的记录 |
| on-history-version | 历史版本回调 | (record: any) => void |  record为当前对应的记录 |
| edit | 编辑回调 | (record: any) => void |  record为当前对应的记录 |
| design | 设计回调 | (record: any) => void |  record为当前对应的记录 |
| show | 查看回调 | (record: any) => void |  record为当前对应的记录 |
| delete | 删除回调 | (record: any) => void |  record为当前对应的记录 |


