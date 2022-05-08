import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // create hero property using the 'Hero' interface
  hero: Hero = {
    id:1,
    name: 'Windstorm'
  };

  // hero: string = 'Windstorm';

  constructor() { }

  ngOnInit(): void {
  }

}
