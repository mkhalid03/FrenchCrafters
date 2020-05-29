<template>
  <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-submenu index="1">
      <template slot="title">
        Homme
      </template>
      <el-menu-item index="2-1">
        item un
      </el-menu-item>
      <el-menu-item index="2-2">
        item deux
      </el-menu-item>
      <el-menu-item index="2-3">
        item trois
      </el-menu-item>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        Femme
      </template>
      <el-menu-item index="2-1">
        item un
      </el-menu-item>
      <el-menu-item index="2-2">
        item deux
      </el-menu-item>
      <el-menu-item index="2-3">
        item trois
      </el-menu-item>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
        Enfant
      </template>
      <el-menu-item index="2-1">
        item un
      </el-menu-item>
      <el-menu-item index="2-2">
        item deux
      </el-menu-item>
      <el-menu-item index="2-3">
        item trois
      </el-menu-item>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">
        Equipement
      </template>
      <el-menu-item index="2-1">
        item un
      </el-menu-item>
      <el-menu-item index="2-2">
        item deux
      </el-menu-item>
      <el-menu-item index="2-3">
        item trois
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "Nav",
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
  },
}
</script>
