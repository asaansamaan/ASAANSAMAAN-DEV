import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import { AuthService } from '../../../core/services/auth.service';
import { RouterModule } from '@angular/router';
import { routes, UserProfileResolver } from './user-profile.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    UserProfileComponent,
  ],
  exports: [UserProfileComponent],
  providers: [AuthService, UserProfileResolver]
})
export class UserProfileModule { }
