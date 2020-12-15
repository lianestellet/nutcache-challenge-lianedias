import { Gender } from "./Enums";
import IEmployee from "./IEmployee";

export default class Employee {

    id = 0;
    name = "";
    cpf = "";
    email = "";
    birthDate = new Date();
    startDate = new Date();
    team = "";
    gender: Gender = Gender.Other;

    constructor(employee: IEmployee) {
        this.id = employee.id;
        this.name = employee.name;
        this.cpf = employee.cpf;
        this.email = employee.email;
        this.birthDate = employee.birthDate;
        this.startDate = employee.startDate;
        this.team = employee.team;
        this.gender = employee.gender;
    }
}