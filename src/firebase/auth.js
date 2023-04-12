import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  // updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  // deleteUser,
} from 'firebase/auth';

import {
  getFirestore,
  addDoc,
  collection,
  getDocs,
  query,
  doc,
  deleteDoc,
  updateDoc,
  getDoc,
  orderBy,
  arrayUnion,
  arrayRemove,
  where,
} from 'firebase/firestore';
import { app } from './app.js';

// Initialize Clonomenomeud Firestore and get a reference to the service
export const db = getFirestore(app);
export const auth = getAuth(app);

// export const nameUser = () => auth.currentUser.displayName;
// export const userUID = () => auth.currentUser.uid;

export function createUser(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// login usuario cadastrado ok
export const userLogin = (email, password) => signInWithEmailAndPassword(auth, email, password);

// login google ok
export const googleLogin = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

export const logOut = () => signOut(auth);

// export function delectUser() {
// const user = auth.currentUser;
// deleteUser(user).then(() => {
// se for ok, deletada
// }).catch((error) => {
// console.log('cade  meu botão');
// });
// }
// try {
// const docRef = await addDoc(collection(db, "postQA"), {
// first: "Ada",
// last: "Lovelace",
// born: 1815
// });
// console.log("Document written with ID: ", docRef.id);
// } catch (e) {
// console.error("Error adding document: ", e);
// }

// criar post na coleção
async function publishPost(postText, postSubject) {
await addDoc(collection(db, 'postar'), {
userId: auth.currentUser.uid,
userName: auth.currentUser.displayName,
text: postText,
subject: postSubject,
publishDate: new Date().toLocaleDateString('pt-BR'),
like: [],
});
}

/* // buscar todos os posts
async function getAllPosts() {
  try {
    const querySnapshot = await getDocs(
      query(collection(db, 'postsQA'), orderBy('publishDate', 'desc')),
    );
    const postsFeed = [];
    querySnapshot.forEach((post) => {
      postsFeed.push({
        ...post.data(),
        id: post.id,
      });
    });
    return postsFeed;
  } catch (error) {
    return error;
  }
}

// buscar um post especifico
async function getPost(postId) {
  const querySnapshot = await getDoc(doc(db, 'posts', postId));
  return {
    ...querySnapshot.data(),
    id: querySnapshot.id,
  };
}

// deletar post
async function deletePost(postId) {
  await deleteDoc(doc(db, 'posts', postId));
}

// editar post
async function editPost(postId, postText, postSubject) {
  await updateDoc(doc(db, 'posts', postId), {
    text: postText,
    subject: postSubject,
  });
}

// likes
async function likePost(postId) {
  let post = await getPost(postId);

  if (post.like.indexOf(auth.currentUser.uid) === -1) {
    await updateDoc(doc(db, 'posts', postId), {
      like: arrayUnion(auth.currentUser.uid),
    });
  } else {
    await updateDoc(doc(db, 'posts', postId), {
      like: arrayRemove(auth.currentUser.uid),
    });
  }

  post = await getPost(postId);

  return post.like;
}

export {
  publishPost, getAllPosts, deletePost, editPost, getPost, likePost,
}; */

/// ////////////////////////////////////
/* export function createUser(name, email, password) {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userredential) => {
        console.log(userCrdential);
        console.log('Processo de criação de conta finalizado em auth.');
        resolve(true);
        const user = {
          email,
          name,
        };
        setDoc(doc(db, 'users', auth.currentUser.uid), user);
        updateProfile(auth.currentUser, { displayName: name });
      })
      .catch((error) => {
        const errorMessage = error.message;
        reject(errorMessage);
      })
      .finally(() => {
      });
  });
} */

/* export async function createUser(name, email, password) {
  await createUserWithEmailAndPassword(auth, email, password);
  updateProfile(auth.currentUser, {
    displayName: name,
  });
} */
