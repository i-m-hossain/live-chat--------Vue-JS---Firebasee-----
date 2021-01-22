import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

//this composable function is used to store the messages from  NewChatForm 
// keep in mind ..Not to retrieve collection  

const useCollection = (collection) => {
    const error = ref(null)

    const addDoc = async (doc) => {
        error.value = null

        try {
            await projectFirestore.collection(collection).add(doc)

            
        } catch (err) {

            console.log('err.message');
            error.value = 'Could not send the message'
        }

    }

    return {error, addDoc}

}

export default useCollection