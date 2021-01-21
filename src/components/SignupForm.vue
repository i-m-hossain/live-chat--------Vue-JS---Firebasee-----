<template>
  <form action="" @submit.prevent="handleSubmit">
    <input type="text" placeholder="display name" v-model="displayName" required >
    <input type="email" placeholder="email" v-model="email" required >
    <input type="password" placeholder="password" v-model="password" required >
    <button>Sign Up</button>
  
  </form>
</template>

<script>
import { ref } from 'vue'
export default {

    setup(){
        const displayName = ref('')
        const email = ref('')
        const password = ref('')

        const handleSubmit= () => {
            console.log(displayName.value , email.value, password.value)          
        }
        
        return { displayName, email, password, handleSubmit }
    }

}
</script>

<style>

</style>