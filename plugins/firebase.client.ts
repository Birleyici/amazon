import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics"

export default defineNuxtPlugin(nuxtApp => {

 



    const firebaseConfig = {
        apiKey: "AIzaSyA4k400kEi9s05gUjtJqchNSgdDBJWONq8",
        authDomain: "mckyazilim.firebaseapp.com",
        projectId: "mckyazilim",
        storageBucket: "mckyazilim.appspot.com",
        messagingSenderId: "314440169166",
        appId: "1:314440169166:web:a733f9f6f43ec8c2f9829f",
        measurementId: "G-QKLF43XTZJ"
      };

    const app = initializeApp(firebaseConfig)

    


    const auth = getAuth(app)
    const analytics = getAnalytics(app)
    const firestore = getFirestore(app)
    const db = getFirestore();


    

    nuxtApp.vueApp.provide('auth', auth)
    nuxtApp.provide('auth', auth)


    nuxtApp.vueApp.provide('firestore', firestore)
    nuxtApp.provide('firestore', firestore)




})

