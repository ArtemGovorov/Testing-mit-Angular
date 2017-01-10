import { Component, OnInit } from '@angular/core';
import { Event, Router } from '@angular/router';

@Component(
    {
        selector: 'my-app',
        template: `
        <div class='container'>
            <h1>Person Editor</h1>
            <ul class="nav nav-pills">
                <li [class.active]="url.startsWith('/person')"><a routerLink="/persons">All Persons</a></li>
                <li [class.active]="url==='/developers'">  <a routerLink="/developers" >Developers</a></li>
            </ul>
            <div style='margin-top: 10px;'>
                <router-outlet></router-outlet>
            </div>
        </div>
           `
    }
)
export class AppComponent implements OnInit {
    url: string = "";

    constructor(
        private router: Router
    ) {
    }

    ngOnInit() {
        this.router.events.subscribe(e => this.onRouterEvent(e));
    }

    onRouterEvent(event: Event) {
        this.url = event.url;
    }

}



