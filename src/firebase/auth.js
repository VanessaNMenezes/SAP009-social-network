import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDocs,
  query,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  increment,
} from 'firebase/firestore';
import { app } from './app.js';

export const db = getFirestore(app);
export const auth = getAuth(app);
export  const q = query(collection(db, 'posts')); // query = pesquisa

export const querySnapshot = await getDocs(q);
export const posts = [];

// Retornará o nome do usuário atualmente autenticado no firebase:
export const nameUser = () => auth.currentUser.displayName;
// Retornará o UID do usuário atualmente autenticado no firebase:
export const userUID = () => auth.currentUser.uid;

// Cadastrar novo usuário:
export function createUser(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// Autenticar usuário:
//**// função de criação de )
    //.then(() => updateProfile(auth.currentUser, {
      //displayName: name,
    //}));
//}

//criar login
export const userLogin = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const googleLogin = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

export const logOut = () => signOut(auth);

// export function delectUser() {
//   const user = auth.currentUser;
//   deleteUser(user).then(() => {
//     // se for ok, deletada
//   }).catch((error) => {
//     console.log(error);
//   });
// }
