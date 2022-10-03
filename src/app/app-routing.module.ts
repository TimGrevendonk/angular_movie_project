import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './modules/homepage/homepage.component';
import { WatchlistComponent } from './modules/watchlist/watchlist.component';

const routes: Routes = [
  {path: "", component: HomepageComponent},
  {path: "watchlist", component: WatchlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
