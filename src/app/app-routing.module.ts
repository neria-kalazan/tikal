import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/starWars' },
  {
    path: 'starWars',
    loadChildren: () => import('./pages/star_wars/star-wars.module').then(m => m.starWarsModule),
    data: {breadcrumb: 'starWars'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
