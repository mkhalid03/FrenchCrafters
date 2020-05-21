<template>
  <el-table
    :data="orders"
    :default-sort = "{prop: 'date', order: 'descending'}"
    style="width: 100%"
    empty-text="Empty"
  >
    <el-table-column
      prop="date"
      label="Date"
      sortable
    >
    </el-table-column>
    <el-table-column
      prop="address"
      label="Adresse"
    >
    </el-table-column>
    <el-table-column
      prop="price"
      label="Prix"
      :formatter="formatter">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    name: "OrdersList",
    props: {
      orders: []
    },
    methods: {
      formatter(row, column) {
        return row.address;
      }
    }
  }
</script>
