import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  people: any[] = [
    {
      'name': 'Alex',
      'country': 'USA'
    },
    {
      'name': 'Steave',
      'country': 'GB'
    },
    {
      'name': 'Oleg',
      'country': 'Ukraine'
    },
    {
      'name': 'Bob',
      'country': 'GB'
    },
    {
      'name': 'Nik',
      'country': 'USA'
    },   
    {
      'name': 'Dmitriy',
      'country': 'Ukraine'
    },
    {
      'name': 'Richard',
      'country': 'Mars'
    }
  ]
   
}

