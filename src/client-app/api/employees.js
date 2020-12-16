export default ($axios) => ({
    get() {
        return $axios.$get('/employees/');
    },

    create(employee) {
        return $axios.$post('/employees/', employee)
    },

    update(employee) {
        return $axios.$put('/employees/', employee)
    },

    delete(employeeId) {
        return $axios.$delete(`/employees/${employeeId}`)
    }
});