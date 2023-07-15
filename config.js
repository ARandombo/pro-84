import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyAKFvmWrjab59IcDetw4ETFd4DYhukuzOc",
  authDomain: "complaint-forum-4955b.firebaseapp.com",
  projectId: "complaint-forum-4955b",
  storageBucket: "complaint-forum-4955b.appspot.com",
  messagingSenderId: "73177110175",
  appId: "1:73177110175:web:091a0db449a9ecacd174aa"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
