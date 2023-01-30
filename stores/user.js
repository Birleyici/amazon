import { defineStore } from 'pinia'
import { getAuth, signInWithRedirect, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";


export const useUserStore = defineStore('user', {
    state: () => ({
        user: null
    }),
    getters: {
    },
    actions: {

        signInWithEmail(user) {

          
     
            const provider = new GoogleAuthProvider();
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