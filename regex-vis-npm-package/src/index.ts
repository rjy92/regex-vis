import './regex-vis-element'  
export { default as RegexVisElement } from './regex-vis-element'  
  
// 自动注册Web Component  
if (typeof window !== 'undefined' && !customElements.get('regex-vis')) {  
  import('./regex-vis-element')  
}