<template>    
  <el-dialog
    title="Register Employee"
    :visible.sync="isCreateDialogVisible"
    width="30%"
    :before-close="handleConfirmClose">
    <el-form ref="form" :model="employee" label-width="80px">
      <el-row type="flex" justify="start" :gutter="20">
        <el-col :span="14" :push="4">
          <el-form-item
            class="form-item"
            label="Name:">
            <el-input
              v-model="employee.name"
              maxlength="32"
              class="label-text"
            ></el-input>
          </el-form-item>

          <el-form-item
            class="form-item"
            label="BirthDate:">
                <el-date-picker
                  v-model="employee.birthDate"
                  type="date"
                  format="dd/MM/yyyy"
                  placeholder="Select employee birthday">
                </el-date-picker>
          </el-form-item>

          <el-form-item
            class="form-item"
            label="Gender:">
            <el-select style="display:flex" v-model="employee.gender" filterable placeholder="Select gender">
              <el-option
                v-for="gender in genders"
                :key="gender.value"
                :label="gender.label"
                :value="gender.value">
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item
            class="form-item"
            label="Email:">
            <el-input
              v-model="employee.email"
              maxlength="32"
              class="label-text"
            ></el-input>
          </el-form-item>

          <el-form-item
            class="form-item"
            label="CPF:">
            <el-input
              v-model="employee.cpf"
              maxlength="32"
              class="label-text"
            ></el-input>
          </el-form-item>

          <el-form-item
            class="form-item"
            label="Start Date:">
                <el-date-picker
                  v-model="employee.startDate"
                  type="month"
                  format="MM/yyyy"
                  placeholder="Pick a month">
                </el-date-picker>
          </el-form-item>

          
          <el-form-item
            class="form-item"
            label="Team:">
            <el-select v-model="employee.team" filterable placeholder="Select team">
              <el-option
                v-for="team in teams"
                :key="team.value"
                :label="team.label"
                :value="team.value">
              </el-option>
            </el-select>
          </el-form-item>

        </el-col>

      </el-row>
    </el-form>

    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose()">Cancel</el-button>
      <el-button native-type="submit" type="primary" @click="handleSubmit()">Confirm</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { mapActions } from 'vuex';
  export default {
    data() {
      return {
        employee: {
          name: '',
          birthDate: '',
          gender: '',
          email: '',
          cpf: '',
          startDate: '',
          team: '',
          id: undefined
        },
        genders: [
          {
            value: 'Male',
            label: 'Male'
          }, {
            value: 'Female',
            label: 'Female'
          },
          {
            value: 'NonBinary',
            label: 'Non Binary'
          },
          {
            value: 'Other',
            label: 'Other'
          }
        ],
        teams: [
          {
            value: 'Mobile',
            label: 'Mobile'
          }, {
            value: 'Frontend',
            label: 'Frontend'
          },
          {
            value: 'Backend',
            label: 'Backend'
          }
        ],
      };
    },
    props: {
      isCreateDialogVisible: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      ...mapActions({
        createEmployee: 'employees/create'
      }),

      handleSubmit() {
        console.log(this.employee)
        this.createEmployee({ ...this.employee })
          .then(() => this.showSuccess('Employee created!'))
          .then(() => this.cleanEmployeeData())
          .then(() => this.handleClose())
          .catch(this.showException)
      },

      cleanEmployeeData() {
        this.employee = {
          name: '',
          birthDate: '',
          gender: '',
          email: '',
          cpf: '',
          startDate: '',
          team: '',
          id: undefined
        }
      },

      handleClose(done) {
        this.$emit('handleCloseCreate');
      },

      handleConfirmClose(done) {
        this.$confirm('Are you sure to cancel?')
          .then(_ => {
            this.handleClose();
          })
          .catch(_ => {});
      }
    }
  };
</script>

<style>
.el-form-item .el-form-item__content {
  display: flex;
}
</style>