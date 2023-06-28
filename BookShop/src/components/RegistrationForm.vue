<template>
    <form @submit.prevent="handleSubmit">
      <div v-for="field in fields" :key="field.name">
        <label :for="field.name">{{ field.label }}</label>
        <input :type="field.type" :name="field.name" :required="field.required" v-model="formData[field.name]">
      </div>
      <button type="submit">Register</button>
    </form>
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
      handleSubmit() {
        localStorage.setItem('user', JSON.stringify(this.formData));
        alert('User registered!');
        this.formData = {};
      }
    }
  };
  </script>