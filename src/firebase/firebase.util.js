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

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ promp: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
