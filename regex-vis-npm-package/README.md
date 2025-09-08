# regex-vis-web-component

基于 React 的正则表达式可视化 Web Component。打包后导出 `regex-vis` 自定义元素，支持通过属性传入初始正则与容器尺寸。

- 默认导出：`RegexVisElement`
- 样式文件：`./style.css` (即 `dist/regex-vis-cn.css`)

用法：

```html
<link rel="stylesheet" href="./node_modules/regex-vis-web-component/style.css" />
<script type="module">
  import RegexVis from 'regex-vis-web-component'
  // 注册自定义元素（若未自动注册）
  if (!customElements.get('regex-vis')) {
    customElements.define('regex-vis', RegexVis)
  }
  // 或者：已自动注册则无需显式 define
</script>

<regex-vis initial-regex="/foo(bar)?/gi" width="100%" height="500px"></regex-vis>
```


