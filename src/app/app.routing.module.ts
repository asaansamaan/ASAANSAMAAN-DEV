// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './pages/pageNotFound/pageNotFound.component';
import { HomePageComponent } from './pages/home/home.component';
import { AuthGuard } from './core/guards/auth-guard';
import { AdminGuard } from './core/guards/adminGuards/admin.guard';

export const appRoutes = [
  // /////////// Admin Routes (ALL MUST BE LAZY LOADED) ///////////////////
  {
    path: 'admin/forms/electronics',
    loadChildren: 'app/pages/admin/forms/electronics/electronics.module#ElectronicsModule',
    canActivate: [AdminGuard]
  },
  // /////////// USER LOGIN (ALL MUST BE LAZY LOADED) ////////////////
  {
    path: 'login',
    loadChildren: 'app/pages/users/login/login.module#LoginModule',
    data: {preload: false, title: 'Welcome To Asaan Samaan'},
  },
  {
    path: 'profile',
    loadChildren: 'app/pages/users/user-profile/user-profile.module#UserProfileModule',
    data: {preload: false, title: 'Welcome To Asaan Samaan'},
  },
  // /////////// EAGER LOADED PAGES ///////////////////////////////////
    {
      path: 'home',
      component: HomePageComponent,
      data: {title: 'Welcome To Asaan Samaan' }
    },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

// @NgModule({
//   imports: [
//     RouterModule.forRoot(
//       appRoutes,
//       {
//         enableTracing: false, // <-- debugging purposes only
//       }
//     )
//   ],
//   exports: [
//     RouterModule
//   ],
//   providers: [
//     AuthGuard,
//   ]
// })
// export class AppRoutingModule { }
