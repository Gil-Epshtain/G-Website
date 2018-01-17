// Angular
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Application
//import { HomepageComponent }   from './pages/homepage/homepage.component';

const routes: Routes = [];
// [
//   { 
//     path: '', // Default path (homepage)
//     redirectTo: '/homepage', 
//     pathMatch: 'full'
//   },
//   { 
//     path: 'homepage', 
//     component: HomepageComponent 
//   },
//   // { 
//   //   path: 'detail/:id', // url with parameter
//   //   component: xComponent 
//   // },
// ];
  
@NgModule({
  imports: 
  [
    RouterModule.forRoot(routes)
  ],
  exports: 
  [ 
    /* 
      exporting RouterModule makes router directives available 
      for use in the AppModule components that will need them
    */
    RouterModule 
  ]
})
export class AppRoutingModule
{
  public constructor()
  {
    console.log("App-Router.module - ctor");
  }
}