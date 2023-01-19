import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
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
