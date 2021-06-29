/*
 * @Author: wangyunbo
 * @Date: 2021-06-29 17:17:25
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-06-29 17:19:44
 * @Description: file content
 * @FilePath: \medium-reusable-vue-components\components\JTableRow\JTableRow.stories.js
 */
import { storiesOf } from '@storybook/vue'
import JTableRow from './JTableRow'

storiesOf('JTableRow', module)
  .add('normal', () => ({
    components: { JTableRow },
    template:
      `
      <JTableRow
        :values="values"
      />
      `,
    data: () => ({
      values: [
        'hello',
        '你好'
      ]
    })
  }))