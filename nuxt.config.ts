

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    // 'nuxt-vuefire',
  ],

  app: {

    head: {
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      script: [

      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css", integrity: "sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==", crossorigin: "anonymous", referrerpolicy: "no-referrer" },
        { rel: "stylesheet", href: "style.css" },
        { href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css", rel: "stylesheet", integrity: "sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65", crossorigin: "anonymous" },
        {
          rel: 'stylesheet',
          href: 'css/bootstrap.css'
        },
        {
          rel: 'stylesheet',
          href: 'js/bootstrap.js'
        },
        {
          rel: 'stylesheet',
          href: 'css/vuetify.css'
        },
        {
          rel: 'stylesheet',
          href: 'style.css'
        }
      ],
      // please note that this is an area that is likely to change
      style: [
      ],
      noscript: [
      ]
    }
  }
})