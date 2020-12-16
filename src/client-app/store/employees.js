import Vue from 'vue'

export const state = () => ({
  list: []
})

export const mutations = {
  getList(state, employees) {
    state.list = employees
	},
    
  create(state, employee) {
    state.list.push(employee)
	},

  update(state, employee) {    
		const index = state.list.findIndex(
      emp => emp.id === employee.id
    )
    Vue.set(state.list, index, employee)

	},
  
  delete(state, employeeId) {
		const index = state.list.findIndex(
      emp => emp.id === employeeId
		)
		Vue.delete(state.list, index)
	}
	
}

export const actions = {
  async get({ commit }) {
    
    await this.app.$employeesRepository
			.get()
			.then((employees) => commit('getList', employees))
			.catch(err => {
        throw new Error(err)
      })
  },

  async create({ commit }, employee) {
		
		await this.app.$employeesRepository
			.create(employee)
			.then((createdEmployee) => {
				commit('create', createdEmployee)
			})
			.catch(this.showException)
	},
	
	async update({ commit }, employee) {
		await this.app.$employeesRepository
			.update(employee)
			.then((updatedEmployee) => {
				commit('update', updatedEmployee)
			})
			.catch(this.showException)
	},

  async delete({ commit }, employeeId) {
		await this.app.$employeesRepository
			.delete(employeeId)
			.then(() => commit('delete', employeeId))
			.catch(err => {
        throw new Error(err)
      })
	}
}

export const getters = {	
	list(state) {
    return state.list
	},	
}
