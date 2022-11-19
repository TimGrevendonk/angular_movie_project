import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchlistComponent } from './searchlist.component';
import { SearchlistRoutingModule } from './searchlist-routing.module';



@NgModule({
  declarations: [
    SearchlistComponent
  ],
  imports: [
    CommonModule,
    SearchlistRoutingModule
  ]
})
export class SearchlistModule { }
