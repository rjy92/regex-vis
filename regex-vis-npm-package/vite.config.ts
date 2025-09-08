import { defineConfig } from 'vite'  
import react from '@vitejs/plugin-react-swc'  
import tsconfigPaths from 'vite-tsconfig-paths'  
import path from 'node:path'  
  
export default defineConfig({  
  plugins: [react(), tsconfigPaths()],  
  resolve: {  
    alias: {  
      '@': path.resolve(__dirname, '../src'),  
      'tailwind.config': path.resolve(__dirname, './tailwind.config.ts'), // 使用本地配置  
      '../global.css': path.resolve(__dirname, '../src/global.css'),  
      '../i18n-cn-only': path.resolve(__dirname, '../src/i18n-cn-only'),  
      '../modules/home': path.resolve(__dirname, '../src/modules/home'),  
    },  
  },  
  css: {  
    postcss: './postcss.config.js', // 使用本地 postcss 配置  
  },  
  build: {  
    lib: {  
      entry: 'src/index.ts',  
      name: 'RegexVisFull',  
      fileName: 'regex-vis-cn',  
      formats: ['es', 'umd']  
    },  
    rollupOptions: {  
      external: ['react', 'react-dom'],  
      output: {  
        globals: {  
          react: 'React',  
          'react-dom': 'ReactDOM'  
        },  
        assetFileNames: (assetInfo) => {  
          if (assetInfo.name?.endsWith('.css')) {  
            return 'regex-vis-cn.css'  
          }  
          return 'regex-vis-cn.[ext]'  
        }  
      }  
    },  
    cssCodeSplit: false,  
    minify: true,  
    sourcemap: true  
  },  
  define: {  
    'process.env.NODE_ENV': '"production"',  
    'process.env.VITE_SHOW_MDN_LINKS': '"false"'  
  }  
})