import React from 'react'  
import ReactDOM from 'react-dom/client'  
import { Provider } from 'jotai'  
import { BrowserRouter } from 'react-router-dom'  
import Home from '../modules/home'  
import '../global.css' // 引入全局样式  
import '../i18n-cn-only' // 引入国际化配置  
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
    const height = this.getAttribute('height') || '500px'    
        
    this.root?.render(    
      React.createElement(Provider, {},    
        React.createElement('div', {    
          style: {   
            width,   
            height,   
            display: 'flex',  
            flexDirection: 'column',  
            minHeight: 0  
          }    
        },    
          React.createElement('div', {  
            style: {  
              flex: 1,  
              minHeight: 0,  
              overflow: 'auto',  
              position: 'relative'  
            }  
          },  
            React.createElement(RouterWrapper, {    
              initialRegex    
            })  
          )  
        )    
      )    
    )     
  }
} 
  
customElements.define('regex-vis', RegexVisElement)  
export default RegexVisElement