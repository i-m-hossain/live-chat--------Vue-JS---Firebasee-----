<template>
  <form action="" @submit.prevent="handleSubmit">
    <input type="text" placeholder="display name" v-model="displayName" required >
    <input type="email" placeholder="email" v-model="email" required >
    <input type="password" placeholder="password" v-model="password" required >
    
    <div class="error">{{error}}</div>

    <button>Sign Up</button>

    
  
  </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from '@/composables/useSignup'

export default {

    setup(props, context){

        const {error, signup} = useSignup() //composable function 'useSignup'

        //refs
        const displayName = ref('')
        const email = ref('')
        const password = ref('')

        const handleSubmit = async() => {
            await signup(email.value, password.value, displayName.value)
            if(!error.value){
                context.emit('signup')   
            }          
        }
        
        return { displayName, email, password, handleSubmit,error }
    }

}
</script>

<style>

</style>