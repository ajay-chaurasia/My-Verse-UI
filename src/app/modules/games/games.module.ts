import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { GamesRoutingModule } from './games-routing.module';
import { GamesComponent } from './games.component';
import { SpaceBattleComponent } from './space-battle/space-battle.component';


@NgModule({
  declarations: [
    GamesComponent,
    SpaceBattleComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatMenuModule
  ]
})
export class GamesModule { }
