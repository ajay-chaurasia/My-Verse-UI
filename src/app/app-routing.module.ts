import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { LandingComponent } from './components/landing/landing.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'games', loadChildren: () => import('./modules/games/games.module').then(m => m.GamesModule) },
  { path: 'apps', loadChildren: () => import('./modules/apps/apps.module').then(m => m.AppsModule) },
  { path: 'blogs', component: BlogsComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
