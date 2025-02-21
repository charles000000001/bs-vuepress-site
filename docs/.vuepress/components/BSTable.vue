<script setup lang="ts">
import TableCustom from "./table/index.vue";
import { ITableColumnsType } from "./table/config";
const columns:Array<ITableColumnsType> = [
  {
    title: "编号",
    dataIndex: "id",
    key: "id",
    align: "center",
    width: 120
  },
  {
    title: "姓名",
    customFilterDropdown:true,
    dataIndex: "name",
    key: "name",
    align: "center",
    width:200
  },
  {
    dataIndex:'status',
    title:'状态',
    key:'status',
    align:'center',
    switchSource:[
      {label:'启用',value:1},
      {label:'禁用',value:0}
    ],
    width:200
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
    align: "center",
    width:200
  },
  {
    title: "地址",
    dataIndex: "address",
    key: "address",
    align: "center",
    width:200
  },
  {
    title: "操作",
    dataIndex: "operation",
    align: "center",
    customFilterDropdown:true,
    noDel:false,
    noDesign:true,
    noShow:false,
    noEdit:false,
    isHistoryVersion:false
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
    <TableCustom :pagination="false"
                 :columns="columns"
                 :dataSource="dataSource"
                 @edit="onEdit"
                 @design="onDesign"
                  @show="onShow"
                 @delete="onDelete"
                 @on-search="onSearch"
                 @on-history-version="onHistoryVersion"
                 @onSwitch="onSwitch"
    />
  </div>

</template>

<style scoped lang="scss">

</style>
