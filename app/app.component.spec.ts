import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppComponent } from './app.component';

describe('AppComponent (inline template)', () => {

    let comp: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent], // declare the test component
            imports: [RouterTestingModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);

        comp = fixture.componentInstance; // AppComponent test instance

        // query for the title <h1> by CSS element selector
        de = fixture.debugElement.query(By.css('h1'));
        el = de.nativeElement;
    });

    it('should display original title', () => {
        fixture.detectChanges();
        expect(comp.url).toEqual("");
    });

    it('should display a different test title', () => {
        comp.url = 'Person Editor';
        fixture.detectChanges();
        expect(el.textContent).toContain("Person Editor");
    });
});