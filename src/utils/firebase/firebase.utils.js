import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc,collection,writeBatch, query, getDocs } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAIoQIwju4NqMlU3BXv3q9dDv8dYTd165c",
  authDomain: "shoppingulti.firebaseapp.com",
  projectId: "shoppingulti",
  storageBucket: "shoppingulti.firebasestorage.app",
  messagingSenderId: "1081252878230",
  appId: "1:1081252878230:web:5822c2201c744d27a92fb7",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();



export const signInWithGoogle = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth,additional) => {
  
    const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additional
      });
    } catch (e) {
      console.log(e);
    }
  }
  return userDocRef;
};

export const createUserWithEmailAndPass = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};


export const signInWithEmailAndPass=async (email, password)=>{
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
}


export const signOutUserAuth=async ()=>{
  await signOut(auth)
};



export const onAuthStateChangedListener=(callback)=>onAuthStateChanged(auth,callback)





export const addCollectionAndDocuments=async (collectionKey,documentsToAdd)=>{
  const collectionRef=collection(db,collectionKey);
  const batch=writeBatch(db);
  documentsToAdd.forEach(item=>{
    const docRef=doc(collectionRef,item.title.toLowerCase());
    batch.set(docRef,item);
  })
  await batch.commit();
  console.log('database done');
}
export const getCategoriesAnddocuments=async (collectionKey)=>{
  const collectionRef=collection(db,collectionKey);
  const q=query(collectionRef);

  const querySnapShot=await getDocs(q);


  const categoryMap=querySnapShot.docs.reduce((acc,docSnapShot)=>{
    const {title,items}=docSnapShot.data();
    acc[title.toLowerCase()]=items;
    return acc;
  },{})
  return categoryMap;
}