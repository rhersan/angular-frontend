import { AppResponse } from "./app.response.interface";


export class ResponseWithoutData<T> implements AppResponse {
    public estatus!: string;
    public mensaje!: string;
    public data!: T[];
}