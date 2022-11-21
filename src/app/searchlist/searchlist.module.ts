import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchlistComponent } from './searchlist.component';
import { SearchlistRoutingModule } from './searchlist-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AppModule } from "../app.module";
import { SearchformComponent } from '../shared/searchform/searchform.component';


@NgModule({
    declarations: [
        SearchlistComponent,
    ],
    exports: [
    // FormfieldComponent
    ],
    imports: [
        CommonModule,
        SearchlistRoutingModule,
        SharedModule,
    ]
})
export class SearchlistModule { }
