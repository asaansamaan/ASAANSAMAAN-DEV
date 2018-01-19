import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home.component';
import { AddItemComponent } from '../../components/add-item/add-item.component';
import { ItemsComponent } from '../../components/items/items.component';
import { FormsModule } from '@angular/forms';
import { ItemService } from '../../services/item.service';
import { RouterModule } from '@angular/router';
@NgModule({
    declarations: [
        HomePageComponent,
        ItemsComponent,
        AddItemComponent,
    ],
    imports: [ CommonModule,
        FormsModule,
        RouterModule, ],
    exports: [
        HomePageComponent,
    ],
    providers: [
        ItemService,
    ],
})
export class HomePageModule {}