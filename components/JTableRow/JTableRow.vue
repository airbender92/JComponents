<!--
 * @Author: wangyunbo
 * @Date: 2021-06-29 17:16:15
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-06-29 17:16:45
 * @Description: file content
 * @FilePath: \medium-reusable-vue-components\components\JTableRow\JTableRow.vue
-->
<template>
  <tr>
    <td v-for="(value, index) in values" :key="index">
      {{ value }}
    </td>
  </tr>
</template>

<script>
export default {
  name: 'JTableRow',
  props: {
    values: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
tr {
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.08);
}
td {
  padding: 8px;
}
</style>