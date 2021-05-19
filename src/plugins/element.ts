import { App } from 'vue'
import {
  locale,
  ElButton
} from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
// Element Plus 组件内部默认使用英语
// https://element-plus.gitee.io/#/zh-CN/component/i18n
import lang from 'element-plus/lib/locale/lang/zh-cn'
// Element Plus 直接使用了 Day.js 项目的时间日期国际化设置, 并且会自动全局设置已经导入的 Day.js 国际化配置。
import 'dayjs/locale/zh-cn'

export default (app: App) => {
  locale(lang)

  // 按需导入组件列表
  const components = [
    ElButton
  ]

  components.forEach(component => {
    app.component(component.name, component)
  })

  // 全局配置
  // 该对象目前支持 size 与 zIndex 字段。size 用于改变组件的默认尺寸 small，zIndex 设置弹框的初始 z-index（默认值：2000）。
  app.config.globalProperties.$ELEMENT = {
    size: 'medium'
  }
}
