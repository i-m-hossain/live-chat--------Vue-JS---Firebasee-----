import { ref } from "vue"
import { projectAuth } from "../firebase/config"


const user = ref(projectAuth.currentUser) //present user if any. if not the cureent user will be null which will be updated by _user

projectAuth.onAuthStateChanged(_user => {
    
    console.log('user state change. Current user is :', _user);
    user.value = _user
     
})

const getUser = () => {
    return {user}
} 

export default getUser