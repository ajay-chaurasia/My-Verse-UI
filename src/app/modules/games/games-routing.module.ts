import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games.component';
import { SnakeImpactComponent } from './snake-impact/snake-impact.component';
import { SpaceBattleComponent } from './space-battle/space-battle.component';

const routes: Routes = [
  { path: '', component: GamesComponent },
  { path: 'snake-impact', component: SnakeImpactComponent },
  { path: 'space-battle', component: SpaceBattleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
