import { Component, OnInit } from '@angular/core';
import { MsalBroadcastService, MsalService } from '@azure/msal-angular';
import { EventMessage, EventType, InteractionStatus } from '@azure/msal-browser';
import { filter } from 'rxjs';
import { IDataEmpleado } from 'src/app/@core/interfaces/dataEmpleado.interfaces';
import { ResponseWithoutData } from 'src/app/@core/models/httpResponses/response-without-data';
import { AzureAdDemoService } from 'src/app/@core/services/azure-ad-demo.service';
import { TimesheetService } from 'src/app/@core/services/timesheet.service';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public archivoSubir!: File;
  dataEmpleado!: any;
  displayedColumns: string[] = [
    'claveProyecto',
    'idTicket',
    'descripcion',
    'facturable',
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
    'sabado',
    'domingo',
    'total',
  ];


  selectedCourse:boolean =true;
  items = [
    {
      title: 'Logout',
    },
  ];
 
  loginDisplay = false;

  constructor(private msalService: MsalService,
    private azureAdDemoServices:AzureAdDemoService,
    private timesheetServices: TimesheetService
    ) { }
    
  ngOnInit(): void {
    console.log('OnInit');
    this.azureAdDemoServices.isUserLoggedIn.subscribe({
      next: (resp) => {
        console.log('res on init:',resp);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  logout(){
    this.msalService.logout();
    
    
  }

  

  cargarArchivo(file: File) {
    this.archivoSubir = file;
  }

  varlidarArchivo(){

      this.timesheetServices.sendFile(this.archivoSubir)
      .subscribe({
        next: (resp: ResponseWithoutData<IDataEmpleado[]>) => {
          console.log(resp);
          if(resp.estatus === 'S'){
            this.dataEmpleado = resp.data;
          } 

        },
        error: (err) => {
          console.log(err);
        }
      });      

  }


}
