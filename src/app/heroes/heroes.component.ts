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

  // Add hero 
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  // Delete a hero, filter from ui and send DELETE, deleteHero to http service
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
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
