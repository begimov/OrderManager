<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Менеджер заказов</h3>
          </div>
          <div class="panel-body"><a :href="url">ACCESS TOKEN</a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderManager',
  props: {
    token: {
      required: true,
      type:String
    }
  },
  computed: {
    url() {
      return `http://starbucksshopru.test/admin/index.php?route=common/dashboard&token=${this.token}`
    }
  }
}
</script>
