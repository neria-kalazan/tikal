import {Component, OnInit} from '@angular/core';
import {SwapiService} from "../../../services/swapi.service";

@Component({
  selector: 'app-part2',
  templateUrl: './part2.component.html',
  styleUrls: ['./part2.component.scss']
})
export class Part2Component implements OnInit {

  public busy: boolean = false;
  public planetsNames: string[] = ['Tatooine', 'Alderaan', 'Naboo', 'Bespin', 'Endor'];
  public planets: any[] = [];
  public maxPopulation: number = 0;
  private letters: string = '0123456789ABCDEF';

  constructor(
    private swapiService: SwapiService  ) { }

  ngOnInit() {
    this.loadPlanets();
  }

  loadPlanets() {
    this.busy = true;
    this.swapiService.getPlanets()
      .subscribe(res =>  {
        res.results.forEach((r: any) => {
          if (this.planetsNames.includes(r.name)) {
            this.planets.push(r);
            if (r.population > this.maxPopulation) {
              this.maxPopulation = +r.population;
            }
          }
        })

      },err =>  {
        console.error(err);
      })
      .add(() => this.busy = false);
  }

  getRandomColor() {
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += this.letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

}
