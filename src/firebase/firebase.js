import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpQCU5xKahuusQ8P1ZcRULzgGn5az4Sko",
  authDomain: "news-viewer-9a67e.firebaseapp.com",
  projectId: "news-viewer-9a67e",
  storageBucket: "news-viewer-9a67e.appspot.com",
  messagingSenderId: "692755373741",
  appId: "1:692755373741:web:220ae5bdc5e8ac04a57024",
  measurementId: "G-GTHXES0EZ4",
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
// export { firebase };
