<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { IModal, ITableColumnsType, modalMode,isEqualObject } from "./config";
import { FormInstance, message } from "ant-design-vue";
//import { cloneDeep } from "lodash";
const props = defineProps<{
  modalObj:IModal
  mode:modalMode,
  record?:any,
  labelCol?:number,
  columns:Array<ITableColumnsType>
  width?:string|number
}>()
const form = ref<FormInstance>(null);
const emit = defineEmits(["doRecord","update:record"]);
// 动态标题
const showTitle = computed(()=>{
  if(props.mode==="add"){
    return "新增"
  }else if (props.mode==="edit"){
    return "编辑"
  }else{
    return "预览"
  }
});
const customRecord = ref<any>({});

//提交数据
const handleOk = () => {
  form.value.validate().then(() => {
    if(isEqualObject(customRecord.value,props.record)){
      message.error("您要修改的与原数据一致，无需提交");
      return;
    }
    emit("doRecord",props.mode,customRecord.value);
  }).catch(() => {});
}
const onClose = () => {
  props.modalObj[props.mode]=false;
}
// 刷新数据
watch([()=>props.record,()=>props.mode],()=>{
  if(props.mode!=='add'){
    customRecord.value=props.record;
  }else{
    customRecord.value={};
  }
},{ deep:true,immediate:true });

</script>

<template>
  <div>
    <a-drawer v-model:visible="modalObj[mode]"
             :title="showTitle"
              :width="props.width"
              :maskClosable="false"
              :destroyOnClose="true"
              v-bind="$attrs"
              :footer-style="{ textAlign: 'right' }"
              placement="right">
      <a-form
          ref="form"
          :model="customRecord"
          :label-col="{ span: labelCol}"
          :wrapper-col="{ span: 24-labelCol }">
        <template  v-for="column in columns" :key="column.key">
          <a-form-item
              :required="!column.noRequired"
              :label="column.title" :name="column.dataIndex">
            <a-select  v-if="column.dataSource" :options="column.dataSource" :disabled="mode==='show'" v-model:value="customRecord[column.dataIndex]" :placeholder="`请输入${column.title}`"/>
            <a-switch v-else-if="Array.isArray(column.switchSource)&&column.switchSource.length>0"
              v-model:checked="customRecord[column.dataIndex]" :disabled="mode==='show'"
              :un-checked-children="column.switchSource[0].label" :un-checked-value="column.switchSource[0].value"
              :checked-children="column.switchSource[1].label" :checked-value="column.switchSource[1].value"
            ></a-switch>
            <a-upload
                v-else-if="column.file"
                :disabled="mode==='show'"
                v-bind="column.file"></a-upload>
            <a-input-number style="width: 100%" v-else-if="column.type==='InputNumber'" :disabled="mode==='show'" v-model:value="customRecord[column.dataIndex]" :placeholder="`请输入${column.title}`"/>
            <a-input v-else :disabled="mode==='show'" v-model:value="customRecord[column.dataIndex]" :placeholder="`请输入${column.title}`"/>
          </a-form-item>
        </template>
        <slot :readOnly="mode==='show'" :record="customRecord" :language="customRecord.dataSourceType===3?'sql':'csharp'"></slot>
      </a-form>
      <template #footer v-if="mode!=='show'">
        <a-button style="margin-right: 8px" @click="onClose">取消</a-button>
        <a-button type="primary" @click="handleOk">提交</a-button>
      </template>
    </a-drawer>
  </div>
</template>

<style scoped lang="scss">

</style>
