<template>
 <div class="">
    <button @click="msg ='Hello'" class="btn btn-primary mt-5 mx-auto d-block mb-3"> Ubah pesan</button>
    <p class="mx-auto mt-2 d-block ">{{ msg }}</p>
 </div>
</template>

<script>
export default {
layout : 'custom',
data(){
    return {msg: ''}
},
created(){
    this.msg = 'Hello'
},
beforeMount(){
    this.msg = 'Hello World'
},
mounted(){
    this.$nextTick(() =>{
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(),5000)
    })
},
beforeUpdate(){
    this.msg = 'Hello World Again bang'
}
}
</script>

<style>

</style>