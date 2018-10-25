<template>
  <div id="app">
    <OrderManager :token="token"/>
  </div>
</template>

<script>
import OrderManager from './components/OrderManager.vue'

export default {
  name: 'app',
  components: {
    OrderManager
  },
  computed:{
    token() {    
      return document.getElementById("meta_token").dataset.token
    }
  }
}
</script>
