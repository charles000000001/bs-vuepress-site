<script setup lang="ts">
import BsDrawer from "./drawer/index.vue";
import BsTable from "./table/index.vue";
import BsButton from "./BSButton.vue";
import { modalMode,IModal } from "./drawer/config";
import {computed, ref} from "vue";
import {ITableColumnsType} from "./table/config";
const mode = ref<modalMode>('add');
const modalObj = ref<IModal>({
  add:false,
  edit:false,
  show:false
});
const lookRecord = ref<any>({});
const columns:Array<ITableColumnsType> = [
  {
    dataIndex:"id",
    title:"编号",
    width:100,
    align:"center"
  },
  {
    dataIndex: "name",
    title: "姓名",
    width: 200,
    align: "center"
  },
  {
    dataIndex: "age",
    title: "年龄",
    width: 200,
    align: "center"
  },
  {
    dataIndex: "address",
    title: "地址",
    width: 200,
    align: "center"
  },
  {
    dataIndex: "operation",
    title: "操作",
    width: 200,
    align: "center",
    customFilterDropdown: true,
    noDel: true,
    noDesign: true,
  }
];
const dataSource = [
  {
    id:1,
    name:"张三",
    age:18,
    address:"北京市朝阳区"
  },
  {
    id:2,
    name:"李四",
    age:20,
    address:"北京市海淀区"
  },
  {
    id:3,
    name:"王五",
    age:22,
    address:"北京市昌平区"
  }
];
const formItemFilter = computed(()=>{
  const filterColumns:string[] = ['operation']
  return columns.filter(item=>!filterColumns.includes(item.dataIndex));
});
const onAdd = () => {
  mode.value = 'add';
  modalObj.value.add = true;
};
const onEdit = (record:any) => {
  lookRecord.value = record;
  mode.value = 'edit';
  modalObj.value.edit = true;
};
const onShow = (record:any) => {
  lookRecord.value = record;
  mode.value = 'show';
  modalObj.value.show = true;
};
const onDoRecord = (mode:modalMode,record:any) => {
  //编辑和新增的时候需要提交数据
  console.log(mode,record);
  modalObj.value[mode] = false;
};
</script>

<template>
  <div>
    <bs-drawer
        :mode="mode"
        :modal-obj="modalObj"
        :record="lookRecord"
        :columns="formItemFilter"
        @doRecord="onDoRecord"
    ></bs-drawer>
    <a-card>
      <a-button @click="onAdd">新增</a-button>
    </a-card>
    <bs-table :columns="columns" :data-source="dataSource" @edit="onEdit" @show="onShow">
    </bs-table>
  </div>

</template>

<style scoped lang="scss">

</style>
