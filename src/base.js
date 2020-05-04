import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCzgFXkpb_GH1PdorW8ZSUCzvRi90nuaBk",
    authDomain: "benaor-chatbox.firebaseapp.com",
    databaseURL: "https://benaor-chatbox.firebaseio.com"
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base
