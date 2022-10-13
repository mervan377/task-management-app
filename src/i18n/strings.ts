import { I18n, TranslateOptions } from "i18n-js";
import { entries as en } from "./ui/en";
import { entries as tr } from "./ui/tr";

const i18n = new I18n({ en, tr });
 

i18n.locale = navigator.language;
i18n.defaultLocale = "en";
i18n.enableFallback = true;
i18n.translations = { en, tr };

export const strings = {
  t(key: any, options?: TranslateOptions) {
    return i18n.translate(key, options);
  },

  setLanguage(lang: string) {
    i18n.locale = lang;
  },
};
