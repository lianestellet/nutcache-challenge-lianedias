import axios, { AxiosResponse } from 'axios';
import IEmployee from "../models/IEmployee";

axios.defaults.baseURL  = 'http://localhost:5000/api';

const responseBody = (response: AxiosResponse) => response.data;
const sleep = (ms: number) =>(response: AxiosResponse) =>
    new Promise<AxiosResponse>(resolve => setTimeout(()=>resolve(response),ms));

const requests = {
    get: (url: string ) => axios.get(url).then(sleep(1000)).then(responseBody),
    post: (url: string, body: {}) => axios.post(url,body).then(sleep(1000)).then(responseBody),
    put: (url: string, body: {}) => axios.put(url,body).then(sleep(1000)).then(responseBody),
    del: (url: string) => axios.delete(url).then(sleep(1000)).then(responseBody)
}

const Employees = {
    list: (): Promise<IEmployee[]> => requests.get('/employees'),
    create: (employee: IEmployee) => requests.post('/employees', employee),
    update: (employee: IEmployee) => requests.put(`/employees/${employee.id}`,employee),
    delete: (id: string) => requests.del(`/employees/${id}`)

}

export default {
    Employees
}