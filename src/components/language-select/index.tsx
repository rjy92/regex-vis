import { useTranslation } from 'react-i18next'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function LanguageSelect() {
  const { i18n } = useTranslation()
  const language = i18n.language

  return (
    // 完全隐藏语言选择器，固定为中文  
    return null  
    // <Select value={language} onValueChange={i18n.changeLanguage}>
    //   <SelectTrigger className="w-24 px-2 text-xs h-8">
    //     <SelectValue placeholder="Select a language" />
    //   </SelectTrigger>
    //   <SelectContent>
    //     <SelectGroup>
    //       <SelectItem value="en" className="text-xs">English</SelectItem>
    //       <SelectItem value="cn" className="text-xs">简体中文</SelectItem>
    //       <SelectItem value="ru" className="text-xs">Русский</SelectItem>
    //       <SelectItem value="jp" className="text-xs">日本語</SelectItem>
    //     </SelectGroup>
    //   </SelectContent>
    // </Select>
  )
}
