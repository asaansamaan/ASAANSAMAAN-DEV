import { NgModule } from '@angular/core';
import { AdminGuard } from './guards/adminGuards/admin.guard';
import { CanReadGuard } from './guards/can-read.guard';
import { AuthService } from './services/auth.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
  imports: [
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  declarations: [],
  providers: [AuthService, CanReadGuard, AdminGuard]
})
export class CoreModule { }
