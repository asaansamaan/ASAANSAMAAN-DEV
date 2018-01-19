import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './pageNotFound.component';

@NgModule({
    declarations: [
        PageNotFoundComponent,
    ],
    imports: [ CommonModule ],
    exports: [
        PageNotFoundComponent,
    ],
    providers: [],
})
export class PageNotFoundModule {}