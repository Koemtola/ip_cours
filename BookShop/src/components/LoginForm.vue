<template>
    <form @submit.prevent="handleSubmit">
      <div v-for="field in fields" :key="field.name">
        <label :for="field.name">{{ field.label }}</label>
        <input :type="field.type" :name="field.name" :required="field.required" v-model="formData[field.name]">
      </div>
      <button type="submit">Login</button>
    </form>
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
        this.formData = {};
      }
    }
  };
  </script>