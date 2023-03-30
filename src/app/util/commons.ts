import { Messages } from "./messages";


export function isUndefided(valueUndefined: any, valueTrue: any): any {
    return valueUndefined !== undefined ? valueTrue : Messages.STRING_VACIO;
}