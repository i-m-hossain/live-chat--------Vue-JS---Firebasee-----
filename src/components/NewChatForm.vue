<template>
    <form action="">
        <textarea 
            placeholder="Type a message and hit enter to send" 
            cols="10" rows="5" 
            v-model="message"
            @keypress.enter.prevent = "handleSubmit"
            >
            
        </textarea>

    </form>
  
</template>

<script>

    import { ref } from 'vue'
    import getUser from '@/composables/getUser'
    import {timestamp} from '../firebase/config'

    export default {
        setup(){

            const { user } = getUser()
            const message = ref('')

            const handleSubmit = async() => {
                const chat ={  //the user name, message and timestamp is saved in anm object

                    name: user.value.displayName,
                    message: message.value  ,
                    createdAt: timestamp(),
                    
                }

                console.log(chat);
                message.value = '' //after the enter the message value is made null
            }

            return {message, handleSubmit}
        
        }
    }

</script>

<style scoped>
form{
    margin: 10px;
}

textarea{

    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    outline: none;
    font-family:inherit;
    

}


</style>