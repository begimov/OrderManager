<template>
  <div class="row">
    <div class="col-md-12">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">Менеджер заказов</h3>
        </div>
        <div class="panel-body">
          <OrderList :orders="orders"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import OrderList from './OrderList.vue'

export default {
  name: 'OrderManager',
  components: {
    OrderList
  },
  props: {
    token: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      orders: []
    }
  },
  methods: {
    getOrders(page, limit) {
      axios.get('/admin/index.php?route=sale/order/getOrders', {
        params: {
          token: this.token,
          page,
          limit
        }
      }).then(res => {
        this.orders = res.data
        console.log(this.orders)
      })
    }
  },
  mounted() {
    this.getOrders(1, 10)
  }
}
</script>

