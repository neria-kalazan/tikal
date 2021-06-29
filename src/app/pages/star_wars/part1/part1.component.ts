import {Component, OnInit} from '@angular/core';
import {SwapiService} from "../../../services/swapi.service";

@Component({
  selector: 'app-part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.scss'],
})
export class Part1Component implements OnInit {

  public busy: boolean = false;
  public vehicles: any[] = [];
  public relatedPlanets: any[] = [];
  public relatedPilots: any[] = [];
  public largestSumVehicle: {sum: number, name: string} = {sum: 0, name: ''};

  constructor(
    private swapiService: SwapiService  ) { }

  ngOnInit() {
    this.loadVehicles();
  }

  loadVehicles(page = '1') {
    this.busy = true;
    this.swapiService.getVehicles(page)
      .subscribe(res =>  {

        res.results.forEach((r: any) => {
          if (r.pilots.length > 0) {
            r.pilotsData = [];

            r.pilots.forEach((p: string) => {
              // get pilots
              this.swapiService.getByUrl(p).subscribe(pilotRes => {
                this.relatedPilots.push(pilotRes);
                pilotRes.pilotsHomeworld = [];

                // get pilot homeworld
                this.swapiService.getByUrl(pilotRes.homeworld).subscribe(homeRes => {
                  pilotRes.pilotsHomeworld.push(homeRes);
                  this.relatedPlanets.push(homeRes);

                  if (+homeRes.population > this.largestSumVehicle.sum) {
                    this.largestSumVehicle.sum = +homeRes.population;
                    this.largestSumVehicle.name = r.name;
                  }
                })
                r.pilotsData.push(pilotRes);
              })
            })
          }
        })

        this.vehicles = [...this.vehicles, ...res.results];

        if (res.next) {
          this.loadVehicles(res.next.substr(-1));
        }

      },err =>  {
        console.error(err);
      })
      .add(() => {
        this.busy = false;
        // console.log('consolethis.vehicles', this.vehicles);
        // console.log('this.relatedPilots', this.relatedPilots);
        // console.log('this.relatedPlanets', this.relatedPlanets);
      }
      );


  }





}
