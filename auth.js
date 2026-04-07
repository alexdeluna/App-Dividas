import {
getAuth,
signInWithEmailAndPassword,
createUserWithEmailAndPassword,
signOut,
onAuthStateChanged
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { app } from "./firebase-config.js";

export const auth = getAuth(app);

export function login(email, senha){
  return signInWithEmailAndPassword(auth,email,senha);
}

export function logout(){
  return signOut(auth);
}

export function observarSessao(callback){
  onAuthStateChanged(auth,callback);
}
