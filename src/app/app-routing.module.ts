import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { SearchlistComponent } from './pages/searchlist/searchlist.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';

const routes: Routes = [
  {path: "", component: HomepageComponent},
  {path: "watchlist",
   loadChildren: () =>  import("./watchlist/watchlist.module")
    .then(m => m.WatchlistModule)
  },
  // {path: "watchlist", component: WatchlistComponent},
  {path: "searchlist", component: SearchlistComponent},
  {path: "movie/:id", component: MovieDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
