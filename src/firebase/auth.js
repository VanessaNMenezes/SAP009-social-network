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

export const nameUser = () => auth.currentUser.displayName;
export const userUID = () => auth.currentUser.uid;

export function createUser(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

//**// função de criação de )
    //.then(() => updateProfile(auth.currentUser, {
      //displayName: name,
    //}));
//}

//criar login
export const userLogin = (email, password) => signInWithEmailAndPassword(auth, email, password);

//logar conta google
export const googleLogin = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

//deslogar
export const logOut = () => signOut(auth);

// export function delectUser() {
//   const user = auth.currentUser;
//   deleteUser(user).then(() => {
//     // se for ok, deletada
//   }).catch((error) => {
//     console.log(error);
//   });
// }

// Armazenar conta do usuário//
//export async function userData(nome, email, iduser) {
  //await addDoc(collection(db, 'users'), {
    //displayName: nome,
    //email,
    //iduser,
  //});
//}

//export async function getPosts() {
  //const q = query(collection(db, 'posts')); // query = pesquisa

  //const querySnapshot = await getDocs(q);
 // const posts = [];
  // eslint-disable-next-line no-shadow
  //querySnapshot.forEach((doc) => {
    //posts.push({ id: doc.id, ...doc.data() });
  //});
  //return posts;
//}


// função para adicionar itens no banco
export async function newPost(textPublish) { //postText
   try {
    const postColec = collection(db, 'posts');
    const postdoc = await addDoc(postColec, {
      name: auth.currentUser.displayName,
      userId: auth.currentUser.uid,
      text: textPublish,//postText
      publishDate: new Date().toLocaleDateString('pt-BR'),
      like: [],
    });
    console.log('Document written with ID: ', postdoc.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}



// return newPost;

// likes 
async function likePost(postId) {
  const post = await getPost(postId);

  if (post.like.indexOf(auth.currentUser.uid) === -1) {
    await updateDoc(doc(db, 'posts', postId), {
      likesUser: arrayUnion(auth.currentUser.uid),
    });
  } else {
    await updateDoc(doc(db, 'posts', postId), {
      likesUser: arrayRemove(auth.currentUser.uid),
    });
  }

  post = await getPost(postId);

  //return post.like;
}
// criar post na coleção//
//export async function newPost(postText) {
  //const postdoc = await addDoc(collection(db, 'posts'), {
    //userId: auth.currentUser.uid,
    //userName: auth.currentUser.displayName,
    //text: postText,
    //publishDate: new Date().toLocaleDateString('pt-BR'),
    //like: [],
  //});
//}

// buscar post na coleção

export const getPosts = async (showPost) => {
  await onSnapshot(collection(db, 'posts'), orderBy('date', 'desc'), (querySnapshot) => {
    document.querySelector('.ultimos-postsQA').innerHTML = '';
    querySnapshot.forEach((post) => {
      // ...post ou doc puxa todos os dados do objeto a seguir (no caso, post.data)
      showPost.push({ ...post.data(), postId: post.id });
      console.log(post.id, ' => ', post.data());
    });
  });
};



// função like
//export async function likePost(postId) {
  //const db = getFirestore(app);
  //const postdoc = doc(db, 'posts', postId);
  //await updateDoc(postdoc, {
    ///like: increment(1),
  //});
//}

// função editar o post
export async function editPost(postId, textEdit) {
  const postdoc = doc(db, 'posts', postId);
  await updateDoc(postdoc, {
  text: textEdit,
  });
}

//// função para deletar o post
export async function deletePost(postId) {
console.log(postId);
await deleteDoc(doc(db, 'posts', postId));
}


// função para manter o usuário logado
export function loginLogin(callback) {
const auth = getAuth(app);
onAuthStateChanged(auth, callback);
};


