<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Lista/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/Header.vue'
import Lista from '@/components/Lista'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    Lista
  }
}
</script>
