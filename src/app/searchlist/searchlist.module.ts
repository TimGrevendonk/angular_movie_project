import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchlistComponent } from './searchlist.component';
import { SearchlistRoutingModule } from './searchlist-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormfieldComponent } from '../shared/formfield/formfield.component';



@NgModule({
  declarations: [
    SearchlistComponent
  ],
  imports: [
    CommonModule,
    SearchlistRoutingModule,
    // cant import shared module or else will get "Router provided more than once"
    // but it cannot find the component tag when not imported.
    SharedModule
  ],
  exports: [
    // FormfieldComponent
  ]
})
export class SearchlistModule { }
