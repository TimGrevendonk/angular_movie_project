import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { SearchlistComponent } from './searchlist/searchlist.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';

const routes: Routes = [
  {path: "", component: HomepageComponent},
  // lazy moaded module.
  {path: "watchlist",
   loadChildren: () =>  import("./watchlist/watchlist.module")
    .then(m => m.WatchlistModule)
  },
  // lazy moaded module.
  {path: "searchlist",
    loadChildren: () => import("./searchlist/searchlist.module")
    .then(m => m.SearchlistModule)},

  {path: "movie/:id", component: MovieDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
