
import { Component, OnInit } from '@angular/core';
import { Hero } from '../heros/hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heros: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeros();
  }

  getHeros(): void {
    this.heroService.getHeros()
      .subscribe(
        (heros) => {
              this.heros =heros.slice()
        },
        (error)=>{
          console.error(error)
        }
      );
  }
}