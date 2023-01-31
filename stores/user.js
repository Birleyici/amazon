import { defineStore } from 'pinia'
import { getAuth, signInWithRedirect, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";


export const useUserStore = defineStore('user', {
    state: () => ({
        user: null,
    }),
    getters: {
    },
    actions: {

        createUser(user) {

            const auth = getAuth();
            createUserWithEmailAndPassword(auth, user.value.email, user.value.pass)
                .then((userCredential) => {
                    // Signed in 
                    console.log("giriş yapıldı")
                    const user = userCredential.user;
                    navigateTo('/')


                    // ...
                })
                .catch((error) => {

                    const errorCode = error.code;
                    const errorMessage = error.message;
                    this.registerError = true
                    console.log("giriş yapılamadı", errorMessage)

                    // ..
                });

        },

        signInWithEmail(user) {



            // const provider = new GoogleAuthProvider();
            const auth = getAuth();

            signInWithEmailAndPassword(auth, user.value.email, user.value.pass)
                .then((userCredential) => {
                    // Signed in 
                    this.user = auth.currentUser
                    navigateTo('/')

                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });

        }

    },
})