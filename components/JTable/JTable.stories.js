/*
 * @Author: wangyunbo
 * @Date: 2021-06-29 17:53:37
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-06-29 18:22:29
 * @Description: file content
 * @FilePath: \medium-reusable-vue-components\components\JTable\JTable.stories.js
 */
import { storiesOf } from '@storybook/vue'
import JTable from './JTable'

var items = [
  ['Yair Lamb', 'yair.lamb@email.com'],
  ['Leonardo Payne', 'leonardo.payne@email.com'],
  ['Carl Henson', 'carl.henson@email.com'],
  ['Jensen Combs', 'jensen.combs@email.com'],
  ['Amiah Burton', 'amiah.burton@email.com'],
  ['Yaretzi Mayo', 'yaretzi.mayo@email.com'],
  ['Kamren Huffman', 'kamren.huffman@email.com']
];

storiesOf('JTable', module)
  .add('with 7 items', () => ({
    components: { JTable },
    template:
    `
      <JTable
        :items="items"
      />
    `,
    data: () => ({
      items
    })
  }))
  .add('with 7 items + header', () => ({
    components: { JTable },
    template:
      `
      <JTable
        :header="header"
        :items="items"
      />
      `,
    data: () => ({
      header: [
        'NAME',
        'EMAIL'
      ],
      items
    })
  }))