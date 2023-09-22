<template>
  <div class="container">
    <section class="form">
      <form v-on:submit.prevent="handleSubmit">
        <div class="field">
          <label class="label">Nama Lengkap</label>
          <div class="control">
            <input v-model="form.name" class="input" type="text" placeholder="Nama Lengkap beserta Gelar">
          </div>
        </div>
        <button type="submit" class="button">Submit</button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'custom',
  data() {
    return {
      form: {
        name: ''
      }
    }
  },
  methods: {
    handleSubmit() {
     
    }
  }
}
</script>

<style>

</style>
