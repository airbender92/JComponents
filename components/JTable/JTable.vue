<!--
 * @Author: wangyunbo
 * @Date: 2021-06-29 17:52:06
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-06-29 17:53:21
 * @Description: file content
 * @FilePath: \medium-reusable-vue-components\components\JTable\JTable.vue
-->
<template>
  <table>
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