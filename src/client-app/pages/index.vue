<template>
  <el-row class="container">
    <CreateEmployeeDialog 
      :isCreateDialogVisible="isCreateDialogVisible" 
      @handleOpenCreate="handleOpenCreate"
      @handleCloseCreate="handleCloseCreate"
    />
    <EditEmployeeDialog 
      v-if="isEditDialogVisible"
      :isEditDialogVisible="isEditDialogVisible" 
      :updatingEmployee="updatingEmployee"
      @handleOpenEdit="handleOpenEdit"
      @handleCloseEdit="handleCloseEdit"
    />

    <h3>  Employees </h3>
    
    <el-table
      v-if="employees && employees.length > 0"
      :data="employees">
      <el-table-column
        label="Name"
        prop="name">
      </el-table-column>
      <el-table-column
        label="Email"
        prop="email">
      </el-table-column>
      <el-table-column
        label="StartDate"
        prop="startDate">
      </el-table-column>
      <el-table-column
        label="Team"
        prop="team">
      </el-table-column>
      <el-table-column
      label="Actions">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleOpenEdit(scope.row)">Edit</el-button>
            <el-button slot="reference" size="mini"
          type="danger"
          @click="handleDelete(scope.row)">Remove</el-button>
      </template>
    </el-table-column>
    </el-table>
    
    <el-row type="flex" justify="end" class="footer">
        <el-button
          type="success"
          @click="handleOpenCreate()">Create Employee</el-button>
    </el-row>
    
  </el-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { MessageBox } from "element-ui";
import CreateEmployeeDialog from '@/components/employee/CreateEmployeeDialog';

export default {
  data() {
    return {
      isFetchingEmployees: true,
      isCreateDialogVisible: false,
      isEditDialogVisible: false,
      updatingEmployee: {}
    }
  },
  components: {
    CreateEmployeeDialog,
  },
  computed: {
    ...mapGetters({ 
      'employees': 'employees/list'
    })
  },
  methods: {
    ...mapActions({
      'getEmployees': 'employees/get',
      'deleteEmployee': 'employees/delete',
    }),

    handleOpenCreate() {
      this.isCreateDialogVisible = true;
    },

    handleCloseCreate() {
      this.isCreateDialogVisible = false;
    },

    handleOpenEdit(employee) {
      this.updatingEmployee = employee;
      this.isEditDialogVisible = true;
    },

    handleCloseEdit() {
      this.isEditDialogVisible = false;
    },

    handleDelete(employee) {

      MessageBox.confirm(
        `Do you wish to remove the employee?`,
        "Confirmation",
        {
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          type: "warning",
        }).then(action => {
          if (action === 'confirm') {
            this.deleteEmployee(employee.id)
              .then(() => this.showSuccess('Employee removed!'))
              .catch(this.showException)
          }
        }).catch(() => {})


    }
  },
  mounted () {
    this.getEmployees();
    this.isFetchingEmployees = false;
  }
}
</script>

<style>
.el-table--fit {
  padding-left: 50px;
}

h3 { 
  padding: 30px;
}

.container {
  margin: 0 auto;  
  min-height: 20vh;
  max-width: 1400px;  
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
.footer {
  padding: 20px 40px;
}
</style>
