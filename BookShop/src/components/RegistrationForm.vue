<template>
  <div class=" container w-50 mt-5" style="background: rgb(255, 255, 255); border-radius: 5px;">
    <form @submit.prevent="handleSubmits">
      <h1 class=" text-center">Register</h1>

      <div v-for="field in fields" :key="field.name">

        <label :for="field.name" class="">{{ field.label }}</label><br>
        <input :type="field.type" :name="field.name" :required="field.required" v-model="formData[field.name]"  style="padding: 10px; width: 100%; border-radius: 5px;border-color: rgb(232, 232, 232);">
        <!-- <input :type="field.type"  :required="field.required" v-model="formData[field.password]"  style=""> -->
      </div>
      <button type="submit" class=" p-2 mt-2 " style="border-radius: 5px;  ">Register</button>

    </form>
  </div>
</template>
<script>
import fields from '../db/registration-form.json';
export default {
  name: 'RegistrationForm',
  data() {
    return {
      fields,
      formData: {}
    };
  },
  methods: {
    handleSubmits() {
      localStorage.setItem('user', JSON.stringify(this.formData));
      alert('User registered!');
      this.$router.push('/')
      this.formData = {};
    }
  }
};
</script>