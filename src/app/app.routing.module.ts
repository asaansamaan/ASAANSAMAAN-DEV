import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SelectivePreloadingStrategy } from './services/selectivePreLoadStrategy.service';
import { PageNotFoundComponent } from './pages/pageNotFound/pageNotFound.component';
import { HomePageComponent } from './pages/home/home.component';
import { AuthGuard } from './core/guards/auth-guard';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

const appRoutes: Routes = [
//   {
//     path: 'admin',
//     loadChildren: 'app/pages/admin/admin.module#AdminModule',
//     canLoad: [AuthGuard]
//   },
  {
    path: 'home',
    component: HomePageComponent,
    data: { preload: true, title: 'Welcome To Asaan Samaan' }
  },
  {
    path: 'profile',
    component: UserProfileComponent,
    data: { preload: true, title: 'Welcome To Asaan Samaan', canLoad: [AuthGuard] }
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategy,

      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule { }
