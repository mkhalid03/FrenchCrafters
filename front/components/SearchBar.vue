<template>
  <div>
    <el-checkbox-group v-model="checkList">
      <el-checkbox label="Option A"></el-checkbox>
      <el-checkbox label="Option B"></el-checkbox>
      <el-checkbox label="Option C"></el-checkbox>
      <el-checkbox label="Désactivée" disabled></el-checkbox>
      <el-checkbox label="Sélectionnée et désactivée" disabled></el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      checkList: []
    }
  },
}
</script>
