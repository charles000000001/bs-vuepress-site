<script setup lang="ts">
import { reactive, ref, computed, toRaw, nextTick, watch } from "vue";
import { FilterFilled,EditOutlined } from "@ant-design/icons-vue";
import { ISelectOption, ITableColumnsType } from "./config";
import SvgIcon from "../svgIcon/index.vue";
import dayjs from "dayjs";
import { message } from "ant-design-vue";

interface ICheck {
  checkAll: boolean;
  indeterminate: boolean;
  checkedList: string[];
}
const props = defineProps<{
  bordered?: boolean,
  dataSource: Array<any>,
  columns: Array<ITableColumnsType>
}>();
const whereParams = ref<any>({});
//设置全选/全消
let plainOptions = props.columns.filter(item => item.dataIndex !== "operation").map(item => item.title);
const state = reactive<any>({
  checkAll: true,
  indeterminate: false,
  checkedList: props.columns.filter(item => item.dataIndex !== "operation").map(item => item.title)
});
const showColumns = computed(() => {
  return props.columns.filter(item => state.checkedList.includes(item.title) || item.dataIndex === "operation");
});
// 异步获取列数据
watch(() => props.columns, (newVal) => {
  plainOptions = newVal.filter(item => item.dataIndex !== "operation").map(item => item.title);
  state.checkedList = newVal.filter(item => item.dataIndex !== "operation").map(item => item.title);
});
const onCheckAllChange = (e: any) => {
  Object.assign(state, {
    checkedList: e.target.checked ? plainOptions : [],
    indeterminate: false,
  });
}
const onCheckChange = (event: any) => {
  nextTick(() => {
    if (toRaw(state.checkedList).length === 0) {
      Object.assign(state, {indeterminate: false, checkAll: false});
    } else if (toRaw(state.checkedList).length === plainOptions.length) {
      Object.assign(state, {indeterminate: false, checkAll: true});
    } else {
      Object.assign(state, {indeterminate: true, checkAll: true});
    }
  });
}
const editableData = reactive<any>({});
const emit = defineEmits(["delete", "edit", "design", "show", "onSearch", "onSwitch", "onHistoryVersion"]);
const edit = (event, dataIndex: string, key: string | number) => {
  for (const fieldName in editableData) {
    editableData[fieldName] = false;
  }
  editableData[dataIndex + key] = !editableData[dataIndex + key];
};
const save = (dataIndex: string, key: string | number) => {

  editableData[dataIndex + key] = !editableData[dataIndex + key];
};
const onDelete = (record: any) => {
  emit("delete", record);
};
const onDesign = (record: any) => {
  emit("design", record);
};
const onEdit = (record: any) => {
  emit("edit", record);
};
const showRecord = (record: any) => {
  emit("show", record);
};
const getLabelByValue = (value: any, column: ITableColumnsType) => {
  if (Array.isArray(column.dataSource) && column.dataSource.length > 0) {
    const option = column.dataSource.find((item: ISelectOption) => item.value == value);
    return option ? option.label : '--';
  }
  if (column.isTimeUTC) {
    return value ? dayjs(value).format('YYYY-MM-DD HH:mm:ss') : '--';
  }
  return value === '' ? '--' : value ?? '--';
};
// v-focus自定义指令
const vFocus = {
  mounted(el: any) {
    el.focus();
  }
};
const onSearch = (column: any) => {
  const params: any = {...whereParams.value}
  if (column && column.type === 'InputNumber') {
    if (whereParams.value === 0 || whereParams.value[column.dataIndex]) {
      params[column.dataIndex] = Number(whereParams.value[column.dataIndex]);
    } else {
      params[column.dataIndex] = null;
    }
  }
  emit("onSearch", params);
};
const switchChange = (record: any) => {
  emit("onSwitch", record);
};
const onHistoryVersion = (record: any) => {
  emit("onHistoryVersion", record);
};
//一键复制功能
const onCopy = (value: any) => {
  if(navigator&&navigator.clipboard){
    navigator.clipboard.writeText(value).then(() => {
      message.success('复制成功');
    }).catch(() => {
      message.error('复制失败');
    });
  }else{
    const textArea = document.createElement("textarea");
    textArea.value = value;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      message.success('复制成功');
    } catch (err) {
      message.error('复制失败');
    }
    document.body.removeChild(textArea);
  }
};
</script>
<template>
  <div class="container">
    <a-table
        :bordered="bordered"
        :columns="showColumns"
        :data-source="dataSource" v-bind="$attrs">
      <template #headerCell="{ column }">
        <template v-if="column.isEdit">
          <span>{{ column.title }} <EditOutlined/></span>
        </template>
      </template>
      <template #customFilterDropdown="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }">
        <div style="padding: 8px" v-if="column.dataIndex === 'operation'">
          <div>
            <a-checkbox v-model:checked="state.checkAll" :indeterminate="state.indeterminate"
                        @change="onCheckAllChange">
              全选/全消
            </a-checkbox>
          </div>
          <hr/>
          <a-checkbox-group v-model:value="state.checkedList">
            <div v-for="(item,index) in plainOptions" :key="index">
              <a-checkbox :value="item" @change="onCheckChange">{{ item }}</a-checkbox>
            </div>
          </a-checkbox-group>
        </div>
        <div style="padding: 8px" v-else>
          <a-select v-if="Array.isArray(column.dataSource)&&column.dataSource.length>0"
                    v-model:value="whereParams[column.dataIndex]"
                    style="width: 100%"
                    allow-clear
                    :options="column.dataSource"
                    :placeholder="`请选择${column.title}`"
                    @change="onSearch"></a-select>
          <a-input-search v-else
                          :placeholder="`请输入${column.title}`"
                          allow-clear
                          v-model:value="whereParams[column.dataIndex]"
                          enter-button
                          @search="onSearch(column)"/>
        </div>
      </template>
      <template #customFilterIcon="{ filtered, column }">
        <EditOutlined v-if="whereParams[column.dataIndex]===0 || whereParams[column.dataIndex]"/>
        <FilterFilled v-else :style="{ color: filtered ? '#108ee9' : undefined }"/>
      </template>
      <template #bodyCell="{ column, text, record,index }">
        <template v-if="column.isEdit">
          <div class="editable-cell">
            <div v-if="editableData[column.dataIndex+index]" class="editable-cell-input-wrapper">
              <a-select style="width:100%" v-if="Array.isArray(column.dataSource)&&column.dataSource.length>0"
                        :options="column.dataSource"
                        v-model:value="record[column.dataIndex]"
                        v-focus
                        @blur="save(column.dataIndex,index)"></a-select>
              <a-input style="width:auto" v-else v-focus v-model:value="record[column.dataIndex]"
                       @blur="save(column.dataIndex,index)"/>
            </div>
            <div v-else class="editable-cell-text-wrapper" @dblclick="edit($event,column.dataIndex,index)">
              <span v-if="column.copy" style="cursor: pointer">
                <a-tooltip placement="bottomLeft" :title="`单击复制(${record[column.dataIndex]})`">
                  <span @click="onCopy(record[column.dataIndex])">{{ getLabelByValue(text, column) }}</span>
                 </a-tooltip>
              </span>
              <span v-else-if="record[column.dataIndex]">
                <a-tooltip placement="bottomLeft" :title="record[column.dataIndex]">
                  {{ getLabelByValue(text, column) }}
                </a-tooltip>
              </span>
              <span v-else>
                {{ getLabelByValue(text, column) }}
              </span>
            </div>
          </div>
        </template>
        <template v-else-if="column.switchSource">
          <a-switch :checked="record[column.dataIndex]"
                    :un-checked-children="column.switchSource[0].label" :un-checked-value="column.switchSource[0].value"
                    :checked-children="column.switchSource[1].label" :checked-value="column.switchSource[1].value"
                    @change="switchChange(record)"></a-switch>
        </template>
        <template v-else-if="column.type==='SvgIcon'">
          <svg-icon :name="text" size="2em"></svg-icon>
        </template>
        <template v-else-if="column.dataIndex === 'operation'&&dataSource.length">
          <a-space>
            <a-button type="link" @click="onDesign(record)" v-if="!column.noDesign" size="small">设计</a-button>
            <a-button type="link" @click="onEdit(record)" v-if="!column.noEdit" size="small">编辑</a-button>
            <a-button type="link" @click="showRecord(record)" v-if="!column.noShow" size="small">预览</a-button>
            <a-button type="link" @click="onHistoryVersion(record)" v-if="column.isHistoryVersion" size="small">
              历史版本
            </a-button>
            <a-popconfirm
                v-if="!column.noDel"
                title="确定要删除吗?"
                @confirm="onDelete(record)"
            >
              <a-button type="link" size="small">删除</a-button>
            </a-popconfirm>
          </a-space>
        </template>
        <template v-else>
          <span v-if="column.copy" style="cursor: pointer">
             <a-tooltip placement="bottomLeft" :title="`单击复制(${record[column.dataIndex]})`">
               <span @click="onCopy(record[column.dataIndex])">{{ getLabelByValue(text, column) }}</span>
             </a-tooltip>
          </span>
          <span v-else-if="record[column.dataIndex]===0||record[column.dataIndex]">
            <a-tooltip placement="bottomLeft" :title="getLabelByValue(text, column)">
              {{ getLabelByValue(text, column) }}
            </a-tooltip>
          </span>
          <span v-else>
            {{ getLabelByValue(text, column) }}
          </span>
        </template>
      </template>
      <!--    <template  v-for="(__,slotName) in $slots" v-slot:[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps"></slot>
          </template>-->
    </a-table>
  </div>
</template>
<style scoped lang="scss">
.container {
  .filter-column {
    text-align: right;
    line-height: 60px;
    padding-right: 10px;
  }

  .editable-cell {
    cursor: pointer;
  }

  :deep(.ant-pagination-options-size-changer.ant-select ) {
    text-align: center;
    width: 95px;
  }
}
</style>
