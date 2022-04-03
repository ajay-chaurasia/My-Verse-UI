import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './components/landing/landing.component';
import { RouterModule } from '@angular/router';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SnakeImpactComponent } from './components/games/snake-impact/snake-impact.component';
import { SpaceBattleComponent } from './components/games/space-battle/space-battle.component';
import { GamesHomeComponent } from './components/games-home/games-home.component';
import { AppsHomeComponent } from './components/apps-home/apps-home.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ContactUsComponent,
    MainHeaderComponent,
    MainFooterComponent,
    PageNotFoundComponent,
    SnakeImpactComponent,
    SpaceBattleComponent,
    GamesHomeComponent,
    AppsHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
