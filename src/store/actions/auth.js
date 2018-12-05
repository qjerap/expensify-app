import { firebase, googleAuthProvider } from '../../firebase/firebase';

// LOGIN 

export const login = (uid) => ({
    type: 'LOGIN',
    uid
})

export const firebaseLogin = () => {
    return () => {
        firebase.auth().signInWithPopup(googleAuthProvider)
    }
}

// LOGOUT

export const logout = () => ({
    type: 'LOGOUT'
})

export const firebaseLogout = () => {
    return () => {
        return firebase.auth().signOut()
    }
};

