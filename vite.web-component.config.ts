import { defineConfig } from 'vite'    
import react from '@vitejs/plugin-react-swc'    
import tsconfigPaths from 'vite-tsconfig-paths'    
import path from 'node:path'  
  
export default defineConfig({    
  plugins: [react(), tsconfigPaths()],  
  resolve: {  
    alias: {  
      'tailwind.config': path.resolve(__dirname, 'tailwind.config.ts'),  
    },  
  },  
  css: {  
    postcss: './postcss.config.js',  
  },  
  build: {    
    lib: {    
      entry: 'src/web-component/index.ts',    
      name: 'RegexVisFull',    
      fileName: 'regex-vis-cn',    
      formats: ['es']    
    },    
    rollupOptions: {    
      external: [],    
      output: {    
        assetFileNames: (assetInfo) => {  
          if (assetInfo.name?.endsWith('.css')) {  
            return 'regex-vis-cn.css'  // 生成独立的 CSS 文件  
          }  
          return 'regex-vis-cn.[ext]'  
        }  
      }    
    },    
    cssCodeSplit: false, // 将CSS打包到一个文件中    
    minify: true,    
    sourcemap: true    
  },    
  define: {    
    'process.env.NODE_ENV': '"production"'    
  }    
})