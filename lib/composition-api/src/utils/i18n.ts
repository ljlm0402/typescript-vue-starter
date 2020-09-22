import Vue from 'vue'
import I18n from 'vue-i18n'

Vue.use(I18n)

const getDefaultLanguage = () => {
  let osLan = sessionStorage.locale || 'KOR'

  if (typeof osLan === 'undefined') {
    osLan = window.navigator.language

    if ('en-US'.indexOf(osLan) > -1) {
      osLan = 'ENG'
    } else if ('ko-KR'.indexOf(osLan) > -1) {
      osLan = 'KOR'
    }
  }

  sessionStorage.locale = osLan
  return osLan
}

const loadLocaleMessage = () => {
  const messages = {}
  const locales = require.context('@/locales', true, /[0-9a-zA-Z-_,\s]+\.json$/i)

  locales.keys().forEach(key => {
    const matched = key.match(/([a-z0-0]+)\./i)

    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })

  return messages
}

export default new I18n({
  locale: getDefaultLanguage(),
  fallbackLocale: getDefaultLanguage(),
  messages: loadLocaleMessage()
})
