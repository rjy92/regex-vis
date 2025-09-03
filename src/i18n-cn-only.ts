import i18n from 'i18next'  
import { initReactI18next } from 'react-i18next'  
import cnTranslation from '../public/locales/cn/translation.json'  
  
i18n  
  .use(initReactI18next)  
  .init({  
    lng: 'cn',  
    fallbackLng: 'cn',  
    resources: {  
      cn: {  
        translation: cnTranslation  
      }  
    },  
    interpolation: {  
      escapeValue: false  
    }  
  })  
  
export default i18n