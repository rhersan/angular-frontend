import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDataEmpleado } from '../interfaces/dataEmpleado.interfaces';
import { ResponseWithoutData } from '../models/httpResponses/response-without-data';

@Injectable({
  providedIn: 'root'
})
export class TimesheetService {

  constructor(private http: HttpClient) { }

  async validarArchivo(archivo: File){

    try{
      const url = `https://localhost:7135/Timesheet/validar-archivo`;
      const formData = new FormData();
      formData.append('',archivo);
      const resp = await fetch(url,{
        method: 'POST',
        body: formData
      });
      const data = await resp.json();
console.log(data);
      if(data.ok){
        console.log(data);
        return data;
      }else{
        console.log(data);
        return false;
      }

   }catch(error){

   }
  }

  sendFile(file:File):Observable<ResponseWithoutData<IDataEmpleado[]>>{

    const url = `https://localhost:7135/Timesheet/validar-archivo`;
    const formData = new FormData();
    formData.append('',file);
    return this.http.post<ResponseWithoutData<IDataEmpleado[]>>(url, formData);

  }
}
