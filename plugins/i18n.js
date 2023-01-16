export default function ({ app, $vuetify, route }) {
  app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {
    console.log(oldLocale);
    console.log(newLocale);
    $vuetify.rtl = true;
  };
}
