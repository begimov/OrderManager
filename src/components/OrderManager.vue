<template>
  <div class="row">
    <div class="col-md-12">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">Менеджер заказов</h3>
        </div>
        <div class="panel-body">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>номер заказа</th>
                <th>имя</th>
                <th>товары</th>
                <th>сумма</th>
                <th>статус</th>
                <th>адрес</th>
                <th>комментарий</th>
              </tr>
            </thead>
            <tbody>
                <tr v-for="order in orders" :key="order.order_id">
                  <th scope="row">{{order.order_id}}</th>
                  <th>{{order.customer}}</th>
                  <td>{{order.product}}}</td>
                  <td>{{order.total}}</td>
                  <td>{{order.order_status}}</td>
                  <td>{{ order.shipping_city + ' ' + order.shipping_address_1 }}</td>
                  <td>{{order.comment}}</td>
                </tr>
              </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'OrderManager',
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

