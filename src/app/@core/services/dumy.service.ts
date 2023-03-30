import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DumyService {

  constructor() { }

  data: any = [];
  getState(){
    this.data = [   
      {
        label: 'Estados',
        options: [
          { value: "AGS", label: "AGUASCALIENTES" },
          { value: "BC",  label: "BAJA CALIFORNIA" },
          { value: "BCS", label: "BAJA CALIFORNIA SUR" },
          { value: "CHI", label: "CHIHUAHUA" },
          { value: "CHS", label: "CHIAPAS" },
          { value: "CMP", label: "CAMPECHE" },
          { value: "CMX", label: "CIUDAD DE MEXICO" },
          { value: "COA", label: "COAHUILA" },
          { value: "COL", label: "COLIMA" },
          { value: "DGO", label: "DURANGO" },
          { value: "GRO", label: "GUERRERO" },
          { value: "GTO", label: "GUANAJUATO" },
          { value: "HGO", label: "HIDALGO" },
          { value: "JAL", label: "JALISCO" },
          { value: "MCH", label: "MICHOACAN" },
          { value: "MEX", label: "ESTADO DE MEXICO" },
          { value: "MOR", label: "MORELOS" },
          { value: "NAY", label: "NAYARIT" },
          { value: "NL",  label: "NUEVO LEON" },
          { value: "OAX", label: "OAXACA" },
          { value: "PUE", label: "PUEBLA" },
          { value: "QR",  label: "QUINTANA ROO" },
          { value: "QRO", label: "QUERETARO" },
          { value: "SIN", label: "SINALOA" },
          { value: "SLP", label: "SAN LUIS POTOSI" },
          { value: "SON", label: "SONORA" },
          { value: "TAB", label: "TABASCO" },
          { value: "TLX", label: "TLAXCALA" },
          { value: "TMS", label: "TAMAULIPAS" },
          { value: "VER", label: "VERACRUZ" },
          { value: "YUC", label: "YUCATAN" },
          { value: "ZAC", label: "ZACATECAS" } 
      ],
      }
    ];
    return this.data;
  }
}
