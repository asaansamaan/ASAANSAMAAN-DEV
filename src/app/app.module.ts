import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment.prod';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';

import { ItemService } from './services/item.service';
import { AddItemComponent } from './components/add-item/add-item.component';
import { PageNotFoundModule } from './pages/pageNotFound/pageNotFound.module';
import { HomePageModule } from './pages/home/home.module';
import { CoreModule } from './core/core.module';
import { ASNavBarModule } from './core/components/as-nav-bar/as-nav-bar.module';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
      }
    ),
    ASNavBarModule,
    AngularFireModule.initializeApp(environment.config, 'angularfs'),
    AngularFirestoreModule,
    PageNotFoundModule,
    HomePageModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
