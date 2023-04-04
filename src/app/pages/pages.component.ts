import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';


export const MENU_ITEMS: NbMenuItem[] = [

  {
    title: 'Menu',
    group: true,
  },
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/visor/dashboard',
  },
  {
    title: 'Seguridad',
    icon: 'layout-outline',
    children: [
      {
        title: 'Usuarios',
        link: '/pages/visor/mostrar-usuarios',
      },
    ],
  },
  {
    title: 'Gestor Documentos',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Visor',
        link: '/pages/visor/visor',
      },
    ],
  },
];

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {
  menu = MENU_ITEMS;
  

}
