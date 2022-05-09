import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // HEROES data from hero service using - mock-heroes.ts
  heroes: Hero[] = [];
  selectedHero?: Hero;

  // create hero property using the 'Hero' interface
  // hero: Hero = {
  //   id:1,
  //   name: 'Windstorm'
  // };

  // hero: string = 'Windstorm';

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  // subscribe to the observables using in the heroService response
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   // display select hero id using the messageService
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  // }

}
