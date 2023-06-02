import * as firebase from "firebase";
import { environment } from "../environments/environment";

const config: object = {
  apiKey: environment.firebaseConfig.apiKey,
  authDomain: environment.firebaseConfig.authDomain,
  databaseURL: environment.firebaseConfig.databaseURL,
  messagingSenderId: environment.firebaseConfig.messagingSenderId,
  projectId: environment.firebaseConfig.projectId,
  storageBucket: environment.firebaseConfig.storageBucket,
};

firebase.initializeApp(config);
export const databaseRef = firebase.database().ref();
