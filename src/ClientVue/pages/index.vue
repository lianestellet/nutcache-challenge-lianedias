<template>
  <el-row class="container">
    <h3>  Employees </h3>
    <el-table
      v-if="employees && employees.length > 0"
      :data="data">
      <el-table-column
        prop="prop"
        label="label"
        width="width">
      </el-table-column>
    </el-table>
    <el-col :span="6"></el-col>
  </el-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      
    }
  },
  computed: {
    ...mapGetters({ 
      'employees': 'employees/list'
    })
  }
}
</script>

<style>

h3 { 
  padding: 30px;
}

.container {
  margin: 0 auto;  
  min-height: 20vh;
  max-width: 800px;  
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: white;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
