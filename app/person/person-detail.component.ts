import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PersonService } from './person.service';
import { Person } from './person';

@Component({
  moduleId: module.id,
  templateUrl: 'person-detail.component.html'
})
export class PersonDetailComponent implements OnInit {

  @Input()
  person: Person;

  constructor(
    private _personService: PersonService,
    private _route: ActivatedRoute,
    private _router: Router) {
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let personId = +params["personId"];
      this.getPerson(personId);
    });
  }

  getPerson(id: number) {
    this._personService.getPersonById(id).subscribe(res => this.person = res);
  }

  onSave({value, valid}: { value: Person, valid: boolean }) {
    //Example of Object destructuring
    console.log(value);
    console.log(valid);
    if (valid) {
      this._personService.savePerson(this.person).subscribe(res => this.onBack());
    }
  }

  onBack() {
    this._router.navigate(['/persons'])
  }
}