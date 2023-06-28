<template>
  <div class=" container w-50 " style="background: rgb(255, 255, 255); border-radius: 5px;">

    <form @submit.prevent="handleSubmit">
      <h1 class=" text-center">Login</h1>
      <div v-for="field in fields" :key="field.name">
        <label :for="field.name" >{{ field.label }} </label>
        <input :type="field.type" :name="field.name" :required="field.required" v-model="formData[field.name]"  style="padding: 10px; width: 100%; border-radius: 5px;border-color: rgb(232, 232, 232);">
      </div>
      <button type="submit" class=" p-2 mt-2  mb-2" style="border-radius: 5px;  ">Login</button>

    </form>
  </div>
  </template>
  
  <script>
  import fields from '../db/login-form.json';
  
  export default {
    name: 'LoginForm',
    data() {
      return {
        fields,
        formData: {}
      };
    },
    methods: {
      handleSubmit() {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (!storedUser || storedUser.email !== this.formData.email || storedUser.password !== this.formData.password) {
          alert('Invalid email or password');
          return;
        }
        alert('Login successful!');
        this.$router.push('/')
        this.formData = {};
      }
    }
  };
  </script>