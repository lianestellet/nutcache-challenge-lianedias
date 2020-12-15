import { Gender } from "./Enums";
export default interface IEmployee {
    id: number;
    name: string;
    cpf: string;
    email: string;
    birthDate: Date;
    startDate: Date;
    team: string;
    gender: Gender;
}