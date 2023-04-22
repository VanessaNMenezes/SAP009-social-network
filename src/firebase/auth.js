import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

import { app } from './app.js';

export const auth = getAuth(app);
/* // função que autentica a usuária e armazena nome
export async function criarCadastro(email, senha, displayName) {
  const autenticacao = getAuth(app);
  await createUserWithEmailAndPassword(email, senha);
  // console.log(displayName);
  await updateProfile(autenticacao, {
    displayName,
  });
}

// obtendo usuária logada p/ exibir o nome dela
export const obterUsuaria = async () => {
  const autenticacao = getAuth();
  const usuaria = {
    uid: autenticacao.currentUser.uid,
    displayName: autenticacao.currentUser.displayName,
    email: autenticacao.currentUser.email,
    nomeUsuaria: autenticacao.currentUser.displayName,
  };
  return usuaria;
}; */

// Retornará o nome do usuário atualmente autenticado no firebase:
export const nameUser = () => auth.currentUser.displayName;
// Retornará o UID do usuário atualmente autenticado no firebase:
export const userUID = () => auth.currentUser.uid;

// Cadastrar novo usuário:
export function createUser(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// Autenticar usuário:
export const userLogin = (email, password) => signInWithEmailAndPassword(auth, email, password);

// Login com google:
export const googleLogin = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

// Opção de sair (deslogar):
export const logOut = () => signOut(auth);
