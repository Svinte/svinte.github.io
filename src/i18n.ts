import { createI18n } from 'vue-i18n'
import fi from './locales/fi.json'
import en from './locales/en.json'

export const i18n = createI18n({
    legacy: false,
    locale: 'fi',
    fallbackLocale: 'en',
    messages: {
        fi,
        en
    }
})
