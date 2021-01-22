<template>
  <div class="container">
    <NavBar/>  
  </div>
</template>

<script>

import NavBar from '@/components/NavBar'
import {useRouter} from 'vue-router'

export default {
    components: {NavBar},
    setup(){
        
        const router = useRouter()

        // const exitChat= () => {
        //    router.push({name: 'Welcome'})
        // }
    }

}
</script>

<style>

</style>