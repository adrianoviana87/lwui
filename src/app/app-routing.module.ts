import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditEntryPageComponent } from './entries/edit-entry-page.component';
import { EditTransactionPageComponent } from './entries/edit-transaction-page.component';

const routes: Routes = [
  {
    path: 'edit-entry',
    component: EditEntryPageComponent,
  },
  {
    path: 'edit-transaction',
    component: EditTransactionPageComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'edit-entry',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
