<template>
  <div class="home">
    <h1>HomePage</h1>

    <input type="text" v-model="search">

    <p>Search term - {{search}}</p>

    <div v-for="name in matchingNames" :key="name">
      {{ name }}
    </div>
    
  </div>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from "vue"

export default {
  name: 'HomeView',
  setup() {
    const search = ref('')
    const names = ref(['mario', 'yoshi', 'drew', 'muchiri', 'brandon', 'ashley'])

    watch(search, ()=> {
      console.log('watch func runs');
    })

    watchEffect(()=> {
      console.log('watch effect runs', search.value);
    })

    const matchingNames = computed(()=> {
      return names.value.filter((name) => name.includes(search.value))
    })

    return{ names, search, matchingNames }
  }
}
</script>
