import { createI18n } from 'vue-i18n'
import { watch } from 'vue'
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

document.documentElement.lang = i18n.global.locale.value

watch(
    () => i18n.global.locale.value,
    (newLocale) => {
        document.documentElement.lang = newLocale
    }
)