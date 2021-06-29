<!--
 * @Author: wangyunbo
 * @Date: 2021-06-29 17:52:06
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-06-29 18:06:52
 * @Description: file content
 * @FilePath: \medium-reusable-vue-components\components\JTable\JTable.vue
-->
<template>
  <table>
    <tr>
      <th
        v-for="(label, index) in header"
        :key="index"
      >
      {{ label }}
      </th>
    </tr>
    <JTableRow
      v-for="(values, index) in items"
      :key="index"
      :values="values"
    />
  </table>
</template>

<script>
import JTableRow from '@airbender92/j-table-row/JTableRow'
export default {
  name: 'JTable',
  props: {
    header: {
      type: Array
    },
    items: {
      type: Array,
      required: true
    }
  },
  components: {
    JTableRow
  }
}
</script>

<style>
th {
  text-align: left;
  padding: 8px;
  font-size: 13px;
  color: #8d8d92;
}
</style>