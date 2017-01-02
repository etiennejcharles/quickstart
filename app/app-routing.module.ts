import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
        path: 'heroes',
        component: HeroesComponent
      }, {
        path: 'dashboard',
        component: DashboardComponent
      }, {
        path: 'detail/:id',
        component: HeroDetailComponent
      }, {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
