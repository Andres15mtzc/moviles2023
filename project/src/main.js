import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABCmhNs_EgX4xnsvb4MuveVqiKysdtd1A",
  authDomain: "practicasandroid-a5c43.firebaseapp.com",
  databaseURL: "https://practicasandroid-a5c43-default-rtdb.firebaseio.com",
  projectId: "practicasandroid-a5c43",
  storageBucket: "practicasandroid-a5c43.appspot.com",
  messagingSenderId: "46500121824",
  appId: "1:46500121824:web:f4ebc7439ff42f405d5485",
  measurementId: "G-ERVCLBFZT5"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(appFirebase);

console.log(" " + analytics)

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(appFirebase);
  
router.isReady().then(() => {
  app.mount('#app');
});