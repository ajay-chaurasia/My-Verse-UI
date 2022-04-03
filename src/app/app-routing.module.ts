import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppsHomeComponent } from './components/apps-home/apps-home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { GamesHomeComponent } from './components/games-home/games-home.component';
import { LandingComponent } from './components/landing/landing.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SnakeImpactComponent } from './components/games/snake-impact/snake-impact.component';
import { SpaceBattleComponent } from './components/games/space-battle/space-battle.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  {
    path: 'apps',
    component: AppsHomeComponent,
    children: [
      { path: 'image-filter', component: PageNotFoundComponent },
    ]
  },
  {
    path: 'games',
    component: GamesHomeComponent,
    children: [
      { path: 'snake-impact', component: SnakeImpactComponent },
      { path: 'space-battle', component: SpaceBattleComponent },
    ]
  },
  { path: 'portfolio', component: PageNotFoundComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
