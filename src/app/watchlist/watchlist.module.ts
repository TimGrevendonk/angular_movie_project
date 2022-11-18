import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchlistComponent } from './watchlist.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedRoutingModule } from '../shared/shared-routing.module';
import { WatchlistRoutingModule } from './watchlist-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    WatchlistComponent,
  ],
  imports: [
    CommonModule,
    WatchlistRoutingModule,
  ],
  exports:[
  ]
})
export class WatchlistModule { }
