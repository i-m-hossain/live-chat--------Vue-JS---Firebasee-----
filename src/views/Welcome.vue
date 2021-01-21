<template>
    <div class="welcome container">
        <p>Welcome to the chat room</p>
        <div v-if="showLogin">
            <h2>Login Form</h2>
            <LoginForm/>
            <p>Not registerd? <span @click="showLogin = !showLogin">Sign Up</span>  here</p>
        </div>
        <div v-else>
            <h2> Sign Up Form</h2>
            <SignupForm />
            <p>Already registerd? <span @click="showLogin = !showLogin">Login</span>  here</p>
        </div>    
        
    </div>
</template>

<script>
import SignupForm from '@/components/SignupForm'
import LoginForm from '@/components/LoginForm'
import { ref } from 'vue'
export default {
    components: { SignupForm, LoginForm },

    setup(){
        const showLogin = ref(true)
    
        return { showLogin }
    }

}
</script>

<style>

.welcome{
    padding:20px 0;
    text-align:center;
}

.welcome form{
    width:300px;
    margin:20px auto;
}

.welcome label{

    display: block;
    margin:20px 0 10px;

}

.welcome input{
    width:100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;    
}

.welcome span{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;

}

.welcome button{
    margin: 20px auto
}

</style>