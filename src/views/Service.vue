<template>
    <div class="app-container">
        <div class="filter-container">
            <el-input placeholder="name or id" style="width: 400px;" class="filter-item" />
            <el-button class="filter-item" style='margin-left:10px' type="primary" icon="el-icon-search"> 搜索</el-button>
        </div>
        <el-table :data="tableData" stripe border style="width: 100%">
            <el-table-column prop="id" label="id" width="320">
            </el-table-column>
            <el-table-column prop="name" label="名称" width="180">
            </el-table-column>
            <el-table-column prop="port" label="端口" width="100">
            </el-table-column>
            <el-table-column prop="created_at" label="创建时间" :formatter="filterDate" width="180">
            </el-table-column>
            <el-table-column prop="updated_at" label="更新时间" :formatter="filterDate" width="180">
            </el-table-column>
            <el-table-column label="操作" width="180">
                <template slot-scope="scope">
                    <el-button type="primary" size="small">
                        编辑
                    </el-button>
                    <el-button type="danger" size="small">
                        移除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import {
        listServices
    } from '../api/service.js'
    export default {
        data() {
            return {
                tableData: [{
                    "host": "blockchain.service",
                    "created_at": 1531289243,
                    "connect_timeout": 60000,
                    "id": "27aadc0e-7697-4762-a8e2-838ab882f51b",
                    "protocol": "http",
                    "name": "blockchain-service",
                    "read_timeout": 60000,
                    "port": 80,
                    "path": null,
                    "updated_at": 1531289243,
                    "retries": 5,
                    "write_timeout": 60000
                }, {
                    "host": "blockchain.service",
                    "created_at": 1531289243,
                    "connect_timeout": 60000,
                    "id": "27aadc0e-7697-4762-a8e2-838ab882f51b",
                    "protocol": "http",
                    "name": "blockchain-service",
                    "read_timeout": 60000,
                    "port": 80,
                    "path": null,
                    "updated_at": 1531289243,
                    "retries": 5,
                    "write_timeout": 60000
                }, {
                    "host": "blockchain.service",
                    "created_at": 1531289243,
                    "connect_timeout": 60000,
                    "id": "27aadc0e-7697-4762-a8e2-838ab882f51b",
                    "protocol": "http",
                    "name": "blockchain-service",
                    "read_timeout": 60000,
                    "port": 80,
                    "path": null,
                    "updated_at": 1531289243,
                    "retries": 5,
                    "write_timeout": 60000
                }, {
                    "host": "blockchain.service",
                    "created_at": 1531289243,
                    "connect_timeout": 60000,
                    "id": "27aadc0e-7697-4762-a8e2-838ab882f51b",
                    "protocol": "http",
                    "name": "blockchain-service",
                    "read_timeout": 60000,
                    "port": 80,
                    "path": null,
                    "updated_at": 1531289243,
                    "retries": 5,
                    "write_timeout": 60000
                }]
            }
        },
        created() {
            this.getList()
        },
        methods: {
            filterDate(row, column, cellValue) {
                if (!cellValue) {
                    return
                }
                return new Date(cellValue * 1000).Format("yyyy-MM-dd HH:mm:ss");
                //   return new Date(cellValue);
            },
            getList() {
                listServices().then(res => {
                    // console.log(res);
                    this.tableData = res.data.data;
                })
                // return;
            }
        },

    }
    Date.prototype.Format = function (fmt) {
        var o = {
            "M+": this.getMonth() + 1, //月份 
            "d+": this.getDate(), //日 
            "H+": this.getHours(), //小时 
            "m+": this.getMinutes(), //分 
            "s+": this.getSeconds(), //秒 
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
            "S": this.getMilliseconds() //毫秒 
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) :
                (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }
</script>