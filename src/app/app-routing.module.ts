import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './modules/pages/homepage/homepage.component';
import { WatchlistComponent } from './modules/pages/watchlist/watchlist.component';
import { SearchlistComponent } from './modules/pages/searchlist/searchlist.component';
import { MovieDetailComponent } from './modules/pages/movie-detail/movie-detail.component';

const routes: Routes = [
  {path: "", component: HomepageComponent},
  {path: "watchlist", component: WatchlistComponent},
  {path: "searchlist", component: SearchlistComponent},
  {path: "movie/:id", component: MovieDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
