import { boot } from 'quasar/wrappers'
import { createI18n } from 'vue-i18n'
import messages from 'src/i18n'

export default boot(({ app }) => {
  let i18n
  const lang = localStorage.getItem('lang')
  if (lang){
    i18n = createI18n({
      locale: lang,
      messages
    })
  }else {
    localStorage.setItem('lang','ru-RU')
    i18n = createI18n({
      locale: 'ru-RU',
      messages
    })
  }

  app.use(i18n)
})
