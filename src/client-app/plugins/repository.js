import employeesRepository from '~/api/employees';

export default (ctx, inject) => {
    inject('employeesRepository', employeesRepository(ctx.$axios));
}