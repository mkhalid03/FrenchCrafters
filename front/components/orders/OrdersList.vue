<template>
  <div>
    <el-table
      :data="data"
      stripe
      :default-sort="{ prop: 'date', order: 'descending' }"
      style="width: 100%;"
      empty-text="Empty"
    >
      <el-table-column type="expand">
        <template slot-scope="props">
          <span>Products in this command:</span>
          <div v-for="product in props.row.products">
            <span>{{ product.name }}</span>
            <span>{{ product.description }}</span>
            <span>Quantity : {{ product.quantity }}</span>
            <span>Prix : {{ product.quantity }} x {{ product.price }} €</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="createdAt"
        label="Date"
        :formatter="formatDate"
        sortable
      />
      <el-table-column
        prop="address"
        label="Adresse"
        :formatter="formatAddress"
      />
      <el-table-column
        prop="amount"
        label="Prix"
        :formatter="formatPrice"
        sortable
      />
    </el-table>
  </div>
</template>

<script>
import dayjs from "dayjs"

export default {
  name: "OrdersList",
  computed: {
    data: function () {
      return this.$store.getters["user/getOrders"]
    },
  },
  methods: {
    formatDate: function (data) {
      return dayjs(data.createdAt).format("DD-MM-YYYY HH:mm:ss")
    },
    formatAddress: function (data) {
      const { city, line1, line2, country, postalCode} = data.address
      return `${line1 || ""} ${line2 || ""} ${postalCode || ""} ${city || ""}, ${country || ""}`
    },
    formatPrice: function (data) {
      return `${data.amount/100} €`
    },
  },
}
</script>
