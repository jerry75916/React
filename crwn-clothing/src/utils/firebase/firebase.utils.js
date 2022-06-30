import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzJ5wiY71HZbHcVist76xdfo9z72afm5k",
  authDomain: "jerryproject-2b205.firebaseapp.com",
  projectId: "jerryproject-2b205",
  storageBucket: "jerryproject-2b205.appspot.com",
  messagingSenderId: "640831955272",
  appId: "1:640831955272:web:206d3829d166b97a5f537d",
};
const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signinWithGoogleRediect = () => signInWithRedirect(auth, provider);

provider.setCustomParameters({
  prompt: "select_account",
});
const db = getFirestore();
// export const addCollectionAndDocuments = async (collectKey, objectsToAdd) => {
//   const collectionRef = collection(db, collectKey);
//   const batch = writeBatch(db);
//   objectsToAdd.forEach((object) => {
//     const docRef = doc(collectionRef, object.title.toLowerCase());
//     batch.set(docRef, object);
//   });

//   await batch.commit();
// };

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
  // const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
  //   const { title, items } = docSnapshot.data();
  //   acc[title.toLowerCase()] = items;
  //   return acc;
  // }, {}); //reduce 的初值為object, 把Items設為acc[mens]:[id:1,price:]...
  // return categoryMap;
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalImformation
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalImformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userSnapshot;
};
export const createAuthUserWithEmailAndPassWord = async (email, passward) => {
  if (!email || !passward) return;
  return await createUserWithEmailAndPassword(auth, email, passward);
};

export const SignInAuthUserWithEmailAndPassWord = async (email, passward) => {
  if (!email || !passward) return;
  return await signInWithEmailAndPassword(auth, email, passward);
};

export const SignOutFun = async () => signOut(auth);

export const onAuthStateChangeListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};
