<template>
  <form action="" @submit.prevent="handleSubmit">
    <input type="email" placeholder="email" v-model="email" required >
    <input type="password" placeholder="password" v-model="password" required >

    <div class="error">{{error}}</div>
    <button>Login</button>
  
  </form>
</template>

<script>
import { ref } from 'vue'
import useLogin from '@/composables/useLogin'

export default {

    setup(){

        const {error, login} = useLogin() //composable function 'useLogin'
        //ref
        const email = ref('') 
        const password = ref('')

        const handleSubmit= async() => {
            await login(email.value, password.value)
            if(!error.value){
                console.log('user login success')   
            }
                   
        }
        
        return { email, password, handleSubmit,error }
    }

}
</script>

<style>

</style>