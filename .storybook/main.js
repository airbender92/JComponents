/*
 * @Author: wangyunbo
 * @Date: 2021-06-29 17:07:58
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-06-29 17:21:34
 * @Description: file content
 * @FilePath: \medium-reusable-vue-components\.storybook\main.js
 */
module.exports = {
  "stories": [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ]
}