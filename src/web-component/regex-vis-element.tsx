import React from 'react'  
import ReactDOM from 'react-dom/client'  
import { Provider } from 'jotai'  
import { BrowserRouter } from 'react-router-dom'  
import Home from '../modules/home'  
import '../global.css' // 引入全局样式  
import '../i18n' // 引入国际化配置  
import { RouterWrapper } from './router-wrapper'
  
class RegexVisElement extends HTMLElement {  
  private root: ReactDOM.Root | null = null  
  // private shadowRoot: ShadowRoot  
    
  constructor() {  
    super()  
    // this.shadowRoot = this.attachShadow({ mode: 'open' })  
  }  
    
  connectedCallback() {  
    this.root = ReactDOM.createRoot(this)  
    this.render()  
  }  
    
  disconnectedCallback() {  
    if (this.root) {  
      this.root.unmount()  
    }  
  }  
    
  static get observedAttributes() {  
    return ['initial-regex', 'width', 'height']  
  }  
    
  attributeChangedCallback() {  
    if (this.root) {  
      this.render()  
    }  
  }  
    
  private render() {  
    const initialRegex = this.getAttribute('initial-regex') || ''  
    const width = this.getAttribute('width') || '100%'  
    const height = this.getAttribute('height') || '600px'  
      
    // 这里就是"更新Web Component使用路由包装器"的具体位置  
    this.root?.render(  
      React.createElement(Provider, {},  
        React.createElement(RouterWrapper, {  
          initialRegex  
        })  
      )  
    )  
  } 
} 
  
customElements.define('regex-vis-full', RegexVisElement)  
export default RegexVisElement