// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=500, initial-scale=1',
            title: 'DevBxnq - Developer',
            meta: [
                // <meta name="description" content="My amazing site">
                {
                    name: 'description',
                    content: 'Mein Name ist Bengt und ich programmiere Software. Du willst mich kontaktieren? Drücke auf den contact Knopf!'
                },
                {
                    property: 'og:type',
                    content: 'website'
                },
                {
                    property: 'og:url',
                    content: 'https://www.devbxnq.de'
                }
            ],
            link: [{ rel: 'icon', type: 'image/png', href: '/assets/img/logo.png' }]
        }
    }
})