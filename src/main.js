import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'



//During authentication, when the window is refreshed the user become null
// To solve this we have to hold untill firebase establishes initial connection. 
//After the browser refreshed user becomes null, but after sometime firebase establish connection 
//that is when stateChange occurs and the project will load only after the stateChange   

//import firebase auth serrvice 
import { projectAuth } from './firebase/config'

let app

projectAuth.onAuthStateChanged(() => {
    if (!app) {
       app = createApp(App).use(router).mount('#app') 
    }
})


