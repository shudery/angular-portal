import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//
import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './root-app/app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';

import { HeroService } from './hero.service';
import { EventsBus } from './eventsBus.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroCardsComponent } from './hero-cards/hero-cards.component';
// import { ComponentNameComponent } from './component-name/component-name.component';

// UI components
import { NgZorroAntdModule } from 'ng-zorro-antd';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    NgZorroAntdModule.forRoot(),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
    HeroCardsComponent,
    // ComponentNameComponent
  ],
  providers: [HeroService,EventsBus],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/