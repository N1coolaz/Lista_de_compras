import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth'; 

const firebaseConfig = {
  apiKey: "AIzaSyBIVHx_elJKNUNuysPT47Ocnf8V8m-h7YI",
  authDomain: "lista-de-compras-de266.firebaseapp.com",
  databaseURL: "https://lista-de-compras-de266-default-rtdb.firebaseio.com",
  projectId: "lista-de-compras-de266",
  storageBucket: "lista-de-compras-de266.appspot.com",
  messagingSenderId: "483187093732",
  appId: "1:483187093732:web:27ec326815788604fc7cf1",
  measurementId: "G-QJVLZZPFMP"
};

if (firebase.apps.length) {
  firebase.apps[0].delete()
    .then(() => {
      console.log('Firebase App excluído com sucesso');
      // Inicialize o Firebase com a nova configuração
      firebase.initializeApp(firebaseConfig);
    })
    .catch(error => {
      console.error('Erro ao excluir o Firebase App:', error);
    });
} else {
  console.log('Nenhum Firebase App encontrado para excluir');
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
