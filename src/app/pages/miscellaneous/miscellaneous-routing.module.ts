import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { MiscellaneousComponent } from './miscellaneous.component';

const routes: Routes = [
  { path: '',
    component: MiscellaneousComponent,
    children: [
      { path: '404', component: NotFoundComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiscellaneousRoutingModule { }
