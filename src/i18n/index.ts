import { createI18n } from 'vue-i18n'
import CN from './zh'
import EN from './en'
const messages = {
  en: {
    ...EN
  },
  zh: {
    ...CN
  }
}
/**
 * 获取浏览器语言
 */
const getLanguage = () => {
  const language = navigator.language
  localStorage.setItem('language', language)
  return language.indexOf('zh') !== -1 ? 'zh' : 'en'
}

const i18n = createI18n({
  locale: getLanguage() || 'zh',
  legacy: false,
  globalInjection: true,
  messages
})

export default i18n
