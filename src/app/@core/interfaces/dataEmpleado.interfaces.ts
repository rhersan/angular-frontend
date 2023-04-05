import { ITarea } from "./tareas.interfaces";

export interface IDataEmpleado
{
    nombreHoja:                 string;
    empleado:                   string;
    periodo:                    string;
    tareas:                    ITarea[];
    totalHorasColumnaLunes:     string;
    totalHorasColumnaMartes:    string;
    totalHorasColumnaMiercoles: string;
    totalHorasColumnaJueves:    string;
    totalHorasColumnaViernes:   string;
    totalHorasColumnaSabado:    string;
    totalHorasColumnaDomingo:   string;
    totalHorasFila:             string;
    totalHorasColumna:          string;
    totalHorasNoFacturable:     string;
}