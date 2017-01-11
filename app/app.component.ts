import { Component, OnInit } from '@angular/core';
import { Event, Router } from '@angular/router';

@Component(
    {
        moduleId: module.id,
        selector: 'my-app',
        templateUrl: "app.component.html",
        styleUrls: ["app.component.css"]
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



