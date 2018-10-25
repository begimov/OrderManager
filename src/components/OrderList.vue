<template>
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
</template>

<script>
import axios from 'axios'

export default {
  name: 'OrderList',
  props: {
    orders: {
      required: true,
      type: Array
    }
  }
}
</script>

