// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    head: {
        title: 'DevBxnq - Developer',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
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
})