import en from './locales/en.json';
import fr from './locales/fr.json';
import ru from './locales/ru.json';

export default defineI18nConfig(() => ({
    legacy: false,
    globalInjection: true,
    messages: {
      en,
      fr,
      ru,
    },
}))
