<template>
<el-container  style=" border: 1px solid #eee;height:100%;">
  <el-header style="text-align: right; font-size: 14px">
    <el-dropdown>
    <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    <span>admin</span>
  </el-header>
  <el-container style="height:100%">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">  
      <el-menu  default-active="1" class="el-menu-vertical-demo">
      <el-menu-item index="1" >
      <i class="el-icon-setting"></i>
      <span slot="title">Services</span>
      </el-menu-item>
      <el-menu-item index="2" >
      <i class="el-icon-setting"></i>
      <span slot="title">Routers</span>
      </el-menu-item>
      <el-menu-item index="3" >
         <i class="el-icon-setting"></i>
      <span slot="title">Upstreams</span>
      </el-menu-item>
      <el-menu-item index="5">
         <i class="el-icon-setting"></i>
          <span slot="title">Targets</span>
      </el-menu-item>
    </el-menu></el-aside>
    <el-container style="height:100%">
      <el-main style="height:100%">
        <router-view/>
        <!-- <img  style="width:100%;height:100%" src="../assets/konghq.png"> -->
      </el-main>
    </el-container>
  </el-container>
</el-container>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
    text-align:left
  }
  .el-submenu .input{
    text-align:left
  }
</style>

<script>
  export default {
    name: 'Menus',
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>