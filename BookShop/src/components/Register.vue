<template>
    <div>
      <h1>Register</h1>
      <RegistrationForm />
    </div>
  </template>
  
  <script>
  import RegistrationForm from './RegistrationForm.vue';
  
  export default {
    name: 'Register',
    components: {
      RegistrationForm
    }
  };
  </script>