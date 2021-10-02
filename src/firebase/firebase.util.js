import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
  apiKey: 'AIzaSyCVKta2zn08QuNp2WCB8mlbakMDjVx3ydQ',
  authDomain: 'crwn-db-765b2.firebaseapp.com',
  databaseURL: 'https://crwn-db-765b2.firebaseio.com',
  projectId: 'crwn-db-765b2',
  storageBucket: 'crwn-db-765b2.appspot.com',
  messagingSenderId: '774249706796',
  appId: '1:774249706796:web:e4d38f06283c8ee19ce889'
}

firebase.initializeApp(config)

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  console.log(snapShot)

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (e) {
      console.log('error creating user', e.message)
    }
  }

  return userRef
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ promp: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
