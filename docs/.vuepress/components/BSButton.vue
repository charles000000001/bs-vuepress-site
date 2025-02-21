<script setup lang="ts">
import { Button,Space } from "ant-design-vue";
import { SearchOutlined } from '@ant-design/icons-vue';
import "ant-design-vue/dist/antd.css";
const props = withDefaults(defineProps<{
  demoType?:any
}>(), {
  demoType: 1
});
</script>

<template>
  <div style="line-height: 100px">
    <Space v-if="demoType===1">
      <Button type="primary" >Primary</Button>
      <Button >Normal</Button>
      <Button type="dashed" >Dashed</Button>
      <Button danger >Danger</Button>
      <Button type="link" >Link</Button>
    </Space>
    <Space v-else-if="demoType===2">
      <Button type="primary" loading>Primary</Button>
      <Button loading>Normal</Button>
      <Button type="dashed" loading>Dashed</Button>
      <Button danger loading>Danger</Button>
      <Button type="link" loading>Link</Button>
    </Space>
    <Space v-else-if="demoType===3">
      <a-button type="primary" shape="circle">
        <template #icon><SearchOutlined /></template>
      </a-button>
      <a-button type="primary" shape="circle">A</a-button>
      <a-button type="primary">
        <template #icon><SearchOutlined /></template>
        Search
      </a-button>
      <a-button shape="circle">
        <template #icon><SearchOutlined /></template>
      </a-button>
      <a-button>
        <template #icon><SearchOutlined /></template>
        Search
      </a-button>
    </Space>
  </div>

</template>

<style scoped lang="scss">

</style>
