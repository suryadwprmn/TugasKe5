<template>
  <h1 ref="example-reff"> {{ propertyComputed }}</h1>
</template>

<script>
export default {
    layout :'custom',
    data(){
        return{
            property : 'Example property',
            counter : 0
        }
    },
    computed :{
        propertyComputed(){
            return this.property;
        }
    },
    beforeCreate() {
        console.log('Saat ini, lifecycle sudah berjalan di log javascript')
    },
    created(){
        console.log('Saat ini created berjalan di log javascript')
        this.property = 'Example property updated'
    //   for(let i = 0; i <= 10;i++){
    //     setTimeout(() => {
    //         console.log("Detik " + this.counter)
    //         this.counter++;
    //         if(this.counter == 10){
    //             console.log("Berhenti")
    //         }
    //     },i*1000)
    //   }
    },
    beforeMount(){
        console.log('Saat ini, beforeMounted berjalan, dan vm.$el belum dibuat')
    },
    mounted(){
        console.log('Saat ini mounted berjalan, dan vm.$el sudah terbuat')
        console.log(this.$el.textContent)
    },
    beforeUpdate(){
        console.log(this.counter)
    },
    updated(){
        console.log(+this.$refs['example-reff'].textContent === this.counter)
    },
    beforeDestroy(){
        console.log("Saat ini before destroy berjalan")
        this.property = null
        delete this.property

    }

}
</script>

<style>

</style>