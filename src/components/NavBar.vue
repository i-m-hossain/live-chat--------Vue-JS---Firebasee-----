<template>
  <nav>
    <div>
         <p>Hey there... display name here</p>
         <p class="email"> currently logged is as ... email</p>
    </div>
    <button @click="handleClick">Log Out</button> 
  </nav>
</template>

<script>

import useLogout from '@/composables/useLogout'
export default {

    setup(props, context){
        const {error, logout} = useLogout()
        
        const handleClick =async() => {
            await logout()
            if(!error.value){
                context.emit('logout')  
                console.log('user logged out'); 
            }
        }

        return {error, handleClick}
    }
    
    

}
</script>

<style>
nav{
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center
}
nav p{

    margin: 2px auto;
    font-size: 16px;
    color: #444;

}
nav p.email{
    font-size: 14px;
    color: #999

}

</style>