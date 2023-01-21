// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
     modules: ['@nuxtjs/tailwindcss'],
     // tailwindcss: {
     //      // add '~tailwind.config` alias
     //      exposeConfig: true
     //    }
     // tailwindcss: {
     //      cssPath: '~/assets/css/tailwind.css',
     //    }
     app:{
        head:{
            title:'Nuxt Dojo',
            meta:[
                {name:'description',content:'Everything about nux 3'}
            ],
            link:[
                {rel:'stylesheet',href:'https://fonts.googleapis.com/icon?family=Material+Icons'}
            ]
        }
     }
 })
 
