declare global {  
  namespace JSX {  
    interface IntrinsicElements {  
      'regex-vis': {  
        'initial-regex'?: string;  
        width?: string;  
        height?: string;  
      };  
    }  
  }  
}  
  
export declare class RegexVisElement extends HTMLElement {  
  static get observedAttributes(): string[];  
  connectedCallback(): void;  
  disconnectedCallback(): void;  
  attributeChangedCallback(): void;  
}  
  
export default RegexVisElement;