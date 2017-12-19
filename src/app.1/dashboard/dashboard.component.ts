import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

import { EventsBus } from '../eventsBus.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    heroes: Hero[] = [];
    
    constructor(
        private heroService: HeroService,
        private eventsBus: EventsBus,
    ) { }
    changeServeA(): void {
        this.eventsBus.data.serviceA = !this.eventsBus.data.serviceA;
    }
    changeServeB(): void {
        this.eventsBus.data.serviceB = !this.eventsBus.data.serviceB;
    }
    changeServeC(): void {
        this.eventsBus.data.serviceC = !this.eventsBus.data.serviceC;
    }
    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/