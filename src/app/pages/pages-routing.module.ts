import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'verifigas',
        loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
      },
      /*{
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },*/
      {
        path: '**',
        component: NotFoundComponent,
      },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
