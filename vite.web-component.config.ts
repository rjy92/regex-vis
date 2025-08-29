import { defineConfig } from 'vite'  
import react from '@vitejs/plugin-react-swc'  
import tsconfigPaths from 'vite-tsconfig-paths'  
  
export default defineConfig({  
  plugins: [react(), tsconfigPaths()],  
  build: {  
    lib: {  
      entry: 'src/web-component/index.ts',  
      name: 'RegexVisFull',  
      fileName: 'regex-vis-full',  
      formats: ['es']  
    },  
    rollupOptions: {  
      external: [],  
      output: {  
        assetFileNames: 'regex-vis-full.[ext]'  
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