import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  
  {
    path:'home',
    loadChildren:'app/components/home/home.module#HomeModule'
  }
/*
  {
    path:'home',
    loadChildren:'app/components/home/home.module#HomeModule'
  }
*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
