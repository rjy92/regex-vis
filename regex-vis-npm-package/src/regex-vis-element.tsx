import React from 'react'  
import ReactDOM from 'react-dom/client'  
import { Provider } from 'jotai'  
import { BrowserRouter } from 'react-router-dom'  
import { RouterWrapper } from './router-wrapper'

import '@/global.css'  
import '@/i18n-cn-only'  
import Home from '@/modules/home'

  
class RegexVisElement extends HTMLElement {  
  private root: ReactDOM.Root | null = null  
  private static stylesheet: CSSStyleSheet | null = null  
    
  constructor() {  
    super()  
    this.attachShadow({ mode: 'open' })  
    

  }  
  private async adoptStylesheet() {  
    if (!RegexVisElement.stylesheet) {  
      const response = await fetch('./regex-vis-cn.css')  
      const css = await response.text()  
      RegexVisElement.stylesheet = new CSSStyleSheet()  
      await RegexVisElement.stylesheet.replace(css)  
    }  
    // 添加 null 检查  
    if (this.shadowRoot) {  
      this.shadowRoot.adoptedStyleSheets = [RegexVisElement.stylesheet]    
    }  
  }  
  async connectedCallback() {  
    await this.adoptStylesheet()  
    if (this.shadowRoot) {  
      this.root = ReactDOM.createRoot(this.shadowRoot)    
      this.render()    
    } 
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