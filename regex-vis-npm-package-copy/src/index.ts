import '@/global.css'  // 或者其他CSS文件的路径
export { RegexVisElement as default } from '@/web-component/index'
// 导出类型定义  
export interface RegexVisAttributes {  
  'initial-regex'?: string;  
  width?: string;  
  height?: string;  
}  
  
declare global {  
  namespace JSX {  
    interface IntrinsicElements {  
      'regex-vis': RegexVisAttributes;  
    }  
  }  
}