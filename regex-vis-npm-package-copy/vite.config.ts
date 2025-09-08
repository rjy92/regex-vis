import { defineConfig } from 'vite'  
import react from '@vitejs/plugin-react-swc'  
import tsconfigPaths from 'vite-tsconfig-paths'  
import path from 'node:path'  
import dts from 'vite-plugin-dts' 
  
export default defineConfig({  
  plugins: [react(), tsconfigPaths(), 
  dts({  
      insertTypesEntry: true,  
      outDir: 'dist',
      exclude: ['**/*.test.*', '**/*.spec.*', 
        'tailwind.config.ts',  
        '../tailwind.config.ts',  
        '**/tailwind.config.*'  
      ]  
    }) 
  ],  
  resolve: {  
    alias: {  
      '@': path.resolve(__dirname, '../src'),  
      'tailwind.config': path.resolve(__dirname, '../tailwind.config.ts'),  
    },  
  }, 
  optimizeDeps: {
    include: [
      'tailwind.config.ts',
    ],
  }, 
  css: {  
    postcss: './postcss.config.js',
  },  
  build: {  
    lib: {  
      entry: 'src/index.ts',  
      name: 'RegexVis',  
      fileName: (format) => `regex-vis-cn.${format === 'es' ? 'mjs' : 'js'}`,  // 明确指定扩展名  
      formats: ['es']  
    },  
    rollupOptions: {  
      output: {  
        inlineDynamicImports: true,  
        assetFileNames: (assetInfo) => {  
          if (assetInfo.name?.endsWith('.css')) {  
            return 'regex-vis-cn.css'  // 改为与代码中期望的文件名一致  
          }  
          return 'assets/[name].[ext]'  
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