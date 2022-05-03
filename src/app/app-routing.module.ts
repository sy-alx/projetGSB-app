import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
// Guard
import { AuthGuard } from './guards/auth.guard';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { IntroGuard } from './guards/intro.guard';
//Composants pages
import {CompteRenduComponent} from './compteRendu/compteRendu.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { PlanningComponent } from './planning/planning.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
  },
  {
    path:'',
    component: AppComponent,
    children:[
      {
        path:"compteRendu",
        component: CompteRenduComponent,
        canActivate: [AuthGuard]
      },
      {
        path:"consultation",
        component: ConsultationComponent,
        canActivate: [AuthGuard]
      },
      {
        path:"planning",
        component: PlanningComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'folder/:id',
        loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule),
        canActivate: [AuthGuard]
      },
    ]
  }

  // {
  //   path: 'intro',
  //   loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule),
  //   canLoad: [AuthGuard]
  // },
  // {
  //   path: '',
  //   redirectTo: '/login',
  //   pathMatch: 'full'
  // }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
