import * as firebase from 'firebase'

const app = firebase.initializeApp({
  apiKey: 'AIzaSyBDNp0M94DK5ElftH1uWYnFuFt06tqSgA8',
  authDomain: 'shout-box-da594.firebaseapp.com',
  databaseURL: 'https://shout-box-da594.firebaseio.com'
})

export default app.database()
