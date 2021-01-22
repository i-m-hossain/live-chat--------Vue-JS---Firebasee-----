import { ref, watchEffect } from 'vue'
import { projectFirestore } from '../firebase/config'


const getCollection = (collection) => {
    
    const documents = ref(null)
    const error = ref(null)
    let collectionRef = projectFirestore.collection(collection).orderBy('createdAt')
    
    //real time listenner

    const unsub = collectionRef.onSnapshot((snap) => {  //assigned to unsub whic is a function for unsubscribing from real time listeners
        console.log('snapshot')
        let results = []
        snap.docs.forEach(doc => {
            
            doc.data().createdAt && results.push({...doc.data(), id: doc.id})
        })
        documents.value = results
        error.value = null


    }, (err) => {
            
        console.log(err.message);    
        documents.value = null
        error.value = 'could not fetch data'
    })

    //unsub from real time listeners 

    watchEffect((onInvalidate) => {
        //unsub from previous collection when watcher is stopped (component unmounted)
        onInvalidate(() => unsub())

    })


    return { documents, error}

}

export default getCollection