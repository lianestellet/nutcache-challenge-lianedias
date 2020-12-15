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
      .then((employees) => {
        commit('getList', employees)
			})
			.catch((ex) => {
				this.showError(ex.message)
    	})
  },

  async add({ commit }, employee) {
		
		await this.app.$employeesRepository
			.create(employee)
			.then(() => commit('createEmployee', employee))
			.catch((ex) => {
				this.showError(ex.message)
    	})
	},
	
	async add({ commit }, employee) {
		await this.app.$employeesRepository
			.update(employee)
			.then(() => commit('update', employee))
			.catch((ex) => {
				this.showError(ex.message)
		})
	},

  async delete({ commit }, employeeId) {
		await this.app.$employeesRepository
			.delete(employeeId)
			.then(() => commit('delete', employeeId))
			.catch((ex) => {
				this.showError(ex.message)
		})
	}
}

export const getters = {	
	list(state) {
    return state.list
	},	
}
